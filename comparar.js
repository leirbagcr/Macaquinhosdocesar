/**
 * Página de comparação: dois cursos do catálogo lado a lado, com a série anual
 * de candidatos por vaga no mesmo gráfico, tabela de confronto e análise
 * objetiva do que aconteceu e do que tende a acontecer.
 */
import { analiseComparacao, criarPainelAnalise } from "./analise.js";
import { REFERENCIA_DURACAO, resumosCatalogo } from "./catalogo.js";
import { montarNavegacao, montarRodape } from "./nav.js";
import { PALETA_CURSOS, aplicarTemaChart, criarElemento, fmtInteiro, fmtMoeda, num } from "./util.js";

const RESUMOS = resumosCatalogo();
const COR_A = PALETA_CURSOS[0];
const COR_B = PALETA_CURSOS[1];

const pct = (v) => `${num(v)}%`;
const moeda = (v) => (v == null ? "—" : fmtMoeda.format(v));

/** Indicadores do confronto: `melhor` diz qual lado é vantagem. */
const INDICADORES = [
  {
    rotulo: "Concorrência média (cand./vaga)",
    valor: (r) => num(r.mediaConcorrencia),
    melhor: (a, b) => (a.mediaConcorrencia > b.mediaConcorrencia ? "a" : "b"),
    nota: "quem tem o maior valor é mais disputado",
  },
  {
    rotulo: "Concorrência na última edição",
    valor: (r) => `${num(r.concorrenciaAtual)} (${r.anos[r.anos.length - 1]})`,
    melhor: (a, b) => (a.concorrenciaAtual > b.concorrenciaAtual ? "a" : "b"),
  },
  {
    rotulo: "Variação no período",
    valor: (r) => pct(r.variacaoPeriodo),
    melhor: (a, b) => (a.variacaoPeriodo > b.variacaoPeriodo ? "a" : "b"),
  },
  {
    rotulo: "Pico de concorrência",
    valor: (r) => `${num(r.pico.concorrencia)} (${r.pico.ano})`,
    melhor: (a, b) => (a.pico.concorrencia > b.pico.concorrencia ? "a" : "b"),
  },
  {
    rotulo: "Candidatos por edição",
    valor: (r) => fmtInteiro.format(Math.round(r.candidatosMedios)),
    melhor: (a, b) => (a.candidatosMedios > b.candidatosMedios ? "a" : "b"),
  },
  {
    rotulo: "Vagas por edição",
    valor: (r) => num(r.vagasMedias),
    melhor: (a, b) => (a.vagasMedias > b.vagasMedias ? "a" : "b"),
    nota: "mais vagas = maior chance de aprovação",
  },
  {
    rotulo: "Nota mínima média",
    valor: (r) => (r.notaMedia == null ? "—" : num(r.notaMedia)),
    melhor: (a, b) => ((a.notaMedia ?? 0) > (b.notaMedia ?? 0) ? "a" : "b"),
    nota: "escalas de UEPG e UTFPR não são equivalentes",
  },
  {
    rotulo: "Duração do curso",
    valor: (r) => `${num(r.anosCurso)} anos`,
    melhor: (a, b) => (a.anosCurso < b.anosCurso ? "a" : "b"),
    nota: "menor duração = entrada mais rápida no mercado",
  },
  {
    rotulo: "Salário médio*",
    valor: (r) => moeda(r.salario),
    melhor: (a, b) => ((a.salario ?? 0) > (b.salario ?? 0) ? "a" : "b"),
  },
  {
    rotulo: "Retorno por ano de curso*",
    valor: (r) => moeda(r.salarioPorAnoDeCurso),
    melhor: (a, b) => ((a.salarioPorAnoDeCurso ?? 0) > (b.salarioPorAnoDeCurso ?? 0) ? "a" : "b"),
  },
  {
    rotulo: "Tendência (cand./vaga por ano)",
    valor: (r) => num(r.inclinacao),
    melhor: (a, b) => (a.inclinacao > b.inclinacao ? "a" : "b"),
  },
  {
    rotulo: "Projeção do próximo processo",
    valor: (r) => num(r.projecao),
    melhor: (a, b) => (a.projecao > b.projecao ? "a" : "b"),
  },
  {
    rotulo: "Estabilidade (variação relativa)",
    valor: (r) => pct(r.variacaoRelativa),
    melhor: (a, b) => (a.variacaoRelativa < b.variacaoRelativa ? "a" : "b"),
    nota: "menor valor = série mais previsível",
  },
  {
    rotulo: "Edições disponíveis",
    valor: (r) => `${r.edicoes} (${r.anos[0]}–${r.anos[r.anos.length - 1]})`,
    melhor: (a, b) => (a.edicoes > b.edicoes ? "a" : "b"),
  },
];

let atualizar = () => {};

