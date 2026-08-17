/**
 * Assistente do site: responde perguntas sobre as cotas, os indicadores, a
 * navegação e os números de cada curso. Funciona no próprio navegador, sem
 * serviço externo — a resposta é montada a partir de db.js / db_utfpr.js e dos
 * conceitos de conceitos.js, então nunca inventa dado que não está na base.
 */
import { CATEGORIAS, SIGLA, linhasCurso, resumosCatalogo, serieAnual } from "./catalogo.js";
import {
  COTAS,
  COTA_POR_TIPO,
  INDICADORES,
  LIMITACOES,
  MARCO_LEGAL,
  PAGINAS,
} from "./conceitos.js";
import { db } from "./db.js";
import { dbUtfpr } from "./db_utfpr.js";
import { fmtInteiro, fmtMoeda, media, num } from "./util.js";

const SUGESTOES = [
  "O que é uma cota?",
  "O que é a cota Universal?",
  "Diferença entre Negros e Escola Pública - Negros",
  "Concorrência de Medicina em 2025",
  "Qual curso é o mais concorrido?",
  "Qual curso paga mais?",
  "Como comparar dois cursos?",
  "De onde vêm os dados?",
];

const normalizar = (texto) =>
  texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const contem = (pergunta, ...termos) => termos.some((termo) => pergunta.includes(normalizar(termo)));

const resumos = resumosCatalogo();
const resumoPorNome = new Map(resumos.map((r) => [r.nome, r]));

/** Todos os cursos das duas bases, com as métricas que dão para calcular. */
const CURSOS = [
  ...db.cursos.map((curso) => ({ curso, instituicao: "uepg" })),
  ...dbUtfpr.cursos.map((curso) => ({ curso, instituicao: "utfpr" })),
].map(({ curso, instituicao }) => {
  const linhas = linhasCurso(curso).filter((l) => l.tipo !== "Total");
  const serie = serieAnual(linhas);
  const resumo = resumoPorNome.get(curso.nome);
  return {
    nome: curso.nome,
    chave: normalizar(curso.nome),
    instituicao,
    sigla: SIGLA[instituicao],
    modalidade: curso.modalidade,
    salario: curso.salariosAtuais[0] ?? null,
    href: resumo?.href ?? null,
    anosCurso: resumo?.anosCurso ?? null,
    linhas,
    serie,
  };
}).filter((c) => c.serie.length > 0);

const APELIDOS = [
  { chave: "ads", nome: "Análise e Desenvolvimento de Sistemas" },
  { chave: "analise e desenvolvimento", nome: "Análise e Desenvolvimento de Sistemas" },
  { chave: "computacao", nome: "Engenharia de Computação" },
  { chave: "cc", nome: "Ciência da Computação" },
  { chave: "eng civil", nome: "Engenharia Civil" },
  { chave: "civil", nome: "Engenharia Civil" },
  { chave: "mecanica", nome: "Engenharia Mecânica" },
  { chave: "producao", nome: "Engenharia de Produção" },
  { chave: "software", nome: "Engenharia de Software" },
  { chave: "biologicas", nome: "Ciências Biológicas" },
  { chave: "biologia", nome: "Ciências Biológicas" },
  { chave: "automacao", nome: "Automação Industrial" },
  { chave: "direito", nome: "Direito (Matutino)" },
];

function acharCurso(pergunta) {
  const diretos = CURSOS.filter((c) => pergunta.includes(c.chave)).sort(
    (a, b) => b.chave.length - a.chave.length,
  );
  if (diretos.length) return diretos[0];
  const apelido = APELIDOS.filter((a) => pergunta.includes(normalizar(a.chave))).sort(
    (a, b) => b.chave.length - a.chave.length,
  )[0];
  return apelido ? CURSOS.find((c) => c.nome === apelido.nome) ?? null : null;
}

function acharAno(pergunta) {
  const achado = pergunta.match(/\b(20\d{2})\b/);
  return achado ? Number(achado[1]) : null;
}

function acharCota(pergunta) {
  if (contem(pergunta, "escola publica negros", "publica negros", "publica e negros"))
    return COTA_POR_TIPO.get("Escola Pública - Negros");
  if (contem(pergunta, "pcd", "deficiencia", "deficiente"))
    return COTA_POR_TIPO.get("PcD");
  if (contem(pergunta, "universal", "ampla concorrencia", "ampla"))
    return COTA_POR_TIPO.get("Universal");
  if (contem(pergunta, "escola publica", "cota social"))
    return COTA_POR_TIPO.get("Escola Pública");
  if (contem(pergunta, "negros", "negra", "negro", "racial", "pretos", "pardos"))
    return COTA_POR_TIPO.get("Negros");
  return null;
}

