// Elements
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const operator = document.querySelector("#operator");
let operatorPresent = false;
const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll("button.operator");
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

operatorBtns.forEach(operatorBtn => operatorBtn.addEventListener("click", () => {
  operator.textContent += operatorBtn.value
  disableOperators(true)
}))

deleteBtn.addEventListener("click", deleteCharacter);

clearBtn.addEventListener("click", clearDisplay);

calculateBtn.addEventListener("click", () => {
  calculate()
  disableOperators(false)
})

// Functions
function disableOperators(state) {
  operatorPresent = state;
  operatorBtns.forEach((operatorBtn) => operatorBtn.disabled = state);
}

function deleteCharacter() {
  if (b.textContent) {
    b.textContent = b.textContent.slice(0, -1);
  } else if (operator.textContent) {
    operator.textContent = operator.textContent.slice(0, -1)
    disableOperators(false)
  } else {
    a.textContent = a.textContent.slice(0, -1)
  }
};

function clearDisplay() {
  a.textContent = "";
  b.textContent = "";
  operator.textContent = "";
  disableOperators(false);
}

function calculate() {
  const result = `${a.textContent}${operator.textContent}${b.textContent}`
  if (result.includes("+")) {
    const [num1, num2] = result.split("+")
    clearDisplay()
    a.textContent = add(num1, num2)
  } else if (result.includes("-")) {
    const [num1, num2] = result.split("-")
    clearDisplay()
    a.textContent = subtract(num1, num2)
  } else if (result.includes("*")) {
    const [num1, num2] = result.split("*")
    clearDisplay()
    a.textContent = multiply(num1, num2)
  } else if (result.includes("/")) {
    const [num1, num2] = result.split("/")
    clearDisplay()
    a.textContent = divide(num1, num2)
  }
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
  if (b == 0) {
    alert("You can't divide by 0")
    return a
  }
}
