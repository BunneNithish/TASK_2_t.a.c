const choices = ['rock', 'paper', 'scissors'];
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const outcomeDisplay = document.getElementById('outcome');
const resultDiv = document.getElementById('result');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resetBtn = document.getElementById('reset');

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return 'draw';
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) return 'user';
    return 'computer';
}

function updateScores(winner) {
    if (winner === 'user') {
        userScore++;
        userScoreSpan.textContent = userScore;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
    }
}

function displayResult(userChoice, computerChoice, winner) {
    userChoiceDisplay.textContent = `Your Choice: ${userChoice}`;
    computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice}`;
    
    if (winner === 'draw') {
        outcomeDisplay.textContent = `It's a draw!`;
    } else if (winner === 'user') {
        outcomeDisplay.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        outcomeDisplay.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    }
}

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);
    updateScores(winner);
    displayResult(userChoice, computerChoice, winner);
}


rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));

resetBtn.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    userScoreSpan.textContent = '0';
    computerScoreSpan.textContent = '0';
    userChoiceDisplay.textContent = 'Your Choice:';
    computerChoiceDisplay.textContent = "Computer's Choice:";
    outcomeDisplay.textContent = 'Outcome:';
});
