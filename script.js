import { analisePainel, criarPainelAnalise } from "./analise.js";
import { db } from "./db.js";
import { MENU, montarNavegacao, montarRodape } from "./nav.js";
import {
  PALETA_CURSOS as CORES,
  aplicarTemaChart,
  correlacao,
  criarElemento,
  desvioPadrao,
  fmtInteiro,
  fmtMoeda as formatadorMoeda,
  fmtNumero as formatadorNumero,
  forcaCorrelacao,
  media,
} from "./util.js";

const CURSOS_ANALISADOS = [
  "Medicina",
  "Direito (Matutino)",
  "Enfermagem",
  "Engenharia Civil",
  "Engenharia de Computação",
  "Administração",
];

const COTA_PADRAO = "Escola Pública";
const ANOS = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

const FONTES = [
  {
    texto:
      "Informativos oficiais de vagas, inscritos e notas mínimas do Vestibular de Verão da UEPG (edições 2016 a 2025), consolidados em db.js.",
    url: "https://www.uepg.br/cps/",
  },
  {
    texto:
      "Concorrência dos cursos da UTFPR — Câmpus Ponta Grossa (2023 a 2025), consolidada em db_utfpr.js a partir do levantamento do grupo nos relatórios do processo seletivo.",
    url: "https://www.utfpr.edu.br/cursos",
  },
  {
    texto:
      "Salário médio das profissões: Portal Salário (salario.com.br), com base no CAGED/MTE — regime CLT, Brasil, consulta em agosto de 2026.",
    url: "https://www.salario.com.br/",
  },
];

const cursos = CURSOS_ANALISADOS.map((nome) =>
  db.cursos.find((curso) => curso.nome === nome),
).filter(Boolean);

function tiposDeCota() {
  const tipos = new Set();
  cursos.forEach((curso) =>
    curso.cotas.forEach((cota) => cota.tipoCota.forEach((t) => tipos.add(t.tipo))),
  );
  return [...tipos];
}

function registro(curso, ano, tipoCota) {
  const cota = curso.cotas.find((c) => c.ano === ano);
  if (!cota) return null;
  const dados = cota.tipoCota.find((t) => t.tipo === tipoCota);
  if (!dados || !dados.vagas || !dados.candidatos) return null;
  return {
    ano,
    curso: curso.nome,
    candidatos: dados.candidatos,
    vagas: dados.vagas,
    concorrencia: dados.candidatos / dados.vagas,
    notaMinima: dados.notaMinima,
    salario: curso.salariosAtuais[0] ? curso.salariosAtuais[0].salario : null,
    cargo: curso.salariosAtuais[0] ? curso.salariosAtuais[0].cargo : null,
  };
}

function linhasDaCota(tipoCota) {
  const linhas = [];
  cursos.forEach((curso) =>
    ANOS.forEach((ano) => {
      const linha = registro(curso, ano, tipoCota);
      if (linha) linhas.push(linha);
    }),
  );
  return linhas;
}

function estatisticasPorCurso(linhas) {
  return cursos
    .map((curso) => {
      const doCurso = linhas
        .filter((l) => l.curso === curso.nome)
        .sort((a, b) => a.ano - b.ano);
      if (!doCurso.length) return null;
      const valores = doCurso.map((l) => l.concorrencia);
      const primeiro = doCurso[0];
      const ultimo = doCurso[doCurso.length - 1];
      return {
        nome: curso.nome,
        salario: doCurso[0].salario,
        linhas: doCurso,
        mediaConcorrencia: media(valores),
        desvio: desvioPadrao(valores),
        coeficienteVariacao: desvioPadrao(valores) / media(valores),
        variacao: ultimo.concorrencia - primeiro.concorrencia,
        variacaoPercentual:
          ((ultimo.concorrencia - primeiro.concorrencia) / primeiro.concorrencia) * 100,
        anoInicial: primeiro.ano,
        anoFinal: ultimo.ano,
        mediaNota: media(
          doCurso.filter((l) => l.notaMinima != null).map((l) => l.notaMinima),
        ),
      };
    })
    .filter(Boolean);
}

