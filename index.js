const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const resetbtn = document.querySelector("#reset-btn");
const userScore = document.querySelector("#your-score");
const computerScoreText = document.querySelector("#computer-score");
const winMessage = document.querySelector("#winMessage");
const newGameBtn = document.querySelector("#new");

let yourScore = 0;
let computerScore = 0;
const maxScore = 3; 

const choices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];


function determineWinner(playerChoice, compChoice)
{
    if (playerChoice === compChoice) 
    {
        return "Tie! 😐";
    }

    if ((playerChoice === "Rock" && compChoice === "Scissors") ||
        (playerChoice === "Paper" && compChoice === "Rock") ||
        (playerChoice === "Scissors" && compChoice === "Paper")) 
    {
        yourScore++;
        userScore.textContent = yourScore;
        return "You Win! 🎉";
    }
    else
    {
        computerScore++;
        computerScoreText.textContent = computerScore;
        return "Computer Wins! 🤖";
    }
}

function playGame(playerChoice) {
    const compChoice = getComputerChoice(); 
    const gameResult = determineWinner(playerChoice, compChoice);
    
    result.innerHTML = `You chose: ${playerChoice} <br> 
                        Computer chose: ${compChoice} <br> 
                        <strong>${gameResult}</strong>`;

    checkWinner();
}

function checkWinner() {
    if (yourScore >= maxScore)
        {
        document.querySelector("#msg2").textContent = "You Win! 🎉";
        winMessage.classList.remove("hide");
    }
    else if (computerScore >= maxScore)
    {
        document.querySelector("#msg2").textContent = "Computer Wins! 🤖";
        winMessage.classList.remove("hide");
    }
}

function resetGame()
{
    yourScore = 0;
    computerScore = 0;
    userScore.textContent = "0";
    computerScoreText.textContent = "0";
    result.textContent = "Pick your move";
    winMessage.classList.add("hide");
}
document.getElementById("dark-mode").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

rock.addEventListener("click", () => playGame("Rock"));
paper.addEventListener("click", () => playGame("Paper"));
scissors.addEventListener("click", () => playGame("Scissors"));
newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame);
