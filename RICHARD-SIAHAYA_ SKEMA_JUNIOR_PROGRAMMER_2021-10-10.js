//membuat aplikasi dapat menerima input dari tombol-tombol dan menampilkannya di layar display aplikasi kalkulator.
const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
	calculatorScreen.value = number
}



//menyimpan angka-angka dan operator untuk melakukan kalkulasi
let prevNumber = ''
let calculationOperator = ''
let currentNumber ='0'

const inputNumber = (number) => {
	if(currentNumber === '0'){
		currentNumber = number 
	} else {
		currentNumber += number
	}
}

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	})
})

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value)
	})
})

const inputOperator = (operator) => {
	if (calculationOperator === '') {
	prevNumber = currentNumber
}
	calculationOperator = operator
	currentNumber = '0'
}

//mengaktifkan fungsi kalkulasi ke aplikasi calculator
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
	calculate()
	updateScreen(currentNumber)
})
//mendefinisikan function Calculation
const calculate = () => {
	let result = ''
	switch(calculationOperator){
		case "+":
		result = parseFloat(prevNumber) + parseFloat(currentNumber)
		break
		case "-":
		result = prevNumber - currentNumber
		break
		case "*":
		result = prevNumber * currentNumber
		break
		case "/":
		result = prevNumber / currentNumber
		break
		default:
		return
	}
	currentNumber = result
	calculationOperator = ''
}

//membuat tombol AC berjalan dengan lancar
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
	clearAll()
	updateScreen(currentNumber)
})

const clearAll = () => {
	prevNumber = ''
	calculationOperator = ''
	currentNumber = ''

}

//membuat aplikasi dapat mengkalkulasi angka desimal
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})

inputDecimal = (dot) => {
	if(currentNumber.includes('.')){
		return
	}
	currentNumber += dot
}