const linkPagina = (href, texto) => `<a href="${href}">${texto}</a>`;

function respostaCota(cota) {
  return (
    `<strong>${cota.tipo}</strong> (${cota.apelido}). ${cota.resumo} ${cota.detalhe} ` +
    `<em>Exemplo:</em> ${cota.exemplo} ` +
    `Todas as modalidades estão explicadas em ${linkPagina("sobre.html#cotas", "Sobre")}.`
  );
}

function respostaConceitoCota() {
  return (
    "Cota é uma reserva de parte das vagas de um curso para um grupo específico de candidatos. " +
    "O curso, a prova e a nota mínima continuam existindo — o que muda é <strong>com quem você " +
    "disputa</strong>, porque cada modalidade tem sua própria lista de aprovação. O site trabalha " +
    `com ${COTAS.length} modalidades: ${COTAS.map((c) => c.tipo).join(", ")}. ` +
    `A página ${linkPagina("sobre.html#cotas", "Sobre")} explica cada uma com exemplo real.`
  );
}

function respostaCurso(curso, ano, cota) {
  const serie = curso.serie;
  const alvo = ano ? serie.find((p) => p.ano === ano) : serie[serie.length - 1];
  if (ano && !alvo) {
    return (
      `A base de ${curso.nome} (${curso.sigla}) cobre ${serie[0].ano}–${serie[serie.length - 1].ano}, ` +
      `então não tenho ${ano}. Posso responder por qualquer ano desse intervalo.`
    );
  }
  const partes = [];
  if (cota) {
    const linha = curso.linhas.find((l) => l.ano === alvo.ano && l.tipo === cota.tipo);
    if (!linha) {
      const tipos = [...new Set(curso.linhas.filter((l) => l.ano === alvo.ano).map((l) => l.tipo))];
      return (
        `Em ${alvo.ano} não há dado da cota ${cota.tipo} para ${curso.nome} (${curso.sigla}). ` +
        `As modalidades publicadas nesse ano são: ${tipos.join(", ")}.`
      );
    }
    partes.push(
      `<strong>${curso.nome}</strong> (${curso.sigla}), ${alvo.ano}, cota ${linha.tipo}: ` +
        `${fmtInteiro.format(linha.candidatos)} inscritos para ${fmtInteiro.format(linha.vagas)} ` +
        `vagas — <strong>${num(linha.concorrencia)} candidatos por vaga</strong>` +
        (linha.notaMinima == null
          ? "."
          : `, com nota mínima de ${fmtInteiro.format(linha.notaMinima)}.`),
    );
  } else {
    partes.push(
      `<strong>${curso.nome}</strong> (${curso.sigla}), ${alvo.ano}: ` +
        `${fmtInteiro.format(alvo.candidatos)} inscritos para ${fmtInteiro.format(alvo.vagas)} ` +
        `vagas somando as cotas — <strong>${num(alvo.concorrencia)} candidatos por vaga</strong>` +
        (alvo.notaMinima == null
          ? "."
          : `, nota mínima média de ${fmtInteiro.format(alvo.notaMinima)}.`),
    );
    const porCota = curso.linhas
      .filter((l) => l.ano === alvo.ano)
      .map((l) => `${l.tipo} ${num(l.concorrencia)}`)
      .join(" · ");
    if (porCota) partes.push(`Por modalidade: ${porCota}.`);
  }
  const valores = serie.map((p) => p.concorrencia);
  partes.push(
    `Média de ${num(media(valores))} candidatos por vaga entre ${serie[0].ano} e ` +
      `${serie[serie.length - 1].ano}.`,
  );
  if (curso.salario) {
    partes.push(
      `Salário médio da profissão (${curso.salario.cargo}): ${fmtMoeda.format(curso.salario.salario)}.`,
    );
  }
  if (curso.href) partes.push(`Detalhes em ${linkPagina(curso.href, `página de ${curso.nome}`)}.`);
  return partes.join(" ");
}

