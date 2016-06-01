var nav = document.querySelector("nav");
var li = document.querySelectorAll("ul a li")
var main = document.querySelector('main');
var abre = document.querySelector(".abre");
var voltar = document.querySelector(".voltar");
var i = 0;
var menu = 0;

function fixed() {
  var scrollPos;
  scrollPos = window.scrollY;
  if (scrollPos >= innerHeight - 74 && innerWidth > 600) {
    nav.classList.add("fixo");
    nav.classList.remove("aberto");
    abre.classList.remove("fechado");
    abre.setAttribute("src", "img/menu.svg");
    menu = 0;
  } else if (innerWidth > 600) {
    nav.classList.remove("fixo");
    nav.classList.remove("aberto");
    abre.classList.remove("fechado");
    abre.setAttribute("src", "img/menu.svg");
    menu = 0;
  } else {
    nav.classList.remove("fixo");
  }
  if (scrollPos > (innerHeight / 2)) {
    if (!voltar.classList.contains("mostra")) {
      voltar.classList.add("mostra");
      console.log("addMostra");
    }
  } else {
    if (voltar.classList.contains("mostra")) {
      voltar.classList.remove("mostra");
      console.log("remMostra");
    }
  }
}
window.addEventListener('scroll', fixed);
window.onresize = fixed;
abre.onclick = function () {
  if (innerWidth < 600 && menu == 0) {
    nav.classList.add("aberto");
    abre.classList.add("fechado");
    abre.setAttribute("src", "img/close.svg");
    menu = 1;
  } else if (innerWidth < 600) {
    nav.classList.remove("aberto");
    abre.classList.remove("fechado");
    abre.setAttribute("src", "img/menu.svg");
    menu = 0;
  }
}
for (var j = 0; j < li.length; j++) {
  li[j].onclick = function () {
    nav.classList.remove("aberto");
    abre.classList.remove("fechado");
    abre.setAttribute("src", "img/menu.svg");
    menu = 0;
  }
}

smoothScroll.init();
