/**
 * Renderiza uma página de curso (gráfico de linha por tipo de cota,
 * tabela filtrável e leitura dos dados) a partir do db.js / db_utfpr.js.
 */
import { analiseCurso, criarPainelAnalise } from "./analise.js";
import { cursoDoBanco, linhasCurso } from "./catalogo.js";
import { montarNavegacao, montarRodape } from "./nav.js";
import {
  CORES_COTA,
  aplicarTemaChart,
  correlacao,
  criarElemento,
  desvioPadrao,
  fmtInteiro,
  fmtMoeda,
  forcaCorrelacao,
  media,
  num,
} from "./util.js";

const FONTE = {
  uepg: "Informativos oficiais do Vestibular de Verão da UEPG (CPS-UEPG)",
  utfpr: "Relatórios de concorrência do Processo Seletivo da UTFPR — Câmpus Ponta Grossa",
};

function montarHero(curso, instituicao, dados) {
  const anos = [...new Set(dados.map((l) => l.ano))];
  const hero = criarElemento("header", "hero");
  hero.appendChild(criarElemento("div", "hero-grid-lines"));
  const container = criarElemento("div", "container");
  container.appendChild(
    criarElemento("span", "badge-pill", instituicao === "uepg" ? "UEPG" : "UTFPR-PG"),
  );
  const titulo = criarElemento("h1", "hero-title");
  titulo.append(document.createTextNode("Concorrência em "), criarElemento("em", null, curso.nome));
  container.appendChild(titulo);
  container.appendChild(
    criarElemento(
      "p",
      "hero-subtitle",
      `${curso.modalidade} · candidatos por vaga, vagas ofertadas, notas mínimas de aprovação e ` +
        "salário médio da profissão por tipo de cota.",
    ),
  );
  const meta = criarElemento("div", "hero-meta");
  [
    `${anos[0]}–${anos[anos.length - 1]}`,
    `${anos.length} edições`,
    `${dados.filter((l) => l.tipo !== "Total").length} registros`,
  ].forEach((texto) => meta.appendChild(criarElemento("span", null, texto)));
  container.appendChild(meta);
  hero.appendChild(container);
  return hero;
}

function kpis(curso, dados) {
  const semTotal = dados.filter((l) => l.tipo !== "Total");
  const totais = dados.filter((l) => l.tipo === "Total");
  const serie = (totais.length ? totais : semTotal).map((l) => l.concorrencia);
  const pico = semTotal.reduce((a, b) => (b.concorrencia > a.concorrencia ? b : a));
  const salario = curso.salariosAtuais[0];
  return [
    {
      rotulo: "Concorrência média",
      valor: num(media(serie)),
      detalhe: "candidatos por vaga (total do ano)",
    },
    {
      rotulo: "Pico de concorrência",
      valor: num(pico.concorrencia),
      detalhe: `${pico.tipo} · ${pico.ano}`,
    },
    {
      rotulo: "Oscilação (desvio padrão)",
      valor: num(desvioPadrao(serie)),
      detalhe: `${num((desvioPadrao(serie) / media(serie)) * 100)}% de variação relativa`,
    },
    {
      rotulo: "Salário médio da profissão",
      valor: salario ? fmtMoeda.format(salario.salario) : "—",
      detalhe: salario ? salario.cargo : "sem referência salarial",
    },
  ];
}

function montarSecaoKpis(curso, dados) {
  const secao = criarElemento("section", "section");
  const container = criarElemento("div", "container");
  const grade = criarElemento("div", "kpis");
  kpis(curso, dados).forEach((item) => {
    const card = criarElemento("article", "kpi");
    card.appendChild(criarElemento("p", "rotulo", item.rotulo));
    card.appendChild(criarElemento("p", "valor", item.valor));
    card.appendChild(criarElemento("p", "detalhe", item.detalhe));
    grade.appendChild(card);
  });
  container.appendChild(grade);
  secao.appendChild(container);
  return secao;
}

