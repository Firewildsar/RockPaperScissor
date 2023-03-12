console.log("It's working")

/* 
computer chooses at random rock paper or scissor (1-3) 
get player selection which would be in string from prompt window
store player selection as string in playerChoice variable
store computer choice in variable choice

*/
let playerScore = 0;
let computerScore = 0;

let message = "";
let result = ""

function playerChoice(){
    let choice = prompt("Choose Rock, Paper, or Scissor");
    choice = choice.toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissor"){
        return choice;
    } else {
        alert("Not a valid choice!");
    }
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
    if (playerSelection == "scissor"){
        if (computerSelection == "paper"){
            roundResult = "You win! Scissor beats paper!"; 
        } else if (computerSelection == "rock"){
            roundResult = "You lose! Rock beats scissor!";
        } else {
            roundResult = "You tie! Try again!";
        }
    }
    if (playerSelection == "rock"){
        if (computerSelection == "scissor"){
            roundResult = "You win! Rock beats scissor!";
        } else if (computerSelection == "paper"){
            roundResult = "You lose! Paper beats rock!";
        } else {
            roundResult = "You tie! Try again!";
        }
    }
    if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            roundResult = "You win! Paper beats rock!";
        } else if (computerSelection == "scissor"){
            roundResult = "You lose! Scissor beats paper!";
        } else {
            roundResult = "You tie! Try again!";
        }
    }
    console.log(roundResult)
    return roundResult
    }
 
   
function game(){
    for (let i = 0; i < 5; i++){
        if (i < 5){
            let playerSelection = playerChoice();
            let computerSelection = getComputerChoice(); 
            playRound(playerSelection,computerSelection);
            console.log("works")
    }
}
}

game()


