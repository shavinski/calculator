const zero = document.querySelector('#num-0')
const one = document.querySelector('#num-1')

const calculatorMathDisplay = document.querySelector('.calculotr-display')

one.addEventListener('click', function(e) {
    if(click) {
        calculatorMathDisplay.textContent = 1;
    }
})





function add(num1, num2) { 
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate (operator, num1, num2) {
    return operator(num1, num2);
};

