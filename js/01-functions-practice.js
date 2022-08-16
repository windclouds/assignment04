//STEP 1
function halfNumber(num) {
    let half = num/2
    console.log(`Half of ${num} is ${half}`)
}
//STEP 2
function squareNumber(num) {
    let square = num * num
    console.log(`The result of squaring the number ${num} is ${square}.`) 
}
//STEP 3
function percentOf(num1, num2) {
    percent = num1/num2*100
    console.log(`${num1} is ${parseInt(percent)}% of ${num2}.`)
}
//STEP 4
function findModulus(num1, num2) {
    modulus = num1 % num2
    console.log(`${modulus} is the modulus of ${numVar1} and ${numVar2}.`)
}
//STEP 5
function calculator(numbers) {
    let result = 0
    for (i = 0; i < numbers.length; i++) {
      result += numbers[i]     
    }
     console.log(`The sum of (${numbers}) is ${result}`)
}

// let numVar1 = Number(prompt("Please input the first number:"))
// let numVar2 = Number(prompt("Please input the second number:"))
// halfNumber(numVar1)
// halfNumber(numVar2)
// squareNumber(numVar1)
// squareNumber(numVar2)
// percentOf(numVar1, numVar2)
// findModulus(numVar1, numVar2)

let numList = []
let counter = 0
again = 'y'
while (again === 'y') {
    numList[counter] = Number(prompt("Please input number: "))
    counter++
    again = prompt("Want input more number (y/n)? ")
   } 
calculator(numList)

