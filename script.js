const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultText = document.getElementById("results-div");

const checkedNum = [];

const validreg = /^1 \d{3}-\d{3}-\d{4}$/;
const validreg2 = /^1 \(\d{3}\) \d{3}-\d{4}$/;
const validreg3 = /^1\(\d{3}\)\d{3}-\d{4}$/;
const validreg4 = /^1 \d{3} \d{3} \d{4}$/;
const validreg5 = /^\d{10}$/;
const validreg6 = /\d{3}-\d{3}-\d{4}$/;
const validreg7 = /\(\d{3}\)\d{3}-\d{4}$/;

const validator = [
  validreg,
  validreg2,
  validreg3,
  validreg4,
  validreg5,
  validreg6,
  validreg7,
];

const isValid = (input) => validator.some((regex) => regex.test(input));

const check = () => {
  const userInputValue = userInput.value;
  if (userInputValue.length === 0) {
    alert("Please provide a phone number");
    return;
  }

  checkedNum.push(userInputValue);
  resultText.innerHTML = "";
  checkedNum.forEach((nums) => {
    const p = document.createElement("p");

    if (isValid(nums)) {
      p.textContent = `Valid US number: ${nums}`;
    } else {
      p.textContent = `Invalid US number: ${nums}`;
    }
    resultText.appendChild(p);
  });
  userInput.value = "";
};

const clear = () => {
  resultText.innerHTML = "";
  checkedNum.length = 0;
};

checkButton.addEventListener("click", check);
clearButton.addEventListener("click", clear);
