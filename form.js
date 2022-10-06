"use strict";
window.addEventListener("load", function () {
  //console.warn("Hola, bienvenido a la consola de mi pagina :D");
  //labels
  const first_name = document.querySelector("#first_name");
  const last_name = document.querySelector("#last_name");
  const email = document.querySelector("#mail");
  const message = document.querySelector("#text_message");
  //messages errors
  const error_first_name = document.querySelector("#error_name");
  const error_last_name = document.querySelector("#error_last_name");
  const error_email = document.querySelector("#error_email");
  const error_message = document.querySelector("#error_message");
  //enviar
  const submit = document.querySelector("#submit");
  //comprobaciones
  var comprobacion_first_name = false;
  var comprobacion_last_name = false;
  var comprobacion_email = false;
  var comprobacion_message = false;
  //Alerts
  const enviado = document.querySelector(".enviado");
  const no_enviado = document.querySelector(".no_enviado");
  first_name.addEventListener("blur", function () {
    let check = first_name.value;
    if (isNaN(check) || check.value >= 0) {
      error_first_name.style.opacity = 0;
      comprobacion_first_name = true;
    } else {
      error_first_name.style.opacity = 1;
      comprobacion_first_name = false;
    }
  });
  last_name.addEventListener("blur", function () {
    let check = last_name.value;
    if (isNaN(check) || check.value >= 0) {
      error_last_name.style.opacity = 0;
      comprobacion_last_name = true;
    } else {
      error_last_name.style.opacity = 1;
      comprobacion_last_name = false;
    }
  });
  email.addEventListener("blur", function () {
    /*console.error("NO DEBERIAS DE ESTAR REVISANDO ESTA PARTE DE LA CONSOLA");
    //console.warn(
      //"ATENCION, LA VALIDACION DE DATOS DEL LADO DEL CLIENTE NO ES RECOMENDADA,PARA FINES PRACTICOS SE REALIZARÁ DEL LADO DEL CLIENTE LO OPTIMO ES REALIZARLA DEL LADO DEL SERVIDOR "
    );*/
    let check = email.value;
    if (isNaN(check) || check.value >= 0) {
      error_email.style.opacity = 0;
      comprobacion_email = true;
    } else {
      error_email.style.opacity = 1;
      comprobacion_email = false;
    }
  });
  message.addEventListener("blur", function () {
    let check = message.value;
    if (isNaN(check) || check.value >= 0) {
      error_message.style.opacity = 0;
      comprobacion_message = true;
    } else {
      error_message.style.opacity = 1;
      comprobacion_message = false;
    }
  });
  ////////////////////
  const btn = document.getElementById("submit");

  document
    .querySelector("#message")
    .addEventListener("submit", function (event) {
      if (
        comprobacion_first_name === true &&
        comprobacion_last_name === true &&
        comprobacion_email === true &&
        comprobacion_message === true
      ) {
        event.preventDefault();

        const serviceID = "default_service";
        const templateID = "template_riwjvqi";

        emailjs.sendForm(serviceID, templateID, this).then(
          function () {
            btn.value = "Send Email";
            enviado.style.display = "block";
            let aceptar = document.querySelector("#aceptar");
            let div_message = document.querySelector("#message");
            let submit_successful =
              document.querySelector("#submit_successful");
            aceptar.addEventListener("click", function () {
              div_message.style.display = "none";
              submit_successful.style.display = "block";
            });
          },
          function (err) {
            btn.value = "Send Email";
            alert(JSON.stringify(err));
          }
        );
      } else {
        no_enviado.style.display = "block";
        let revisar = document.querySelector("#revisar");
        revisar.addEventListener("click", function () {
          no_enviado.style.display = "none";
        });
      }
    });
});
