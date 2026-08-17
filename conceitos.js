/**
 * Conceitos do site: o que é cada tipo de cota, o que cada indicador significa
 * e o que cada página faz. Fonte única usada pela página Sobre (sobre.js) e
 * pelo assistente (assistente.js).
 */
import { cursoDoBanco, linhasCurso } from "./catalogo.js";
import { fmtInteiro, num } from "./util.js";

export const COTAS = [
  {
    tipo: "Universal",
    apelido: "ampla concorrência",
    resumo:
      "Vaga sem reserva: disputada por qualquer candidato, tenha ele vindo de escola pública ou " +
      "particular. É a lista geral do processo seletivo.",
    detalhe:
      "Quem se inscreve em uma cota reservada também concorre à Universal quando a nota é " +
      "suficiente, por isso a ampla concorrência costuma ter a nota mínima mais alta do curso.",
    exemplo:
      "Se um curso oferta 40 vagas e reserva 20 para escola pública, as outras 20 são Universal.",
  },
  {
    tipo: "Escola Pública",
    apelido: "cota social",
    resumo:
      "Vaga reservada a quem cursou o ensino médio integralmente em escola pública. É uma cota " +
      "social: olha a origem escolar do candidato, não a renda nem a cor.",
    detalhe:
      "A concorrência aqui quase sempre é menor que na Universal porque o número de candidatos " +
      "aptos é menor — o candidato precisa comprovar a trajetória em rede pública.",
    exemplo:
      "Em um curso com 12 vagas de Escola Pública e 131 inscritos, a concorrência é " +
      "10,92 candidatos por vaga.",
  },
  {
    tipo: "Escola Pública - Negros",
    apelido: "cota social + racial",
    resumo:
      "Subgrupo da cota de escola pública destinado a candidatos negros (pretos e pardos). Exige " +
      "as duas condições ao mesmo tempo: ensino médio público e autodeclaração de negro.",
    detalhe:
      "É uma reserva dentro da reserva. Como o recorte é mais estreito, o número de inscritos é " +
      "pequeno e as notas mínimas são normalmente as mais baixas do curso — o que não significa " +
      "curso fácil, significa concorrência menor naquele grupo específico.",
    exemplo:
      "3 vagas com 10 inscritos dão 3,33 candidatos por vaga, enquanto a Universal do mesmo ano " +
      "passava de 14 candidatos por vaga.",
  },
  {
    tipo: "Negros",
    apelido: "cota racial",
    resumo:
      "Vaga reservada a candidatos negros (pretos e pardos) por autodeclaração, independentemente " +
      "de ter estudado em escola pública ou particular.",
    detalhe:
      "Nas bases do site essa modalidade aparece a partir de 2017 na UEPG, quando o recorte racial " +
      "passou a ser publicado separadamente do recorte de escola pública.",
    exemplo:
      "3 vagas com 8 inscritos dão 2,67 candidatos por vaga naquela edição do curso.",
  },
  {
    tipo: "PcD",
    apelido: "pessoa com deficiência",
    resumo:
      "Vaga reservada a pessoas com deficiência, comprovada por laudo médico e avaliação da " +
      "instituição.",
    detalhe:
      "É a modalidade com menos vagas e menos inscritos, então a concorrência oscila muito de um " +
      "ano para o outro: uma única inscrição a mais muda bastante a razão candidatos por vaga.",
    exemplo:
      "1 vaga com 4 inscritos dá 4 candidatos por vaga; no ano seguinte, 1 vaga com 1 inscrito dá 1.",
  },
];

export const COTA_POR_TIPO = new Map(COTAS.map((c) => [c.tipo, c]));

export const MARCO_LEGAL = [
  {
    titulo: "UTFPR — instituição federal",
    texto:
      "Segue a Lei nº 12.711/2012 (Lei de Cotas), que reserva metade das vagas de cada curso a " +
      "estudantes de escola pública, com subdivisão por renda, por candidatos pretos, pardos e " +
      "indígenas e — desde a Lei nº 13.409/2016 — por pessoas com deficiência. A lei foi revista " +
      "pela Lei nº 14.723/2023.",
  },
  {
    titulo: "UEPG — instituição estadual",
    texto:
      "Como universidade estadual do Paraná, define sua política de reserva de vagas em resolução " +
      "própria e a publica em cada edital do Vestibular de Verão. Os grupos usados no site são os " +
      "que aparecem nos informativos oficiais de cada edição.",
  },
  {
    titulo: "Por que as cotas existem",
    texto:
      "São ações afirmativas: corrigem uma desigualdade de partida entre quem chega ao vestibular " +
      "depois do ensino médio público e quem chega depois de uma preparação privada. A vaga não é " +
      "dada — o candidato ainda precisa da nota mínima da sua modalidade.",
  },
];

