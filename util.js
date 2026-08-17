/** Formatadores e estatísticas compartilhadas pelo site. */

export const fmtNumero = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const fmtInteiro = new Intl.NumberFormat("pt-BR");

export const fmtMoeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export const num = (v) => fmtNumero.format(v);

export const CORES_COTA = {
  Universal: "#5b9cf6",
  "Escola Pública": "#4daf8a",
  "Escola Pública - Negros": "#eab308",
  Negros: "#ef4444",
  PcD: "#8b5cf6",
  Total: "#e8eaf0",
};

export const PALETA_CURSOS = [
  "#4daf8a",
  "#5b9cf6",
  "#eab308",
  "#ef4444",
  "#8b5cf6",
  "#22d3ee",
];

export function media(valores) {
  return valores.reduce((soma, v) => soma + v, 0) / valores.length;
}

export function desvioPadrao(valores) {
  const m = media(valores);
  return Math.sqrt(media(valores.map((v) => (v - m) ** 2)));
}

export function correlacao(xs, ys) {
  const mx = media(xs);
  const my = media(ys);
  const numerador = xs.reduce((soma, x, i) => soma + (x - mx) * (ys[i] - my), 0);
  const denominador = Math.sqrt(
    xs.reduce((s, x) => s + (x - mx) ** 2, 0) * ys.reduce((s, y) => s + (y - my) ** 2, 0),
  );
  return denominador === 0 ? 0 : numerador / denominador;
}

export function forcaCorrelacao(r) {
  const abs = Math.abs(r);
  if (abs >= 0.7) return "forte";
  if (abs >= 0.4) return "moderada";
  if (abs >= 0.2) return "fraca";
  return "praticamente inexistente";
}

/** Tema padrão do Chart.js alinhado à paleta do style.css. */
export function aplicarTemaChart(Chart) {
  Chart.defaults.color = "#7a8299";
  Chart.defaults.borderColor = "rgba(255,255,255,0.07)";
  Chart.defaults.font.family =
    "'DM Sans', system-ui, sans-serif";
  Chart.defaults.plugins.tooltip.backgroundColor = "#11151d";
  Chart.defaults.plugins.tooltip.borderColor = "rgba(255,255,255,0.14)";
  Chart.defaults.plugins.tooltip.borderWidth = 1;
  Chart.defaults.plugins.tooltip.titleColor = "#e8eaf0";
  Chart.defaults.plugins.tooltip.bodyColor = "#e8eaf0";
  Chart.defaults.plugins.tooltip.padding = 12;
  Chart.defaults.plugins.legend.labels.usePointStyle = true;
  Chart.defaults.plugins.legend.labels.boxWidth = 8;
}

export function criarElemento(tag, classe, texto) {
  const el = document.createElement(tag);
  if (classe) el.className = classe;
  if (texto != null) el.textContent = texto;
  return el;
}
