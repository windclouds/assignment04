// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate(opr1, opr2, orpOption) {
   let result 
   switch (orpOption) {
    case "+": result =opr1 + opr2; break;
    case "-": result =opr1 - opr2; break;
    case "*": result =opr1 * opr2; break;
    case "/": result =opr1 / opr2; break;
   }
   return result
}
// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION
const add = (opr1, opr2) => {
    alert(`${opr1} + ${opr2} is ${opr1 + opr2}. `) 
}

// SUBTRACT FUNCTION
const subtract = (opr1, opr2) => {
    alert(`${opr1} - ${opr2} is ${opr1 - opr2}. `) 
}


// MULTIPLY FUNCTION
const multiply = (opr1, opr2)=> {
    alert(`${opr1} * ${opr2} is ${opr1 * opr2}. `) 
}


// DIVIDE FUNCTION
const divide = (opr1, opr2)=> {
    if (opr2 === 0) {
        alert("Can not divide by zero !")
    } else {
        alert(`${opr1} / ${opr2} is ${opr1 / opr2}. `) 
    }
}


// EXPORT THE FOUR PUBLIC FUNCTIONS
export {add, subtract, multiply, divide}