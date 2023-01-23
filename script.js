const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const calculatorMathDisplay = document.querySelector('.calculator-display');
const clear = document.querySelector('.clear')
const equals = document.querySelector('.equals');

let result;
let firstOperand = '';
let secondOperand = '';
let operator;



// Puts numbers into top display of calculator
for (let num of numbers) {
    num.addEventListener('click', function(e) {
        // calculatorMathDisplay.textContent += `${e.target.textContent}`
        appendNums(e.target.textContent);

        // Stores our first operand 
        if(operator === undefined) {
            firstOperand = e.target.textContent;
        } else {
            secondOperand = e.target.textContent;
        };

    });
};

function appendNums(num) {
    if (calculatorMathDisplay.textContent === '0') {
        calculatorMathDisplay.textContent = '';
    };

        calculatorMathDisplay.textContent += num;
};


// Puts operator signs into top display of the calculator 
for (let oper of operators) {
    oper.addEventListener('click', function(e) {
        console.log(e);
        appendOperators(e.target.textContent);
        operator = e.target.textContent


    });
};


function appendOperators(oper) {
    calculatorMathDisplay.textContent += ' ';
    calculatorMathDisplay.textContent += oper;
    calculatorMathDisplay.textContent += ' ';
};


// Clears display of calculator
clear.addEventListener('click', function(e) {
    clearDisplay();
});

function clearDisplay() {
    calculatorMathDisplay.textContent = '0';
};


equals.addEventListener('click', function(e) {
    operate(operator, firstOperand, secondOperand)
});







 





function add(operand1, operand2) { 
    return operand1 + operand2;
};

function subtract(operand1, operand2) {
    return operand1 - operand2;
};

function multiply(operand1, operand2) {
    return operand1 * operand2;
};

function divide(operand1, operand2) {
    return operand1 / operand2;
};

function operate (operator, operand1, operand2) {
    return operator(operand1, operand2);
};

