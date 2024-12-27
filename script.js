
function getComputerChoice() {

    let choice = Math.floor (3 * Math.random());

    switch(choice) {
        case 0: return "rock"
        case 1: return "paper"
        case 2: return "scissors"
    }

}

function getHumanChoice() {
    let choice = parseInt(prompt("Introduce a valid choice\n"))

    switch(choice) {
        case 0: return "rock"
        case 1: return "paper"
        case 2: return "scissors"
    }
}
