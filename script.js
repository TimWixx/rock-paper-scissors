//CREATE score variables
let computerScore = 0;
let humanScore = 0;

//CREATE function playRound to handle game logic by means of if/else statements.
function playRound(humanSelection,computerSelection){
    if (humanSelection == "rock"){
        if (humanSelection == "rock" & computerSelection == "rock"){
                console.log("It's a draw! You both chose Rock");
        }
        else if (humanSelection == "rock" & computerSelection == "paper"){
                console.log("You lose! Scissors beats Rock.");
                computerScore++;
        }
        else {
                console.log("You win! Rock beats Scissors");
                humanScore++;
        }
    }
    else if (humanSelection == "paper"){
        if (humanSelection == "paper" & computerSelection == "rock"){
                console.log("You win! Paper beats Rock.");
                humanScore++;
        }
        else if (humanSelection == "paper" & computerSelection == "paper"){
                console.log("It's a draw! You both chose Paper.");
        }
        else {
                console.log("You lose! Scissors beats Paper");
                computerScore++;
        }
    }
    else {
        if (humanSelection == "scissors" & computerSelection == "rock"){
                console.log("You lose! Rock beats Scissors");
                computerScore++
                
        }
        else if (humanSelection == "scissors" & computerSelection == "paper"){
                console.log("You win! Scissors beats Paper.");
                humanScore++;
        }
        else {
                console.log("It's a draw! You both chose Scissors.");
        }
    }
}
//CREATE function playGame to playRound until 5 rounds have been played, prompt and determine human and computer choices for each round, and track score.
function playGame(){

    for (roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++){

        let humanInput = getHumanChoice();
        let computerInput = getComputerChoice();

        function getComputerChoice(){
            if (Math.random()<= 0.34){
                result = "rock";
            }
            else if (Math.random()>= 0.67){
                result = "paper";
            }
            else {
                result = "scissors";
            }
            return result;
        }

        function getHumanChoice(){
            let userInput;
            return userInput = prompt("What is your choice?");
            
        }
        playRound(humanInput,computerInput)
        
        console.log("Computer Score:" + " " + computerScore);
        console.log ("Your Score:" + " " + humanScore);

    }

    //IF statements determine if win conditions have been met.
     if (roundsPlayed == 5 & humanScore > computerScore){
        console.log("YOU WIN!");
     }
     else if (roundsPlayed == 5 & computerScore > humanScore){
        console.log("YOU LOSE!");
     }
     else {
        console.log("DRAW!");
     }
    
}

playGame()
