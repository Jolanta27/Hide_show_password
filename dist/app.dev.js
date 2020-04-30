"use strict";

var input = document.getElementById('input');
var btn = document.getElementById('btn');

function toggle() {
  if (input.type == "password") {
    btn.classList.remove('fa-eye');
    btn.classList.add('fa-eye-slash');
    input.type = "text";
  } else {
    btn.classList.remove('fa-eye-slash');
    btn.classList.add('fa-eye');
    input.type = "password";
  }
}