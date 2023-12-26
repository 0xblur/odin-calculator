// Elements
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const operator = document.querySelector("#operator");
let operatorPresent = false;
const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operators button");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const calculateBtn = document.querySelector("#equals");

// Functions
function add(a, b) {
  return Number(a) + Number(b)
}

function subtract(a, b) {
  return Number(a) - Number(b)
}

function multiply(a, b) {
  return Number(a) * Number(b)
}

function divide(a, b) {
  return Number(a) / Number(b)
}
