// IMPORT THE MODULE
import {add, subtract, multiply, divide} from "./modules/calculator.js"
// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
const calculators = () => {
    let num1
    let num2
    let opr
    do {
        num1 = Number(prompt("Please enter the first number"))
    } while (isNaN(num1))
    do {
      num2 = Number(prompt("Please enter the second number"))
    } while (isNaN(num2))
    do {
        opr = prompt("please choice the operation, +,-,* or /: ")
    } while (!(opr === "+" || opr === "-" || opr === "*" || opr === "/"))
// CHECK TO SEE WHAT OPERATION THEY'RE USING
    switch (opr) {
        case "+" : add(num1, num2);
                    break;
        case "-" : subtract(num1, num2);
                    break;
        case "*" : multiply(num1, num2);
                     break;
        case "/" : divide(num1, num2);
                    break;
    }
}
// CALL THE APPROPRIATE FUNCTION
calculators();