function estatisticasPorAno(linhas) {
  return ANOS.map((ano) => {
    const doAno = linhas.filter((l) => l.ano === ano);
    return doAno.length
      ? { ano, media: media(doAno.map((l) => l.concorrencia)), cursos: doAno.length }
      : null;
  }).filter(Boolean);
}

function cursosSelecionados() {
  return [...document.querySelectorAll("#grupo-cursos input:checked")].map(
    (input) => input.value,
  );
}

function cotaSelecionada() {
  return document.getElementById("select-cota").value;
}

let grafico = null;
let painelAnalise = null;

function montarPainelAnalise() {
  const layout = document.getElementById("grafico-layout");
  const { painel, atualizar } = criarPainelAnalise(() =>
    analisePainel(linhasDaCota(cotaSelecionada()), cursosSelecionados(), cotaSelecionada()),
  );
  layout.appendChild(painel);
  painelAnalise = atualizar;
}

function montarSelectCota() {
  const select = document.getElementById("select-cota");
  tiposDeCota().forEach((tipo) => {
    const opcao = document.createElement("option");
    opcao.value = tipo;
    opcao.textContent = tipo;
    opcao.selected = tipo === COTA_PADRAO;
    select.appendChild(opcao);
  });
  select.addEventListener("change", renderizarTudo);
}

function montarCheckboxesCursos() {
  const grupo = document.getElementById("grupo-cursos");
  cursos.forEach((curso, indice) => {
    const cor = CORES[indice % CORES.length];
    const chip = document.createElement("label");
    chip.className = "chip ativo";
    chip.style.setProperty("--cor-curso", cor);
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = curso.nome;
    input.id = `curso-${indice}`;
    input.checked = true;
    input.addEventListener("change", () => {
      chip.classList.toggle("ativo", input.checked);
      renderizarTudo();
    });
    const marcador = document.createElement("span");
    marcador.className = "legenda-cor";
    marcador.style.color = cor;
    chip.append(input, marcador, document.createTextNode(curso.nome));
    grupo.appendChild(chip);
  });
}

function montarGradeCursos() {
  const grade = document.getElementById("grade-cursos");
  MENU.forEach((grupo) => {
    const card = criarElemento("article", "question-card");
    card.appendChild(criarElemento("span", "q-number", grupo.grupo));
    card.appendChild(
      criarElemento(
        "h3",
        "q-title",
        grupo.grupo === "UEPG" ? "Universidade Estadual de Ponta Grossa" : "UTFPR — Ponta Grossa",
      ),
    );
    const lista = criarElemento("ul", "lista-fontes");
    grupo.itens.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.nome;
      li.appendChild(a);
      lista.appendChild(li);
    });
    card.appendChild(lista);
    grade.appendChild(card);
  });
}

function montarFiltrosTabela() {
  const selectAno = document.getElementById("filtro-ano");
  const selectCurso = document.getElementById("filtro-curso");
  const todos = document.createElement("option");
  todos.value = "todos";
  todos.textContent = "Todos os anos";
  selectAno.appendChild(todos);
  ANOS.forEach((ano) => {
    const opcao = document.createElement("option");
    opcao.value = String(ano);
    opcao.textContent = String(ano);
    selectAno.appendChild(opcao);
  });
  const todosCursos = document.createElement("option");
  todosCursos.value = "todos";
  todosCursos.textContent = "Todos os cursos";
  selectCurso.appendChild(todosCursos);
  cursos.forEach((curso) => {
    const opcao = document.createElement("option");
    opcao.value = curso.nome;
    opcao.textContent = curso.nome;
    selectCurso.appendChild(opcao);
  });
  [selectAno, selectCurso, document.getElementById("filtro-ordem")].forEach((el) =>
    el.addEventListener("change", renderizarTabela),
  );
}

