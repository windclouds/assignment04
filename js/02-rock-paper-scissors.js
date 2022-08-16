function game() {
    let playerChoices = ["rock","paper","scissors"]
    let computerChoices = ["rock","paper","scissors"]
    let cChoice = Math.floor(Math.random()*3)
    let pChoice
    let again = "y"
    while (again.toLowerCase() === "y") {
        do {
            pChoice = Number(prompt("Please enter your choice of 0-Rock, 1-Scissors or 2-Paper : "))
        } while (!(pChoice === 0 || pChoice === 1 || pChoice === 2))
        if (playerChoices[pChoice] === computerChoices[cChoice]) {
            alert("It's TIE!")
        } else if (playerChoices[pChoice] === "rock") {
            if (computerChoices[cChoice] === "paper") {
                alert("Computer Won! ")
             } else {
                alert("You Won!")
             }
        } else if (playerChoices[pChoice] === "paper") {
            if (computerChoices[cChoice] === "scissors") {
                alert("Computer Won! ")
             } else {
                alert("You Won!")
             }
        }  else if (playerChoices[pChoice] === "scissors") {
            if (computerChoices[cChoice] === "rock") {
                alert("Computer Won! ")
             } else {
                alert("You Won!")
             }
        }
        again = prompt("Play again (y/n)?")
    }
}

game()