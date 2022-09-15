"use strict";
window.addEventListener("load", function () {
  const first_name = document.querySelector("#first_name");
  const last_name = document.querySelector("#last_name");
  const email = document.querySelector("#mail");
  const message = document.querySelector("#text_message");
  //messages errors
  const error_first_name = document.querySelector("#error_name");
  const error_last_name = document.querySelector("#error_last_name");
  const error_email = document.querySelector("#error_email");
  const error_message = document.querySelector("#error_message");

  first_name.addEventListener("blur", function () {
    let check = first_name.value;
    if (isNaN(check) || check.value >= 0) {
      error_first_name.style.opacity = 0;
    } else {
      error_first_name.style.opacity = 1;
    }
  });
  last_name.addEventListener("blur", function () {
    let check = last_name.value;
    if (isNaN(check) || check.value >= 0) {
      error_last_name.style.opacity = 0;
    } else {
      error_last_name.style.opacity = 1;
    }
  });
  email.addEventListener("blur", function () {
    let check = email.value;
    if (isNaN(check) || check.value >= 0) {
      error_email.style.opacity = 0;
    } else {
      error_email.style.opacity = 1;
    }
  });
  message.addEventListener("blur", function () {
    let check = message.value;
    if (isNaN(check) || check.value >= 0) {
      error_message.style.opacity = 0;
    } else {
      error_message.style.opacity = 1;
    }
  });
  ////////////////////
});
