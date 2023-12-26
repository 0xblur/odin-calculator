// Elements
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const operator = document.querySelector("#operator");
let operatorPresent = false;
const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operators button");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const calculateBtn = document.querySelector("#equals");

// Event Listeners
numbers.forEach(number => number.addEventListener("click", () => {
  if (!operatorPresent) {
    if (number.value == "." && a.textContent.includes(".")) {
      a.textContent += ""
    } else { a.textContent += number.value }
  } else {
    if (number.value == "." && b.textContent.includes(".")) {
      b.textContent += ""
    } else { b.textContent += number.value }
  }
}))

// Functions
function disableOperators(state) {
  operatorPresent = state;
  operatorBtns.forEach((operatorBtn) => operatorBtn.disabled = state);
}
function clearDisplay() {
  a.textContent = "";
  b.textContent = "";
  operator.textContent = "";
  disableOperators(false);
}

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
