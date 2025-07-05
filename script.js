let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){

    let computerChoice = "random"
    let randomNumber = Math.random();
    if(randomNumber <= 0.33){
        computerChoice = "rock";
    }
    else if(randomNumber > 0.33 && randomNumber <= 0.66){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice(){
    
    let humanChoice = prompt("What is your choice?(rock, paper, scissors)");;

    return humanChoice.toLowerCase();
}

function playGame(){
    function playRound(humanChoice, computerChoice){
    
        if(humanChoice == computerChoice){
            console.log("It's Draw");
        }
        else if(
            computerChoice == "paper" && humanChoice == "rock" ||
            computerChoice == "scissors" && humanChoice == "paper" ||
            computerChoice == "rock" && humanChoice == "scissors"
        )
        {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else{
            humanScore++;
            console.log(`You Won! ${humanChoice} beats ${computerChoice}`);

        }
    }
    for(let i = 1; i <= 5; i++){
        let computerChoice= getComputerChoice();
        let humanChoice= getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    if(humanScore > computerScore){
        console.log("You won this match!");
    }
    else if(computerScore > humanScore){
        console.log("Computer won this match!");
    }
    else{
        console.log("No Winner");
    }
}

playGame();
