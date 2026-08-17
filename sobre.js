/**
 * Página Sobre: explica o site, o conceito de cota e cada modalidade,
 * com um exemplo montado a partir dos próprios dados.
 */
import { resumosCatalogo } from "./catalogo.js";
import {
  COTAS,
  INDICADORES,
  LIMITACOES,
  MARCO_LEGAL,
  PAGINAS,
  exemploCotas,
  frasesExemplo,
} from "./conceitos.js";
import { montarNavegacao, montarRodape } from "./nav.js";
import { criarElemento, fmtInteiro, num } from "./util.js";

const resumos = resumosCatalogo();
const anos = resumos.flatMap((r) => r.anos);
const EXEMPLO = exemploCotas();

function preencherHero() {
  document.getElementById("hero-periodo").textContent =
    `${Math.min(...anos)}–${Math.max(...anos)}`;
}

function montarGradePaginas() {
  const grade = document.getElementById("grade-paginas");
  PAGINAS.forEach((pagina) => {
    const card = criarElemento("article", "question-card");
    card.appendChild(criarElemento("span", "q-number", "Página"));
    const titulo = criarElemento("h3", "q-title");
    const link = criarElemento("a", null, pagina.nome);
    link.href = pagina.href;
    titulo.appendChild(link);
    card.append(titulo, criarElemento("p", "q-answer", pagina.texto));
    grade.appendChild(card);
  });
}

function montarGradeCotas() {
  const grade = document.getElementById("grade-cotas");
  COTAS.forEach((cota) => {
    const card = criarElemento("article", "question-card");
    const etiqueta = criarElemento("span", "curso-tag", cota.tipo);
    etiqueta.dataset.cota = cota.tipo;
    card.appendChild(etiqueta);
    card.appendChild(criarElemento("h3", "q-title", cota.apelido));
    card.appendChild(criarElemento("p", "q-answer", cota.resumo));
    card.appendChild(criarElemento("p", "q-answer text-muted-2", cota.detalhe));
    const exemplo = criarElemento("p", "q-answer");
    exemplo.innerHTML = `<span class="q-highlight">Exemplo:</span> ${cota.exemplo}`;
    card.appendChild(exemplo);
    grade.appendChild(card);
  });
}

function montarExemplo() {
  const descricao = document.getElementById("exemplo-descricao");
  const corpo = document.getElementById("tabela-exemplo");
  const legenda = document.getElementById("legenda-exemplo");
  const leitura = document.getElementById("leitura-exemplo");

  descricao.textContent =
    `Todas as modalidades de ${EXEMPLO.curso} na edição ${EXEMPLO.ano}, exatamente como o site ` +
    "calcula: mesmo curso, mesma prova, listas de aprovação separadas.";

  EXEMPLO.linhas
    .slice()
    .sort((a, b) => b.concorrencia - a.concorrencia)
    .forEach((linha) => {
      const tr = document.createElement("tr");
      const tipo = document.createElement("td");
      const etiqueta = criarElemento("span", "curso-tag", linha.tipo);
      etiqueta.dataset.cota = linha.tipo;
      tipo.appendChild(etiqueta);
      tr.appendChild(tipo);
      [
        fmtInteiro.format(linha.vagas),
        fmtInteiro.format(linha.candidatos),
        num(linha.concorrencia),
        linha.notaMinima == null ? "—" : fmtInteiro.format(linha.notaMinima),
      ].forEach((valor) => tr.appendChild(criarElemento("td", "num", valor)));
      corpo.appendChild(tr);
    });

  legenda.textContent =
    "Candidatos por vaga = inscritos ÷ vagas. Nota mínima = nota do último aprovado na modalidade.";

  frasesExemplo(EXEMPLO).forEach((frase) => {
    leitura.appendChild(criarElemento("p", null, frase));
  });
  const fecho = criarElemento("p", "mb-0 text-muted-2");
  fecho.textContent =
    "A diferença entre as linhas não mede dificuldade da prova, e sim o tamanho do grupo que " +
    "disputa cada bloco de vagas. Por isso o site sempre mostra a cota junto com o número.";
  leitura.appendChild(fecho);
}

function montarGradeLegal() {
  const grade = document.getElementById("grade-legal");
  MARCO_LEGAL.forEach((item) => {
    const card = criarElemento("article", "question-card");
    card.appendChild(criarElemento("span", "q-number", "Regra"));
    card.appendChild(criarElemento("h3", "q-title", item.titulo));
    card.appendChild(criarElemento("p", "q-answer", item.texto));
    grade.appendChild(card);
  });
}

