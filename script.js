let humanScore = 0
let computerScore = 0

const buttonGroup = document.querySelector("#button-group")
const humanScoreDisplay = document.querySelector("#human-score")
const computerScoreDisplay = document.querySelector("#computer-score")

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
                    break;
                case "paper":
                    console.log("lose!");
                    computerScore ++;
                    break;
                case "scissors":
                    console.log("win!");
                    humanScore ++;
                    break;
            }
        case "paper":
            switch(computerChoice) {
                case "paper":
                    console.log("draw!");
                    break;
                case "scissors":
                    console.log("lose!");
                    computerScore ++;
                    break;
                case "rock":
                    console.log("win!");
                    humanScore ++;
                    break;
            }
        case "scissors":
            if( humanChoice == "scissors" ) {
                switch(computerChoice) {
                    case "scissors":
                        console.log("draw!");
                        break;
                    case "rock":
                        console.log("lose!");
                        computerScore ++;
                        break;
                    case "paper":
                        console.log("win!");
                        humanScore ++;
                        break;
                }
            }

    }
}

buttonGroup.addEventListener("click", (event) => {
    const humanChoice = event.target.id
    const computerChoice = getComputerChoice()

    playRound(humanChoice, computerChoice)

    humanScoreDisplay.textContent = humanScore
    computerScoreDisplay.textContent = computerScore
})
