"use strict";
window.addEventListener("load", function () {
  const boton = document.querySelector("#menu_button");
  const menu = document.querySelector("#menu");
  const menu1 = document.querySelector(".menu1");
  const menu2 = document.querySelector(".menu2");
  const menu3 = document.querySelector(".menu3");
  var comprobar_menu = false;

  var animado_1 = document.querySelector(".animacion_1");
  var animado_2 = document.querySelector(".animacion_2");
  var animado_3 = document.querySelector(".animacion_3");

  let scroll = function scroll(ubicacion_html, ubicacion_css, ubicacion_js) {
    let altura = parseInt(window.pageYOffset);
    if (altura >= ubicacion_html) {
      animado_1.style.animation = "opacity 1s forwards";
    }
    if (altura >= ubicacion_css) {
      animado_2.style.animation = "opacity 1s forwards";
    }
    if (altura >= ubicacion_js) {
      animado_3.style.animation = "opacity 1s forwards";
    }
  };

  if (
    window.matchMedia("(min-width:100px)").matches &&
    window.matchMedia("(max-width:699px)").matches
  ) {
    boton.addEventListener("click", function () {
      if (comprobar_menu == false) {
        menu.style.animation = "menu_expand .7s forwards";
        menu1.style.animation = "nav_menu1 .7s forwards";
        menu2.style.animation = "nav_menu2 .7s forwards";
        menu3.style.animation = "nav_menu3 .7s forwards";
        comprobar_menu = true;
      } else {
        menu.style.animation = "menu_contract .7s forwards";
        menu1.style.animation = "nav_menu1_return .7s forwards";
        menu2.style.animation = "nav_menu2_return .7s forwards";
        menu3.style.animation = "nav_menu3_return .7s  forwards";
        comprobar_menu = false;
      }
    });
    window.addEventListener("scroll", function () {
      scroll(150, 250, 350);
    });
  }
});
