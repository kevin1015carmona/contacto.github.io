"use strict";
window.addEventListener("load", function () {
  var box_dashed = document.querySelector("#box_dashed");
  var formulario = document.getElementById("formulario");

  box_dashed.style.display = "none";
  formulario.addEventListener("click", function () {
    if (window.matchMedia("(min-width:870px)").matches) {
      if (box_dashed.style.display == "none") {
        box_dashed.style.display = "block";
        return;
      } else {
        box_dashed.style.display = "none";
      }
    }
  });

  var q = document.querySelector("#Q");
  var a = document.querySelector("#A");
  var container = document.querySelector("#container");
  var espacio = document.querySelector("#espacio_en_blanco");

  formulario.addEventListener("click", function () {
    if (
      window.matchMedia("(min-width:100px)").matches &&
      window.matchMedia("(max-width:869px)").matches
    ) {
      if (box_dashed.style.display == "none") {
        box_dashed.style.display = "block";
        container.append(q);
        container.appendChild(a);
        return;
      } else {
        box_dashed.style.display = "none";
        espacio.append(q);
        espacio.appendChild(a);
      }
    }
  });
});

var animado_1 = document.getElementsByClassName("animacion_1");
var animado_2 = document.getElementsByClassName("animacion_2");
var animado_3 = document.getElementsByClassName("animacion_3");

var inicio = window.pageYOffset;
window.addEventListener("load", function () {
  if (
    window.matchMedia("(min-width:100px)").matches &&
    window.matchMedia("(max-width:689px)").matches
  ) {
    window.addEventListener("scroll", function () {
      var ubicacion = parseInt(window.pageYOffset);
      console.log(ubicacion);
      /*TEC HTML5*/
      if (ubicacion >= 170) {
        for (var i = 0; i < animado_1.length; i += 1) {
          animado_1[i].style.opacity = "1";
        }
      } else {
        for (var i = 0; i < animado_1.length; i += 1) {
          animado_1[i].style.opacity = "0";
        }
      }
      /*TEC CSS*/
      if (ubicacion >= 320) {
        for (var i = 0; i < animado_2.length; i += 1) {
          animado_2[i].style.opacity = "1";
        }
      } else {
        for (var i = 0; i < animado_2.length; i += 1) {
          animado_2[i].style.opacity = "0";
        }
      }
      /*TEC JAVASCRIPT*/
      if (ubicacion >= 487) {
        for (var i = 0; i < animado_3.length; i += 1) {
          animado_3[i].style.opacity = "1";
        }
      } else {
        for (var i = 0; i < animado_3.length; i += 1) {
          animado_3[i].style.opacity = "0";
        }
      }
    });
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
