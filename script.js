"use strict";

// Getting players
const playerOne = document.querySelector(".player_0");
const playerTwo = document.querySelector(".player_1");

// Storing players current score
const playerOneCurrentScore = document.querySelector("#current_score_0");
const playerTwoCurrentScore = document.querySelector("#current_score_1");

// Storing players total score
const playerOneTotalScore = document.querySelector("#total_score_0");
const playerTwoTotalScore = document.querySelector("#total_score_1");

// Getting modal
const openModal = document.querySelector(".open_modal");
const closeModal = document.querySelector(".close_modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

openModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// buttons to control the game
const gameReset = document.querySelector(".reset");
const rollDice = document.querySelector(".roll");
const pass = document.querySelector(".hold");
const diceImage = document.querySelector(".dice_image");

let scores, currentScore, activePlayer, playing;

// Declaring initial state for players
const init = () => {
  playerOneTotalScore.textContent = 0;
  playerTwoTotalScore.textContent = 0;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  playerOneCurrentScore.textContent = 0;
  playerTwoCurrentScore.textContent = 0;
  playing = true;

  diceImage.classList.add("hidden");
  playerOne.classList.remove("winner");
  playerTwo.classList.remove("winner");

  playerOne.classList.add("active");
  playerTwo.classList.remove("active");
};

init();

const switchPlayer = () => {
  // Switching next player

  document.getElementById(`current_score_${activePlayer}`).textContent = 0;

  // Checking for active player
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Resetting current score
  currentScore = 0;

  // changing visuals according to active player
  playerOne.classList.toggle("active");
  playerTwo.classList.toggle("active");
};

rollDice.addEventListener("click", () => {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    diceImage.classList.remove("hidden");
    diceImage.src = `dice-${diceNumber}.png`;

    console.log(diceNumber);
    if (diceNumber !== 1) {
      currentScore = currentScore + diceNumber;
      document.getElementById(`current_score_${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

pass.addEventListener("click", () => {
  if (playing) {
    const totalScore = (scores[activePlayer] += currentScore);
    document.getElementById(`total_score_${activePlayer}`).textContent =
      totalScore;

    if (totalScore >= 100) {
      playing = false;
      diceImage.classList.add("hidden");
      const winnerPlayer = document.querySelector(`.player_${activePlayer}`);
      winnerPlayer.classList.add("winner");
      winnerPlayer.classList.remove("active");
    } else {
      switchPlayer();
    }
  }
});

gameReset.addEventListener("click", init);
