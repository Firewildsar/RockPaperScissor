console.log("It's working")

/* 
computer chooses at random rock paper or scissor (1-3) 
get player selection which would be in string from prompt window
store player selection as string in playerChoice variable
store computer choice in variable choice

*/


const playerSelection = playerChoice();
const computerSelection = getComputerChoice();

function playerChoice(){
    let choice = prompt("Choose Rock, Paper, or Scissor");
    return choice.toLowerCase();
}

function getComputerChoice(){
    let choice = Math.floor(Math.random()*(3)+1)
    if (choice == 1){
        return "scissor"
    } else if (choice == 2){
        return "rock"
    } else {
        return "paper"
    }
}


function playRound(playerSelection,computerSelection){
    if (playerSelection == "scissor" & computerSelection == "rock"){
        return "You lose! Rock beats Scissor!"
    } else if (playerSelection == "rock" & computerSelection == "scissor"){
        return "You win! Rock beats Scissor!"
    } else if (playerSelection == "paper" & computerSelection == "scissor"){
        return "You lose! Scissor beats paper!"
    } else if (playerSelection == "paper" & computerSelection == "rock"){
        return "You win! Paper beats rock!"
    } else if (playerSelection == "rock" & computerSelection == "paper"){
        return "You lose! Paper beats rock!"
    } else if (playerSelection == "scissor" & computerSelection == "paper"){
        return "You win! Scissor beats paper!"
    } else if (playerSelection == "scissor" & computerSelection == "scissor"){
        return "You tie! No winners!"
    } else if (playerSelection == "rock" & computerSelection == "rock"){
        return "You tie! No winners!"
    } else if (playerSelection == "paper" & computerSelection == "paper"){
        return "You tie! No winners!"
    } else {
        return "Not valid"
    }
}

function game(){
    for (let i = 0; i< 5; i++){
        playRound()

    }
}


console.log(playRound(playerSelection,computerSelection))