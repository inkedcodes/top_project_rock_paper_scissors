function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);

    if (number === 0) {
        return "rock";
    } else if (number === 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose");
    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}.`);
        if(humanChoice === "paper" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "scissor" || humanChoice === "scissor" && computerChoice === "paper") {
            humanScore += 1
        
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            console.log(`You = ${humanScore} Computer =  ${computerScore}`);
            
        } else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "scissor" && computerChoice === "rock" || humanChoice === "paper" && computerChoice === "scissor") {
            computerScore += 1
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`) 
            console.log(`You = ${humanScore} Computer =  ${computerScore}`);
            
        } else {
            console.log(`It's a draw.`);
            console.log(`You = ${humanScore} Computer =  ${computerScore}`);
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    function finalScore() {
    if (humanScore > computerScore) {
        console.log("Final Result: You win!");
    } else if (humanScore < computerScore) {
        console.log("Final Result: You lose.");
    } else {
        console.log("Final Result: It's a tie.")
    }
    }

    finalScore();

}

playGame();

