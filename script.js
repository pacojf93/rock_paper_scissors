let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {

    let choice = Math.floor (3 * Math.random());

    switch(choice) {
        case 0: return "rock"
        case 1: return "paper"
        case 2: return "scissors"
    }

}

function getHumanChoice() {
    let choice = prompt("Introduce a valid choice\n")
    return choice
}

function playRound(humanChoice, computerChoice) {
    if( humanChoice == "rock" ) {
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
    }

    if( humanChoice == "paper" ) {
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
    }

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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);