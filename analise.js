/**
 * Gera a análise objetiva exibida ao lado de cada gráfico de linha:
 * o que a série mostra, o que explica os movimentos e o que tende a acontecer.
 * Todos os números saem dos próprios dados (db.js / db_utfpr.js).
 */
import { correlacao, desvioPadrao, forcaCorrelacao, media, num } from "./util.js";

const forte = (texto) => `<span class="q-highlight">${texto}</span>`;

/** Inclinação da reta de mínimos quadrados (variação por ano). */
export function tendencia(xs, ys) {
  const mx = media(xs);
  const my = media(ys);
  const den = xs.reduce((s, x) => s + (x - mx) ** 2, 0);
  return den === 0 ? 0 : xs.reduce((s, x, i) => s + (x - mx) * (ys[i] - my), 0) / den;
}

function resumoSerie(pontos) {
  const cv = pontos.map((p) => p.concorrencia);
  const anos = pontos.map((p) => p.ano);
  const m = media(cv);
  return {
    pontos,
    anos,
    n: pontos.length,
    media: m,
    desvio: desvioPadrao(cv),
    variacaoRelativa: m === 0 ? 0 : (desvioPadrao(cv) / m) * 100,
    primeiro: pontos[0],
    ultimo: pontos[pontos.length - 1],
    pico: pontos.reduce((a, b) => (b.concorrencia > a.concorrencia ? b : a)),
    vale: pontos.reduce((a, b) => (b.concorrencia < a.concorrencia ? b : a)),
    inclinacao: tendencia(anos, cv),
    rVagas: pontos.length > 2 ? correlacao(cv, pontos.map((p) => p.vagas)) : null,
    rCandidatos: pontos.length > 2 ? correlacao(cv, pontos.map((p) => p.candidatos)) : null,
  };
}

function variacao(serie) {
  const { primeiro, ultimo } = serie;
  if (!primeiro.concorrencia) return 0;
  return ((ultimo.concorrencia - primeiro.concorrencia) / primeiro.concorrencia) * 100;
}

function textoMotor(serie, rotulo) {
  const { rVagas, rCandidatos, pico } = serie;
  if (rVagas == null) {
    return (
      `Com ${serie.n} edições não há série suficiente para separar efeito de oferta e de procura. ` +
      `No ano de maior pressão (${pico.ano}) foram ${pico.candidatos} candidatos para ` +
      `${pico.vagas} vagas.`
    );
  }
  const pesoVagas = Math.abs(rVagas);
  const pesoCandidatos = Math.abs(rCandidatos);
  const base =
    `Na cota ${rotulo}, a correlação entre candidatos por vaga e número de vagas é ` +
    `${forte(num(rVagas))} e entre candidatos por vaga e total de inscritos é ` +
    `${forte(num(rCandidatos))}. `;
  if (pesoVagas >= pesoCandidatos + 0.15) {
    return (
      base +
      `Ou seja, os degraus do gráfico vêm principalmente da <strong>oferta de vagas</strong>: ` +
      `quando a instituição reduz vagas a linha sobe, mesmo sem aumento de procura. O pico de ` +
      `${pico.ano} (${num(pico.concorrencia)}) é exatamente isso — ${pico.candidatos} inscritos ` +
      `disputando apenas ${pico.vagas} vagas.`
    );
  }
  if (pesoCandidatos >= pesoVagas + 0.15) {
    return (
      base +
      `Isto é, o movimento da linha acompanha a <strong>procura real</strong>: sobe porque mais ` +
      `gente se inscreve, não porque faltam vagas. No pico de ${pico.ano} foram ` +
      `${pico.candidatos} inscritos para ${pico.vagas} vagas.`
    );
  }
  return (
    base +
    "Os dois fatores pesam de forma parecida: variações de vagas e de inscritos se combinam, " +
    "então nenhum deles explica sozinho o desenho da linha."
  );
}

