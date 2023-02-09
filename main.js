"use strict";
const userChoice = document.querySelectorAll(".btn--game");
const playerScoreDisplay = document.querySelector(".player");
const computerScoreDisplay = document.querySelector(".computer");
const displayWinner = document.querySelector(".winner");
const rock = document.getElementById("Rock");
const scissors = document.getElementById("Scissors");
const paper = document.getElementById("Paper");
const winningMessage = document.querySelector(".gameOver");
// *** Modal window
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//! *** Modal Function to open & close
const openModal = function (computerScore, playerScore) {
	modal.classList.remove("hidden");
	playing = false;
};

const closeModel = function () {
	modal.classList.add("hidden");
	displayWinner.innerHTML = "";
	resetGame();
	// init();
};

const computerChoiceArr = ["Rock", "Scissors", "Paper"];

const getComputerChoice = () => {
	return computerChoiceArr[
		Math.floor(Math.random() * computerChoiceArr.length)
	];
};

let playerSelection;
let computerSelection;
let result;
let playerScore = 0;
let computerScore = 0;
let playing;

userChoice.forEach((choice) =>
	choice.addEventListener("click", (e) => {
		if (playing) {
			playerSelection = e.target.id;
			console.log(playerSelection);
			computerSelection = getComputerChoice();
			playRound(playerSelection, computerSelection);
		} else {
			return;
		}
	})
);

const clearSelection = () => {
	playerScoreDisplay.innerHTML = "Player: ";
	computerScoreDisplay.innerHTML = "Computer: ";
	displayWinner.innerHTML = "Winner: ";
};

function playRound() {
	clearSelection();
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
		playerScore += 1;

		console.log(`Player score is ${playerScore}`);
		animateImageWin(playerSelection);
	} else if (
		result == "RockPaper" ||
		result == "PaperScissors" ||
		result == "ScissorsRock"
	) {
		displayWinner.insertAdjacentHTML("beforeend", `Computer Wins!`);
		computerScore += 1;

		console.log(`Computer score is ${computerScore}`);
		animateImageLose(playerSelection);
	} else {
		result == "RockRock" ||
			result == "PaperPaper" ||
			result == "ScissorsScissors";
		displayWinner.insertAdjacentHTML("beforeend", `TIE!!`);
		animateImageTie(playerSelection);
	}
	checkWinner();
}

const animateImageWin = function (playerSelection) {
	if (playerSelection == "Rock") {
		paper.classList.add("animate__animated", "animate__backOutDown");
		scissors.classList.add("animate__animated", "animate__backOutDown");
		return;
	} else if (playerSelection == "Scissors") {
		paper.classList.add("animate__animated", "animate__backOutDown");
		rock.classList.add("animate__animated", "animate__backOutDown");
		return;
	} else playerSelection == "paper";
	rock.classList.add("animate__animated", "animate__backOutDown");
	scissors.classList.add("animate__animated", "animate__backOutDown");
};

const animateImageLose = function (playerSelection) {
	paper.classList.add("animate__animated", "animate__backOutDown");
	scissors.classList.add("animate__animated", "animate__backOutDown");
	rock.classList.add("animate__animated", "animate__backOutDown");
};

const animateImageTie = function (playerSelection) {
	paper.classList.add("animate__animated", "animate__heartBeat");
	scissors.classList.add("animate__animated", "animate__heartBeat");
	rock.classList.add("animate__animated", "animate__heartBeat");
};

userChoice.forEach((image) =>
	addEventListener("animationend", () => {
		setTimeout(() => {
			paper.classList.remove("animate__animated", "animate__backOutDown");
			scissors.classList.remove("animate__animated", "animate__backOutDown");
			rock.classList.remove("animate__animated", "animate__backOutDown");
			paper.classList.remove("animate__animated", "animate__heartBeat");
			scissors.classList.remove("animate__animated", "animate__heartBeat");
			rock.classList.remove("animate__animated", "animate__heartBeat");
		}, 500);
	})
);

const checkWinner = () => {
	if (playerScore === 5) {
		openModal();
	} else if (computerScore === 5) {
		openModal();
	} else {
		playerScoreDisplay.insertAdjacentHTML("beforeend", `${playerScore}`);
		computerScoreDisplay.insertAdjacentHTML("beforeend", `${computerScore}`);
	}
};

const resetGame = function () {
	playerScore = 0;
	computerScore = 0;
	displayWinner.insertAdjacentHTML("beforeend", "");
	init();
};

const init = () => {
	clearSelection();
	playing = true;

	// resetGame();
	// closeModel();
};

modal.addEventListener("click", closeModel);

init();
closeModel();
