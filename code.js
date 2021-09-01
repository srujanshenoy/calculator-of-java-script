/* put your inputs in the next lines */
number_1 = 1
number_2 = 2
oppretor = /* put add, subtract, multiply, or divide here (put double quotes) */ "add"

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

if (oppretor == "add") {
    console.log("Numbers you entered:")
    console.log("number 1: " + number_1)
    console.log("number 2: " + number_2)
    console.log("oppretor: +")
    console.log(number_1, " + ", number_2, " = ", add(number_1, number_2))
}

else if (oppretor == "subtract") {
    console.log("Numbers you entered:")
    console.log("number 1: " + number_1)
    console.log("number 2: " + number_2)
    console.log("oppretor: -")
    console.log(number_1," - ", number_2, "=",  subtract(number_1, number_2))
}

else if (oppretor == "multiply") {
    console.log("Numbers you entered:")
    console.log("number 1: " + number_1)
    console.log("number 2: " + number_2)
    console.log("oppretor: x")
    console.log(number_1, " x ", number_2, " = ", multiply(number_1, number_2))
}

else if (oppretor == "divide") {
    console.log("Numbers you entered:")
    console.log("number 1: " + number_1)
    console.log("number 2: " + number_2)
    console.log("opretor: /")
    console.log(number_1, " / ", number_2, " = ", divide(number_1, number_2))
}

else {
    console.log("oops! this is not a valid opperator! \n re run the program with valid inputs to see the expected output.")
}