function respostaMelhorCota(curso) {
  const porTipo = new Map();
  curso.linhas.forEach((l) => {
    if (!porTipo.has(l.tipo)) porTipo.set(l.tipo, []);
    porTipo.get(l.tipo).push(l.concorrencia);
  });
  const medias = [...porTipo.entries()].map(([tipo, valores]) => ({
    tipo,
    valor: media(valores),
  }));
  const menor = medias.reduce((a, b) => (b.valor < a.valor ? b : a));
  return (
    `Em ${curso.nome} (${curso.sigla}), a modalidade com menos candidatos por vaga na média das ` +
    `edições é <strong>${menor.tipo}</strong>, com ${num(menor.valor)}. ` +
    `Isso vale só para quem se encaixa nos critérios dessa cota — veja o que cada uma exige em ` +
    `${linkPagina("sobre.html#cotas", "Sobre")}.`
  );
}

const RANKING_TERMOS = [
  { id: "concorrencia", termos: ["mais concorrido", "maior concorrencia", "mais disputado"] },
  {
    id: "concorrencia",
    inverso: true,
    termos: ["menos concorrido", "menor concorrencia", "mais facil de entrar", "menos disputado"],
  },
  { id: "remuneracao", termos: ["paga mais", "maior salario", "melhor salario", "mais rico"] },
  { id: "remuneracao", inverso: true, termos: ["paga menos", "menor salario"] },
  { id: "duracao", termos: ["mais curto", "mais rapido", "menos tempo", "menor duracao"] },
  { id: "duracao", inverso: true, termos: ["mais longo", "mais demorado", "maior duracao"] },
  { id: "retorno", termos: ["melhor retorno", "custo beneficio", "retorno por ano"] },
  { id: "nota", termos: ["nota de corte mais alta", "maior nota", "nota mais alta"] },
  { id: "nota", inverso: true, termos: ["menor nota", "nota mais baixa"] },
  { id: "crescimento", termos: ["mais cresceu", "maior crescimento", "cresceu mais"] },
  { id: "crescimento", inverso: true, termos: ["mais caiu", "maior queda", "caiu mais"] },
  { id: "estabilidade", termos: ["mais estavel", "mais previsivel"] },
  { id: "estabilidade", inverso: true, termos: ["menos estavel", "mais instavel"] },
];

function respostaRanking(regra) {
  const categoria = CATEGORIAS.find((c) => c.id === regra.id);
  const validos = resumos.filter(
    (r) => categoria.valor(r) != null && Number.isFinite(categoria.valor(r)),
  );
  const maiorPrimeiro = categoria.melhor === "maior" ? !regra.inverso : Boolean(regra.inverso);
  const ordenados = validos.sort((a, b) =>
    maiorPrimeiro ? categoria.valor(b) - categoria.valor(a) : categoria.valor(a) - categoria.valor(b),
  );
  const formatar = (r) => {
    const valor = categoria.valor(r);
    if (categoria.formato === "moeda") return fmtMoeda.format(valor);
    if (categoria.formato === "percentual") return `${num(valor)}%`;
    if (categoria.formato === "anos") return `${num(valor)} anos`;
    return num(valor);
  };
  const topo = ordenados
    .slice(0, 3)
    .map((r, i) => `${i + 1}º ${r.nome} (${r.sigla}) — ${formatar(r)}`)
    .join("; ");
  return (
    `Por <strong>${categoria.rotulo}</strong> (${categoria.unidade}): ${topo}. ` +
    `${categoria.descricao} O ranking completo, com filtro por instituição, está em ` +
    `${linkPagina("ranking.html", "Ranking")}.`
  );
}

function respostaIndicador(pergunta) {
  const mapa = [
    { termos: ["candidatos por vaga", "concorrencia significa", "o que e concorrencia"], i: 0 },
    { termos: ["nota minima", "nota de corte"], i: 1 },
    { termos: ["concorrencia media"], i: 2 },
    { termos: ["variacao do periodo", "variacao percentual"], i: 3 },
    { termos: ["tendencia", "projecao", "regressao"], i: 4 },
    { termos: ["estabilidade", "desvio padrao", "coeficiente de variacao"], i: 5 },
    { termos: ["retorno por ano", "custo beneficio"], i: 6 },
  ];
  const achado = mapa.find((m) => contem(pergunta, ...m.termos));
  if (!achado) return null;
  const item = INDICADORES[achado.i];
  return `<strong>${item.termo}</strong> — ${item.definicao}`;
}