export const INDICADORES = [
  {
    termo: "Candidatos por vaga (concorrência)",
    definicao:
      "Inscritos divididos pelas vagas ofertadas naquele curso, ano e cota. É o indicador " +
      "principal do site: 10 candidatos por vaga significa que 1 em cada 10 inscritos entra.",
  },
  {
    termo: "Nota mínima",
    definicao:
      "Nota do último candidato aprovado naquela cota (a nota de corte). Escalas de UEPG e UTFPR " +
      "são diferentes, então só compare notas dentro da mesma instituição.",
  },
  {
    termo: "Concorrência média",
    definicao:
      "Média dos candidatos por vaga de todas as edições disponíveis, somando as cotas de cada ano.",
  },
  {
    termo: "Variação do período",
    definicao:
      "Diferença percentual entre a primeira e a última edição da série. Positiva = a procura " +
      "cresceu; negativa = caiu.",
  },
  {
    termo: "Tendência e projeção",
    definicao:
      "Inclinação da reta de mínimos quadrados ajustada à série (quanto a concorrência muda por " +
      "ano) e o valor esperado no próximo processo se essa reta continuar valendo.",
  },
  {
    termo: "Estabilidade",
    definicao:
      "Desvio padrão dividido pela média (coeficiente de variação). Quanto menor, mais previsível " +
      "é a concorrência do curso.",
  },
  {
    termo: "Retorno por ano de curso",
    definicao:
      "Salário médio da profissão dividido pelos anos de formação — uma aproximação do " +
      "custo-benefício do curso.",
  },
];

export const PAGINAS = [
  {
    href: "index.html",
    nome: "Início",
    texto:
      "Painel principal: indicadores gerais, gráfico de linha dos 6 cursos da UEPG com histórico " +
      "completo, tabela filtrável por ano e curso e as questões de análise. Tudo acompanha o tipo " +
      "de cota escolhido.",
  },
  {
    href: "ranking.html",
    nome: "Ranking",
    texto:
      "Os 12 cursos ordenados por 7 categorias: concorrência, remuneração, duração, retorno por " +
      "ano de curso, nota de corte, crescimento da procura e estabilidade.",
  },
  {
    href: "comparar.html",
    nome: "Comparar cursos",
    texto:
      "Confronto de dois cursos em 14 indicadores, com as duas séries anuais no mesmo gráfico e a " +
      "leitura de quem é mais difícil de entrar e por quê.",
  },
  {
    href: "curso11.html",
    nome: "Páginas de curso",
    texto:
      "12 páginas (6 da UEPG e 6 da UTFPR-PG) com o gráfico por tipo de cota, a tabela completa de " +
      "vagas, inscritos e notas mínimas e a análise da série.",
  },
  {
    href: "sobre.html",
    nome: "Sobre",
    texto:
      "Esta página: o que o site faz, o que significa cada tipo de cota, exemplos com dados reais, " +
      "glossário dos indicadores e limitações dos dados.",
  },
];

export const LIMITACOES = [
  "As notas mínimas de UEPG e UTFPR estão em escalas diferentes e não são equivalentes.",
  "Os cursos da UTFPR-PG têm apenas 3 edições (2023–2025), o que enfraquece tendência e projeção.",
  "A base da UTFPR-PG cobre somente a cota Universal (ampla concorrência).",
  "Os salários da UTFPR são estimativa do grupo a partir de médias de mercado, não fonte oficial.",
  "Concorrência alta indica procura, não qualidade do curso; e cota com concorrência baixa não " +
    "significa curso fácil, apenas menos inscritos naquele grupo.",
];

/** Exemplo real de um curso/ano: uma linha por cota, para ilustrar a leitura. */
export function exemploCotas(nomeCurso = "Medicina", instituicao = "uepg") {
  const curso = cursoDoBanco(instituicao, nomeCurso);
  if (!curso) return null;
  const linhas = linhasCurso(curso).filter((l) => l.tipo !== "Total");
  const ano = Math.max(...linhas.map((l) => l.ano));
  const doAno = linhas.filter((l) => l.ano === ano);
  return {
    curso: nomeCurso,
    ano,
    linhas: doAno,
    maisConcorrida: doAno.reduce((a, b) => (b.concorrencia > a.concorrencia ? b : a)),
    menosConcorrida: doAno.reduce((a, b) => (b.concorrencia < a.concorrencia ? b : a)),
  };
}

/** Frase pronta explicando um exemplo de concorrência. */
export function frasesExemplo(exemplo) {
  const { curso, ano, maisConcorrida, menosConcorrida } = exemplo;
  return [
    `Em ${ano}, ${curso} teve ${fmtInteiro.format(maisConcorrida.candidatos)} inscritos para ` +
      `${fmtInteiro.format(maisConcorrida.vagas)} vagas na cota ${maisConcorrida.tipo}: ` +
      `${num(maisConcorrida.concorrencia)} candidatos por vaga, a disputa mais apertada do curso naquele ano.`,
    `Na mesma edição, a cota ${menosConcorrida.tipo} teve ` +
      `${fmtInteiro.format(menosConcorrida.candidatos)} inscritos para ` +
      `${fmtInteiro.format(menosConcorrida.vagas)} vagas — ${num(menosConcorrida.concorrencia)} candidatos por ` +
      `vaga. O curso é o mesmo; o que muda é o grupo que disputa aquelas vagas.`,
  ];
}