function montarGrafico(curso, dados, instituicao) {
  const secao = criarElemento("section", "section section--alt");
  const container = criarElemento("div", "container");
  const layout = criarElemento("div", "grafico-layout");
  const caixa = criarElemento("div", "grafico-container");
  caixa.appendChild(criarElemento("h3", null, `Candidatos por vaga — ${curso.nome}`));
  caixa.appendChild(
    criarElemento(
      "p",
      "grafico-legenda",
      `Uma linha para cada tipo de cota. Fonte: ${FONTE[instituicao]}.`,
    ),
  );
  const wrapper = criarElemento("div", "chart-wrapper");
  const canvas = criarElemento("canvas");
  canvas.id = `grafico-${curso.slug ?? "curso"}`;
  canvas.setAttribute("role", "img");
  canvas.setAttribute(
    "aria-label",
    `Gráfico de linha da concorrência de ${curso.nome} por tipo de cota`,
  );
  wrapper.appendChild(canvas);
  caixa.appendChild(wrapper);
  const { painel } = criarPainelAnalise(() => analiseCurso(curso, dados));
  layout.append(caixa, painel);
  container.appendChild(layout);
  secao.appendChild(container);

  const anos = [...new Set(dados.map((l) => l.ano))].sort((a, b) => a - b);
  const tipos = [...new Set(dados.map((l) => l.tipo))];
  const datasets = tipos.map((tipo) => {
    const cor = CORES_COTA[tipo] ?? "#22d3ee";
    return {
      label: tipo,
      data: anos.map((ano) => {
        const linha = dados.find((l) => l.ano === ano && l.tipo === tipo);
        return linha ? Number(linha.concorrencia.toFixed(2)) : null;
      }),
      borderColor: cor,
      backgroundColor: cor,
      borderDash: tipo === "Total" ? [6, 4] : [],
      tension: 0.3,
      spanGaps: true,
      borderWidth: 2.5,
      pointRadius: 3,
      pointHoverRadius: 7,
    };
  });

  requestAnimationFrame(() => {
    new Chart(canvas, {
      type: "line",
      data: { labels: anos.map(String), datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
          title: {
            display: true,
            text: `${curso.nome} — candidatos por vaga (${anos[0]}–${anos[anos.length - 1]})`,
            color: "#e8eaf0",
            font: { size: 16 },
          },
          legend: { position: "bottom" },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.dataset.label}: ${num(ctx.parsed.y)} candidatos/vaga`,
            },
          },
        },
        scales: {
          x: { title: { display: true, text: "Ano do processo seletivo" } },
          y: {
            beginAtZero: true,
            title: { display: true, text: "Candidatos por vaga" },
          },
        },
      },
    });
  });

  return secao;
}

function montarTabela(curso, dados) {
  const secao = criarElemento("section", "section");
  const container = criarElemento("div", "container");
  const cabecalho = criarElemento("div", "section-header");
  cabecalho.appendChild(criarElemento("span", "section-tag", "Dados"));
  const h2 = criarElemento("h2");
  h2.append(document.createTextNode("Tabela de "), criarElemento("em", null, "dados"));
  cabecalho.appendChild(h2);
  container.appendChild(cabecalho);

  const tipos = [...new Set(dados.map((l) => l.tipo))];
  const filtro = criarElemento("div", "filtro-container");
  const campo = criarElemento("div", "campo");
  const label = criarElemento("label", null, "Filtrar por cota");
  label.htmlFor = "filtro-cotas";
  const wrapper = criarElemento("div", "select-wrapper");
  const select = criarElemento("select");
  select.id = "filtro-cotas";
  ["todos", ...tipos].forEach((tipo) => {
    const opcao = criarElemento("option", null, tipo === "todos" ? "Todos os tipos" : tipo);
    opcao.value = tipo;
    select.appendChild(opcao);
  });
  wrapper.appendChild(select);
  campo.append(label, wrapper);
  filtro.appendChild(campo);
  container.appendChild(filtro);

  const caixa = criarElemento("div", "tabela-container");
  const tabela = criarElemento("table", "tabela-dados");
  const thead = criarElemento("thead");
  const trHead = criarElemento("tr");
  const temTurno = dados.some((l) => l.turno !== "—");
  [
    ["Ano", false],
    ["Cota", false],
    ...(temTurno ? [["Turno", false]] : []),
    ["Candidatos", true],
    ["Vagas", true],
    ["Cand./vaga", true],
    ["Nota mín.", true],
    ["Salário médio*", true],
  ].forEach(([texto, numerico]) => {
    const th = criarElemento("th", numerico ? "num" : null, texto);
    th.scope = "col";
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);

  const tbody = criarElemento("tbody");
  const maximo = Math.max(...dados.map((l) => l.concorrencia));

  dados.forEach((linha) => {
    const tr = criarElemento("tr");
    tr.dataset.cota = linha.tipo;

    tr.appendChild(criarElemento("td", null, String(linha.ano)));

    const tdCota = criarElemento("td");
    const tag = criarElemento("span", "curso-tag", linha.tipo);
    tag.dataset.cota = linha.tipo;
    tdCota.appendChild(tag);
    tr.appendChild(tdCota);

    if (temTurno) tr.appendChild(criarElemento("td", null, linha.turno));
    tr.appendChild(criarElemento("td", "num", fmtInteiro.format(linha.candidatos)));
    tr.appendChild(criarElemento("td", "num", fmtInteiro.format(linha.vagas)));

    const tdConc = criarElemento("td", "num", num(linha.concorrencia));
    const barra = criarElemento("div", "barra");
    const fill = criarElemento("div", "barra-fill");
    fill.style.width = `${(linha.concorrencia / maximo) * 100}%`;
    barra.appendChild(fill);
    tdConc.appendChild(barra);
    tr.appendChild(tdConc);

    tr.appendChild(
      criarElemento(
        "td",
        "num",
        linha.notaMinima != null ? fmtInteiro.format(linha.notaMinima) : "—",
      ),
    );
    tr.appendChild(
      criarElemento("td", "num", linha.salario != null ? fmtMoeda.format(linha.salario) : "—"),
    );
    tbody.appendChild(tr);
  });

  tabela.append(thead, tbody);
  caixa.appendChild(tabela);
  const salario = curso.salariosAtuais[0];
  caixa.appendChild(
    criarElemento(
      "p",
      "tabela-legenda",
      salario
        ? `* Salário médio mensal de ${salario.cargo}. Fonte: ${salario.referencia}.`
        : "* Salário médio não disponível para esta profissão.",
    ),
  );
  container.appendChild(caixa);
  secao.appendChild(container);

  select.addEventListener("change", () => {
    const valor = select.value;
    tbody.querySelectorAll("tr").forEach((tr) => {
      tr.style.display = valor === "todos" || tr.dataset.cota === valor ? "" : "none";
    });
  });

  return secao;
}

function montarLeitura(curso, dados) {
  const semTotal = dados.filter((l) => l.tipo !== "Total");
  const tipos = [...new Set(semTotal.map((l) => l.tipo))];
  const porTipo = tipos
    .map((tipo) => {
      const doTipo = semTotal.filter((l) => l.tipo === tipo);
      return { tipo, media: media(doTipo.map((l) => l.concorrencia)), linhas: doTipo };
    })
    .sort((a, b) => b.media - a.media);
  const maisConcorrida = porTipo[0];
  const menosConcorrida = porTipo[porTipo.length - 1];
  const comNota = semTotal.filter((l) => l.notaMinima != null);
  const r = comNota.length > 2
    ? correlacao(comNota.map((l) => l.concorrencia), comNota.map((l) => l.notaMinima))
    : null;
  const primeiro = maisConcorrida.linhas[0];
  const ultimo = maisConcorrida.linhas[maisConcorrida.linhas.length - 1];

  const itens = [
    {
      titulo: tipos.length > 1 ? "Qual cota é mais disputada?" : "Qual é o nível de disputa?",
      texto:
        tipos.length > 1
          ? `A cota <span class="q-highlight">${maisConcorrida.tipo}</span> concentra a maior ` +
            `disputa, com média de ${num(maisConcorrida.media)} candidatos por vaga; a menor ` +
            `pressão está em ${menosConcorrida.tipo} (${num(menosConcorrida.media)}).`
          : `Os dados disponíveis cobrem apenas a cota ${maisConcorrida.tipo}, com média de ` +
            `<span class="q-highlight">${num(maisConcorrida.media)}</span> candidatos por vaga ` +
            `no período.`,
    },
    {
      titulo: "Como a concorrência evoluiu?",
      texto:
        `Na cota ${maisConcorrida.tipo}, a relação passou de ${num(primeiro.concorrencia)} ` +
        `candidatos por vaga em ${primeiro.ano} para ${num(ultimo.concorrencia)} em ` +
        `${ultimo.ano} (${num(
          ((ultimo.concorrencia - primeiro.concorrencia) / primeiro.concorrencia) * 100,
        )}%).`,
    },
    {
      titulo: "Concorrência e nota mínima caminham juntas?",
      texto:
        r == null
          ? "Não há registros suficientes de nota mínima para calcular a correlação neste curso."
          : `A correlação de Pearson entre candidatos por vaga e nota mínima é de ` +
            `<span class="q-highlight">${num(r)}</span> (correlação ${forcaCorrelacao(r)}) nos ` +
            `${comNota.length} registros do curso.`,
    },
  ];

  if (curso.analise) {
    itens.push({ titulo: "Leitura dos dados oficiais", texto: curso.analise });
  }

  const secao = criarElemento("section", "section section--alt");
  const container = criarElemento("div", "container");
  const cabecalho = criarElemento("div", "section-header");
  cabecalho.appendChild(criarElemento("span", "section-tag", "Análise"));
  const h2 = criarElemento("h2");
  h2.append(document.createTextNode("O que os dados "), criarElemento("em", null, "mostram"));
  cabecalho.appendChild(h2);
  container.appendChild(cabecalho);

  const grade = criarElemento("div", "informacoes");
  itens.forEach((item, indice) => {
    const card = criarElemento("article", "question-card");
    card.appendChild(
      criarElemento("span", "q-number", `Leitura ${String(indice + 1).padStart(2, "0")}`),
    );
    card.appendChild(criarElemento("h3", "q-title", item.titulo));
    const p = criarElemento("p", "q-answer");
    p.innerHTML = item.texto;
    card.appendChild(p);
    grade.appendChild(card);
  });
  container.appendChild(grade);
  secao.appendChild(container);
  return secao;
}

export function renderCurso({ instituicao, nome }) {
  const curso = cursoDoBanco(instituicao, nome);
  const main = document.getElementById("conteudo");

  montarNavegacao();

  if (!curso || !curso.cotas.length) {
    main.appendChild(
      criarElemento(
        "p",
        "container text-muted-2",
        `Não há dados oficiais consolidados para ${nome}.`,
      ),
    );
    montarRodape();
    return;
  }

  aplicarTemaChart(Chart);
  const dados = linhasCurso(curso);

  document.title = `${curso.nome} — Concorrência em Cotas Públicas`;
  document.body.insertBefore(montarHero(curso, instituicao, dados), main);
  main.append(
    montarSecaoKpis(curso, dados),
    montarGrafico(curso, dados, instituicao),
    montarTabela(curso, dados),
    montarLeitura(curso, dados),
  );
  montarRodape();
}
