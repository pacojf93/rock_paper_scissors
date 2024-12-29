let humanScore = 0
let computerScore = 0
let roundResult = ''

let humanChoice = ''
let computerChoice = ''

const buttonGroup = document.querySelector("#button-group")
const humanScoreDisplay = document.querySelector("#human-score")
const computerScoreDisplay = document.querySelector("#computer-score")
const humanChoiceDisplay = document.querySelector("#human-choice")
const computerChoiceDisplay = document.querySelector("#computer-choice")
const roundResultDisplay = document.querySelector("#result")


function clearDisplay() {
    humanScore = 0
    computerScore = 0
    humanChoice = ''
    computerChoice = ''
    roundResult = ''
}

function renderDisplay() {
    humanScoreDisplay.textContent = humanScore
    computerScoreDisplay.textContent = computerScore

    humanChoiceDisplay.textContent = humanChoice
    computerChoiceDisplay.textContent = computerChoice
    roundResultDisplay.textContent = roundResult
}

function getComputerChoice() {

    let choice = Math.floor (3 * Math.random());

    switch(choice) {
        case 0: return "rock"
        case 1: return "paper"
        case 2: return "scissors"
    }

}

function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    console.log("draw!");
                    roundResult = "draw!"
                    break;
                case "paper":
                    console.log("lose!");
                    computerScore ++;
                    roundResult = "lose!"
                    break;
                case "scissors":
                    console.log("win!");
                    humanScore ++;
                    roundResult = "win!"
                    break;
            }
            break
        case "paper":
            switch(computerChoice) {
                case "paper":
                    console.log("draw!");
                    roundResult = "draw!"
                    break;
                case "scissors":
                    console.log("lose!");
                    computerScore ++;
                    roundResult = "lose!"
                    break;
                case "rock":
                    console.log("win!");
                    humanScore ++;
                    roundResult = "win!"
                    break;
            }
            break
        case "scissors":
            switch(computerChoice) {
                case "scissors":
                    console.log("draw!");
                    roundResult = "draw!"
                    break;
                case "rock":
                    console.log("lose!");
                    computerScore ++;
                    roundResult = "lose!"
                    break;
                case "paper":
                    console.log("win!");
                    humanScore ++;
                    roundResult = "win!"
                    break;
            }
            break 
    }
}

function checkWinner() {
    if(humanScore === 5) {
        clearDisplay()
        alert("human wins!")
    }
    else if (computerScore === 5) {
        clearDisplay()
        alert("computer wins!")
    }
}

buttonGroup.addEventListener("click", (event) => {
    humanChoice = event.target.id
    computerChoice = getComputerChoice()

    playRound(humanChoice, computerChoice)

    checkWinner()

    renderDisplay()
    
})
