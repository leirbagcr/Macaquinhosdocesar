/**
 * Dados de concorrência dos cursos da UTFPR — Câmpus Ponta Grossa.
 * Mesma estrutura do db.js (UEPG), com o acréscimo de `turno` e de
 * `salarioMedio` por ano (levantamento do grupo).
 * Fonte: editais/relatórios de concorrência da UTFPR-PG (2023–2025).
 */

const REFERENCIA_SALARIO =
  "Estimativa do grupo a partir de médias de mercado publicadas (CAGED/MTE e Glassdoor Brasil)";

function curso(id, slug, nome, modalidade, turnos, cargo, registros) {
  return {
    id,
    slug,
    nome,
    modalidade,
    salariosAtuais: [
      {
        cargo,
        salario: registros[registros.length - 1].salarioMedio,
        referencia: REFERENCIA_SALARIO,
      },
    ],
    cotas: registros.map((r, indice) => ({
      ano: r.ano,
      turno: turnos[indice],
      salarioMedio: r.salarioMedio,
      tipoCota: [
        {
          tipo: "Universal",
          vagas: r.vagas,
          candidatos: r.candidatos,
          notaMinima: r.notaMinima,
        },
      ],
    })),
  };
}

export const dbUtfpr = {
  instituicao: "UTFPR — Câmpus Ponta Grossa",
  cursos: [
    curso(
      1,
      "curso1",
      "Ciências Biológicas",
      "Licenciatura",
      ["Tarde e noite", "Tarde e noite", "Tarde e noite"],
      "Biólogo",
      [
        { ano: 2023, candidatos: 72, vagas: 31, notaMinima: 340.15, salarioMedio: 4000 },
        { ano: 2024, candidatos: 61, vagas: 44, notaMinima: 218.94, salarioMedio: 4150 },
        { ano: 2025, candidatos: 66, vagas: 31, notaMinima: 299.24, salarioMedio: 4300 },
      ],
    ),
    curso(
      2,
      "curso2",
      "Engenharia de Produção",
      "Bacharelado",
      ["Manhã e tarde", "Tarde e noite", "Tarde e noite"],
      "Engenheiro de Produção",
      [
        { ano: 2023, candidatos: 83, vagas: 31, notaMinima: 301.96, salarioMedio: 10700 },
        { ano: 2024, candidatos: 62, vagas: 44, notaMinima: 193.63, salarioMedio: 11000 },
        { ano: 2025, candidatos: 80, vagas: 31, notaMinima: 291.18, salarioMedio: 11300 },
      ],
    ),
    curso(
      3,
      "curso3",
      "Análise e Desenvolvimento de Sistemas",
      "Tecnólogo",
      ["Noite", "Tarde e noite", "Tarde e noite"],
      "Analista de Sistemas",
      [
        { ano: 2023, candidatos: 272, vagas: 21, notaMinima: 283.33, salarioMedio: 7600 },
        { ano: 2024, candidatos: 185, vagas: 30, notaMinima: 264.22, salarioMedio: 8000 },
        { ano: 2025, candidatos: 315, vagas: 30, notaMinima: 303.92, salarioMedio: 8400 },
      ],
    ),
    curso(
      4,
      "curso4",
      "Engenharia Mecânica",
      "Bacharelado",
      ["Manhã e tarde", "Tarde e noite", "Tarde e noite"],
      "Engenheiro Mecânico",
      [
        { ano: 2023, candidatos: 113, vagas: 31, notaMinima: 231.37, salarioMedio: 10900 },
        { ano: 2024, candidatos: 111, vagas: 44, notaMinima: 207.35, salarioMedio: 11200 },
        { ano: 2025, candidatos: 171, vagas: 44, notaMinima: 264.71, salarioMedio: 11500 },
      ],
    ),
    curso(
      5,
      "curso5",
      "Automação Industrial",
      "Tecnólogo",
      ["Noite", "Tarde e noite", "Tarde e noite"],
      "Técnico/Tecnólogo em Automação Industrial",
      [
        { ano: 2023, candidatos: 84, vagas: 21, notaMinima: 189.22, salarioMedio: 6300 },
        { ano: 2024, candidatos: 79, vagas: 22, notaMinima: 129.41, salarioMedio: 6700 },
        { ano: 2025, candidatos: 106, vagas: 22, notaMinima: 252.94, salarioMedio: 7000 },
      ],
    ),
    curso(
      6,
      "curso6",
      "Ciência da Computação",
      "Bacharelado",
      ["Manhã e tarde", "Tarde e noite", "Tarde e noite"],
      "Cientista da Computação / Desenvolvedor",
      [
        { ano: 2023, candidatos: 269, vagas: 31, notaMinima: 237.25, salarioMedio: 8200 },
        { ano: 2024, candidatos: 149, vagas: 40, notaMinima: 307.84, salarioMedio: 8600 },
        { ano: 2025, candidatos: 264, vagas: 44, notaMinima: 322.06, salarioMedio: 9000 },
      ],
    ),
  ],
};
