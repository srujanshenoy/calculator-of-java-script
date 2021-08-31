function add(a, b) {
    return a + b
}

function subtract(a, b) {
     return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

/* put your inputs in the next lines */
number_1 = 1
number_2 = 2
oppretor = /* put add, subtract, multiply, or divide here (put double quotes) */ "add"

if (oppretor == "add") {
    console.log(add(number_1, number_2) + " is the sum of the two numbers you entered")
}

else if (oppretor == "subtract") {
    console.log(subtract(number_1, number_2) + " is the difference of the two numbers you entered")
}

else if (oppretor == "multiply") {
    console.log(multiply(number_1, number_2) + " is the product of the two numbers you entered")
}

else if (oppretor == "divide") {
   cooole.log(divide(number_1, number_2) + " is the quotient of the two numbers you entered")
}

else {
    console.log("oops! this is not a valid opperator! \n re run the program with valid inputs to see the expected output.")
}