function textoTendencia(serie, rotulo) {
  const delta = variacao(serie);
  const passo = serie.inclinacao;
  const direcao = passo > 0.05 ? "alta" : passo < -0.05 ? "queda" : "estabilidade";
  const projecao = Math.max(0, serie.ultimo.concorrencia + passo);
  const historico =
    `Na cota ${rotulo}, a linha saiu de ${num(serie.primeiro.concorrencia)} em ` +
    `${serie.primeiro.ano} para ${forte(num(serie.ultimo.concorrencia))} em ${serie.ultimo.ano} ` +
    `(${num(delta)}%), com pico de ${num(serie.pico.concorrencia)} em ${serie.pico.ano} e mínimo ` +
    `de ${num(serie.vale.concorrencia)} em ${serie.vale.ano}. `;
  const inclinacaoTexto =
    `A reta de tendência avança ${num(passo)} candidato(s) por vaga a cada ano — ${direcao} ` +
    `no período. `;
  const estabilidade = serie.variacaoRelativa;
  const ressalva =
    estabilidade > 40
      ? `Como a série oscila muito (${num(estabilidade)}% de variação relativa), a projeção é ` +
        `frágil: mantido o padrão recente e a oferta atual de vagas, o próximo processo tende a ` +
        `ficar em torno de ${num(projecao)} candidatos por vaga, mas um corte de vagas pode ` +
        `dobrar esse valor.`
      : `A série é relativamente estável (${num(estabilidade)}% de variação relativa), então ` +
        `mantida a oferta atual de vagas o próximo processo tende a ficar próximo de ` +
        `${num(projecao)} candidatos por vaga.`;
  return historico + inclinacaoTexto + ressalva;
}

function textoNota(pontos, extra = "") {
  const comNota = pontos.filter((p) => p.notaMinima != null);
  if (comNota.length < 3) {
    return "Não há registros suficientes de nota mínima para avaliar a relação neste recorte.";
  }
  const r = correlacao(
    comNota.map((p) => p.concorrencia),
    comNota.map((p) => p.notaMinima),
  );
  const leitura =
    Math.abs(r) >= 0.4
      ? "quando a disputa aumenta, a nota de corte acompanha"
      : "a nota de corte se move de forma independente da razão candidatos por vaga, porque " +
        "depende do desempenho do topo da lista e da dificuldade da prova, não do volume de inscritos";
  return (
    `A correlação de Pearson entre candidatos por vaga e nota mínima é ${forte(num(r))} ` +
    `(${forcaCorrelacao(r)}) em ${comNota.length} registros: ${leitura}. ${extra}`
  );
}

/** Análise do gráfico de uma página de curso (linhas = tipos de cota). */
export function analiseCurso(curso, dados) {
  const semTotal = dados.filter((l) => l.tipo !== "Total");
  const tipos = [...new Set(semTotal.map((l) => l.tipo))];
  const series = tipos
    .map((tipo) => ({
      tipo,
      ...resumoSerie(
        semTotal.filter((l) => l.tipo === tipo).sort((a, b) => a.ano - b.ano),
      ),
    }))
    .sort((a, b) => b.media - a.media);
  const principal = series[0];
  const menor = series[series.length - 1];
  const blocos = [];

  if (series.length > 1) {
    const ranking = series
      .map((s) => `${s.tipo} ${num(s.media)}`)
      .join(" · ");
    blocos.push({
      titulo: "Como as linhas se posicionam",
      texto:
        `A linha mais alta é ${forte(principal.tipo)} (média de ${num(principal.media)} ` +
        `candidatos por vaga) e a mais baixa é ${menor.tipo} (${num(menor.media)}), uma ` +
        `diferença de ${num(principal.media / (menor.media || 1))}x. Médias por cota: ` +
        `${ranking}. As cotas de reserva ficam comprimidas na base do gráfico porque recebem ` +
        `menos inscritos, e não porque tenham mais vagas.`,
    });
  } else {
    blocos.push({
      titulo: "O que a linha mostra",
      texto:
        `O gráfico traz apenas a cota ${forte(principal.tipo)}, com média de ` +
        `${num(principal.media)} candidatos por vaga entre ${principal.primeiro.ano} e ` +
        `${principal.ultimo.ano}. É a referência de disputa do curso: cada vaga foi procurada, ` +
        `em média, por ${num(principal.media)} candidatos.`,
    });
  }

  blocos.push({
    titulo: "Por que a linha sobe e desce",
    texto: textoMotor(principal, principal.tipo),
  });

  blocos.push({
    titulo: "O que tende a acontecer",
    texto: textoTendencia(principal, principal.tipo),
  });

  const emAlta = series.filter((s) => s.n > 2 && s.inclinacao > 0.05).map((s) => s.tipo);
  const emQueda = series.filter((s) => s.n > 2 && s.inclinacao < -0.05).map((s) => s.tipo);
  if (series.length > 1 && (emAlta.length || emQueda.length)) {
    blocos.push({
      titulo: "Movimento por cota",
      texto:
        (emAlta.length
          ? `Em trajetória de alta: ${forte(emAlta.join(", "))}. `
          : "Nenhuma cota está em trajetória de alta. ") +
        (emQueda.length
          ? `Em queda: ${emQueda.join(", ")}. `
          : "Nenhuma cota está em queda consistente. ") +
        "Cotas criadas mais tarde (Negros e PcD) partem de patamar baixo e sobem à medida que " +
        "se tornam conhecidas pelos candidatos.",
    });
  }

  blocos.push({
    titulo: "Concorrência e nota mínima",
    texto: textoNota(semTotal),
  });

  const subutilizadas = series.filter((s) => s.media < 1);
  const lacunas = series.filter((s) => s.n < principal.n);
  const serieCurta = principal.n <= 4;
  if (subutilizadas.length || lacunas.length || serieCurta) {
    blocos.push({
      titulo: "Ressalvas de leitura",
      texto:
        (serieCurta
          ? `A série tem apenas ${principal.n} edições (${principal.primeiro.ano}–` +
            `${principal.ultimo.ano}), o que é pouco para afirmar tendência: correlações ` +
            "calculadas com tão poucos pontos oscilam muito. "
          : "") +
        (subutilizadas.length
          ? `Média abaixo de 1 candidato por vaga em ${subutilizadas
              .map((s) => s.tipo)
              .join(", ")}: nesses anos houve menos inscritos do que vagas, com risco de vagas ` +
            "não preenchidas. "
          : "") +
        (lacunas.length
          ? `A série é incompleta em ${lacunas
              .map((s) => `${s.tipo} (${s.n} de ${principal.n} edições)`)
              .join(", ")} — o informativo oficial não traz vagas ou inscritos em todos os anos, ` +
            "então as linhas têm interrupções."
          : ""),
    });
  }

  return blocos;
}

