/**
 * Página de ranking: ordena os 12 cursos do catálogo pela categoria escolhida
 * (concorrência, remuneração, duração, retorno, nota, crescimento, estabilidade)
 * e mostra a análise objetiva do ranking ao lado do gráfico.
 */
import { analiseRanking, criarPainelAnalise } from "./analise.js";
import {
  CATEGORIAS,
  REFERENCIA_DURACAO,
  ordenarPorCategoria,
  resumosCatalogo,
} from "./catalogo.js";
import { montarNavegacao, montarRodape } from "./nav.js";
import { PALETA_CURSOS, aplicarTemaChart, criarElemento, fmtMoeda, num } from "./util.js";

const RESUMOS = resumosCatalogo();
const estado = { categoria: CATEGORIAS[0], instituicao: "todas" };

/** Redesenha gráfico, tabela e análise; definida em `main`. */
let atualizar = () => {};

function formatarValor(categoria, valor) {
  if (valor == null || !Number.isFinite(valor)) return "—";
  if (categoria.formato === "moeda") return fmtMoeda.format(valor);
  if (categoria.formato === "anos") return `${num(valor)} anos`;
  if (categoria.formato === "percentual") return `${num(valor)}%`;
  return num(valor);
}

function filtrados() {
  return estado.instituicao === "todas"
    ? RESUMOS
    : RESUMOS.filter((r) => r.instituicao === estado.instituicao);
}

function ordenados() {
  return ordenarPorCategoria(filtrados(), estado.categoria);
}

function montarChips() {
  const grupo = document.getElementById("grupo-categorias");
  CATEGORIAS.forEach((categoria) => {
    const chip = criarElemento("button", "chip", categoria.rotulo);
    chip.type = "button";
    chip.dataset.id = categoria.id;
    if (categoria.id === estado.categoria.id) chip.classList.add("ativo");
    chip.addEventListener("click", () => {
      estado.categoria = categoria;
      grupo.querySelectorAll(".chip").forEach((outro) => {
        outro.classList.toggle("ativo", outro.dataset.id === categoria.id);
      });
      atualizar();
    });
    grupo.appendChild(chip);
  });
}

function montarGrafico() {
  const ctx = document.getElementById("grafico-ranking");
  return new Chart(ctx, {
    type: "bar",
    data: { labels: [], datasets: [] },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (item) =>
              `${formatarValor(estado.categoria, item.parsed.x)} · ${estado.categoria.unidade}`,
          },
        },
      },
      scales: {
        x: {
          title: { display: true, text: estado.categoria.unidade },
          grid: { color: "rgba(255,255,255,0.07)" },
        },
        y: { grid: { display: false } },
      },
    },
  });
}

function atualizarGrafico(grafico, lista) {
  grafico.data.labels = lista.map((r) => `${r.nome} (${r.sigla})`);
  grafico.data.datasets = [
    {
      label: estado.categoria.rotulo,
      data: lista.map((r) => estado.categoria.valor(r)),
      backgroundColor: lista.map(
        (_, i) => `${PALETA_CURSOS[i % PALETA_CURSOS.length]}cc`,
      ),
      borderColor: lista.map((_, i) => PALETA_CURSOS[i % PALETA_CURSOS.length]),
      borderWidth: 1,
      borderRadius: 6,
    },
  ];
  grafico.options.scales.x.title.text = estado.categoria.unidade;
  grafico.update();
}

function atualizarTabela(lista) {
  const corpo = document.getElementById("tabela-ranking");
  corpo.textContent = "";
  lista.forEach((r, indice) => {
    const tr = document.createElement("tr");
    tr.appendChild(criarElemento("td", "posicao", `${indice + 1}º`));
    const tdCurso = document.createElement("td");
    const link = document.createElement("a");
    link.href = r.href;
    link.textContent = r.nome;
    tdCurso.appendChild(link);
    tr.appendChild(tdCurso);
    tr.appendChild(criarElemento("td", null, r.sigla));
    tr.appendChild(
      criarElemento("td", "num destaque", formatarValor(estado.categoria, estado.categoria.valor(r))),
    );
    tr.appendChild(criarElemento("td", "num", num(r.mediaConcorrencia)));
    tr.appendChild(criarElemento("td", "num", r.salario ? fmtMoeda.format(r.salario) : "—"));
    tr.appendChild(criarElemento("td", "num", `${num(r.anosCurso)} anos`));
    tr.appendChild(
      criarElemento(
        "td",
        "num",
        r.salarioPorAnoDeCurso ? fmtMoeda.format(r.salarioPorAnoDeCurso) : "—",
      ),
    );
    corpo.appendChild(tr);
  });
  document.getElementById("th-categoria").textContent = estado.categoria.rotulo;
}

function main() {
  montarNavegacao();
  aplicarTemaChart(Chart);
  montarChips();

  const anos = [...new Set(RESUMOS.flatMap((r) => r.anos))].sort((a, b) => a - b);
  document.getElementById("hero-periodo").textContent = `${anos[0]}–${anos[anos.length - 1]}`;

  const layout = document.getElementById("grafico-layout");
  const { painel, atualizar: atualizarPainel } = criarPainelAnalise(
    () => analiseRanking(ordenados(), estado.categoria, (v) => formatarValor(estado.categoria, v)),
    { titulo: "Análise do ranking" },
  );
  layout.appendChild(painel);

  const grafico = montarGrafico();

  atualizar = () => {
    const lista = ordenados();
    document.getElementById("categoria-descricao").textContent = estado.categoria.descricao;
    document.getElementById("ranking-titulo").textContent =
      `${estado.categoria.rotulo} — ${lista.length} cursos`;
    document.getElementById("ranking-legenda").textContent =
      `Ordenado por ${estado.categoria.unidade}. ` +
      (estado.categoria.melhor === "maior"
        ? "Quanto maior o valor, melhor a posição."
        : "Quanto menor o valor, melhor a posição.");
    atualizarGrafico(grafico, lista);
    atualizarTabela(lista);
    atualizarPainel();
  };

  document.getElementById("select-instituicao").addEventListener("change", (evento) => {
    estado.instituicao = evento.target.value;
    atualizar();
  });

  document.getElementById("tabela-legenda").textContent =
    "*Salário médio da profissão: Portal Salário (CAGED/MTE) para os cursos da UEPG e estimativa " +
    `do grupo a partir de médias de mercado para os da UTFPR-PG. Duração: ${REFERENCIA_DURACAO}.`;

  atualizar();
  montarRodape();
}

main();
