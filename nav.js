/**
 * Navegação lateral compartilhada por todas as páginas do site.
 * Mantém um único ponto de verdade para os links dos cursos.
 */

export const MENU = [
  {
    grupo: "UTFPR-PG",
    itens: [
      { href: "curso1.html", nome: "Ciências Biológicas" },
      { href: "curso2.html", nome: "Engenharia de Produção" },
      { href: "curso3.html", nome: "Análise e Desenv. de Sistemas" },
      { href: "curso4.html", nome: "Engenharia Mecânica" },
      { href: "curso5.html", nome: "Automação Industrial" },
      { href: "curso6.html", nome: "Ciência da Computação" },
    ],
  },
  {
    grupo: "UEPG",
    itens: [
      { href: "curso11.html", nome: "Medicina" },
      { href: "curso22.html", nome: "Direito" },
      { href: "curso33.html", nome: "Engenharia de Software" },
      { href: "curso44.html", nome: "Administração" },
      { href: "curso55.html", nome: "Farmácia" },
      { href: "curso66.html", nome: "Engenharia de Computação" },
    ],
  },
];

function paginaAtual() {
  const arquivo = window.location.pathname.split("/").pop();
  return arquivo === "" ? "index.html" : arquivo;
}

function link(href, texto, seta) {
  const a = document.createElement("a");
  a.href = href;
  a.textContent = texto;
  if (href === paginaAtual()) a.classList.add("ativo");
  if (seta) {
    const span = document.createElement("span");
    span.className = "seta";
    span.textContent = "▾";
    a.appendChild(span);
  }
  return a;
}

export function montarNavegacao() {
  const topo = document.createElement("section");
  topo.className = "topo";
  const botao = document.createElement("button");
  botao.className = "btn-menu";
  botao.type = "button";
  botao.setAttribute("aria-label", "Abrir menu de navegação");
  botao.textContent = "☰";
  topo.appendChild(botao);

  const backdrop = document.createElement("div");
  backdrop.className = "menu-backdrop";

  const painel = document.createElement("nav");
  painel.id = "menu-lateral";
  painel.setAttribute("aria-label", "Navegação principal");

  const fechar = document.createElement("button");
  fechar.className = "fechar";
  fechar.type = "button";
  fechar.setAttribute("aria-label", "Fechar menu");
  fechar.textContent = "✖";

  const marca = document.createElement("p");
  marca.className = "marca";
  marca.textContent = "Cotas Públicas · 2016–2025";

  const lista = document.createElement("ul");
  lista.className = "nav";

  [
    { href: "index.html", nome: "Início" },
    { href: "ranking.html", nome: "Ranking" },
    { href: "comparar.html", nome: "Comparar cursos" },
    { href: "sobre.html", nome: "Sobre" },
  ].forEach((item) => {
    const li = document.createElement("li");
    li.appendChild(link(item.href, item.nome));
    lista.appendChild(li);
  });

  MENU.forEach((grupo) => {
    const li = document.createElement("li");
    li.className = "menu-item-has-children";
    const gatilho = document.createElement("a");
    gatilho.href = "#";
    gatilho.className = "menu-link";
    gatilho.textContent = grupo.grupo;
    const seta = document.createElement("span");
    seta.className = "seta";
    seta.textContent = "▾";
    gatilho.appendChild(seta);

    const submenu = document.createElement("ul");
    submenu.className = "submenu";
    grupo.itens.forEach((item) => {
      const subLi = document.createElement("li");
      subLi.appendChild(link(item.href, item.nome));
      submenu.appendChild(subLi);
      if (item.href === paginaAtual()) li.classList.add("active");
    });

    gatilho.addEventListener("click", (evento) => {
      evento.preventDefault();
      painel.querySelectorAll(".menu-item-has-children").forEach((outro) => {
        if (outro !== li) outro.classList.remove("active");
      });
      li.classList.toggle("active");
    });

    li.append(gatilho, submenu);
    lista.appendChild(li);
  });

  painel.append(fechar, marca, lista);
  document.body.prepend(topo, backdrop, painel);

  const abrir = () => {
    painel.classList.add("ativo");
    backdrop.classList.add("ativo");
  };
  const fecharMenu = () => {
    painel.classList.remove("ativo");
    backdrop.classList.remove("ativo");
  };
  botao.addEventListener("click", abrir);
  fechar.addEventListener("click", fecharMenu);
  backdrop.addEventListener("click", fecharMenu);
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") fecharMenu();
  });
}

export function montarRodape() {
  const rodape = document.createElement("footer");
  rodape.className = "site-footer";
  rodape.innerHTML = `
    <div class="container footer-container">
      <div class="footer-col">
        <p class="footer-title">Concorrência em Cotas Públicas</p>
        <p class="footer-sub">UEPG / UTFPR-PG · 2016–2025 · trabalho acadêmico</p>
      </div>
      <div class="footer-col text-end">
        <p class="footer-sub">
          Dados de concorrência: informativos oficiais (CPS-UEPG e UTFPR-PG)<br />
          Salário médio: Portal Salário · CAGED/MTE e médias de mercado
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 — Todos os direitos reservados</p>
    </div>`;
  document.body.appendChild(rodape);
}
