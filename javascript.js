function getComputerChoice () {
    let number = Math.floor((Math.random() * 3));
    
    switch (number) {
        case 0:
            return "Rock";
            break;
        case 1: 
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            return "Error";
    }

}

function playRound (humanChoice, computerChoice) {
    container.textContent = "";
    let choices = document.createElement("p");

    choices.textContent =`You chose ${humanChoice}, Computer chose ${computerChoice}.`;
    container.appendChild(choices);

    let roundResult = document.createElement("p");

    if ((humanChoice == "Rock" && computerChoice == "Rock") 
      || (humanChoice == "Paper" && computerChoice == "Paper") 
      || (humanChoice == "Scissors" && computerChoice == "Scissors")) {
        roundResult.textContent = `Both chose ${humanChoice}, no winner`;
    } else if (humanChoice == "Rock" && computerChoice == "Paper"){
        roundResult.textContent = "You lose! Paper beats Rock";
        computerScore++;
    } else if (humanChoice == "Rock" && computerChoice == "Scissors"){
        roundResult.textContent = "You win! Rock beats Scissors";
        humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Scissors"){
        roundResult.textContent = "You lose! Scissors beats Paper";
        computerScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Rock"){
        roundResult.textContent = "You win! Paper beats Rock";
        humanScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock"){
        roundResult.textContent = "You lose! Rock beats Scissors";
        computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Paper"){
        roundResult.textContent = "You win! Scissors beats Paper";
        humanScore++;
    }

    container.appendChild(roundResult);
    displayCurrentScore();
    
    if (humanScore == 5 || computerScore == 5){
        declareWinner(humanScore, computerScore);
    }

}

function displayCurrentScore (){
    let currentScore = document.createElement("p");

    currentScore.textContent = `Your Score :  ${humanScore} Computer Score : ${computerScore}`;

    container.appendChild(currentScore);
}

function declareWinner (humanScore, computerScore) {
    let p = document.createElement("p");
    if (humanScore == computerScore){
        p.textContent += "It's a tie";
    } else if ( humanScore > computerScore) {
        p.textContent += "You win!";
    } else {
        p.textContent += "Computer wins...";
    }

    container.appendChild(p);
}

let playButtons = document.querySelectorAll(".play-button");

playButtons.forEach((button) => {
    button.addEventListener("click", function() {
        playRound(button.value, getComputerChoice());
    });
});

let humanScore = 0;
let computerScore = 0;

let container = document.querySelector("#container"); 