function renderizarGrafico(linhas) {
  const visiveis = cursosSelecionados();
  const datasets = cursos
    .map((curso, indice) => ({ curso, cor: CORES[indice % CORES.length] }))
    .filter(({ curso }) => visiveis.includes(curso.nome))
    .map(({ curso, cor }) => ({
      label: curso.nome,
      data: ANOS.map((ano) => {
        const linha = linhas.find((l) => l.curso === curso.nome && l.ano === ano);
        return linha ? Number(linha.concorrencia.toFixed(2)) : null;
      }),
      borderColor: cor,
      backgroundColor: cor,
      tension: 0.3,
      spanGaps: true,
      borderWidth: 2.5,
      pointRadius: 3,
      pointHoverRadius: 7,
    }));

  document.getElementById("grafico-subtitulo").textContent =
    `Cota ${cotaSelecionada()} · fonte: informativos oficiais do Vestibular de Verão da UEPG`;

  const config = {
    type: "line",
    data: { labels: ANOS.map(String), datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        title: {
          display: true,
          text: `Candidatos por vaga na cota ${cotaSelecionada()} — UEPG, 2016 a 2025`,
          color: "#e8eaf0",
          font: { size: 16 },
        },
        legend: { display: true, position: "bottom" },
        tooltip: {
          callbacks: {
            label: (ctx) =>
              `${ctx.dataset.label}: ${formatadorNumero.format(ctx.parsed.y)} candidatos/vaga`,
          },
        },
      },
      scales: {
        x: { title: { display: true, text: "Ano do vestibular" } },
        y: {
          title: { display: true, text: "Candidatos por vaga" },
          beginAtZero: true,
        },
      },
    },
  };

  if (grafico) grafico.destroy();
  grafico = new Chart(document.getElementById("grafico-linha"), config);
  if (painelAnalise) painelAnalise();
}

function renderizarTabela() {
  const tipo = cotaSelecionada();
  const linhas = linhasDaCota(tipo);
  const ano = document.getElementById("filtro-ano").value;
  const curso = document.getElementById("filtro-curso").value;
  const ordem = document.getElementById("filtro-ordem").value;

  let filtradas = linhas.filter(
    (l) =>
      (ano === "todos" || l.ano === Number(ano)) && (curso === "todos" || l.curso === curso),
  );

  if (ordem === "concorrencia") {
    filtradas.sort((a, b) => b.concorrencia - a.concorrencia);
  } else if (ordem === "nota") {
    filtradas.sort((a, b) => (b.notaMinima ?? 0) - (a.notaMinima ?? 0));
  } else {
    filtradas.sort((a, b) => a.ano - b.ano || a.curso.localeCompare(b.curso, "pt-BR"));
  }

  const corpo = document.getElementById("tabela-corpo");
  corpo.textContent = "";
  const maximo = Math.max(...linhas.map((l) => l.concorrencia));

  filtradas.forEach((linha) => {
    const tr = document.createElement("tr");
    tr.appendChild(criarElemento("td", null, String(linha.ano)));
    tr.appendChild(criarElemento("td", null, linha.curso));

    const tdCota = criarElemento("td");
    const tag = criarElemento("span", "curso-tag", tipo);
    tag.dataset.cota = tipo;
    tdCota.appendChild(tag);
    tr.appendChild(tdCota);

    tr.appendChild(criarElemento("td", "num", fmtInteiro.format(linha.candidatos)));
    tr.appendChild(criarElemento("td", "num", fmtInteiro.format(linha.vagas)));

    const tdConc = criarElemento("td", "num", formatadorNumero.format(linha.concorrencia));
    const barra = criarElemento("div", "barra");
    const preenchimento = criarElemento("div", "barra-fill");
    preenchimento.style.width = `${(linha.concorrencia / maximo) * 100}%`;
    barra.appendChild(preenchimento);
    tdConc.appendChild(barra);
    tr.appendChild(tdConc);

    tr.appendChild(
      criarElemento(
        "td",
        "num",
        linha.notaMinima != null ? fmtInteiro.format(linha.notaMinima) : "—",
      ),
    );
    const tdSalario = criarElemento(
      "td",
      "num",
      linha.salario != null ? formatadorMoeda.format(linha.salario) : "—",
    );
    if (linha.cargo) tdSalario.title = linha.cargo;
    tr.appendChild(tdSalario);
    corpo.appendChild(tr);
  });

  document.getElementById("tabela-caption").textContent =
    `${filtradas.length} registros — cota ${tipo}. * Salário médio mensal do cargo típico da ` +
    "profissão (Portal Salário / CAGED-MTE, agosto de 2026).";
}

