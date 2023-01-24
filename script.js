const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const calculatorMathDisplay = document.querySelector('.calculator-display');
const clear = document.querySelector('.clear')
const equals = document.querySelector('.equals');

let firstOperand = '';
let secondOperand = '';
let result = null;
let operator = null;
let equalsPressed = false;
let operatorsPressed = false;



// Puts numbers into top display of calculator
for (let num of numbers) {
    num.addEventListener('click', function(e) {
        // calculatorMathDisplay.textContent += `${e.target.textContent}`
        appendNums(e.target.textContent);
        storeFirstOperand(e.target.textContent);
        storeSecondOperand(e.target.textContent);
    });
};

function appendNums(num) {
    if (calculatorMathDisplay.textContent === '0') {
        calculatorMathDisplay.textContent = '';
    };
    
    calculatorMathDisplay.textContent += num;
};

function storeFirstOperand(input) {
    if (operatorsPressed === false) {
        firstOperand += input;
    };
};

function storeSecondOperand(input) {
    if (operatorsPressed === true) {
        secondOperand += input;
    };
};


// Puts operator signs into top display of the calculator 
for (let oper of operators) {
    oper.addEventListener('click', function(e) {

        appendOperators(e.target.textContent);
        if(operatorsPressed === true ){
            return;
        };

        operator = e.target.textContent;
        operatorsPressed = true;
    });
};


function appendOperators(oper) {

    if(operatorsPressed === true) {
        return;
    };

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
    firstOperand = '';
    secondOperand = '';
    operator = null;
    result = null;
    equalsPressed = false;
    operatorsPressed = false;  

};


// Functionality for the equals button 
equals.addEventListener('click', function(e) {
    operate(operator, firstOperand, secondOperand)
    calculatorMathDisplay.textContent = result;

    firstOperand = result;
    secondOperand = '';
    operatorsPressed = false
    equalsPressed = true;
});


function operate (operator, operand1, operand2) {
    let operandOneToNum = Number(operand1);
    let operandTwoToNum = Number(operand2);

    if(operator === '÷') {
        result = divide(operandOneToNum, operandTwoToNum);
    } else if (operator === 'x') {
        result = multiply(operandOneToNum, operandTwoToNum);
    } else if (operator === '-') {
        result = subtract(operandOneToNum, operandTwoToNum);
    } else if (operator === '+') {
        result = add(operandOneToNum, operandTwoToNum);
    };
};


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