function respostaNavegacao(pergunta) {
  if (contem(pergunta, "comparar", "comparacao", "confronto")) {
    const pagina = PAGINAS.find((p) => p.href === "comparar.html");
    return `${pagina.texto} Acesse em ${linkPagina("comparar.html", "Comparar cursos")}.`;
  }
  if (contem(pergunta, "ranking", "classificacao", "ordenar")) {
    const pagina = PAGINAS.find((p) => p.href === "ranking.html");
    return `${pagina.texto} Acesse em ${linkPagina("ranking.html", "Ranking")}.`;
  }
  if (contem(pergunta, "grafico", "tabela", "filtro", "pagina inicial", "inicio")) {
    const pagina = PAGINAS.find((p) => p.href === "index.html");
    return `${pagina.texto} Acesse em ${linkPagina("index.html", "Início")}.`;
  }
  if (contem(pergunta, "pagina de curso", "paginas de curso", "cada curso")) {
    const pagina = PAGINAS.find((p) => p.href === "curso11.html");
    return `${pagina.texto} Os links estão no menu lateral (botão ☰).`;
  }
  return null;
}

function respostaSite() {
  return (
    "Este site analisa a concorrência em cotas públicas nos processos seletivos da UEPG " +
    "(2016–2025) e da UTFPR — Câmpus Ponta Grossa (2023–2025): vagas, inscritos, candidatos por " +
    "vaga, nota mínima e salário médio da profissão. " +
    `As páginas são ${PAGINAS.map((p) => linkPagina(p.href, p.nome)).join(", ")}.`
  );
}

function respostaFontes() {
  return (
    "Concorrência, vagas e notas mínimas vêm dos informativos oficiais do Vestibular de Verão da " +
    "UEPG (2016–2025) e dos relatórios do processo seletivo da UTFPR-PG (2023–2025). O salário " +
    "médio da UEPG vem do Portal Salário (base CAGED/MTE) e o da UTFPR-PG é estimativa do grupo. " +
    `A metodologia completa está em ${linkPagina("index.html#fontes", "Fontes dos dados")} e as ` +
    `ressalvas em ${linkPagina("sobre.html#limitacoes", "Sobre")}.`
  );
}

function respostaLimitacoes() {
  return `Pontos de atenção na leitura: ${LIMITACOES.map((l) => l.toLowerCase()).join(" ")}`;
}

function respostaLegal(pergunta) {
  if (contem(pergunta, "lei", "legislacao", "obrigatorio", "por que existem", "porque existem")) {
    return MARCO_LEGAL.map((item) => `<strong>${item.titulo}:</strong> ${item.texto}`).join(" ");
  }
  return null;
}

function respostaAjuda() {
  return (
    "Eu respondo com os dados deste site. Dá para perguntar, por exemplo: o que é cada tipo de " +
    "cota, a concorrência de um curso em um ano (“Medicina 2025”, “Administração 2019 escola " +
    "pública”), qual curso é mais concorrido, paga mais, é mais curto ou mais estável, o que " +
    "significa cada indicador, onde ficam o ranking e o comparador, e de onde vêm os dados."
  );
}

function respostaFallback() {
  return (
    "Não encontrei isso nos dados do site. Eu respondo sobre os 5 tipos de cota, a concorrência " +
    "de cada curso por ano e modalidade, os rankings (concorrência, salário, duração, nota, " +
    "crescimento, estabilidade), os indicadores e a navegação. " +
    `Se a dúvida for conceitual, a página ${linkPagina("sobre.html", "Sobre")} explica tudo em detalhe.`
  );
}

/** Escolhe a resposta para a pergunta do usuário. */
export function responder(texto) {
  const pergunta = normalizar(texto);
  if (!pergunta) return respostaAjuda();

  if (contem(pergunta, "oi", "ola", "bom dia", "boa tarde", "boa noite") && pergunta.length <= 15) {
    return `Olá! ${respostaAjuda()}`;
  }
  if (contem(pergunta, "ajuda", "o que voce faz", "o que voce sabe", "como funciona voce", "quem e voce")) {
    return respostaAjuda();
  }

  const curso = acharCurso(pergunta);
  const ano = acharAno(pergunta);
  const cota = acharCota(pergunta);

  if (curso && contem(pergunta, "melhor cota", "cota mais facil", "menos concorrida", "qual cota")) {
    return respostaMelhorCota(curso);
  }

  const regraRanking = RANKING_TERMOS.find((r) => contem(pergunta, ...r.termos));
  if (regraRanking && !curso) return respostaRanking(regraRanking);

  if (curso) return respostaCurso(curso, ano, cota);
  if (regraRanking) return respostaRanking(regraRanking);

  if (
    cota &&
    contem(pergunta, "o que e", "significa", "explica", "diferenca", "quem pode", "como funciona", "serve")
  ) {
    if (contem(pergunta, "diferenca") && contem(pergunta, "negros")) {
      return (
        `${respostaCota(COTA_POR_TIPO.get("Negros"))} <br /><br />` +
        `${respostaCota(COTA_POR_TIPO.get("Escola Pública - Negros"))}`
      );
    }
    return respostaCota(cota);
  }

  if (contem(pergunta, "o que e cota", "o que sao cotas", "o que e uma cota", "cotas publicas", "acao afirmativa")) {
    return respostaConceitoCota();
  }

  const legal = respostaLegal(pergunta);
  if (legal) return legal;

  const indicador = respostaIndicador(pergunta);
  if (indicador) return indicador;

  const navegacao = respostaNavegacao(pergunta);
  if (navegacao) return navegacao;

  if (contem(pergunta, "fonte", "dados vem", "de onde vem", "metodologia", "confiavel")) {
    return respostaFontes();
  }
  if (contem(pergunta, "limitacao", "ressalva", "cuidado", "problema dos dados")) {
    return respostaLimitacoes();
  }
  if (contem(pergunta, "o que e o site", "sobre o site", "objetivo", "para que serve o site", "trabalho")) {
    return respostaSite();
  }
  if (cota) return respostaCota(cota);

  return respostaFallback();
}

