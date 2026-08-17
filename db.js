export const db = {
  cursos: [
    {
      id: 1,
      nome: "Administração",
      modalidade: "Bacharelado",
      salariosAtuais: [
        {
          cargo: "Administrador (CBO 2521-05)",
          salario: 5081.07,
          referencia: "Portal Salário (salario.com.br) / CAGED-MTE, consulta em agosto de 2026"
        }
      ],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 219,
              notaMinima: 2976
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 189,
              notaMinima: 2559
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 10,
              notaMinima: 1902
            }
          ]
        },
        {
          ano: 2017,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 173,
              notaMinima: 3143
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 170,
              notaMinima: 2895
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: null,
              candidatos: null,
              notaMinima: 2301
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 8,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 188,
              notaMinima: 3351
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 131,
              notaMinima: 2906
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 4,
              notaMinima: 2287
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 176,
              notaMinima: 3139
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 155,
              notaMinima: 2735
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 5,
              notaMinima: 2658
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 30,
              candidatos: 139,
              notaMinima: 2985
            },
            {
              tipo: "Escola Pública",
              vagas: 24,
              candidatos: 121,
              notaMinima: 2699
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 7,
              notaMinima: 2129
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 194,
              notaMinima: 3658
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 125,
              notaMinima: 3078
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 8,
              notaMinima: 2449
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 130,
              notaMinima: 3302
            },
            {
              tipo: "Escola Pública",
              vagas: 24,
              candidatos: 152,
              notaMinima: 2716
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 8,
              notaMinima: 1376
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 6,
              notaMinima: 1381
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 2,
              notaMinima: 1929
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 86,
              notaMinima: 3313
            },
            {
              tipo: "Escola Pública",
              vagas: 24,
              candidatos: 130,
              notaMinima: 2734
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 7,
              notaMinima: 2117
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 6,
              notaMinima: 2334
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 3,
              notaMinima: 2643
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 101,
              notaMinima: 3522
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 96,
              notaMinima: 3277
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 12,
              notaMinima: 2065
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 3,
              notaMinima: 2262
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 2,
              notaMinima: 1833
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 91,
              notaMinima: 3419
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 99,
              notaMinima: 3171
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 14,
              notaMinima: 2575
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 5,
              notaMinima: 2171
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 3,
              notaMinima: 897
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (10 edições). Nota mínima da ampla concorrência em 2016: 2976 pontos; em 2025: 3419 pontos (alta de 443 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (12.38 candidatos por vaga)."
    },
    {
      id: 2,
      nome: "Administração (Comércio Exterior)",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 77,
              notaMinima: 3198
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 46,
              notaMinima: 2148
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 53,
              notaMinima: 3663
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 26,
              notaMinima: 2621
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 5,
              notaMinima: 2912
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 58,
              notaMinima: 3413
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 40,
              notaMinima: 2823
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 59,
              notaMinima: 3041
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 25,
              notaMinima: 2030
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 4,
              notaMinima: 2586
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 64,
              notaMinima: 4072
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 24,
              notaMinima: 3206
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2856
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 56,
              notaMinima: 3480
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 32,
              notaMinima: 2448
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: 1326
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2556
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 1,
              notaMinima: 1684
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 42,
              notaMinima: 3585
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 37,
              notaMinima: 2572
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 2,
              notaMinima: 2499
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 3479
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 45,
              notaMinima: 3386
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 30,
              notaMinima: 2625
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 1,
              notaMinima: 2859
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: 1912
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 41,
              notaMinima: 3565
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 34,
              notaMinima: 2505
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 1,
              notaMinima: 2510
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 3198 pontos; em 2025: 3565 pontos (alta de 367 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (6.80 candidatos por vaga)."
    },
    {
      id: 3,
      nome: "Agronomia",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 223,
              notaMinima: 3567
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 207,
              notaMinima: 2763
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 11,
              notaMinima: 2338
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 10,
              candidatos: 176,
              notaMinima: 3728
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 125,
              notaMinima: 2776
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 4,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 174,
              notaMinima: 3647
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 94,
              notaMinima: 2674
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 8,
              notaMinima: 2242
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 22,
              candidatos: 210,
              notaMinima: 3247
            },
            {
              tipo: "Escola Pública",
              vagas: 18,
              candidatos: 87,
              notaMinima: 2360
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 4,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 206,
              notaMinima: 3689
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 97,
              notaMinima: 2945
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 4,
              notaMinima: 2286
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 18,
              candidatos: 174,
              notaMinima: 3440
            },
            {
              tipo: "Escola Pública",
              vagas: 18,
              candidatos: 135,
              notaMinima: 2634
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 11,
              notaMinima: 1883
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: 2306
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 3,
              notaMinima: 2558
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 18,
              candidatos: 153,
              notaMinima: 3877
            },
            {
              tipo: "Escola Pública",
              vagas: 18,
              candidatos: 100,
              notaMinima: 2788
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 7,
              notaMinima: 2207
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 4,
              notaMinima: 1894
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 3,
              notaMinima: 1987
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 20,
              candidatos: 129,
              notaMinima: 3719
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 109,
              notaMinima: 3085
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 4,
              notaMinima: 2135
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 4,
              notaMinima: 2352
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 2,
              notaMinima: 1798
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 20,
              candidatos: 132,
              notaMinima: 3796
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 90,
              notaMinima: 3195
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 6,
              notaMinima: 2183
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 12,
              notaMinima: 3032
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 3,
              notaMinima: 2249
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 3567 pontos; em 2025: 3796 pontos (alta de 229 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (12.86 candidatos por vaga)."
    },
    {
      id: 4,
      nome: "Artes Visuais - licenciatura",
      modalidade: "Licenciatura",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 49,
              notaMinima: 2596
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 41,
              notaMinima: 2354
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 41,
              notaMinima: 3081
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 30,
              notaMinima: 2840
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 36,
              notaMinima: 3329
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 27,
              notaMinima: 2540
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 4,
              notaMinima: 2201
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 32,
              notaMinima: 2773
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 15,
              notaMinima: 2079
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 25,
              notaMinima: 3114
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 22,
              notaMinima: 2633
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 5,
              notaMinima: 1981
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 3,
              notaMinima: 3942
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 59,
              notaMinima: 3539
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 80,
              notaMinima: 2753
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 8,
              notaMinima: 3163
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 3,
              notaMinima: 2744
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 56,
              notaMinima: 3945
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 63,
              notaMinima: 3566
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: 2462
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 4,
              notaMinima: 3229
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 6,
              notaMinima: 2372
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 32,
              notaMinima: 3642
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 52,
              notaMinima: 3130
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 4,
              notaMinima: 2648
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 3,
              notaMinima: 3512
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 10,
              notaMinima: 2747
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (8 edições). Nota mínima da ampla concorrência em 2016: 2596 pontos; em 2025: 3642 pontos (alta de 1046 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (17.33 candidatos por vaga)."
    },
    {
      id: 5,
      nome: "Ciências Biológicas - bacharelado",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 4,
              candidatos: 68,
              notaMinima: 3663
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 40,
              notaMinima: 2393
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 4,
              candidatos: 46,
              notaMinima: 3409
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 32,
              notaMinima: 2886
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 3,
              notaMinima: 2608
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 4,
              candidatos: 53,
              notaMinima: 3511
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 31,
              notaMinima: 2737
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 3,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 49,
              notaMinima: 3073
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 30,
              notaMinima: 2146
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 56,
              notaMinima: 3650
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 17,
              notaMinima: 2744
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: 2473
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 53,
              notaMinima: 3525
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 29,
              notaMinima: 2410
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: 2133
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: 2595
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 45,
              notaMinima: 3842
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 34,
              notaMinima: 2765
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: 2298
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 37,
              notaMinima: 3547
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 31,
              notaMinima: 2788
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 2,
              notaMinima: 2305
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 3,
              notaMinima: 1635
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 47,
              notaMinima: 3773
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 37,
              notaMinima: 3136
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 3,
              notaMinima: 2993
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: 2435
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 3,
              notaMinima: 2798
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 3663 pontos; em 2025: 3773 pontos (alta de 110 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (9.25 candidatos por vaga)."
    },
    {
      id: 6,
      nome: "Ciências Biológicas - licenciatura (Matutino)",
      modalidade: "Licenciatura",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 4,
              candidatos: 23,
              notaMinima: 2898
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 21,
              notaMinima: 2162
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 4,
              candidatos: 28,
              notaMinima: 3329
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 10,
              notaMinima: 2109
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 4,
              candidatos: 31,
              notaMinima: 3288
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 13,
              notaMinima: 2718
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 25,
              notaMinima: 2508
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 12,
              notaMinima: 1859
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 11,
              notaMinima: 2119
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 3,
              notaMinima: 2519
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 11,
              notaMinima: 1520
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 3,
              notaMinima: 2182
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 44,
              notaMinima: 3552
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 52,
              notaMinima: 2560
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: 2041
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 2,
              notaMinima: 3663
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 55,
              notaMinima: 4004
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 24,
              notaMinima: 2873
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 2,
              notaMinima: 3068
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 31,
              notaMinima: 3837
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 34,
              notaMinima: 3187
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: 1811
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 2898 pontos; em 2025: 3837 pontos (alta de 939 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (11.33 candidatos por vaga)."
    },
    {
      id: 7,
      nome: "Ciências Biológicas - licenciatura (Noturno)",
      modalidade: "Licenciatura",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 4,
              candidatos: 51,
              notaMinima: 3084
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 51,
              notaMinima: 2606
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 5,
              notaMinima: 2833
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 4,
              candidatos: 28,
              notaMinima: 2770
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 36,
              notaMinima: 2437
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: 2337
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 4,
              candidatos: 42,
              notaMinima: 3215
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 33,
              notaMinima: 2711
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 3,
              notaMinima: 2219
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 29,
              notaMinima: 2405
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 26,
              notaMinima: 2250
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 21,
              notaMinima: 3061
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 19,
              notaMinima: 2891
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 3,
              notaMinima: 2091
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 9,
              notaMinima: 2650
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 33,
              notaMinima: 2344
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 1,
              notaMinima: 1964
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 79,
              notaMinima: 3137
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 124,
              notaMinima: 3009
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 11,
              notaMinima: 1802
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 7,
              notaMinima: 2226
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 63,
              notaMinima: 3743
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 79,
              notaMinima: 2864
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 5,
              notaMinima: 2353
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 1,
              notaMinima: 3296
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 38,
              notaMinima: 3673
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 45,
              notaMinima: 3129
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 4,
              notaMinima: 2432
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 2,
              notaMinima: 3628
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 3084 pontos; em 2025: 3673 pontos (alta de 589 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (15.00 candidatos por vaga)."
    },
    {
      id: 8,
      nome: "Ciências Contábeis (Matutino)",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 46,
              notaMinima: 2479
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 34,
              notaMinima: 2379
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 46,
              notaMinima: 2753
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 27,
              notaMinima: 2295
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 35,
              notaMinima: 2760
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 32,
              notaMinima: 2782
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 6,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 34,
              notaMinima: 2603
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 21,
              notaMinima: 2234
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: 2134
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 26,
              notaMinima: 3196
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 16,
              notaMinima: 2837
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2782
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 20,
              notaMinima: 2909
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 22,
              notaMinima: 2169
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 2,
              notaMinima: 2522
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 12,
              notaMinima: 2388
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 14,
              notaMinima: 1965
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 2,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2099
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 21,
              notaMinima: 3002
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 16,
              notaMinima: 1887
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 2,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 15,
              notaMinima: 3093
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 21,
              notaMinima: 2520
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 2,
              notaMinima: 2458
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 2479 pontos; em 2025: 3093 pontos (alta de 614 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (5.25 candidatos por vaga)."
    },
    {
      id: 9,
      nome: "Ciências Contábeis (Noturno)",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 115,
              notaMinima: 2425
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 143,
              notaMinima: 2563
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 9,
              notaMinima: 1969
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 106,
              notaMinima: 2999
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 83,
              notaMinima: 2546
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 5,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 102,
              notaMinima: 3202
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 104,
              notaMinima: 2847
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 3,
              notaMinima: 2570
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 30,
              candidatos: 59,
              notaMinima: 2219
            },
            {
              tipo: "Escola Pública",
              vagas: 24,
              candidatos: 54,
              notaMinima: 2572
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 11,
              notaMinima: 1935
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 86,
              notaMinima: 3266
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 70,
              notaMinima: 3008
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 60,
              notaMinima: 2947
            },
            {
              tipo: "Escola Pública",
              vagas: 24,
              candidatos: 71,
              notaMinima: 2527
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 5,
              notaMinima: 1824
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 2,
              notaMinima: 2226
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 49,
              notaMinima: 2953
            },
            {
              tipo: "Escola Pública",
              vagas: 24,
              candidatos: 72,
              notaMinima: 2556
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 5,
              notaMinima: 2271
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 1,
              notaMinima: 2346
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 43,
              notaMinima: 2975
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 63,
              notaMinima: 2587
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 8,
              notaMinima: 2027
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 2,
              notaMinima: 2287
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 38,
              notaMinima: 2968
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 63,
              notaMinima: 2739
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 8,
              notaMinima: 2379
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 3,
              notaMinima: 2660
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 2,
              notaMinima: 2037
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 2425 pontos; em 2025: 2968 pontos (alta de 543 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (7.88 candidatos por vaga)."
    },
    {
      id: 10,
      nome: "Ciências Econômicas (Matutino)",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 28,
              notaMinima: 2506
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 21,
              notaMinima: 2344
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: 1819
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 24,
              notaMinima: 2986
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 15,
              notaMinima: 2438
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 20,
              notaMinima: 2749
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 11,
              notaMinima: 2184
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: 2317
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 22,
              notaMinima: 1808
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 4,
              notaMinima: 2251
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: 2566
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 25,
              notaMinima: 3829
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 5,
              notaMinima: 2359
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 19,
              notaMinima: 2311
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 10,
              notaMinima: 1740
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 1,
              notaMinima: 1468
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 11,
              notaMinima: 878
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 6,
              notaMinima: 2193
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 1574
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 17,
              notaMinima: 1963
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 9,
              notaMinima: 1832
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 22,
              notaMinima: 1953
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 5,
              notaMinima: 2187
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: 2396
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 1,
              notaMinima: 3249
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 2506 pontos; em 2025: 1953 pontos (queda de 553 pontos). Em 2025 a maior concorrência foi na cota Universal (2.00 candidatos por vaga)."
    },
    {
      id: 11,
      nome: "Ciências Econômicas (Noturno)",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 49,
              notaMinima: 2704
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 26,
              notaMinima: 2484
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: 2179
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 50,
              notaMinima: 2987
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 24,
              notaMinima: 2487
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 49,
              notaMinima: 2908
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 24,
              notaMinima: 2729
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 32,
              notaMinima: 1731
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 16,
              notaMinima: 2203
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 27,
              notaMinima: 3561
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 18,
              notaMinima: 3060
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2560
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 37,
              notaMinima: 3372
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 23,
              notaMinima: 2258
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: 842
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2187
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 24,
              notaMinima: 2963
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 21,
              notaMinima: 2080
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 3,
              notaMinima: 2262
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 13,
              notaMinima: 2966
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 21,
              notaMinima: 2288
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 27,
              notaMinima: 3901
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 28,
              notaMinima: 2832
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 2,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 3860
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 2704 pontos; em 2025: 3901 pontos (alta de 1197 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (7.00 candidatos por vaga)."
    },
    {
      id: 12,
      nome: "Direito (Matutino)",
      modalidade: "Bacharelado",
      salariosAtuais: [
        {
          cargo: "Advogado (CBO 2410-05)",
          salario: 5660.53,
          referencia: "Portal Salário (salario.com.br) / CAGED-MTE, consulta em agosto de 2026"
        }
      ],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 389,
              notaMinima: 4252
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 194,
              notaMinima: 3152
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 14,
              notaMinima: 2219
            }
          ]
        },
        {
          ano: 2017,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 330,
              notaMinima: 4382
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 133,
              notaMinima: 3544
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: null,
              candidatos: null,
              notaMinima: 3954
            },
            {
              tipo: "Negros",
              vagas: 12,
              candidatos: 11,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 267,
              notaMinima: 4383
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 104,
              notaMinima: 3368
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 8,
              notaMinima: 3331
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 245,
              notaMinima: 4641
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 116,
              notaMinima: 3508
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 6,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 30,
              candidatos: 349,
              notaMinima: 4526
            },
            {
              tipo: "Escola Pública",
              vagas: 24,
              candidatos: 109,
              notaMinima: 3499
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 9,
              notaMinima: 2330
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 367,
              notaMinima: 4821
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 110,
              notaMinima: 3801
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 9,
              notaMinima: 3653
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 249,
              notaMinima: 4226
            },
            {
              tipo: "Escola Pública",
              vagas: 24,
              candidatos: 104,
              notaMinima: 3083
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 6,
              notaMinima: 2203
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 8,
              notaMinima: 2243
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 1,
              notaMinima: 2729
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 252,
              notaMinima: 4797
            },
            {
              tipo: "Escola Pública",
              vagas: 24,
              candidatos: 104,
              notaMinima: 3446
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 11,
              notaMinima: 1996
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 11,
              notaMinima: 4188
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 3,
              notaMinima: 2209
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 191,
              notaMinima: 4787
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 91,
              notaMinima: 4049
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 8,
              notaMinima: 2275
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 10,
              notaMinima: 4010
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 6,
              notaMinima: 3090
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 220,
              notaMinima: 4988
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 97,
              notaMinima: 3997
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 16,
              notaMinima: 3229
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 12,
              notaMinima: 3564
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 6,
              notaMinima: 3457
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (10 edições). Nota mínima da ampla concorrência em 2016: 4252 pontos; em 2025: 4988 pontos (alta de 736 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (12.12 candidatos por vaga)."
    },
    {
      id: 13,
      nome: "Direito (Noturno)",
      modalidade: "Bacharelado",
      salariosAtuais: [
        {
          cargo: "Advogado (CBO 2410-05)",
          salario: 5660.53,
          referencia: "Portal Salário (salario.com.br) / CAGED-MTE, consulta em agosto de 2026"
        }
      ],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 434,
              notaMinima: 4004
            },
            {
              tipo: "Escola Pública",
              vagas: 10,
              candidatos: 228,
              notaMinima: 3139
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 19,
              notaMinima: 2635
            }
          ]
        },
        {
          ano: 2017,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 388,
              notaMinima: 4266
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 208,
              notaMinima: 3746
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: null,
              candidatos: null,
              notaMinima: 3220
            },
            {
              tipo: "Negros",
              vagas: 10,
              candidatos: 19,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 299,
              notaMinima: 4534
            },
            {
              tipo: "Escola Pública",
              vagas: 10,
              candidatos: 210,
              notaMinima: 3635
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 15,
              notaMinima: 2869
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 284,
              notaMinima: 4334
            },
            {
              tipo: "Escola Pública",
              vagas: 11,
              candidatos: 173,
              notaMinima: 3617
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 9,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 26,
              candidatos: 273,
              notaMinima: 4373
            },
            {
              tipo: "Escola Pública",
              vagas: 21,
              candidatos: 189,
              notaMinima: 3563
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 7,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 323,
              notaMinima: 4700
            },
            {
              tipo: "Escola Pública",
              vagas: 10,
              candidatos: 133,
              notaMinima: 3861
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 12,
              notaMinima: 3163
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 20,
              candidatos: 254,
              notaMinima: 4422
            },
            {
              tipo: "Escola Pública",
              vagas: 21,
              candidatos: 143,
              notaMinima: 3002
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 13,
              notaMinima: 2187
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 9,
              notaMinima: 2966
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 2,
              notaMinima: 2457
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 20,
              candidatos: 149,
              notaMinima: 4361
            },
            {
              tipo: "Escola Pública",
              vagas: 21,
              candidatos: 169,
              notaMinima: 3663
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 19,
              notaMinima: 2316
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 10,
              notaMinima: 2543
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 3,
              notaMinima: 3250
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 20,
              candidatos: 210,
              notaMinima: 4669
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 123,
              notaMinima: 3829
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 18,
              notaMinima: 3401
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 8,
              notaMinima: 3549
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 3,
              notaMinima: 2809
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 20,
              candidatos: 225,
              notaMinima: 4920
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 149,
              notaMinima: 4238
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 18,
              notaMinima: 3936
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 13,
              notaMinima: 3740
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 6,
              notaMinima: 3113
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (10 edições). Nota mínima da ampla concorrência em 2016: 4004 pontos; em 2025: 4920 pontos (alta de 916 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (21.29 candidatos por vaga)."
    },
    {
      id: 14,
      nome: "Física - bacharelado",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 15,
              notaMinima: 2685
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 10,
              notaMinima: 2334
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: 2969
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 23,
              notaMinima: 3258
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 7,
              notaMinima: 2359
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 10,
              notaMinima: 2942
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 8,
              notaMinima: 2419
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 19,
              notaMinima: 2273
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 5,
              notaMinima: 2493
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 6,
              candidatos: 10,
              notaMinima: 2857
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 8,
              notaMinima: 1565
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 13,
              notaMinima: 2168
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 3,
              notaMinima: 2522
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 10,
              notaMinima: 1886
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 7,
              notaMinima: 2384
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: 3303
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 5,
              notaMinima: 1787
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 2,
              notaMinima: 2108
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2202
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 12,
              notaMinima: 2546
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 4,
              notaMinima: 3071
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2716
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 2685 pontos; em 2025: 2546 pontos (queda de 139 pontos). Em 2025 a maior concorrência foi na cota Universal (1.33 candidatos por vaga)."
    },
    {
      id: 15,
      nome: "Física - licenciatura",
      modalidade: "Licenciatura",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 27,
              notaMinima: 2721
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 25,
              notaMinima: 2327
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 17,
              notaMinima: 2756
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 7,
              notaMinima: 2345
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: 1935
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 17,
              notaMinima: 3185
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 10,
              notaMinima: 2310
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 12,
              notaMinima: 2366
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 6,
              notaMinima: 2517
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2292
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 6,
              candidatos: 12,
              notaMinima: 2795
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 7,
              notaMinima: 2582
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 4,
              notaMinima: 1926
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 7,
              notaMinima: 1926
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 22,
              notaMinima: 2886
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 17,
              notaMinima: 1141
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: 3014
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 24,
              notaMinima: 3611
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 30,
              notaMinima: 2725
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: 2305
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: 2366
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 11,
              notaMinima: 2865
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 10,
              notaMinima: 2085
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 2721 pontos; em 2025: 2865 pontos (alta de 144 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (3.33 candidatos por vaga)."
    },
    {
      id: 16,
      nome: "Educação Física - bacharelado",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 118,
              notaMinima: 2633
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 96,
              notaMinima: 2469
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 4,
              notaMinima: 2006
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 95,
              notaMinima: 2891
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 60,
              notaMinima: 2323
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: 2102
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 109,
              notaMinima: 3045
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 44,
              notaMinima: 2192
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 5,
              notaMinima: 2258
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 18,
              candidatos: 90,
              notaMinima: 2680
            },
            {
              tipo: "Escola Pública",
              vagas: 15,
              candidatos: 45,
              notaMinima: 2101
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 62,
              notaMinima: 2907
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 39,
              notaMinima: 2709
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: 1567
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 72,
              notaMinima: 3009
            },
            {
              tipo: "Escola Pública",
              vagas: 15,
              candidatos: 65,
              notaMinima: 2438
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 7,
              notaMinima: 1927
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 4,
              notaMinima: 2936
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 3,
              notaMinima: 1666
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 76,
              notaMinima: 3247
            },
            {
              tipo: "Escola Pública",
              vagas: 15,
              candidatos: 45,
              notaMinima: 2367
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 5,
              notaMinima: 2446
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 2,
              notaMinima: 1243
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 18,
              candidatos: 85,
              notaMinima: 3278
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 68,
              notaMinima: 2869
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 9,
              notaMinima: 1976
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 18,
              candidatos: 84,
              notaMinima: 3554
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 75,
              notaMinima: 2934
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 9,
              notaMinima: 2215
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 6,
              notaMinima: 2288
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 5,
              notaMinima: 2267
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 2633 pontos; em 2025: 3554 pontos (alta de 921 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (12.50 candidatos por vaga)."
    },
    {
      id: 17,
      nome: "Educação Física - licenciatura",
      modalidade: "Licenciatura",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 134,
              notaMinima: 2386
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 190,
              notaMinima: 2393
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 20,
              notaMinima: 2154
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 103,
              notaMinima: 2714
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 114,
              notaMinima: 2615
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 16,
              notaMinima: 2173
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 132,
              notaMinima: 3026
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 120,
              notaMinima: 2684
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 8,
              notaMinima: 1986
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 18,
              candidatos: 76,
              notaMinima: 2315
            },
            {
              tipo: "Escola Pública",
              vagas: 15,
              candidatos: 70,
              notaMinima: 2233
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 5,
              notaMinima: 1740
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 63,
              notaMinima: 2662
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 79,
              notaMinima: 2563
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 5,
              notaMinima: 2034
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 72,
              notaMinima: 2669
            },
            {
              tipo: "Escola Pública",
              vagas: 15,
              candidatos: 90,
              notaMinima: 2375
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 9,
              notaMinima: 1894
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2445
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 226,
              notaMinima: 3151
            },
            {
              tipo: "Escola Pública",
              vagas: 15,
              candidatos: 387,
              notaMinima: 2928
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 46,
              notaMinima: 2297
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 15,
              notaMinima: 2051
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 3,
              notaMinima: 1576
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 18,
              candidatos: 152,
              notaMinima: 3097
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 231,
              notaMinima: 2822
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 36,
              notaMinima: 2587
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 18,
              notaMinima: 2262
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 5,
              notaMinima: 2549
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 18,
              candidatos: 131,
              notaMinima: 3225
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 218,
              notaMinima: 3006
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 30,
              notaMinima: 2602
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 17,
              notaMinima: 2636
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 6,
              notaMinima: 2973
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 2386 pontos; em 2025: 3225 pontos (alta de 839 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (36.33 candidatos por vaga)."
    },
    {
      id: 18,
      nome: "Enfermagem",
      modalidade: "Bacharelado",
      salariosAtuais: [
        {
          cargo: "Enfermeiro (CBO 2235-05)",
          salario: 4475.06,
          referencia: "Portal Salário (salario.com.br) / CAGED-MTE, consulta em agosto de 2026"
        }
      ],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 133,
              notaMinima: 3584
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 109,
              notaMinima: 2611
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 7,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2017,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 122,
              notaMinima: 3142
            },
            {
              tipo: "Escola Pública",
              vagas: 2,
              candidatos: 112,
              notaMinima: 2925
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: null,
              candidatos: null,
              notaMinima: 2457
            },
            {
              tipo: "Negros",
              vagas: 6,
              candidatos: 4,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 110,
              notaMinima: 3485
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 110,
              notaMinima: 3052
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 3,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 160,
              notaMinima: 3803
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 131,
              notaMinima: 2998
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 10,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 131,
              notaMinima: 3059
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 78,
              notaMinima: 2590
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 10,
              notaMinima: 1919
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 156,
              notaMinima: 3739
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 105,
              notaMinima: 3204
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 7,
              notaMinima: 2331
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 85,
              notaMinima: 3304
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 90,
              notaMinima: 2762
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 12,
              notaMinima: 2146
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 6,
              notaMinima: 1381
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 67,
              notaMinima: 3426
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 81,
              notaMinima: 2692
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 6,
              notaMinima: 2184
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 5,
              notaMinima: 1878
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 68,
              notaMinima: 3414
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 82,
              notaMinima: 3282
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 6,
              notaMinima: 2661
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 8,
              notaMinima: 2722
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 2,
              notaMinima: 1316
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 54,
              notaMinima: 3430
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 62,
              notaMinima: 3213
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 7,
              notaMinima: 2348
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: 2988
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 1,
              notaMinima: 3433
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (10 edições). Nota mínima da ampla concorrência em 2016: 3584 pontos; em 2025: 3430 pontos (queda de 154 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (12.40 candidatos por vaga)."
    },
    {
      id: 19,
      nome: "Engenharia Civil",
      modalidade: "Bacharelado",
      salariosAtuais: [
        {
          cargo: "Engenheiro Civil (CBO 2142-05)",
          salario: 9733.56,
          referencia: "Portal Salário (salario.com.br) / CAGED-MTE, consulta em agosto de 2026"
        }
      ],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 280,
              notaMinima: 4191
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 152,
              notaMinima: 3080
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 11,
              notaMinima: 2830
            }
          ]
        },
        {
          ano: 2017,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 181,
              notaMinima: 4305
            },
            {
              tipo: "Escola Pública",
              vagas: 2,
              candidatos: 111,
              notaMinima: 3306
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: null,
              candidatos: null,
              notaMinima: 2858
            },
            {
              tipo: "Negros",
              vagas: 7,
              candidatos: 11,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 153,
              notaMinima: 4282
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 91,
              notaMinima: 2903
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 137,
              notaMinima: 4113
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 68,
              notaMinima: 2983
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 18,
              candidatos: 178,
              notaMinima: 3717
            },
            {
              tipo: "Escola Pública",
              vagas: 15,
              candidatos: 87,
              notaMinima: 3001
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 2,
              notaMinima: 2825
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 151,
              notaMinima: 4341
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 77,
              notaMinima: 3055
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 83,
              notaMinima: 3888
            },
            {
              tipo: "Escola Pública",
              vagas: 15,
              candidatos: 45,
              notaMinima: 2346
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 3,
              notaMinima: 1492
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 60,
              notaMinima: 3761
            },
            {
              tipo: "Escola Pública",
              vagas: 15,
              candidatos: 34,
              notaMinima: 2545
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 3,
              notaMinima: 1866
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2194
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 17,
              candidatos: 78,
              notaMinima: 4035
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 33,
              notaMinima: 3329
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 4,
              notaMinima: 1735
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 4,
              notaMinima: 2396
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 17,
              candidatos: 48,
              notaMinima: 4000
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 26,
              notaMinima: 3206
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 3,
              notaMinima: 2169
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 4,
              notaMinima: 2485
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 2,
              notaMinima: 2694
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (10 edições). Nota mínima da ampla concorrência em 2016: 4191 pontos; em 2025: 4000 pontos (queda de 191 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (5.20 candidatos por vaga)."
    },
    {
      id: 20,
      nome: "Engenharia de Alimentos",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 51,
              notaMinima: 2883
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 35,
              notaMinima: 2249
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 4,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 38,
              notaMinima: 2900
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 27,
              notaMinima: 2349
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 38,
              notaMinima: 2816
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 15,
              notaMinima: 2400
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 35,
              notaMinima: 2382
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 11,
              notaMinima: 2155
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: 1907
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 27,
              notaMinima: 3239
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 13,
              notaMinima: 2051
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 23,
              notaMinima: 2279
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 11,
              notaMinima: 1859
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: 1694
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 21,
              notaMinima: 2885
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 15,
              notaMinima: 1611
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 3353
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 14,
              notaMinima: 2148
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 11,
              notaMinima: 1840
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 12,
              notaMinima: 2192
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 8,
              notaMinima: 2354
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 2,
              notaMinima: 2714
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 2883 pontos; em 2025: 2192 pontos (queda de 691 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (2.00 candidatos por vaga)."
    },
    {
      id: 21,
      nome: "Engenharia de Computação",
      modalidade: "Bacharelado",
      salariosAtuais: [
        {
          cargo: "Engenheiro de Softwares Computacionais (CBO 2122-05)",
          salario: 14430.84,
          referencia: "Portal Salário (salario.com.br) / CAGED-MTE, consulta em agosto de 2026"
        }
      ],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 113,
              notaMinima: 3345
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 71,
              notaMinima: 2657
            }
          ]
        },
        {
          ano: 2017,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: null,
              candidatos: 103,
              notaMinima: 3818
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 42,
              notaMinima: 2681
            },
            {
              tipo: "Negros",
              vagas: 9,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 86,
              notaMinima: 3539
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 43,
              notaMinima: 2898
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: 3198
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 97,
              notaMinima: 3886
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 38,
              notaMinima: 2975
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 3,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 17,
              candidatos: 150,
              notaMinima: 3424
            },
            {
              tipo: "Escola Pública",
              vagas: 14,
              candidatos: 53,
              notaMinima: 2704
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 2,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 160,
              notaMinima: 4226
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 45,
              notaMinima: 3134
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 130,
              notaMinima: 4052
            },
            {
              tipo: "Escola Pública",
              vagas: 14,
              candidatos: 32,
              notaMinima: 2499
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: 4373
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: 2474
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 99,
              notaMinima: 4097
            },
            {
              tipo: "Escola Pública",
              vagas: 14,
              candidatos: 28,
              notaMinima: 2468
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 4,
              notaMinima: 2363
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: 3688
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 2,
              notaMinima: 2295
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 80,
              notaMinima: 4060
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 48,
              notaMinima: 3190
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 3,
              notaMinima: 2341
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 4,
              notaMinima: 2042
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 1,
              notaMinima: 4278
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 81,
              notaMinima: 4040
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 34,
              notaMinima: 3289
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 3,
              notaMinima: 2259
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 5,
              notaMinima: 2261
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 2,
              notaMinima: null
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (10 edições). Nota mínima da ampla concorrência em 2016: 3345 pontos; em 2025: 4040 pontos (alta de 695 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (6.80 candidatos por vaga)."
    },
    {
      id: 22,
      nome: "Engenharia de Materiais",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 88,
              notaMinima: 3427
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 29,
              notaMinima: 2481
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 59,
              notaMinima: 3075
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 13,
              notaMinima: null
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 46,
              notaMinima: 3378
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 19,
              notaMinima: 2345
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 18,
              candidatos: 44,
              notaMinima: 2232
            },
            {
              tipo: "Escola Pública",
              vagas: 15,
              candidatos: 11,
              notaMinima: 1664
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 1,
              notaMinima: 2158
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 32,
              notaMinima: 3498
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 14,
              notaMinima: 2425
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2196
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 26,
              notaMinima: 1642
            },
            {
              tipo: "Escola Pública",
              vagas: 15,
              candidatos: 9,
              notaMinima: 1132
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 25,
              notaMinima: 2116
            },
            {
              tipo: "Escola Pública",
              vagas: 15,
              candidatos: 6,
              notaMinima: 2116
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 1,
              notaMinima: 2518
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 20,
              notaMinima: 1931
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 7,
              notaMinima: 2079
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 23,
              notaMinima: 2676
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 9,
              notaMinima: 1979
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 2,
              notaMinima: 3106
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 3324
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 3427 pontos; em 2025: 2676 pontos (queda de 751 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (1.80 candidatos por vaga)."
    },
    {
      id: 23,
      nome: "Engenharia de Software",
      modalidade: "Bacharelado",
      salariosAtuais: [
        {
          cargo: "Engenheiro de Softwares Computacionais (CBO 2122-05)",
          salario: 14430.84,
          referencia: "Portal Salário (salario.com.br) / CAGED-MTE, consulta em agosto de 2026"
        }
      ],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 118,
              notaMinima: 3158
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 86,
              notaMinima: 2700
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 3,
              notaMinima: 2331
            }
          ]
        },
        {
          ano: 2017,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 103,
              notaMinima: 3539
            },
            {
              tipo: "Escola Pública",
              vagas: 2,
              candidatos: 73,
              notaMinima: 2693
            },
            {
              tipo: "Negros",
              vagas: 6,
              candidatos: 5,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 110,
              notaMinima: 3172
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 55,
              notaMinima: 2466
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 5,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 126,
              notaMinima: 3409
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 88,
              notaMinima: 3007
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 4,
              notaMinima: 2809
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 150,
              notaMinima: 3437
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 71,
              notaMinima: 2940
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 3,
              notaMinima: 1942
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 180,
              notaMinima: 4193
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 89,
              notaMinima: 3262
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 4,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 222,
              notaMinima: 4368
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 173,
              notaMinima: 3345
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 10,
              notaMinima: 2947
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 4,
              notaMinima: 2800
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 2,
              notaMinima: 2212
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 171,
              notaMinima: 4457
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 151,
              notaMinima: 3537
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 9,
              notaMinima: 2525
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 11,
              notaMinima: 3240
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 4,
              notaMinima: 2449
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 184,
              notaMinima: 4692
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 160,
              notaMinima: 3951
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 11,
              notaMinima: 3486
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 15,
              notaMinima: 3730
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 4,
              notaMinima: 1916
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 176,
              notaMinima: 4706
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 156,
              notaMinima: 3952
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 16,
              notaMinima: 2899
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 16,
              notaMinima: 4015
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 11,
              notaMinima: 3077
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (10 edições). Nota mínima da ampla concorrência em 2016: 3158 pontos; em 2025: 4706 pontos (alta de 1548 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (39.00 candidatos por vaga)."
    },
    {
      id: 24,
      nome: "Farmácia",
      modalidade: "Bacharelado",
      salariosAtuais: [
        {
          cargo: "Farmacêutico (CBO 2234-05)",
          salario: 4569.96,
          referencia: "Portal Salário (salario.com.br) / CAGED-MTE, consulta em agosto de 2026"
        }
      ],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 117,
              notaMinima: 3527
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 62,
              notaMinima: 2242
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 95,
              notaMinima: 3657
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 53,
              notaMinima: 2865
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: 2887
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 101,
              notaMinima: 3506
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 54,
              notaMinima: 2654
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 17,
              candidatos: 125,
              notaMinima: 3132
            },
            {
              tipo: "Escola Pública",
              vagas: 14,
              candidatos: 67,
              notaMinima: 2714
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 3,
              notaMinima: 2126
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 107,
              notaMinima: 3997
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 58,
              notaMinima: 3201
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 76,
              notaMinima: 3488
            },
            {
              tipo: "Escola Pública",
              vagas: 14,
              candidatos: 57,
              notaMinima: 2508
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: 2103
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 4492
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 1,
              notaMinima: 1969
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 79,
              notaMinima: 4280
            },
            {
              tipo: "Escola Pública",
              vagas: 14,
              candidatos: 48,
              notaMinima: 2793
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 73,
              notaMinima: 3764
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 69,
              notaMinima: 2961
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 3,
              notaMinima: 1620
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: 3024
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 77,
              notaMinima: 4255
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 55,
              notaMinima: 3393
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 4,
              notaMinima: 1967
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: 2482
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 3,
              notaMinima: 2627
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 3527 pontos; em 2025: 4255 pontos (alta de 728 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (11.00 candidatos por vaga)."
    },
    {
      id: 25,
      nome: "Geografia - bacharelado",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 22,
              notaMinima: 2108
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 9,
              notaMinima: 1472
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 16,
              notaMinima: 2245
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 6,
              notaMinima: 1757
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 13,
              notaMinima: 1746
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 6,
              notaMinima: 1896
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 5,
              notaMinima: 1891
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 2,
              notaMinima: 2232
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 8,
              notaMinima: 2480
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 11,
              notaMinima: 2577
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2350
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 9,
              notaMinima: 1337
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 3,
              notaMinima: 1878
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: 2161
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 7,
              notaMinima: 2025
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 10,
              notaMinima: 2025
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 2,
              notaMinima: 4977
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 1,
              notaMinima: 2946
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 2,
              notaMinima: 2670
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 5,
              notaMinima: 2677
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 3,
              notaMinima: 2381
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 2108 pontos; em 2025: 2677 pontos (alta de 569 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (0.75 candidatos por vaga)."
    },
    {
      id: 26,
      nome: "Geografia - licenciatura",
      modalidade: "Licenciatura",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 37,
              notaMinima: 1795
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 45,
              notaMinima: 2679
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: 1937
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 30,
              notaMinima: 2486
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 25,
              notaMinima: 2349
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 17,
              notaMinima: 2278
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 15,
              notaMinima: 2284
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 11,
              notaMinima: 2433
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 7,
              notaMinima: 2164
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: 3138
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 11,
              notaMinima: 2197
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 11,
              notaMinima: 2505
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2795
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 10,
              notaMinima: 2083
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 11,
              notaMinima: 2434
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 35,
              notaMinima: 2796
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 43,
              notaMinima: 2462
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 5,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 18,
              notaMinima: 3000
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 29,
              notaMinima: 1809
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 3,
              notaMinima: 2408
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: 3198
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 21,
              notaMinima: 1819
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 23,
              notaMinima: 1599
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 5,
              notaMinima: 2392
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: 1767
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 1,
              notaMinima: null
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 1795 pontos; em 2025: 1819 pontos (alta de 24 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (5.75 candidatos por vaga)."
    },
    {
      id: 27,
      nome: "História - bacharelado",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 24,
              notaMinima: 2748
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 13,
              notaMinima: 2398
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: 2415
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 17,
              notaMinima: 3001
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 8,
              notaMinima: 1705
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: 2168
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 16,
              notaMinima: 2110
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 4,
              notaMinima: 3028
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 15,
              notaMinima: 2371
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 2,
              notaMinima: 2942
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 16,
              notaMinima: 1875
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 3,
              notaMinima: 1875
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 9,
              notaMinima: 2007
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 2,
              notaMinima: 2007
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 4,
              notaMinima: 2513
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 7,
              notaMinima: 2559
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2819
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 9,
              notaMinima: 2351
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 5,
              notaMinima: 2593
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (8 edições). Nota mínima da ampla concorrência em 2016: 2748 pontos; em 2025: 2351 pontos (queda de 397 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (1.25 candidatos por vaga)."
    },
    {
      id: 28,
      nome: "História - licenciatura",
      modalidade: "Licenciatura",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 90,
              notaMinima: 2897
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 101,
              notaMinima: 2762
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 6,
              notaMinima: 2409
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 26,
              candidatos: 71,
              notaMinima: 3013
            },
            {
              tipo: "Escola Pública",
              vagas: 21,
              candidatos: 65,
              notaMinima: 2704
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 5,
              notaMinima: 861
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 54,
              notaMinima: 3443
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 54,
              notaMinima: 3152
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 5,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 50,
              notaMinima: 3128
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 43,
              notaMinima: 3184
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 4,
              notaMinima: 4012
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 57,
              notaMinima: 4016
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 37,
              notaMinima: 3261
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 46,
              notaMinima: 3802
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 43,
              notaMinima: 3010
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 5,
              notaMinima: 2157
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 3963
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 108,
              notaMinima: 3913
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 154,
              notaMinima: 3478
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 20,
              notaMinima: 2841
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 6,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 2,
              notaMinima: 2195
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 63,
              notaMinima: 4109
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 74,
              notaMinima: 3695
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 7,
              notaMinima: 1223
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 4,
              notaMinima: 4266
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 3,
              notaMinima: 2479
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 68,
              notaMinima: 4022
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 64,
              notaMinima: 3831
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 7,
              notaMinima: 2748
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 11,
              notaMinima: 3061
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 3,
              notaMinima: 2195
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 2897 pontos; em 2025: 4022 pontos (alta de 1125 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (16.00 candidatos por vaga)."
    },
    {
      id: 29,
      nome: "Jornalismo - bacharelado",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 95,
              notaMinima: 3425
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 55,
              notaMinima: 2708
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 4,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 62,
              notaMinima: 3793
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 32,
              notaMinima: 2564
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 74,
              notaMinima: 3955
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 31,
              notaMinima: 2847
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 70,
              notaMinima: 3987
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 27,
              notaMinima: 2391
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 1,
              notaMinima: 2082
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 98,
              notaMinima: 4440
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 34,
              notaMinima: 3563
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 12,
              candidatos: 59,
              notaMinima: 3771
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 27,
              notaMinima: 2388
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 3,
              notaMinima: 1625
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2902
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 12,
              candidatos: 38,
              notaMinima: 3969
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 29,
              notaMinima: 2453
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 5,
              notaMinima: 2409
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2373
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 12,
              candidatos: 38,
              notaMinima: 3563
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 31,
              notaMinima: 2950
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 2,
              notaMinima: 2578
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: 1728
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 2,
              notaMinima: 2001
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 12,
              candidatos: 33,
              notaMinima: 4187
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 22,
              notaMinima: 3596
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 3,
              notaMinima: 2436
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 4,
              notaMinima: 2846
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 5,
              notaMinima: 3370
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 3425 pontos; em 2025: 4187 pontos (alta de 762 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (5.50 candidatos por vaga)."
    },
    {
      id: 30,
      nome: "Matemática - licenciatura",
      modalidade: "Licenciatura",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 39,
              notaMinima: 1827
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 50,
              notaMinima: 2130
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 5,
              notaMinima: 2014
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 10,
              candidatos: 20,
              notaMinima: 1841
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 26,
              notaMinima: 2314
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 3,
              notaMinima: 1951
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 28,
              notaMinima: 2538
            },
            {
              tipo: "Escola Pública",
              vagas: 11,
              candidatos: 15,
              notaMinima: 1901
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 22,
              candidatos: 17,
              notaMinima: 2388
            },
            {
              tipo: "Escola Pública",
              vagas: 18,
              candidatos: 4,
              notaMinima: 2331
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 21,
              notaMinima: 2530
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 13,
              notaMinima: 2015
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 18,
              candidatos: 13,
              notaMinima: 1769
            },
            {
              tipo: "Escola Pública",
              vagas: 18,
              candidatos: 17,
              notaMinima: 1769
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 1,
              notaMinima: 2996
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 18,
              candidatos: 48,
              notaMinima: 2468
            },
            {
              tipo: "Escola Pública",
              vagas: 18,
              candidatos: 38,
              notaMinima: 1937
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 2,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 18,
              candidatos: 43,
              notaMinima: 2281
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 23,
              notaMinima: 2078
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 2,
              notaMinima: 2856
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 18,
              candidatos: 27,
              notaMinima: 1887
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 25,
              notaMinima: 1891
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 2,
              notaMinima: 2326
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 1,
              notaMinima: null
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 1827 pontos; em 2025: 1887 pontos (alta de 60 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (4.17 candidatos por vaga)."
    },
    {
      id: 31,
      nome: "Matemática Aplicada - bacharelado",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 4,
              notaMinima: 1957
            },
            {
              tipo: "Escola Pública",
              vagas: 11,
              candidatos: 4,
              notaMinima: 2115
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 8,
              notaMinima: 2353
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 3,
              notaMinima: 2191
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 10,
              notaMinima: 1917
            },
            {
              tipo: "Escola Pública",
              vagas: 2,
              candidatos: 2,
              notaMinima: 1386
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 6,
              notaMinima: 2513
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 2,
              notaMinima: 2810
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 6,
              candidatos: 5,
              notaMinima: 2709
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 2,
              notaMinima: 1555
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 6,
              notaMinima: 1918
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 2,
              notaMinima: 2571
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 3,
              notaMinima: 2689
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 2,
              notaMinima: 2689
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 5,
              notaMinima: 2697
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 4,
              notaMinima: 1957
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: 3029
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 5,
              notaMinima: 2800
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 4,
              notaMinima: 1773
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 1,
              notaMinima: 4030
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 1957 pontos; em 2025: 2800 pontos (alta de 843 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (1.33 candidatos por vaga)."
    },
    {
      id: 32,
      nome: "Medicina",
      modalidade: "Bacharelado",
      salariosAtuais: [
        {
          cargo: "Médico Clínico (CBO 2251-25)",
          salario: 10048.57,
          referencia: "Portal Salário (salario.com.br) / CAGED-MTE, consulta em agosto de 2026"
        }
      ],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 1615,
              notaMinima: 5868
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 617,
              notaMinima: 5142
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 46,
              notaMinima: 4499
            }
          ]
        },
        {
          ano: 2017,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 2574,
              notaMinima: 5484
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 482,
              notaMinima: 4971
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: null,
              candidatos: null,
              notaMinima: 4400
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 32,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 1582,
              notaMinima: 5784
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 616,
              notaMinima: 5224
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 46,
              notaMinima: 4857
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 1414,
              notaMinima: 5650
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 477,
              notaMinima: 5101
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 32,
              notaMinima: 4648
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 3673,
              notaMinima: 5910
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 1013,
              notaMinima: 5206
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 59,
              notaMinima: 4397
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 3373,
              notaMinima: 6160
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 828,
              notaMinima: 5587
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 54,
              notaMinima: 4177
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 2107,
              notaMinima: 5857
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 643,
              notaMinima: 5139
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 67,
              notaMinima: 4185
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 65,
              notaMinima: 5151
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 32,
              notaMinima: 4210
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 1884,
              notaMinima: 6312
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 662,
              notaMinima: 5514
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 50,
              notaMinima: 4032
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 83,
              notaMinima: 5965
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 47,
              notaMinima: 5667
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 1814,
              notaMinima: 6118
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 610,
              notaMinima: 5789
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 57,
              notaMinima: 4363
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 86,
              notaMinima: 5285
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 79,
              notaMinima: 5380
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 2182,
              notaMinima: 6352
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 634,
              notaMinima: 5975
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 63,
              notaMinima: 4624
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 124,
              notaMinima: 5736
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 95,
              notaMinima: 5933
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (10 edições). Nota mínima da ampla concorrência em 2016: 5868 pontos; em 2025: 6352 pontos (alta de 484 pontos). Em 2025 a maior concorrência foi na cota Universal (155.86 candidatos por vaga)."
    },
    {
      id: 33,
      nome: "Música - licenciatura",
      modalidade: "Licenciatura",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 33,
              notaMinima: 2160
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 15,
              notaMinima: 1708
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 17,
              notaMinima: 1723
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 17,
              notaMinima: 2459
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 21,
              notaMinima: 2728
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 12,
              notaMinima: 839
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 17,
              notaMinima: 2219
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 9,
              notaMinima: 2314
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 3025
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 17,
              notaMinima: 2450
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 4,
              notaMinima: 2006
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 25,
              notaMinima: 2645
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 21,
              notaMinima: 2497
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 4,
              notaMinima: 2278
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 17,
              notaMinima: 3680
            },
            {
              tipo: "Escola Pública",
              vagas: 2,
              candidatos: 16,
              notaMinima: 2531
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: 3261
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 2,
              notaMinima: 2245
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 16,
              notaMinima: 2107
            },
            {
              tipo: "Escola Pública",
              vagas: 2,
              candidatos: 14,
              notaMinima: 2642
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 2,
              notaMinima: null
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (8 edições). Nota mínima da ampla concorrência em 2016: 2160 pontos; em 2025: 2107 pontos (queda de 53 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (7.00 candidatos por vaga)."
    },
    {
      id: 34,
      nome: "Odontologia",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 356,
              notaMinima: 3966
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 192,
              notaMinima: 3139
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 15,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2017,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: null,
              candidatos: null,
              notaMinima: 3934
            },
            {
              tipo: "Escola Pública",
              vagas: null,
              candidatos: null,
              notaMinima: 3325
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: null,
              candidatos: null,
              notaMinima: 2674
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 10,
              candidatos: 275,
              notaMinima: 4024
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 157,
              notaMinima: 3242
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 9,
              notaMinima: 2493
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 241,
              notaMinima: 4226
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 139,
              notaMinima: 3276
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 8,
              notaMinima: 2807
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 22,
              candidatos: 312,
              notaMinima: 4009
            },
            {
              tipo: "Escola Pública",
              vagas: 18,
              candidatos: 136,
              notaMinima: 3126
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 7,
              notaMinima: 1924
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 303,
              notaMinima: 4413
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 117,
              notaMinima: 3497
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 5,
              notaMinima: 2150
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 18,
              candidatos: 193,
              notaMinima: 4017
            },
            {
              tipo: "Escola Pública",
              vagas: 18,
              candidatos: 111,
              notaMinima: 2849
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 4,
              notaMinima: 1731
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: 1779
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 2,
              notaMinima: 2099
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 18,
              candidatos: 161,
              notaMinima: 4274
            },
            {
              tipo: "Escola Pública",
              vagas: 18,
              candidatos: 91,
              notaMinima: 3042
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 7,
              notaMinima: 2157
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 8,
              notaMinima: 2862
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 2,
              notaMinima: 2028
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 18,
              candidatos: 153,
              notaMinima: 4266
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 96,
              notaMinima: 3661
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 10,
              notaMinima: 2131
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 6,
              notaMinima: 3477
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 5,
              notaMinima: 3102
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 18,
              candidatos: 206,
              notaMinima: 4414
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 90,
              notaMinima: 3646
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 7,
              notaMinima: 2467
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 8,
              notaMinima: 3078
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 4,
              notaMinima: 2881
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (10 edições). Nota mínima da ampla concorrência em 2016: 3966 pontos; em 2025: 4414 pontos (alta de 448 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (15.00 candidatos por vaga)."
    },
    {
      id: 35,
      nome: "Pedagogia - licenciatura (Matutino)",
      modalidade: "Licenciatura",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 44,
              notaMinima: 2405
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 44,
              notaMinima: 2506
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 5,
              notaMinima: 2528
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 34,
              notaMinima: 2670
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 34,
              notaMinima: 2674
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 34,
              notaMinima: 2804
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 36,
              notaMinima: 2627
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 29,
              notaMinima: 957
            },
            {
              tipo: "Escola Pública",
              vagas: 10,
              candidatos: 19,
              notaMinima: 2239
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 2,
              notaMinima: 1899
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 6,
              candidatos: 18,
              notaMinima: 3225
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 17,
              notaMinima: 2465
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: 2749
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 10,
              candidatos: 22,
              notaMinima: 2879
            },
            {
              tipo: "Escola Pública",
              vagas: 11,
              candidatos: 32,
              notaMinima: 2200
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 3,
              notaMinima: 2082
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: 1967
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 2,
              notaMinima: 2566
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 10,
              candidatos: 66,
              notaMinima: 3507
            },
            {
              tipo: "Escola Pública",
              vagas: 11,
              candidatos: 118,
              notaMinima: 2887
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 4,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 3,
              notaMinima: 1858
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 2,
              notaMinima: 2731
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 65,
              notaMinima: 3332
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 104,
              notaMinima: 3256
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 17,
              notaMinima: 2787
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 5,
              notaMinima: 1170
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 3,
              notaMinima: 2468
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 41,
              notaMinima: 3544
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 78,
              notaMinima: 3226
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 6,
              notaMinima: 2175
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 7,
              notaMinima: 2937
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 4,
              notaMinima: 3296
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 2405 pontos; em 2025: 3544 pontos (alta de 1139 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (26.00 candidatos por vaga)."
    },
    {
      id: 36,
      nome: "Pedagogia - licenciatura (Noturno)",
      modalidade: "Licenciatura",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 92,
              notaMinima: 2141
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 118,
              notaMinima: 2448
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 7,
              notaMinima: 1737
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 80,
              notaMinima: 2560
            },
            {
              tipo: "Escola Pública",
              vagas: 11,
              candidatos: 105,
              notaMinima: 2584
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 11,
              notaMinima: 2458
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 66,
              notaMinima: 1629
            },
            {
              tipo: "Escola Pública",
              vagas: 11,
              candidatos: 78,
              notaMinima: 2569
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 6,
              notaMinima: 2827
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 26,
              candidatos: 38,
              notaMinima: 202
            },
            {
              tipo: "Escola Pública",
              vagas: 21,
              candidatos: 50,
              notaMinima: 2423
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 4,
              notaMinima: 2072
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 45,
              notaMinima: 3166
            },
            {
              tipo: "Escola Pública",
              vagas: 10,
              candidatos: 59,
              notaMinima: 3026
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 8,
              notaMinima: 2576
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 20,
              candidatos: 36,
              notaMinima: 2491
            },
            {
              tipo: "Escola Pública",
              vagas: 21,
              candidatos: 60,
              notaMinima: 2251
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 4,
              notaMinima: 1310
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 4,
              notaMinima: 1912
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 20,
              candidatos: 140,
              notaMinima: 3199
            },
            {
              tipo: "Escola Pública",
              vagas: 21,
              candidatos: 258,
              notaMinima: 2796
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 20,
              notaMinima: 1770
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 7,
              notaMinima: 2306
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 3,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 20,
              candidatos: 94,
              notaMinima: 3158
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 231,
              notaMinima: 2908
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 13,
              notaMinima: 2048
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 9,
              notaMinima: 2258
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 5,
              notaMinima: 2010
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 20,
              candidatos: 89,
              notaMinima: 3117
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 164,
              notaMinima: 2872
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 5,
              candidatos: 16,
              notaMinima: 1967
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 7,
              notaMinima: 2891
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 4,
              notaMinima: 1303
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 2141 pontos; em 2025: 3117 pontos (alta de 976 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (23.43 candidatos por vaga)."
    },
    {
      id: 37,
      nome: "Psicologia - bacharelado",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 252,
              notaMinima: 4799
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 228,
              notaMinima: 4134
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 14,
              notaMinima: 3669
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 13,
              notaMinima: 3677
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 20,
              notaMinima: 3986
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2025 a 2025 (1 edição). Nota mínima da ampla concorrência em 2025: 4799 pontos. Em 2025 a maior concorrência foi na cota Escola Pública (57.00 candidatos por vaga). Sem dados nas edições de 2016, 2018, 2019, 2020, 2021: Curso não ofertado no vestibular de 2016."
    },
    {
      id: 38,
      nome: "Química - licenciatura",
      modalidade: "Licenciatura",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 24,
              notaMinima: 2418
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 28,
              notaMinima: 2563
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 34,
              notaMinima: 3100
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 16,
              notaMinima: 2437
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 27,
              notaMinima: 2761
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 14,
              notaMinima: 1819
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 12,
              notaMinima: 2017
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 8,
              notaMinima: 2003
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 6,
              candidatos: 10,
              notaMinima: 2103
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 3,
              notaMinima: 1926
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 11,
              notaMinima: 1494
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 6,
              notaMinima: 1710
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 35,
              notaMinima: 3123
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 40,
              notaMinima: 2484
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 29,
              notaMinima: 3505
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 19,
              notaMinima: 2398
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 3,
              notaMinima: 2564
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 18,
              notaMinima: 3074
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 17,
              notaMinima: 2389
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 2,
              notaMinima: 1913
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 2418 pontos; em 2025: 3074 pontos (alta de 656 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (5.67 candidatos por vaga)."
    },
    {
      id: 39,
      nome: "Química Tecnológica - bacharelado",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 30,
              notaMinima: 2656
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 14,
              notaMinima: 2214
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 19,
              notaMinima: 3162
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 13,
              notaMinima: 2583
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 5,
              candidatos: 24,
              notaMinima: 3154
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 10,
              notaMinima: 2324
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 29,
              notaMinima: 2718
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 12,
              notaMinima: 2254
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 6,
              candidatos: 19,
              notaMinima: 3600
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 11,
              notaMinima: 2761
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 12,
              notaMinima: 2504
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 11,
              notaMinima: 1633
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2538
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 9,
              notaMinima: 1787
            },
            {
              tipo: "Escola Pública",
              vagas: 9,
              candidatos: 4,
              notaMinima: 2526
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 7,
              notaMinima: 2233
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 9,
              notaMinima: 1449
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 1,
              notaMinima: 3157
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 9,
              notaMinima: 3279
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 10,
              notaMinima: 2499
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2718
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 2656 pontos; em 2025: 3279 pontos (alta de 623 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (3.33 candidatos por vaga)."
    },
    {
      id: 40,
      nome: "Serviço Social (Matutino)",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 79,
              notaMinima: 2916
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 81,
              notaMinima: 2556
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 10,
              notaMinima: 2514
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 56,
              notaMinima: 3076
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 52,
              notaMinima: 2786
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 3,
              notaMinima: 3272
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 68,
              notaMinima: 3266
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 58,
              notaMinima: 2725
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 7,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 16,
              candidatos: 50,
              notaMinima: 2867
            },
            {
              tipo: "Escola Pública",
              vagas: 14,
              candidatos: 42,
              notaMinima: 2751
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 7,
              notaMinima: 2451
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 33,
              notaMinima: 3886
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 44,
              notaMinima: 3108
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 5,
              notaMinima: 2908
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 17,
              notaMinima: 2476
            },
            {
              tipo: "Escola Pública",
              vagas: 13,
              candidatos: 18,
              notaMinima: 1226
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: 2750
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 2,
              notaMinima: 1705
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 17,
              notaMinima: 2732
            },
            {
              tipo: "Escola Pública",
              vagas: 13,
              candidatos: 25,
              notaMinima: 2023
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: 2287
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2029
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 12,
              notaMinima: 1888
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 15,
              notaMinima: 1922
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: 2662
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: 3393
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 13,
              notaMinima: 2236
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 10,
              notaMinima: 1930
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: 2103
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 1863
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 2,
              notaMinima: 1467
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 2916 pontos; em 2025: 2236 pontos (queda de 680 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (2.50 candidatos por vaga)."
    },
    {
      id: 41,
      nome: "Turismo",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 40,
              notaMinima: 2223
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 13,
              notaMinima: 1900
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 3,
              notaMinima: 2209
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 18,
              notaMinima: 2387
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 14,
              notaMinima: 1932
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: 2181
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 25,
              notaMinima: 2619
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 18,
              notaMinima: 2399
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: 1117
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 15,
              candidatos: 14,
              notaMinima: 1656
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 7,
              notaMinima: 2161
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 7,
              candidatos: 8,
              notaMinima: 2243
            },
            {
              tipo: "Escola Pública",
              vagas: 6,
              candidatos: 5,
              notaMinima: 2184
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2602
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 10,
              notaMinima: 1759
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 9,
              notaMinima: 1960
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 3,
              notaMinima: 1848
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 1759
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 7,
              notaMinima: 1406
            },
            {
              tipo: "Escola Pública",
              vagas: 12,
              candidatos: 8,
              notaMinima: 2091
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2767
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 6,
              notaMinima: 2434
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 7,
              notaMinima: 2539
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 2,
              notaMinima: 2797
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 4,
              notaMinima: 1987
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 1,
              notaMinima: 1737
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 2223 pontos; em 2025: 1987 pontos (queda de 236 pontos). Em 2025 a maior concorrência foi na cota Universal (0.36 candidatos por vaga)."
    },
    {
      id: 42,
      nome: "Zootecnia",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2016,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 80,
              notaMinima: 2705
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 70,
              notaMinima: 2406
            }
          ]
        },
        {
          ano: 2018,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 68,
              notaMinima: 2919
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 52,
              notaMinima: 2220
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 5,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2019,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 9,
              candidatos: 67,
              notaMinima: 2899
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 67,
              notaMinima: 2645
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2020,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 17,
              candidatos: 65,
              notaMinima: 2536
            },
            {
              tipo: "Escola Pública",
              vagas: 14,
              candidatos: 44,
              notaMinima: 2208
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 3,
              notaMinima: 1548
            }
          ]
        },
        {
          ano: 2021,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 8,
              candidatos: 66,
              notaMinima: 3008
            },
            {
              tipo: "Escola Pública",
              vagas: 7,
              candidatos: 50,
              notaMinima: 2658
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2109
            }
          ]
        },
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 50,
              notaMinima: 2794
            },
            {
              tipo: "Escola Pública",
              vagas: 14,
              candidatos: 59,
              notaMinima: 2251
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: 2370
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: 1242
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 13,
              candidatos: 42,
              notaMinima: 2857
            },
            {
              tipo: "Escola Pública",
              vagas: 14,
              candidatos: 58,
              notaMinima: 2419
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: 2596
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: 4032
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2174
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 47,
              notaMinima: 3033
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 50,
              notaMinima: 2601
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 5,
              notaMinima: 2138
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 1,
              notaMinima: 1902
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 2,
              notaMinima: 1924
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 14,
              candidatos: 66,
              notaMinima: 3380
            },
            {
              tipo: "Escola Pública",
              vagas: 5,
              candidatos: 58,
              notaMinima: 2902
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 4,
              candidatos: 3,
              notaMinima: 2080
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 2,
              notaMinima: 2368
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2109
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2016 a 2025 (9 edições). Nota mínima da ampla concorrência em 2016: 2705 pontos; em 2025: 3380 pontos (alta de 675 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (11.60 candidatos por vaga)."
    },
    {
      id: 43,
      nome: "Ciências da Computação",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [],
      analise: "Sem dados nas edições de 2016, 2017, 2018, 2019, 2020, 2021: Não ofertado como curso independente neste edital (Ver Engenharia de Computação/Software)."
    },
    {
      id: 44,
      nome: "Psicologia",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [],
      analise: "Sem dados nas edições de 2017: Não listado neste informativo específico de 2017."
    },
    {
      id: 45,
      nome: "Letras - licenciatura (Vespertino)",
      modalidade: "Licenciatura",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 22,
              notaMinima: 1402
            },
            {
              tipo: "Escola Pública",
              vagas: 24,
              candidatos: 11,
              notaMinima: 1402
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 3,
              notaMinima: 1984
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 49,
              notaMinima: 2123
            },
            {
              tipo: "Escola Pública",
              vagas: 24,
              candidatos: 30,
              notaMinima: 1936
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 3,
              notaMinima: 3741
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 2,
              notaMinima: 1767
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 35,
              notaMinima: 1106
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 27,
              notaMinima: 1604
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 3,
              notaMinima: 511
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: 3057
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 39,
              notaMinima: 1896
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 16,
              notaMinima: 1371
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: null,
              notaMinima: null
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 5,
              notaMinima: 1792
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 2,
              notaMinima: 1670
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2022 a 2025 (4 edições). Nota mínima da ampla concorrência em 2022: 1402 pontos; em 2025: 1896 pontos (alta de 494 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (2.00 candidatos por vaga)."
    },
    {
      id: 46,
      nome: "Letras - licenciatura (Noturno)",
      modalidade: "Licenciatura",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 32,
              notaMinima: 2531
            },
            {
              tipo: "Escola Pública",
              vagas: 24,
              candidatos: 35,
              notaMinima: 842
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 2,
              notaMinima: 3116
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: 2737
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 2,
              notaMinima: 1584
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 76,
              notaMinima: 3155
            },
            {
              tipo: "Escola Pública",
              vagas: 24,
              candidatos: 109,
              notaMinima: 2726
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 13,
              notaMinima: 1501
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 6,
              notaMinima: 2473
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 1,
              notaMinima: 1933
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 81,
              notaMinima: 3198
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 82,
              notaMinima: 2578
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 13,
              notaMinima: 2319
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 1,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 1,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 24,
              candidatos: 55,
              notaMinima: 3196
            },
            {
              tipo: "Escola Pública",
              vagas: 8,
              candidatos: 55,
              notaMinima: 2740
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 6,
              candidatos: 5,
              notaMinima: 1616
            },
            {
              tipo: "Negros",
              vagas: 3,
              candidatos: 6,
              notaMinima: 2321
            },
            {
              tipo: "PcD",
              vagas: 3,
              candidatos: 6,
              notaMinima: 1535
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2022 a 2025 (4 edições). Nota mínima da ampla concorrência em 2022: 2531 pontos; em 2025: 3196 pontos (alta de 665 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (6.88 candidatos por vaga)."
    },
    {
      id: 47,
      nome: "Serviço Social (Noturno)",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2022,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 10,
              candidatos: 37,
              notaMinima: 2979
            },
            {
              tipo: "Escola Pública",
              vagas: 11,
              candidatos: 47,
              notaMinima: 2661
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 4,
              notaMinima: 2044
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 2,
              notaMinima: 2970
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 1,
              notaMinima: 1867
            }
          ]
        },
        {
          ano: 2023,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 10,
              candidatos: 21,
              notaMinima: 2855
            },
            {
              tipo: "Escola Pública",
              vagas: 11,
              candidatos: 28,
              notaMinima: 2397
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 3,
              notaMinima: 2119
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: null
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 1,
              notaMinima: 1709
            }
          ]
        },
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 20,
              notaMinima: 3053
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 28,
              notaMinima: 2661
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 3,
              notaMinima: 1899
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: 4037
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: null,
              notaMinima: null
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 14,
              notaMinima: 2837
            },
            {
              tipo: "Escola Pública",
              vagas: 3,
              candidatos: 17,
              notaMinima: 2605
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 5,
              notaMinima: 2526
            },
            {
              tipo: "Negros",
              vagas: 1,
              candidatos: 1,
              notaMinima: 3249
            },
            {
              tipo: "PcD",
              vagas: 1,
              candidatos: 1,
              notaMinima: 2028
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2022 a 2025 (4 edições). Nota mínima da ampla concorrência em 2022: 2979 pontos; em 2025: 2837 pontos (queda de 142 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (5.67 candidatos por vaga)."
    },
    {
      id: 48,
      nome: "Nutrição - bacharelado",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2024,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 116,
              notaMinima: 3652
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 133,
              notaMinima: 3326
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 8,
              notaMinima: 2621
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 3,
              notaMinima: 2477
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 3,
              notaMinima: 1816
            }
          ]
        },
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 92,
              notaMinima: 4006
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 90,
              notaMinima: 3483
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 10,
              notaMinima: 2628
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 4,
              notaMinima: 2525
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 5,
              notaMinima: 2736
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2024 a 2025 (2 edições). Nota mínima da ampla concorrência em 2024: 3652 pontos; em 2025: 4006 pontos (alta de 354 pontos). Em 2025 a maior concorrência foi na cota Escola Pública (22.50 candidatos por vaga)."
    },
    {
      id: 49,
      nome: "Arquitetura e Urbanismo - bacharelado",
      modalidade: "Bacharelado",
      salariosAtuais: [],
      cotas: [
        {
          ano: 2025,
          tipoCota: [
            {
              tipo: "Universal",
              vagas: 11,
              candidatos: 119,
              notaMinima: 4502
            },
            {
              tipo: "Escola Pública",
              vagas: 4,
              candidatos: 71,
              notaMinima: 3715
            },
            {
              tipo: "Escola Pública - Negros",
              vagas: 3,
              candidatos: 3,
              notaMinima: 2870
            },
            {
              tipo: "Negros",
              vagas: 2,
              candidatos: 5,
              notaMinima: 3083
            },
            {
              tipo: "PcD",
              vagas: 2,
              candidatos: 1,
              notaMinima: 2874
            }
          ]
        }
      ],
      analise: "Histórico disponível de 2025 a 2025 (1 edição). Nota mínima da ampla concorrência em 2025: 4502 pontos. Em 2025 a maior concorrência foi na cota Escola Pública (17.75 candidatos por vaga)."
    }
  ]
};