function renderizarCards(linhas) {
  const porCurso = estatisticasPorCurso(linhas);
  const porAno = estatisticasPorAno(linhas);
  const maior = [...porCurso].sort((a, b) => b.mediaConcorrencia - a.mediaConcorrencia)[0];
  const menor = [...porCurso].sort((a, b) => a.mediaConcorrencia - b.mediaConcorrencia)[0];
  const anoTop = [...porAno].sort((a, b) => b.media - a.media)[0];
  const notas = linhas.filter((l) => l.notaMinima != null);
  const r = correlacao(
    notas.map((l) => l.concorrencia),
    notas.map((l) => l.notaMinima),
  );

  const indicadores = [
    { rotulo: "Cursos analisados", valor: String(porCurso.length) },
    { rotulo: "Registros (curso × ano)", valor: String(linhas.length) },
    {
      rotulo: "Maior concorrência média",
      valor: `${formatadorNumero.format(maior.mediaConcorrencia)}`,
      detalhe: maior.nome,
    },
    {
      rotulo: "Menor concorrência média",
      valor: `${formatadorNumero.format(menor.mediaConcorrencia)}`,
      detalhe: menor.nome,
    },
    {
      rotulo: "Ano mais concorrido",
      valor: String(anoTop.ano),
      detalhe: `${formatadorNumero.format(anoTop.media)} candidatos/vaga em média`,
    },
    {
      rotulo: "Correlação concorrência × nota",
      valor: formatadorNumero.format(r),
      detalhe: `correlação ${forcaCorrelacao(r)}`,
    },
  ];

  const container = document.getElementById("cards-resumo");
  container.textContent = "";
  indicadores.forEach((indicador) => {
    const card = criarElemento("article", "kpi");
    card.appendChild(criarElemento("p", "rotulo", indicador.rotulo));
    card.appendChild(criarElemento("p", "valor", indicador.valor));
    if (indicador.detalhe) {
      card.appendChild(criarElemento("p", "detalhe", indicador.detalhe));
    }
    container.appendChild(card);
  });
}