function montarGlossario() {
  const lista = document.getElementById("lista-glossario");
  INDICADORES.forEach((item) => {
    const li = document.createElement("li");
    li.appendChild(criarElemento("strong", null, item.termo));
    li.appendChild(document.createTextNode(` — ${item.definicao}`));
    lista.appendChild(li);
  });
}

function perguntas() {
  const maisConcorrido = resumos.reduce((a, b) =>
    b.mediaConcorrencia > a.mediaConcorrencia ? b : a,
  );
  const menosConcorrido = resumos.reduce((a, b) =>
    b.mediaConcorrencia < a.mediaConcorrencia ? b : a,
  );
  return [
    {
      pergunta: "Cota com concorrência baixa quer dizer que o curso é fácil?",
      resposta:
        "Não. Concorrência é inscritos por vaga dentro daquele grupo. Uma cota com poucas vagas e " +
        "poucos inscritos pode ter razão baixa e ainda assim exigir nota alta, porque a prova e o " +
        "curso são os mesmos para todos.",
    },
    {
      pergunta: "Qual a diferença entre cota Negros e Escola Pública - Negros?",
      resposta:
        "A cota Negros usa apenas o recorte racial (autodeclaração de preto ou pardo). A cota " +
        "Escola Pública - Negros exige as duas condições: ensino médio integralmente em escola " +
        "pública e autodeclaração de negro — é uma reserva dentro da reserva social.",
    },
    {
      pergunta: "O que é a cota Universal?",
      resposta:
        "É a ampla concorrência: vagas sem reserva, disputadas por qualquer candidato. Costuma ter " +
        "a nota mínima mais alta do curso porque reúne o maior número de inscritos.",
    },
    {
      pergunta: "Posso comparar a nota mínima da UEPG com a da UTFPR?",
      resposta:
        "Não diretamente. As duas instituições usam escalas de pontuação diferentes; a comparação " +
        "só faz sentido entre cursos da mesma instituição.",
    },
    {
      pergunta: "Qual curso é o mais e o menos concorrido do site?",
      resposta:
        `Considerando todas as cotas somadas em cada edição, ${maisConcorrido.nome} ` +
        `(${maisConcorrido.sigla}) lidera com ${num(maisConcorrido.mediaConcorrencia)} candidatos ` +
        `por vaga em média, e ${menosConcorrido.nome} (${menosConcorrido.sigla}) fecha a lista com ` +
        `${num(menosConcorrido.mediaConcorrencia)}.`,
    },
    {
      pergunta: "De onde vêm os dados?",
      resposta:
        "Dos informativos oficiais do Vestibular de Verão da UEPG (2016–2025) e dos relatórios de " +
        "concorrência do processo seletivo da UTFPR-PG (2023–2025). Os salários vêm do Portal " +
        "Salário (CAGED/MTE) para a UEPG e de estimativa do grupo para a UTFPR-PG.",
    },
    {
      pergunta: "Como faço uma pergunta sobre um curso específico?",
      resposta:
        "Use o assistente no botão do canto inferior direito. Ele responde com os números das " +
        "bases do site — por exemplo “concorrência de Medicina em 2024”, “nota de corte de " +
        "Administração” ou “qual curso paga mais”.",
    },
  ];
}

function montarFaq() {
  const acordeao = document.getElementById("acordeao-faq");
  perguntas().forEach((item, indice) => {
    const bloco = criarElemento("div", "accordion-item");
    const cabecalho = criarElemento("h3", "accordion-header");
    const botao = document.createElement("button");
    botao.className = indice === 0 ? "accordion-button" : "accordion-button collapsed";
    botao.type = "button";
    botao.dataset.bsToggle = "collapse";
    botao.dataset.bsTarget = `#faq-${indice}`;
    botao.textContent = item.pergunta;
    cabecalho.appendChild(botao);

    const painel = document.createElement("div");
    painel.id = `faq-${indice}`;
    painel.className =
      indice === 0 ? "accordion-collapse collapse show" : "accordion-collapse collapse";
    painel.dataset.bsParent = "#acordeao-faq";
    painel.appendChild(criarElemento("div", "accordion-body", item.resposta));

    bloco.append(cabecalho, painel);
    acordeao.appendChild(bloco);
  });
}

function montarLimitacoes() {
  const lista = document.getElementById("lista-limitacoes");
  LIMITACOES.forEach((texto) => lista.appendChild(criarElemento("li", null, texto)));
}

montarNavegacao();
preencherHero();
montarGradePaginas();
montarGradeCotas();
montarExemplo();
montarGradeLegal();
montarGlossario();
montarFaq();
montarLimitacoes();
montarRodape();
