let firstNumber
let secondNumber
let step = 0
let operation
let result = 0

let numArray = []
let secondNumberArr = []

let display = document.getElementById('display')

function getNumber(num) {
	if (step === 0 || step === 1) {
		numArray.push(num)
		step = 1
		firstNumber = Number(numArray.join(''))
	display.value = numArray.join('')
	} else if (step === 2) {
		secondNumberArr.push(num)
		secondNumber = Number(secondNumberArr.join(''))
		display.value = firstNumber + operation + secondNumber
	}
}

function getOperator(operator) {
	step = 2
	operation = operator
	display.value += operator
}




function calculateResult() {
	if (operation === '+') {
		result = firstNumber + secondNumber
		display.value = result
	} else if (operation === '-') {
		result = firstNumber - secondNumber
		display.value = result
	} else if (operation === '*') {
		result = firstNumber * secondNumber
		display.value = result
	} else if (operation === '/') {
		result = firstNumber / secondNumber
		display.value = result
	}

	else if (operation === 'x^') {

	result = firstNumber ** secondNumber

	display.value = result

}

	

	switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return num2 !== 0 ? num1 / num2 : "Error";
    default: return null;
  }

}

function clearDisplay() {
	display.value = 0
	firstNumber = null
	secondNumber = null
	step = 0
	operation = null
	result = 0
	numArray = []
	secondNumberArr = []
}

function squareRoot() {

	result = Math.sqrt(firstNumber)

	display.value = result

}

function squareNumber() {

	result = firstNumber ** 2

	display.value = result

}