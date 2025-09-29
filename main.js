// functions
const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let ans = 0;
	for (let i in arr) {
    ans += i;
  }
};

const multiply = function(a, b) {
  return a * b;
};

const divide = function(a, b) {
    return a / b;
}

// operator + function to determine which function I want calculator to do
function operatorFunc(op, a, b) {
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "/":
            return divide(a, b)
    }
}

let currentInput = ''
let previousInput = ''
let operator = null
let shouldReset = false

// displaying the num in display
const display = document.querySelector(".display")

function updateDisplay(num) {
    display.textContent += num // adds to the text content
}

function setDisplay(value) {
    display.textContent = value // reassigns text content for clearing, the result etc., 
}

// adding event listeners to each number and dot
const numbers = document.querySelectorAll('.number');
for (const num of numbers) {
    num.addEventListener("click", () => {
        const digit = num.textContent;

        if (shouldReset) {  // after finding result, when clicking new num, clears screen
            setDisplay("");
            currentInput = ''
            shouldReset = false
        }
        currentInput += digit // current input
        updateDisplay(digit)
        
    })
}

const dot = document.querySelector('.dot');
dot.addEventListener('click', () => {
    if (!currentInput.includes(".")) {  // allow only one decimal
    currentInput += ".";
    updateDisplay(".");
    }
});

// clearing the screen
const clear = document.querySelector('.clear')

clear.addEventListener('click', () => {
    currentInput = "";
    previousInput = "";
    operator = null;
    setDisplay("");
});

// adding operations to the screen
const operations = document.querySelectorAll(".operation");
for (const op of operations) {
    op.addEventListener("click", () =>  {
        if (currentInput === "" && previousInput === "") return; // nothing to operate on

        // If there is a previous value and operator, calculate first
        if (previousInput !== "" && operator !== null) {
        previousInput = operatorFunc(operator, Number(previousInput), Number(currentInput));
        setDisplay(previousInput);
        } else {
        previousInput = currentInput;
        }

        operator = op.textContent // store new operator
        
        setDisplay("") // clears screen after op added
        currentInput = "";        // reset for next number
    });
};

// calculations
const equals = document.querySelector(".equals")

equals.addEventListener("click", () => {
    if (!previousInput || !currentInput || !operator) return; // safety check
    const result = operatorFunc(operator, Number(previousInput), Number(currentInput));
    const rounded = Number(result.toFixed(10));
    setDisplay(rounded);
    currentInput = result.toString(); // allow chaining calculations
    previousInput = "";
    operator = null;
    shouldReset = true; // resets screen when new num clicked
});



    
    