function respostas(linhas) {
  const porCurso = estatisticasPorCurso(linhas);
  const porAno = estatisticasPorAno(linhas);
  const ordenadosMedia = [...porCurso].sort(
    (a, b) => b.mediaConcorrencia - a.mediaConcorrencia,
  );
  const maior = ordenadosMedia[0];
  const menor = ordenadosMedia[ordenadosMedia.length - 1];
  const crescimento = [...porCurso].sort((a, b) => b.variacao - a.variacao)[0];
  const quedas = porCurso
    .filter((c) => c.variacao < 0)
    .sort((a, b) => a.variacao - b.variacao);
  const estavel = [...porCurso].sort(
    (a, b) => a.coeficienteVariacao - b.coeficienteVariacao,
  )[0];
  const anosOrdenados = [...porAno].sort((a, b) => b.media - a.media);
  const anoTop = anosOrdenados[0];
  const anoBaixo = anosOrdenados[anosOrdenados.length - 1];

  const comNota = linhas.filter((l) => l.notaMinima != null);
  const rNota = correlacao(
    comNota.map((l) => l.concorrencia),
    comNota.map((l) => l.notaMinima),
  );
  const rNotaMedia = correlacao(
    porCurso.map((c) => c.mediaConcorrencia),
    porCurso.map((c) => c.mediaNota),
  );
  const comSalario = porCurso.filter((c) => c.salario != null);
  const rSalario = correlacao(
    comSalario.map((c) => c.mediaConcorrencia),
    comSalario.map((c) => c.salario),
  );
  const vagas2016 = linhas
    .filter((l) => l.ano === 2016)
    .reduce((s, l) => s + l.vagas, 0);
  const vagas2025 = linhas
    .filter((l) => l.ano === 2025)
    .reduce((s, l) => s + l.vagas, 0);
  const insc2016 = linhas
    .filter((l) => l.ano === 2016)
    .reduce((s, l) => s + l.candidatos, 0);
  const insc2025 = linhas
    .filter((l) => l.ano === 2025)
    .reduce((s, l) => s + l.candidatos, 0);

  const num = (v) => formatadorNumero.format(v);

  return [
    {
      pergunta: "1. Qual curso apresentou maior concorrência?",
      resposta:
        `${maior.nome}, com média de ${num(maior.mediaConcorrencia)} candidatos por vaga ` +
        `entre ${maior.anoInicial} e ${maior.anoFinal} — ${num(
          maior.mediaConcorrencia / ordenadosMedia[1].mediaConcorrencia,
        )} vezes a média do segundo colocado (${ordenadosMedia[1].nome}, ${num(
          ordenadosMedia[1].mediaConcorrencia,
        )}). ` +
        `O pico ocorreu em ${
          maior.linhas.reduce((a, b) => (b.concorrencia > a.concorrencia ? b : a)).ano
        } com ${num(
          maior.linhas.reduce((a, b) => (b.concorrencia > a.concorrencia ? b : a))
            .concorrencia,
        )} candidatos por vaga.`,
    },
    {
      pergunta: "2. Qual curso apresentou menor concorrência?",
      resposta:
        `${menor.nome}, com média de ${num(menor.mediaConcorrencia)} candidatos por vaga. ` +
        `Em ${menor.anoFinal} a relação foi de ${num(
          menor.linhas[menor.linhas.length - 1].concorrencia,
        )} candidatos por vaga, o menor valor do grupo analisado.`,
    },
    {
      pergunta: "3. Qual curso apresentou maior crescimento?",
      resposta:
        crescimento.variacao > 0
          ? `${crescimento.nome}, que passou de ${num(
              crescimento.linhas[0].concorrencia,
            )} candidatos por vaga em ${crescimento.anoInicial} para ${num(
              crescimento.linhas[crescimento.linhas.length - 1].concorrencia,
            )} em ${crescimento.anoFinal} (variação de ${num(
              crescimento.variacaoPercentual,
            )}%).`
          : `Nenhum curso do grupo cresceu no período: a menor retração foi de ${crescimento.nome} ` +
            `(${num(crescimento.variacaoPercentual)}%).`,
    },
    {
      pergunta: "4. Houve queda de concorrência em algum curso?",
      resposta: quedas.length
        ? `Sim. ${quedas
            .map(
              (c) =>
                `${c.nome} (${num(c.linhas[0].concorrencia)} → ${num(
                  c.linhas[c.linhas.length - 1].concorrencia,
                )} candidatos/vaga, ${num(c.variacaoPercentual)}%)`,
            )
            .join("; ")}. A queda mais acentuada foi em ${quedas[0].nome}.`
        : "Não: todos os cursos analisados encerraram 2025 com concorrência maior que em 2016.",
    },
    {
      pergunta: "5. Qual curso foi mais estável?",
      resposta:
        `${estavel.nome}, com coeficiente de variação de ${num(
          estavel.coeficienteVariacao * 100,
        )}% (desvio padrão de ${num(estavel.desvio)} sobre média de ${num(
          estavel.mediaConcorrencia,
        )} candidatos por vaga) — a menor dispersão relativa do grupo.`,
    },
    {
      pergunta: "6. Qual ano teve maior concorrência média?",
      resposta:
        `${anoTop.ano}, com ${num(anoTop.media)} candidatos por vaga na média dos cursos ` +
        `analisados; o ano menos concorrido foi ${anoBaixo.ano} (${num(anoBaixo.media)}). ` +
        `A média anual oscila fortemente porque acompanha o número de vagas reservadas em cada ` +
        `edital: nos anos em que a UEPG dobrou as vagas de cota (2020 e 2022–2023) a relação ` +
        `candidato/vaga caiu, e voltou a subir em 2024–2025, quando a oferta por cota foi reduzida.`,
    },
    {
      pergunta: "7. Existe relação entre concorrência e nota mínima?",
      resposta:
        `Sim, e é positiva: considerando os ${comNota.length} registros de curso × ano, a ` +
        `correlação de Pearson entre candidatos por vaga e nota mínima de aprovação é de ` +
        `${num(rNota)} (correlação ${forcaCorrelacao(rNota)}). Comparando as médias por curso ` +
        `a associação é ainda mais clara (r = ${num(rNotaMedia)}): quanto mais candidatos ` +
        "disputam cada vaga, maior o corte necessário para entrar.",
    },
    {
      pergunta: "8. Quais outras conclusões (insights) podem ser obtidas?",
      resposta:
        `a) A correlação entre concorrência média e salário médio da profissão é de ` +
        `${num(rSalario)} (${forcaCorrelacao(rSalario)}): remuneração alta não garante alta ` +
        `procura — ${
          [...comSalario].sort((a, b) => b.salario - a.salario)[0].nome
        } tem o maior salário médio do grupo e uma das menores concorrências, enquanto ` +
        "Medicina combina salário elevado e disputa extrema. " +
        `b) A oferta de vagas na cota caiu de ${vagas2016} (2016) para ${vagas2025} (2025) nos ` +
        `cursos analisados, e o total de inscritos foi de ${insc2016.toLocaleString(
          "pt-BR",
        )} para ${insc2025.toLocaleString("pt-BR")}. ` +
        "c) Medicina é o único curso do grupo que ganhou concorrência no período; todos os " +
        "demais recuaram, com destaque para Engenharia Civil, indicando concentração da demanda " +
        "em carreiras tradicionais de prestígio. " +
        "d) A nota mínima da cota subiu em todos os seis cursos mesmo onde a concorrência caiu, " +
        "o que sugere efeito também do desempenho dos candidatos e da redução do número de " +
        "vagas reservadas, e não apenas da quantidade de inscritos.",
    },
  ];
}

