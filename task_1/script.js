let string = "";
let buttons = document.querySelectorAll('.button');
let memory = 0;


Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    try {
      handleButtonClick(e.target.innerHTML);
    } catch (error) {
      displayError();
    }
  });
});

function handleButtonClick(buttonValue) {
  if (buttonValue === '=') {
    string = eval(string).toString();
    updateDisplay();
  } else if (buttonValue === "AC") {
    clearAll();
  } 
  else if(buttonValue === "+/-"){
    string = (parseFloat(string) * -1).toString();
    updateDisplay();
  }
  else if (buttonValue === "C") {
    clearLastCharacter();
  }
  else if (buttonValue === "M+") {
    addToMemory();
  } else if (buttonValue === "M-") {
    subtractFromMemory();
  } else if (buttonValue === "MC") {
    clearMemory();
  }
  else {
    string = string + buttonValue;
    updateDisplay();
  }
}

function addToMemory() {
  memory += parseFloat(string) || 0;
}

function subtractFromMemory() {
  memory -= parseFloat(string) || 0;
}

function clearMemory() {
  memory = 0;
}

function clearLastCharacter() {
  string = string.slice(0, -1);
  updateDisplay();
}

function clearAll() {
  string = "";
  updateDisplay();
}

function updateDisplay() {
  document.querySelector('input').value = string;
}

function displayError() {
  document.querySelector('input').value = "Error";
}