/* ── Interface do assistente ─────────────────────────── */

function balao(autor, html) {
  const item = document.createElement("div");
  item.className = `chat-msg chat-msg--${autor}`;
  const bolha = document.createElement("div");
  bolha.className = "chat-bolha";
  bolha.innerHTML = html;
  item.appendChild(bolha);
  return item;
}

export function montarAssistente() {
  if (document.getElementById("assistente")) return;

  const botao = document.createElement("button");
  botao.id = "assistente-botao";
  botao.type = "button";
  botao.className = "assistente-botao";
  botao.setAttribute("aria-label", "Abrir assistente do site");
  botao.innerHTML = '<span aria-hidden="true">💬</span><span class="rotulo">Assistente</span>';

  const painel = document.createElement("section");
  painel.id = "assistente";
  painel.className = "assistente";
  painel.setAttribute("aria-label", "Assistente do site");
  painel.hidden = true;
  painel.innerHTML = `
    <header class="assistente-topo">
      <div>
        <p class="assistente-titulo">Assistente do site</p>
        <p class="assistente-sub">Responde com os dados de db.js e db_utfpr.js</p>
      </div>
      <button type="button" class="assistente-fechar" aria-label="Fechar assistente">✖</button>
    </header>
    <div class="assistente-corpo" id="assistente-corpo" role="log" aria-live="polite"></div>
    <div class="assistente-sugestoes" id="assistente-sugestoes"></div>
    <form class="assistente-form" id="assistente-form" autocomplete="off">
      <label class="visually-hidden" for="assistente-entrada">Sua pergunta</label>
      <input
        id="assistente-entrada"
        type="text"
        placeholder="Pergunte sobre cotas, cursos ou indicadores"
      />
      <button type="submit" aria-label="Enviar pergunta">Enviar</button>
    </form>`;

  document.body.append(botao, painel);

  const corpo = painel.querySelector("#assistente-corpo");
  const formulario = painel.querySelector("#assistente-form");
  const entrada = painel.querySelector("#assistente-entrada");
  const sugestoes = painel.querySelector("#assistente-sugestoes");

  const escrever = (autor, html) => {
    corpo.appendChild(balao(autor, html));
    corpo.scrollTop = corpo.scrollHeight;
  };

  const perguntar = (texto) => {
    escrever("usuario", texto.replace(/[<>]/g, ""));
    escrever("bot", responder(texto));
  };

  SUGESTOES.forEach((texto) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.textContent = texto;
    chip.addEventListener("click", () => perguntar(texto));
    sugestoes.appendChild(chip);
  });

  escrever(
    "bot",
    "Olá! Sou o assistente deste trabalho sobre concorrência em cotas públicas. " +
      "Pergunte o que quiser sobre as cotas, os cursos e os números do site — as sugestões " +
      "abaixo são um bom começo.",
  );

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const texto = entrada.value.trim();
    if (!texto) return;
    entrada.value = "";
    perguntar(texto);
  });

  const abrir = () => {
    painel.hidden = false;
    botao.classList.add("oculto");
    entrada.focus();
  };
  const fechar = () => {
    painel.hidden = true;
    botao.classList.remove("oculto");
  };

  botao.addEventListener("click", abrir);
  painel.querySelector(".assistente-fechar").addEventListener("click", fechar);
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && !painel.hidden) fechar();
  });
}

montarAssistente();
