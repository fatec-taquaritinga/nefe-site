function fixed() {
  var e;
  e = window.scrollY, e >= innerHeight - 74 && innerWidth > 600 ? (nav.classList.add("fixo"), nav.classList.remove("aberto"), abre.classList.remove("fechado"), abre.setAttribute("src", "img/menu.svg"), menu = 0) : innerWidth > 600 ? (nav.classList.remove("fixo"), nav.classList.remove("aberto"), abre.classList.remove("fechado"), abre.setAttribute("src", "img/menu.svg"), menu = 0) : nav.classList.remove("fixo"), e > innerHeight / 2 ? voltar.classList.contains("mostra") || (voltar.classList.add("mostra"), console.log("addMostra")) : voltar.classList.contains("mostra") && (voltar.classList.remove("mostra"), console.log("remMostra"))
}
var nav = document.querySelector("nav"),
  li = document.querySelectorAll("ul a li"),
  main = document.querySelector("main"),
  abre = document.querySelector(".abre"),
  voltar = document.querySelector(".voltar"),
  i = 0,
  menu = 0;
window.addEventListener("scroll", fixed), window.onresize = fixed, abre.onclick = function () {
  innerWidth < 600 && menu === 0 ? (nav.classList.add("aberto"), abre.classList.add("fechado"), abre.setAttribute("src", "img/close.svg"), menu = 1) : innerWidth < 600 && (nav.classList.remove("aberto"), abre.classList.remove("fechado"), abre.setAttribute("src", "img/menu.svg"), menu = 0)
};
for (var j = 0; j < li.length; j++) li[j].onclick = function () {
  nav.classList.remove("aberto"), abre.classList.remove("fechado"), abre.setAttribute("src", "img/menu.svg"), menu = 0
};
smoothScroll.init();