/** Análise do gráfico principal (linhas = cursos, para uma cota escolhida). */
export function analisePainel(linhas, cursosVisiveis, cota) {
  const visiveis = linhas.filter((l) => cursosVisiveis.includes(l.curso));
  if (visiveis.length < 2) {
    return [
      {
        titulo: "Selecione ao menos dois cursos",
        texto:
          "A análise compara as linhas exibidas no gráfico. Marque mais cursos nos filtros " +
          "acima para gerar a leitura automática.",
      },
    ];
  }

  const series = cursosVisiveis
    .map((nome) => {
      const pontos = visiveis
        .filter((l) => l.curso === nome)
        .sort((a, b) => a.ano - b.ano);
      return pontos.length ? { curso: nome, ...resumoSerie(pontos) } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.media - a.media);

  const lider = series[0];
  const ultimo = series[series.length - 1];
  const anos = [...new Set(visiveis.map((l) => l.ano))].sort((a, b) => a - b);
  const porAno = anos.map((ano) => ({
    ano,
    media: media(visiveis.filter((l) => l.ano === ano).map((l) => l.concorrencia)),
  }));
  const anoPico = porAno.reduce((a, b) => (b.media > a.media ? b : a));
  const anoVale = porAno.reduce((a, b) => (b.media < a.media ? b : a));
  const maisEstavel = series.reduce((a, b) => (b.variacaoRelativa < a.variacaoRelativa ? b : a));
  const maisVolatil = series.reduce((a, b) => (b.variacaoRelativa > a.variacaoRelativa ? b : a));
  const emAlta = series.filter((s) => s.inclinacao > 0.05);
  const emQueda = series.filter((s) => s.inclinacao < -0.05);
  const rVagas = correlacao(
    visiveis.map((l) => l.concorrencia),
    visiveis.map((l) => l.vagas),
  );

  return [
    {
      titulo: "Quem está no topo e na base",
      texto:
        `Na cota ${cota}, ${forte(lider.curso)} lidera com média de ${num(lider.media)} ` +
        `candidatos por vaga, contra ${num(ultimo.media)} de ${ultimo.curso} — ` +
        `${num(lider.media / (ultimo.media || 1))}x de diferença. Essa distância faz as linhas ` +
        "de menor disputa parecerem achatadas na base do gráfico; use o filtro de cursos para " +
        "compará-las em escala própria.",
    },
    {
      titulo: "Qual ano concentrou mais disputa",
      texto:
        `A média dos cursos exibidos foi maior em ${forte(String(anoPico.ano))} ` +
        `(${num(anoPico.media)} candidatos por vaga) e menor em ${anoVale.ano} ` +
        `(${num(anoVale.media)}). Anos de pico coincidem com edições de menor oferta de vagas, ` +
        "por isso vários cursos sobem e descem juntos no mesmo ano.",
    },
    {
      titulo: "O que explica os movimentos",
      texto:
        `Considerando todos os pontos exibidos, a correlação entre candidatos por vaga e número ` +
        `de vagas é ${forte(num(rVagas))} (${forcaCorrelacao(rVagas)} e ` +
        `${rVagas < 0 ? "negativa" : "positiva"}). ` +
        (rVagas < -0.3
          ? "Como é negativa, boa parte da variação vem da oferta: cortes de vagas elevam a " +
            "concorrência mesmo com procura estável."
          : "A oferta de vagas explica pouco, então as diferenças vêm principalmente do volume " +
            "de inscritos de cada curso."),
    },
    {
      titulo: "Estabilidade das linhas",
      texto:
        `${forte(maisEstavel.curso)} é a linha mais regular (${num(
          maisEstavel.variacaoRelativa,
        )}% de variação relativa) e ${maisVolatil.curso} a mais instável ` +
        `(${num(maisVolatil.variacaoRelativa)}%). Séries muito instáveis dependem de decisões ` +
        "anuais de vagas, então uma alta isolada não indica mudança de interesse pelo curso.",
    },
    {
      titulo: "O que tende a acontecer",
      texto:
        (emAlta.length
          ? `Tendência de alta em ${forte(
              emAlta.map((s) => `${s.curso} (${num(s.inclinacao)}/ano)`).join(", "),
            )}. `
          : "Nenhum curso exibido está em tendência de alta. ") +
        (emQueda.length
          ? `Tendência de queda em ${emQueda
              .map((s) => `${s.curso} (${num(s.inclinacao)}/ano)`)
              .join(", ")}. `
          : "Nenhum curso exibido está em tendência de queda. ") +
        "Mantida a oferta atual de vagas, a projeção para o próximo processo é de " +
        series
          .slice(0, 3)
          .map(
            (s) =>
              `${s.curso} ~${num(Math.max(0, s.ultimo.concorrencia + s.inclinacao))}`,
          )
          .join(", ") +
        " candidatos por vaga.",
    },
    {
      titulo: "Concorrência e nota mínima",
      texto: textoNota(
        visiveis,
        "A nota de corte também sobe por efeito de melhoria geral do desempenho dos candidatos " +
          "ao longo dos anos, o que aparece mesmo em cursos com concorrência em queda.",
      ),
    },
  ];
}

const pct = (v) => `${num(v)}%`;

/** Análise objetiva do ranking de uma categoria (`catalogo.js`). */
export function analiseRanking(ordenados, categoria, formatar) {
  if (ordenados.length < 2) {
    return [
      {
        titulo: "Dados insuficientes",
        texto: "Não há cursos com esse indicador disponível para montar o ranking.",
      },
    ];
  }
  const primeiro = ordenados[0];
  const ultimo = ordenados[ordenados.length - 1];
  const valores = ordenados.map((r) => categoria.valor(r));
  const m = media(valores);
  const acimaDaMedia = ordenados.filter((r) =>
    categoria.melhor === "maior" ? categoria.valor(r) > m : categoria.valor(r) < m,
  );
  const rConcorrenciaSalario = correlacao(
    ordenados.map((r) => r.mediaConcorrencia),
    ordenados.map((r) => r.salario ?? 0),
  );
  const blocos = [
    {
      titulo: "O que este ranking mede",
      texto: `${categoria.descricao} Critério de ordenação: ${
        categoria.melhor === "maior" ? "quanto maior, melhor a posição" : "quanto menor, melhor a posição"
      }.`,
    },
    {
      titulo: "Quem lidera e por quê",
      texto:
        `${forte(primeiro.nome)} (${primeiro.sigla}) fica em 1º com ` +
        `${formatar(categoria.valor(primeiro))}, contra ${formatar(categoria.valor(ultimo))} do ` +
        `último colocado (${ultimo.nome}). A média dos ${ordenados.length} cursos é ` +
        `${formatar(m)} e ${
          acimaDaMedia.length === 1
            ? "apenas 1 curso fica melhor que ela"
            : `${acimaDaMedia.length} cursos ficam melhores que ela`
        } — quanto menos cursos acima da média, mais concentrado no topo está o ranking.`,
    },
  ];

  if (categoria.id === "concorrencia") {
    blocos.push({
      titulo: "Por que a ordem é essa",
      texto:
        `Concorrência é razão entre inscritos e vagas, então cursos pequenos aparecem mais alto ` +
        `mesmo com menos candidatos. ${primeiro.nome} recebe ` +
        `${num(primeiro.candidatosMedios)} inscritos por edição para ${num(primeiro.vagasMedias)} ` +
        `vagas; ${ultimo.nome} recebe ${num(ultimo.candidatosMedios)} para ` +
        `${num(ultimo.vagasMedias)}. Comparar UEPG e UTFPR no mesmo ranking exagera a diferença: ` +
        "os processos seletivos têm portes e calendários distintos.",
    });
    blocos.push({
      titulo: "O que tende a acontecer",
      texto: textoRankingTendencia(ordenados),
    });
  }

  if (categoria.id === "remuneracao" || categoria.id === "retorno") {
    blocos.push({
      titulo: "Salário explica a procura?",
      texto:
        `A correlação entre concorrência média e salário médio nos cursos listados é ` +
        `${forte(num(rConcorrenciaSalario))} (${forcaCorrelacao(rConcorrenciaSalario)}). ` +
        (Math.abs(rConcorrenciaSalario) < 0.4
          ? "Ou seja, remuneração não é o que determina a disputa: cursos de TI pagam entre os " +
            "maiores salários e ainda assim têm concorrência bem menor que Medicina, porque a " +
            "oferta de vagas em tecnologia cresceu e há muitas alternativas de formação."
          : "Ou seja, os cursos melhor pagos também tendem a ser os mais disputados neste recorte.") +
        " Os salários da UTFPR são estimativa do grupo, não fonte oficial — trate as posições " +
        "como aproximação.",
    });
  }

  if (categoria.id === "duracao" || categoria.id === "retorno") {
    blocos.push({
      titulo: "Duração e custo de oportunidade",
      texto:
        `Cursos curtos (tecnólogos de 3 anos) chegam ao mercado antes e por isso lideram o ` +
        `retorno por ano de curso, enquanto ${
          ordenados.find((r) => r.anosCurso >= 6)?.nome ?? "os cursos mais longos"
        } só remunera depois de 6 anos de formação. A leitura correta é: o ranking de duração ` +
        "mostra rapidez de entrada no mercado, não qualidade nem teto salarial da carreira.",
    });
  }

  if (categoria.id === "nota") {
    blocos.push({
      titulo: "Cuidado com as escalas",
      texto:
        "A UEPG divulga nota mínima em pontos do vestibular e a UTFPR em outra escala, então " +
        "compare apenas cursos da mesma instituição. Dentro da UEPG a nota acompanha o prestígio " +
        "do curso; na UTFPR ela varia mais com a dificuldade da prova do ano.",
    });
  }

  if (categoria.id === "crescimento" || categoria.id === "estabilidade") {
    blocos.push({
      titulo: "O que tende a acontecer",
      texto: textoRankingTendencia(ordenados),
    });
    blocos.push({
      titulo: "Por que umas linhas oscilam mais",
      texto:
        "Variação relativa alta quase sempre indica mudança de vagas entre edições, não perda de " +
        "interesse: quando a instituição corta vagas a concorrência salta em um ano e volta no " +
        "seguinte. Cursos com oferta estável (turmas fixas) aparecem no fim deste ranking.",
    });
  }

  return blocos;
}

function textoRankingTendencia(ordenados) {
  const alta = ordenados.filter((r) => r.inclinacao > 0.05);
  const queda = ordenados.filter((r) => r.inclinacao < -0.05);
  const destaque = [...ordenados].sort((a, b) => b.inclinacao - a.inclinacao)[0];
  const pior = [...ordenados].sort((a, b) => a.inclinacao - b.inclinacao)[0];
  return (
    `${alta.length} dos ${ordenados.length} cursos têm tendência de alta na concorrência e ` +
    `${queda.length} de queda. O avanço mais rápido é de ${forte(destaque.nome)} ` +
    `(${num(destaque.inclinacao)} candidatos por vaga a cada ano, projeção de ` +
    `${num(destaque.projecao)} no próximo processo) e a maior retração é de ${pior.nome} ` +
    `(${num(pior.inclinacao)}/ano, projeção de ${num(pior.projecao)}). Mantidas as vagas atuais, ` +
    "a tendência é as posições do topo continuarem as mesmas: as diferenças de patamar são " +
    "grandes demais para serem revertidas por uma única edição."
  );
}

/** Análise objetiva da comparação entre dois cursos. */
export function analiseComparacao(a, b, formatarMoeda) {
  const vantagemConcorrencia = a.mediaConcorrencia >= b.mediaConcorrencia ? a : b;
  const menosDisputado = vantagemConcorrencia === a ? b : a;
  const anosComuns = a.anos.filter((ano) => b.anos.includes(ano));
  const salarioMaior = (a.salario ?? 0) >= (b.salario ?? 0) ? a : b;
  const salarioMenor = salarioMaior === a ? b : a;
  const retornoMaior = (a.salarioPorAnoDeCurso ?? 0) >= (b.salarioPorAnoDeCurso ?? 0) ? a : b;
  const maisEstavel = a.variacaoRelativa <= b.variacaoRelativa ? a : b;
  const blocos = [];

  blocos.push({
    titulo: "Quem é mais difícil de entrar",
    texto:
      `${forte(vantagemConcorrencia.nome)} tem média de ` +
      `${num(vantagemConcorrencia.mediaConcorrencia)} candidatos por vaga contra ` +
      `${num(menosDisputado.mediaConcorrencia)} de ${menosDisputado.nome} — ` +
      `${num(
        vantagemConcorrencia.mediaConcorrencia / (menosDisputado.mediaConcorrencia || 1),
      )}x mais disputa. ` +
      (anosComuns.length
        ? `A comparação tem ${
            anosComuns.length === 1
              ? `apenas 1 edição em comum (${anosComuns[0]})`
              : `${anosComuns.length} edições em comum (${anosComuns[0]}–${anosComuns[anosComuns.length - 1]})`
          }; fora dessa janela cada curso tem histórico próprio.`
        : "Atenção: os dois cursos não têm nenhum ano em comum na base, então a comparação é " +
          "apenas de patamar médio, não de disputa simultânea."),
  });

  blocos.push({
    titulo: "Por que a diferença existe",
    texto:
      `${a.nome} recebe em média ${num(a.candidatosMedios)} inscritos para ` +
      `${num(a.vagasMedias)} vagas; ${b.nome}, ${num(b.candidatosMedios)} para ` +
      `${num(b.vagasMedias)}. ` +
      (a.vagasMedias < b.vagasMedias
        ? `A oferta menor de ${a.nome} amplifica a concorrência mesmo quando os dois têm procura parecida.`
        : `A oferta menor de ${b.nome} amplifica a concorrência mesmo quando os dois têm procura parecida.`) +
      (a.instituicao !== b.instituicao
        ? " Como são instituições diferentes (UEPG e UTFPR), parte da diferença vem do porte do " +
          "processo seletivo e do número de cotas divulgadas, não só da procura."
        : ""),
  });

  blocos.push({
    titulo: "Formação e retorno",
    texto:
      `${a.nome}: ${a.anosCurso} anos de curso e salário médio de ` +
      `${formatarMoeda(a.salario)} (${a.cargo}). ${b.nome}: ${b.anosCurso} anos e ` +
      `${formatarMoeda(b.salario)} (${b.cargo}). ${forte(salarioMaior.nome)} paga ` +
      `${num(((salarioMaior.salario - salarioMenor.salario) / (salarioMenor.salario || 1)) * 100)}% ` +
      `mais, e o melhor retorno por ano investido é de ${forte(retornoMaior.nome)} ` +
      `(${formatarMoeda(retornoMaior.salarioPorAnoDeCurso)} por ano de curso).`,
  });

  blocos.push({
    titulo: "O que aconteceu no período",
    texto:
      `${a.nome} saiu de ${num(a.concorrenciaInicial)} candidatos por vaga em ${a.anos[0]} para ` +
      `${num(a.concorrenciaAtual)} em ${a.anos[a.anos.length - 1]} (${pct(a.variacaoPeriodo)}), ` +
      `com pico de ${num(a.pico.concorrencia)} em ${a.pico.ano}. ${b.nome} foi de ` +
      `${num(b.concorrenciaInicial)} (${b.anos[0]}) para ${num(b.concorrenciaAtual)} ` +
      `(${b.anos[b.anos.length - 1]}, ${pct(b.variacaoPeriodo)}), com pico de ` +
      `${num(b.pico.concorrencia)} em ${b.pico.ano}.`,
  });

  blocos.push({
    titulo: "O que tende a acontecer",
    texto:
      `Pelas retas de tendência, ${a.nome} caminha ${num(a.inclinacao)} candidatos por vaga por ` +
      `ano (projeção de ${forte(num(a.projecao))} no próximo processo) e ${b.nome}, ` +
      `${num(b.inclinacao)}/ano (projeção de ${forte(num(b.projecao))}). ` +
      (Math.sign(a.inclinacao) === Math.sign(b.inclinacao)
        ? "Os dois se movem na mesma direção, o que sugere causa comum — mudança no calendário " +
          "e no total de vagas ofertadas pela instituição."
        : "Eles se movem em direções opostas, então a procura está migrando de um perfil de curso " +
          "para o outro.") +
      ` A comparação é mais confiável em ${maisEstavel.nome}, que oscila apenas ` +
      `${pct(maisEstavel.variacaoRelativa)} em torno da média.`,
  });

  blocos.push({
    titulo: "O que pode mudar esse quadro",
    texto:
      "Três fatores mexem no resultado do próximo processo: (1) corte ou criação de vagas — o " +
      "efeito mais forte e imediato, já que a concorrência é uma razão; (2) abertura de novas " +
      "cotas, que redistribui os inscritos entre linhas e reduz a disputa na ampla concorrência; " +
      "(3) mudança de turno ou de campus, que altera o público que se inscreve. Nenhum desses " +
      "fatores depende da procura pelo curso, por isso uma alta isolada não deve ser lida como " +
      "aumento de interesse.",
  });

  const curtas = [a, b].filter((r) => r.edicoes <= 4);
  if (curtas.length) {
    blocos.push({
      titulo: "Ressalva",
      texto:
        `${curtas.map((r) => `${r.nome} tem apenas ${r.edicoes} edições`).join(" e ")} na base ` +
        "oficial, o que limita tendência e correlação. Os salários da UTFPR são estimativa do " +
        "grupo a partir de médias de mercado, não fonte oficial.",
    });
  }

  return blocos;
}

/**
 * Painel lateral com a análise do gráfico e botão de mostrar/ocultar.
 * `montarBlocos` é chamada a cada atualização para permitir análise dinâmica.
 */
export function criarPainelAnalise(montarBlocos, { titulo = "Análise do gráfico" } = {}) {
  const painel = document.createElement("aside");
  painel.className = "analise-painel";

  const cabecalho = document.createElement("div");
  cabecalho.className = "analise-cabecalho";
  const h4 = document.createElement("h4");
  h4.textContent = titulo;
  const botao = document.createElement("button");
  botao.type = "button";
  botao.className = "analise-toggle";
  botao.textContent = "Ocultar";
  botao.setAttribute("aria-expanded", "true");
  cabecalho.append(h4, botao);

  const corpo = document.createElement("div");
  corpo.className = "analise-corpo";
  painel.append(cabecalho, corpo);

  botao.addEventListener("click", () => {
    const oculto = painel.classList.toggle("recolhido");
    botao.textContent = oculto ? "Mostrar" : "Ocultar";
    botao.setAttribute("aria-expanded", String(!oculto));
  });

  const atualizar = () => {
    corpo.textContent = "";
    montarBlocos().forEach((bloco) => {
      const item = document.createElement("article");
      item.className = "analise-bloco";
      const titulo = document.createElement("h5");
      titulo.textContent = bloco.titulo;
      const texto = document.createElement("p");
      texto.innerHTML = bloco.texto;
      item.append(titulo, texto);
      corpo.appendChild(item);
    });
  };

  atualizar();
  return { painel, atualizar };
}
