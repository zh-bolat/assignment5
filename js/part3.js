let hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", function () {
  hoverBox.style.backgroundColor = "orange";
});

hoverBox.addEventListener("mouseout", function () {
  hoverBox.style.backgroundColor = "lightblue";
});

let textInput = document.getElementById("textInput");
let output = document.getElementById("output");

textInput.addEventListener("keyup", function () {
  output.textContent = textInput.value;
});

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");

function calculate(operator) {
  let a = parseFloat(num1.value);
  let b = parseFloat(num2.value);

  if (isNaN(a) || isNaN(b)) {
    result.textContent = "Please enter two numbers";
    return;
  }

  if (operator === "+") {
    result.textContent = a + b;
  } else if (operator === "-") {
    result.textContent = a - b;
  } else if (operator === "*") {
    result.textContent = a * b;
  } else if (operator === "/") {
    if (b === 0) {
      result.textContent = "Cannot divide by zero";
    } else {
      result.textContent = a / b;
    }
  }
}

document.getElementById("addCalc").addEventListener("click", function () {
  calculate("+");
});
document.getElementById("subCalc").addEventListener("click", function () {
  calculate("-");
});
document.getElementById("mulCalc").addEventListener("click", function () {
  calculate("*");
});
document.getElementById("divCalc").addEventListener("click", function () {
  calculate("/");
});
