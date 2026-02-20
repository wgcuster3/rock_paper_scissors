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

function getHumanChoice () {
    let choice = prompt("Choose Rock, Paper, or Scissors");
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

function playRound (humanChoice, computerChoice) {
    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);

    if ((humanChoice == "Rock" && computerChoice == "Rock") 
      || (humanChoice == "Paper" && computerChoice == "Paper") 
      || (humanChoice == "Scissors" && computerChoice == "Scissors")) {
        console.log(`Both chose ${humanChoice}, no winner`);
        return;
    }

    if (humanChoice == "Rock" && computerChoice == "Paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
        return;
    }

    if (humanChoice == "Rock" && computerChoice == "Scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
        return;
    }

    if (humanChoice == "Paper" && computerChoice == "Scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
        return;
    }

    if (humanChoice == "Paper" && computerChoice == "Rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
        return;
    }

    if (humanChoice == "Scissors" && computerChoice == "Rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
        return;
    }

    if (humanChoice == "Scissors" && computerChoice == "Paper"){
        console.log("You win! Scissors beats Paper");
        humanScore++;
        return;
    }

    console.log("winner not found, human choice = " + humanChoice + " computer choice = " + computerChoice);
    return;
}

function playGame (rounds) {
    for (let i = 0; i < rounds; i++){
        console.log(`Round ${i + 1}`);
        playRound(getHumanChoice(), getComputerChoice());
    }
}

let humanScore = 0;
let computerScore = 0;

playGame(5);

console.log("Your Score : " + humanScore);
console.log("Computer Score : " + computerScore);

if (humanScore == computerScore){
    console.log("It's a tie!")
} else if ( humanScore > computerScore) {
    console.log("You win!");
} else {
    console.log("Computer wins...");
}