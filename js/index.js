let firstNumber = Number(prompt('Enter the first number'));
let mathOperation = prompt('Enter a math operation (-, +, /, *)');
let secondNumber = Number(prompt('Enter the second number'));
let result;


if (mathOperation === '-') {
    result = firstNumber - secondNumber;

} else if (mathOperation === '+') {
    result = firstNumber + secondNumber;

} else if (mathOperation === '*') {
    result = firstNumber * secondNumber;

} else if (mathOperation === '/') {
    result = firstNumber / secondNumber;
    
} else {
    alert('This math operation does not exist!')
    
}

let alertMessage = `Your result is ${result}`;

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert('This is not a number!')
}else{
    alert(alertMessage)
}
