/* Functions that will be included in the calculator
NOTE: Convert the numbers to string to allow appending the numbe at the back
NOTE: Convert the string back to float for calculation
1. Collect numbers from the calculator
2. Display the number collected
	a. Append the number as it is being collected
	b. If the first number is 0, it will replace the number
	c. Allow the pressing of "." once
3. Collect the arithmetic
 	a. When arithmetic is collected, the number on the display moved to a container
 	b. The display screen refreshes
 	c. If theres number in the container before, it should calculate and push the result to the container
 	d. Store the arithmetic sign as the operation for the next calculate
4. Clear
 	a. Whenever the CE key is pressed
 	b. Whenever the arithmetic key is pressed
5. Calculate
	a. Calculate based on the arithmetic in the operation set in 3d.
6. Backspace
	a. Remove the last number 
*/


// Select keys buttons using the assigned attribute names

var numberKeys = document.querySelectorAll("[numberInput]")

var arithKeys = document.querySelectorAll("[arithmetic]")

var backArrow = document.querySelector("[backspace]")

var equalTo = document.querySelector("[equate]") 

var clearScreen = document.querySelector("[ce]")

var screen1 = document.querySelector("[mainScreen]")

var screen2 = document.querySelector("[secScreen]")

var arithDisplay = document.querySelector("[showarithsign]")

// Grabs number from buttons
numberKeys.forEach(function (item) {
	item.addEventListener("click", () => {
		let a = colNumber(item.innerText)
		sDisplay(a)
})

})

var operand = undefined;

// Grab Arithmetics (operators)
arithKeys.forEach(function (item) {
	item.addEventListener("click", () => {
		let b = calfunc(screen1.innerText, screen2.innerText, operand)
		ssDisplay(b)
		sDisplay("")
		arithDisplay.innerText = item.innerText
		operand = item.innerText.toString()

})

})


// Grabs equal sign and display on screen
equalTo.addEventListener("click", () =>{
	let c= calfunc(screen1.innerText, screen2.innerText, operand)
	sDisplay(c)
	ssDisplay("")
	arithDisplay.innerText = equalTo.innerText

})

// Grabs the CE button
clearScreen.addEventListener("click",() => {
	operand = undefined;
	ssDisplay("")
	sDisplay("0")
	arithDisplay.innerText = ""
})

// Function that collects the backspace
backArrow.addEventListener("click", () => {
	let d = removeLastNum(screen1.innerText)
	sDisplay(d)
})


// Function that collects number from buttons
function colNumber(num) {
		if (display.innerText=="0" && num == ".") {
			return "0" + num.toString()
		}else if (display.innerText=="0") {
			return num
		} else if (display.innerText.toString().includes(".") && num == ".") {
			return display.innerText
		}  else{
			return display.innerText.toString() + num.toString()
		}
	}

// Function that displays number on screen
function sDisplay(disp) {
		display.innerText = disp
	}


// Function that displays number on second screen
function ssDisplay(disp) {
		screen2.innerText = disp
	}

// Function that does the calculation
function calfunc(number1, number2, mathOperation) {
	if (number2 == "") {
		return number1
	}
	switch (mathOperation) {
		case "+":
			return parseFloat(number1) + parseFloat(number2);
			break;
		case "-":
			return parseFloat(number2) - parseFloat(number1);
			break;
		case "x":
			return parseFloat(number1) * parseFloat(number2);
			break;
		case "/":
			return parseFloat(number2)/parseFloat(number1);
			break;
		default:
			return parseFloat(number1)
	}
}

// Function to remove the last number on the screen for bckspace
function removeLastNum(numb) {
	return numb.toString().slice(0,-1)
}