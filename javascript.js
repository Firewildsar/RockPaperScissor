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
let roundResult = ""

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
    const scoreLine = document.createElement('div');
    scoreLine.classList.add('scoreLine');
    container.appendChild(scoreLine);
    const scoreResult = document.createElement('div');
    scoreResult.classList.add('scoreResult');
    scoreLine.appendChild(scoreResult);
    
    if (playerSelection == "scissor"){
        if (computerSelection == "paper"){
            const p = document.createElement('p');
            p.innerText = 'You win! Scissor beats paper!';
            scoreResult.appendChild(p);
            playerScore += 1;
            const pScore = document.createElement('p');
            pScore.innerText = `Player Score: ${playerScore}          Computer Score: ${computerScore}`;
            scoreLine.appendChild(pScore);
            roundResult = "You win! Scissor beats paper!"; 
        } else if (computerSelection == "rock"){
            const p = document.createElement('p');
            p.innerText = 'You lose! Rock beats scissor!';
            scoreResult.appendChild(p);
            computerScore += 1;
            const pScore = document.createElement('p');
            pScore.innerText = `Player Score: ${playerScore}          Computer Score: ${computerScore}`;
            scoreLine.appendChild(pScore);
            roundResult = "You lose! Rock beats scissor!";
        } else {
            const p = document.createElement('p');
            p.innerText = 'You tie! Scissor does not beat scissor!';
            scoreResult.appendChild(p);
            playerScore += 0;
            computerScore += 0;
            const pScore = document.createElement('p');
            pScore.innerText = `Player Score: ${playerScore}          Computer Score: ${computerScore}`;
            scoreLine.appendChild(pScore);
            roundResult = "You tie! Scissor does not beat scissor!";
        }
    }
    if (playerSelection == "rock"){
        if (computerSelection == "scissor"){
            const p = document.createElement('p');
            p.innerText = 'You win! Rock beats scissor!';
            scoreResult.appendChild(p);
            playerScore += 1;
            const pScore = document.createElement('p');
            pScore.innerText = `Player Score: ${playerScore}          Computer Score: ${computerScore}`;
            scoreLine.appendChild(pScore);
            roundResult = "You win! Rock beats scissor!";
           
        } else if (computerSelection == "paper"){
            const p = document.createElement('p');
            p.innerText = 'You lose! Paper beats rock!';
            scoreResult.appendChild(p);
            computerScore += 1;
            const pScore = document.createElement('p');
            pScore.innerText = `Player Score: ${playerScore}          Computer Score: ${computerScore}`;
            scoreLine.appendChild(pScore);
            roundResult = "You lose! Paper beats rock!";
        } else {
            const p = document.createElement('p');
            p.innerText = 'You tie! Rock does not beat rock!';
            scoreResult.appendChild(p);
            playerScore += 0;
            computerScore += 0;
            const pScore = document.createElement('p');
            pScore.innerText = `Player Score: ${playerScore}          Computer Score: ${computerScore}`;
            scoreLine.appendChild(pScore);
            roundResult = "You tie! Rock does not beat rock!";
        }
    }
    if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            const p = document.createElement('p');
            p.innerText = 'You win! Paper beats rock!';
            scoreResult.appendChild(p);
            playerScore += 1;
            const pScore = document.createElement('p');
            pScore.innerText = `Player Score: ${playerScore}          Computer Score: ${computerScore}`;
            scoreLine.appendChild(pScore);
            roundResult = "You win! Paper beats rock!";
        } else if (computerSelection == "scissor"){
            const p = document.createElement('p');
            p.innerText = 'You lose! Scissor beats paper!';
            scoreResult.appendChild(p);
            computerScore += 1;
            const pScore = document.createElement('p');
            pScore.innerText = `Player Score: ${playerScore}          Computer Score: ${computerScore}`;
            scoreLine.appendChild(pScore);
            roundResult = "You lose! Scissor beats paper!";
        } else {
            const p = document.createElement('p');
            p.innerText = 'You tie! Paper does not beat paper!';
            scoreResult.appendChild(p);
            playerScore += 0;
            computerScore += 0;
            const pScore = document.createElement('p');
            pScore.innerText = `Player Score: ${playerScore}          Computer Score: ${computerScore}`;
            scoreLine.appendChild(pScore);
            roundResult = "You tie! Paper does not beat paper!";
        }
    }
    if(playerScore === 5){
        const h1 = document.createElement('h1');
        h1.innerText = `Player wins! Score is ${playerScore} to ${computerScore}. Congratulations!`;
        container.appendChild(h1);

    } else if(computerScore === 5){
        const h1 = document.createElement('h1');
        h1.innerText = `Computer wins! Score is ${playerScore} to ${computerScore}. Better luck next time!`;
        container.appendChild(h1);
    }
    
    console.log(roundResult)
    console.log(playerScore)
    console.log(computerScore)
    
    
    }
 
   
function game(){
    
            let playerSelection = 'rock';
            let computerSelection = getComputerChoice(); 
            playRound(playerSelection,computerSelection);
            console.log("works")
    
}




const container = document.querySelector('#container');
const option = document.createElement('div');
option.classList.add('option');
const scoreResult = document.createElement('div');
scoreResult.classList.add('scoreResult');


const btnRock = document.createElement('button');
btnRock.classList.add('rock');
btnRock.textContent = 'ROCK';




const btnPaper = document.createElement('button');
btnPaper.classList.add('paper');
btnPaper.textContent = 'PAPER';
const btnScissor = document.createElement('button');
btnScissor.classList.add('scissor');
btnScissor.textContent = 'SCISSOR';




btnRock.addEventListener('click', () =>{
            let playerSelection = 'rock';
            let computerSelection = getComputerChoice(); 
            playRound(playerSelection,computerSelection);
            console.log("works")
});

btnPaper.addEventListener('click', function (e){
            let playerSelection = 'paper';
            let computerSelection = getComputerChoice(); 
            playRound(playerSelection,computerSelection);
            console.log("works")
})

btnScissor.addEventListener('click', function (e){
            let playerSelection = 'scissor';
            let computerSelection = getComputerChoice(); 
            playRound(playerSelection,computerSelection);
            console.log("works")
})




option.appendChild(btnRock);
option.appendChild(btnPaper);
option.appendChild(btnScissor);
container.appendChild(option);

