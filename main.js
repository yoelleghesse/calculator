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
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "x":
            multiply(a, b);
            break;
        case "/":
            divide(a, b)
    }
}

// displaying the num in display
function updateDisplay(num) {
    const display = document.querySelector(".display")
    display.textContent = num
}

// adding event listeners to each number and dot
const numbers = document.querySelectorAll('.number');
for (const num of numbers) {
    num.addEventListener("click", () => {
        updateDisplay(num.textContent)
    })
}

const dot = document.querySelector('.dot');
dot.addEventListener('click', () => {
    updateDisplay(dot.textContent)
})

// clearing the screen
function clearDisplay() {
    const display = document.querySelector(".display")
    display.textContent = ""
}
const clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
    clearDisplay()
})


// adding operations to the screen
const operations = document.querySelectorAll(".operation");
for (const op of operations) {
    op.addEventListener("click", () =>  {
        updateDisplay(op.textContent)
    })
}
