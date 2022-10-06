"use strict";
window.addEventListener("load", function () {
  const boton = document.querySelector("#menu_button");
  const menu = document.querySelector("#menu");
  const menu1 = document.querySelector(".menu1");
  const menu2 = document.querySelector(".menu2");
  const menu3 = document.querySelector(".menu3");
  var comprobar_menu = false;

  if (
    window.matchMedia("(min-width:100px)").matches &&
    window.matchMedia("(max-width:479px)").matches
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

    if (
      window.matchMedia("(min-width:100px)").matches &&
      window.matchMedia("(max-width:475px)").matches
    ) {
      var animado_1 = document.querySelector(".animacion_1");
      var animado_2 = document.querySelector(".animacion_2");
      var animado_3 = document.querySelector(".animacion_3");

      window.addEventListener("scroll", function () {
        var ubicacion = parseInt(window.pageYOffset);
        console.log(ubicacion);
        /*TEC HTML5*/
        if (ubicacion >= 150) {
          animado_1.style.animation = "opacity 1s forwards";
        }
        /*TEC CSS*/
        if (ubicacion >= 250) {
          animado_2.style.animation = "opacity 1s forwards";
        }
        /*TEC JAVASCRIPT*/
        if (ubicacion >= 350) {
          animado_3.style.animation = "opacity 1s forwards";
        }
      });
    }
  }
});

//SACAR INFORMACION DEL SEGUNDO HEADER Y PONERLO EN UNA
//VARIABLE PARA DESPUES HACER UN INNER Y VOLVERLO A
//COLOCAR EN EL HTML

/*SIRVE PARA ANIMAR OBJETOS, VA RECORRIENDO EL INDEX
Y A CADA UNO LO VA ANIMANDO, NO SE OCUPARA EN ESTE 
CODIGO PORQUE A CADA TEC SE LE DARÁ UNA ANIMACION A
DISTINTA ALTURA DE SCROLL*/
/*if (ubicacion >= 200) {
  for (var i = 0; i < animado.length; i += 1) {
    animado[i].style.opacity = "1";
  }
} else {
  for (var i = 0; i < animado.length; i += 1) {
    animado[i].style.opacity = "0";
  }
}*/