function preencherSelects() {
  const selA = document.getElementById("select-a");
  const selB = document.getElementById("select-b");
  RESUMOS.forEach((r, indice) => {
    [selA, selB].forEach((select) => {
      const opcao = document.createElement("option");
      opcao.value = String(indice);
      opcao.textContent = `${r.nome} — ${r.sigla}`;
      select.appendChild(opcao);
    });
  });
  selA.value = "0";
  selB.value = String(RESUMOS.findIndex((r) => r.instituicao === "utfpr"));
  return { selA, selB };
}

function montarGrafico() {
  return new Chart(document.getElementById("grafico-comparacao"), {
    type: "line",
    data: { labels: [], datasets: [] },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { position: "bottom" },
        tooltip: {
          callbacks: {
            label: (item) =>
              `${item.dataset.label}: ${item.parsed.y == null ? "sem dado" : num(item.parsed.y)} cand./vaga`,
          },
        },
      },
      scales: {
        x: { title: { display: true, text: "Ano do processo seletivo" } },
        y: {
          title: { display: true, text: "Candidatos por vaga" },
          beginAtZero: true,
          grid: { color: "rgba(255,255,255,0.07)" },
        },
      },
    },
  });
}

function serieNoEixo(resumo, anos) {
  return anos.map((ano) => {
    const ponto = resumo.serie.find((p) => p.ano === ano);
    return ponto ? ponto.concorrencia : null;
  });
}

function atualizarGrafico(grafico, a, b) {
  const anos = [...new Set([...a.anos, ...b.anos])].sort((x, y) => x - y);
  grafico.data.labels = anos;
  grafico.data.datasets = [
    { resumo: a, cor: COR_A },
    { resumo: b, cor: COR_B },
  ].map(({ resumo, cor }) => ({
    label: `${resumo.nome} (${resumo.sigla})`,
    data: serieNoEixo(resumo, anos),
    borderColor: cor,
    backgroundColor: `${cor}33`,
    pointBackgroundColor: cor,
    borderWidth: 2.5,
    tension: 0.3,
    spanGaps: true,
  }));
  grafico.update();
}

function atualizarTabela(a, b) {
  const corpo = document.getElementById("tabela-confronto");
  corpo.textContent = "";
  INDICADORES.forEach((indicador) => {
    const vencedor = indicador.melhor(a, b);
    const tr = document.createElement("tr");
    const tdRotulo = criarElemento("td", null, indicador.rotulo);
    if (indicador.nota) {
      tdRotulo.appendChild(criarElemento("span", "indicador-nota", indicador.nota));
    }
    tr.appendChild(tdRotulo);
    tr.appendChild(
      criarElemento("td", `num${vencedor === "a" ? " destaque" : ""}`, indicador.valor(a)),
    );
    tr.appendChild(
      criarElemento("td", `num${vencedor === "b" ? " destaque" : ""}`, indicador.valor(b)),
    );
    corpo.appendChild(tr);
  });
  document.getElementById("th-a").textContent = `${a.nome} (${a.sigla})`;
  document.getElementById("th-b").textContent = `${b.nome} (${b.sigla})`;
  document.getElementById("confronto-legenda").textContent =
    `*Salário médio: ${a.referenciaSalario}` +
    (b.referenciaSalario !== a.referenciaSalario ? ` · ${b.referenciaSalario}` : "") +
    `. Duração: ${REFERENCIA_DURACAO}.`;
}

function main() {
  montarNavegacao();
  aplicarTemaChart(Chart);
  const { selA, selB } = preencherSelects();

  const escolhidos = () => [RESUMOS[Number(selA.value)], RESUMOS[Number(selB.value)]];

  const layout = document.getElementById("grafico-layout");
  const { painel, atualizar: atualizarPainel } = criarPainelAnalise(
    () => {
      const [a, b] = escolhidos();
      return a === b
        ? [
            {
              titulo: "Escolha dois cursos diferentes",
              texto: "Selecione cursos distintos em A e B para ver a análise da comparação.",
            },
          ]
        : analiseComparacao(a, b, moeda);
    },
    { titulo: "Análise da comparação" },
  );
  layout.appendChild(painel);

  const grafico = montarGrafico();

  atualizar = () => {
    const [a, b] = escolhidos();
    document.getElementById("comparar-titulo").textContent = `${a.nome} vs ${b.nome}`;
    document.getElementById("comparar-legenda").textContent =
      `Candidatos por vaga (todas as cotas somadas em cada edição). ${a.sigla}: ` +
      `${a.anos[0]}–${a.anos[a.anos.length - 1]}. ${b.sigla}: ${b.anos[0]}–` +
      `${b.anos[b.anos.length - 1]}.`;
    atualizarGrafico(grafico, a, b);
    atualizarTabela(a, b);
    atualizarPainel();
  };

  [selA, selB].forEach((select) => select.addEventListener("change", () => atualizar()));

  atualizar();
  montarRodape();
}

main();
