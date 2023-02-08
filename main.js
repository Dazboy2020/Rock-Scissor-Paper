"use strict";
const userChoice = document.querySelectorAll(".btn--game");

const computerChoiceArr = ["rock", "scissors", "paper"];

const getComputerChoice = () => {
	const randomChoice =
		computerChoiceArr[Math.floor(Math.random() * computerChoiceArr.length)];
	return randomChoice;
};

let playerSelection;
let computerSelection;
let result;
let randomChoice;

computerSelection = getComputerChoice();

userChoice.forEach((choice) =>
	choice.addEventListener("click", (e) => {
		playerSelection = e.target.id;
		computerSelection = getComputerChoice();
		console.log(`User clicked ${playerSelection}`);
		console.log(`Comp clicked ${computerSelection}`);
		result = playerSelection + computerSelection;

		playRound();
	})
);

function playRound(playerSelection, computerSelection) {
	getComputerChoice();

	console.log(result);
}
