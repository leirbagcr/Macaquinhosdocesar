/**
 * Catálogo unificado dos 12 cursos com histórico no site e as métricas usadas
 * pelo ranking e pelo comparador. Tudo é derivado de db.js / db_utfpr.js;
 * apenas a duração vem da matriz curricular das instituições.
 */
import { tendencia } from "./analise.js";
import { db } from "./db.js";
import { dbUtfpr } from "./db_utfpr.js";
import { correlacao, desvioPadrao, media } from "./util.js";

export const REFERENCIA_DURACAO =
  "Duração mínima prevista nas matrizes curriculares publicadas pela UEPG e pela UTFPR";

export const CATALOGO = [
  { nome: "Medicina", instituicao: "uepg", href: "curso11.html", semestres: 12 },
  { nome: "Direito (Matutino)", instituicao: "uepg", href: "curso22.html", semestres: 10 },
  { nome: "Engenharia de Software", instituicao: "uepg", href: "curso33.html", semestres: 10 },
  { nome: "Administração", instituicao: "uepg", href: "curso44.html", semestres: 8 },
  { nome: "Farmácia", instituicao: "uepg", href: "curso55.html", semestres: 10 },
  { nome: "Engenharia de Computação", instituicao: "uepg", href: "curso66.html", semestres: 10 },
  { nome: "Ciências Biológicas", instituicao: "utfpr", href: "curso1.html", semestres: 8 },
  { nome: "Engenharia de Produção", instituicao: "utfpr", href: "curso2.html", semestres: 10 },
  {
    nome: "Análise e Desenvolvimento de Sistemas",
    instituicao: "utfpr",
    href: "curso3.html",
    semestres: 6,
  },
  { nome: "Engenharia Mecânica", instituicao: "utfpr", href: "curso4.html", semestres: 10 },
  { nome: "Automação Industrial", instituicao: "utfpr", href: "curso5.html", semestres: 6 },
  { nome: "Ciência da Computação", instituicao: "utfpr", href: "curso6.html", semestres: 8 },
];

export const SIGLA = { uepg: "UEPG", utfpr: "UTFPR-PG" };

export function cursoDoBanco(instituicao, nome) {
  const base = instituicao === "uepg" ? db : dbUtfpr;
  return base.cursos.find((curso) => curso.nome === nome);
}

/** Uma linha por ano × tipo de cota, mais o total de cada ano. */
export function linhasCurso(curso) {
  const resultado = [];
  [...curso.cotas]
    .sort((a, b) => a.ano - b.ano)
    .forEach((cota) => {
      const validas = cota.tipoCota.filter((t) => t.vagas && t.candidatos);
      const salario = cota.salarioMedio ?? curso.salariosAtuais[0]?.salario ?? null;
      validas.forEach((t) =>
        resultado.push({
          ano: cota.ano,
          tipo: t.tipo,
          turno: cota.turno ?? "—",
          candidatos: t.candidatos,
          vagas: t.vagas,
          concorrencia: t.candidatos / t.vagas,
          notaMinima: t.notaMinima,
          salario,
        }),
      );
      if (validas.length > 1) {
        const candidatos = validas.reduce((s, t) => s + t.candidatos, 0);
        const vagas = validas.reduce((s, t) => s + t.vagas, 0);
        resultado.push({
          ano: cota.ano,
          tipo: "Total",
          turno: cota.turno ?? "—",
          candidatos,
          vagas,
          concorrencia: candidatos / vagas,
          notaMinima: null,
          salario,
        });
      }
    });
  return resultado;
}

/** Série anual consolidada do curso (todas as cotas somadas em cada ano). */
export function serieAnual(linhas) {
  const anos = [...new Set(linhas.map((l) => l.ano))].sort((a, b) => a - b);
  return anos.map((ano) => {
    const doAno = linhas.filter((l) => l.ano === ano && l.tipo !== "Total");
    const candidatos = doAno.reduce((s, l) => s + l.candidatos, 0);
    const vagas = doAno.reduce((s, l) => s + l.vagas, 0);
    const notas = doAno.filter((l) => l.notaMinima != null).map((l) => l.notaMinima);
    return {
      ano,
      candidatos,
      vagas,
      concorrencia: vagas ? candidatos / vagas : 0,
      notaMinima: notas.length ? media(notas) : null,
    };
  });
}

