"use strict";
const userChoice = document.querySelectorAll(".btn--game");
const playerScore = document.querySelector(".playerChoose");
const computerScore = document.querySelector(".compChoose");
const displayWinner = document.querySelector(".winner");

const computerChoiceArr = ["Rock", "Scissors", "Paper"];

const getComputerChoice = () => {
	return computerChoiceArr[
		Math.floor(Math.random() * computerChoiceArr.length)
	];
};

let playerSelection;
let computerSelection;
let result;
let player;
let computer;

userChoice.forEach((choice) =>
	choice.addEventListener("click", (e) => {
		playerSelection = e.target.id;
		computerSelection = getComputerChoice();

		playRound(playerSelection, computerSelection);
	})
);

const clearSelection = () => {
	playerScore.innerHTML = "You chose: ";
	computerScore.innerHTML = "Computer chose: ";
	displayWinner.innerHTML = "The Winner is: ";
};

function playRound(playerSelection, computerSelection) {
	clearSelection();
	playerScore.insertAdjacentHTML("beforeend", `${playerSelection}`);
	computerScore.insertAdjacentHTML("beforeend", `${computerSelection}`);
	winner(result);
}

function winner() {
	result = playerSelection + computerSelection;

	if (
		result == "RockScissors" ||
		result == "PaperRock" ||
		result == "ScissorsPaper"
	) {
		displayWinner.insertAdjacentHTML("beforeend", `You Win!`);
	} else if (
		result == "RockPaper" ||
		result == "PaperScissors" ||
		result == "ScissorsRock"
	) {
		displayWinner.insertAdjacentHTML("beforeend", `Computer Wins!`);
	} else {
		result == "RockRock" ||
			result == "PaperPaper" ||
			result == "ScissorsScissors";
		displayWinner.insertAdjacentHTML("beforeend", `TIE!!`);
	}
}
