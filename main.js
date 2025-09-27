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