/** Métricas comparáveis de um curso do catálogo. */
export function resumoCurso(item) {
  const curso = cursoDoBanco(item.instituicao, item.nome);
  const linhas = linhasCurso(curso);
  const serie = serieAnual(linhas);
  const valores = serie.map((p) => p.concorrencia);
  const salario = curso.salariosAtuais[0] ?? null;
  const anosCurso = item.semestres / 2;
  const notas = serie.filter((p) => p.notaMinima != null);
  const m = media(valores);
  const desvio = desvioPadrao(valores);
  const primeiro = serie[0];
  const ultimo = serie[serie.length - 1];
  const inclinacao = tendencia(
    serie.map((p) => p.ano),
    valores,
  );
  return {
    ...item,
    sigla: SIGLA[item.instituicao],
    modalidade: curso.modalidade,
    turno: linhas.find((l) => l.turno !== "—")?.turno ?? null,
    linhas,
    serie,
    anos: serie.map((p) => p.ano),
    edicoes: serie.length,
    mediaConcorrencia: m,
    concorrenciaAtual: ultimo.concorrencia,
    concorrenciaInicial: primeiro.concorrencia,
    pico: serie.reduce((a, b) => (b.concorrencia > a.concorrencia ? b : a)),
    vale: serie.reduce((a, b) => (b.concorrencia < a.concorrencia ? b : a)),
    desvio,
    variacaoRelativa: m === 0 ? 0 : (desvio / m) * 100,
    variacaoPeriodo: primeiro.concorrencia
      ? ((ultimo.concorrencia - primeiro.concorrencia) / primeiro.concorrencia) * 100
      : 0,
    inclinacao,
    projecao: Math.max(0, ultimo.concorrencia + inclinacao),
    candidatosMedios: media(serie.map((p) => p.candidatos)),
    vagasMedias: media(serie.map((p) => p.vagas)),
    notaMediaUltima: ultimo.notaMinima,
    notaMedia: notas.length ? media(notas.map((p) => p.notaMinima)) : null,
    rConcorrenciaVagas:
      serie.length > 2 ? correlacao(valores, serie.map((p) => p.vagas)) : null,
    salario: salario ? salario.salario : null,
    cargo: salario ? salario.cargo : null,
    referenciaSalario: salario ? salario.referencia : null,
    semestres: item.semestres,
    anosCurso,
    salarioPorAnoDeCurso: salario ? salario.salario / anosCurso : null,
  };
}

export function resumosCatalogo() {
  return CATALOGO.map(resumoCurso);
}

/** Categorias do ranking: cada uma sabe extrair, formatar e explicar seu valor. */
export const CATEGORIAS = [
  {
    id: "concorrencia",
    rotulo: "Concorrência média",
    unidade: "candidatos por vaga",
    melhor: "maior",
    valor: (r) => r.mediaConcorrencia,
    descricao:
      "Média de candidatos por vaga somando todas as cotas de cada edição. Mede o quanto o " +
      "curso é procurado em relação ao que ele oferta.",
  },
  {
    id: "remuneracao",
    rotulo: "Remuneração",
    unidade: "salário médio mensal",
    melhor: "maior",
    formato: "moeda",
    valor: (r) => r.salario,
    descricao:
      "Salário médio mensal da profissão associada ao curso. Não depende do processo seletivo: " +
      "é o retorno esperado depois da formação.",
  },
  {
    id: "duracao",
    rotulo: "Duração",
    unidade: "anos de curso",
    melhor: "menor",
    formato: "anos",
    valor: (r) => r.anosCurso,
    descricao:
      "Duração mínima prevista na matriz curricular. Aqui o primeiro lugar é o curso mais " +
      "curto — quem entra no mercado mais rápido.",
  },
  {
    id: "retorno",
    rotulo: "Retorno por ano de curso",
    unidade: "salário ÷ anos de curso",
    melhor: "maior",
    formato: "moeda",
    valor: (r) => r.salarioPorAnoDeCurso,
    descricao:
      "Salário médio dividido pelos anos de formação. Aproxima o custo-benefício: quanto de " +
      "remuneração cada ano investido no curso devolve.",
  },
  {
    id: "nota",
    rotulo: "Nota de corte",
    unidade: "nota mínima média",
    melhor: "maior",
    valor: (r) => r.notaMedia,
    descricao:
      "Média das notas mínimas de aprovação de todas as cotas e edições. As escalas de UEPG e " +
      "UTFPR são diferentes, então compare cursos da mesma instituição.",
  },
  {
    id: "crescimento",
    rotulo: "Crescimento da procura",
    unidade: "variação da concorrência no período",
    melhor: "maior",
    formato: "percentual",
    valor: (r) => r.variacaoPeriodo,
    descricao:
      "Variação percentual da concorrência entre a primeira e a última edição disponível. " +
      "Mostra quem está ganhando ou perdendo procura.",
  },
  {
    id: "estabilidade",
    rotulo: "Estabilidade",
    unidade: "variação relativa (menor = mais estável)",
    melhor: "menor",
    formato: "percentual",
    valor: (r) => r.variacaoRelativa,
    descricao:
      "Desvio padrão dividido pela média da concorrência. Cursos estáveis são mais previsíveis " +
      "para quem vai prestar o processo seletivo.",
  },
];

/** Ordena os resumos por uma categoria, ignorando cursos sem o dado. */
export function ordenarPorCategoria(resumos, categoria) {
  return resumos
    .filter((r) => categoria.valor(r) != null && Number.isFinite(categoria.valor(r)))
    .sort((a, b) =>
      categoria.melhor === "maior"
        ? categoria.valor(b) - categoria.valor(a)
        : categoria.valor(a) - categoria.valor(b),
    );
}