function renderizarAnalise(linhas) {
  const acordeao = document.getElementById("acordeao-analise");
  acordeao.textContent = "";
  respostas(linhas).forEach((item, indice) => {
    const bloco = document.createElement("div");
    bloco.className = "accordion-item";

    const cabecalho = document.createElement("h3");
    cabecalho.className = "accordion-header";
    const botao = document.createElement("button");
    botao.className = indice === 0 ? "accordion-button" : "accordion-button collapsed";
    botao.type = "button";
    botao.dataset.bsToggle = "collapse";
    botao.dataset.bsTarget = `#resposta-${indice}`;
    botao.textContent = item.pergunta;
    cabecalho.appendChild(botao);

    const painel = document.createElement("div");
    painel.id = `resposta-${indice}`;
    painel.className = indice === 0 ? "accordion-collapse collapse show" : "accordion-collapse collapse";
    painel.dataset.bsParent = "#acordeao-analise";
    const corpo = document.createElement("div");
    corpo.className = "accordion-body";
    corpo.textContent = item.resposta;
    painel.appendChild(corpo);

    bloco.append(cabecalho, painel);
    acordeao.appendChild(bloco);
  });
}

function renderizarFontes() {
  const lista = document.getElementById("lista-fontes");
  lista.textContent = "";
  FONTES.forEach((fonte) => {
    const item = document.createElement("li");
    item.textContent = `${fonte.texto} `;
    const link = document.createElement("a");
    link.href = fonte.url;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = fonte.url;
    item.appendChild(link);
    lista.appendChild(item);
  });
}

function renderizarTudo() {
  const linhas = linhasDaCota(cotaSelecionada());
  renderizarCards(linhas);
  renderizarGrafico(linhas);
  renderizarTabela();
  renderizarAnalise(linhas);
}

montarNavegacao();
aplicarTemaChart(Chart);
montarSelectCota();
montarCheckboxesCursos();
montarFiltrosTabela();
montarPainelAnalise();
montarGradeCursos();
renderizarFontes();
renderizarTudo();
montarRodape();
