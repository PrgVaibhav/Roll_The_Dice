"use strict";

// Getting players
const playerOne = document.querySelector(".player_1");
const playerTwo = document.querySelector(".player_2");

// Storing players current score
// const playerOneCurrentScore = document.querySelector("#current_score_0");
// const playerTwoCurrentScore = document.querySelector("#current_score_1");

// Storing players total score
const playerOneTotalScore = document.querySelector(".total_score_1");
const playerTwoTotalScore = document.querySelector(".total_score_2");

// buttons to control the game
const gameReset = document.querySelector(".reset");
const rollDice = document.querySelector(".roll");
const pass = document.querySelector(".hold");

// Declaring initial state for players
playerOneTotalScore.textContent = 0;
playerTwoTotalScore.textContent = 0;
const diceImage = document.querySelector(".dice_image");
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

diceImage.classList.add("hidden");

rollDice.addEventListener("click", () => {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;

  diceImage.classList.remove("hidden");
  diceImage.src = `dice-${diceNumber}.png`;

  console.log(diceNumber);
  if (diceNumber !== 1) {
    currentScore = currentScore + diceNumber;
    document.getElementById(`current_score_${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switching next player

    document.getElementById(`current_score_${activePlayer}`).textContent = 0;

    // Checking for active player
    activePlayer = activePlayer === 0 ? 1 : 0;

    // Resetting current score
    currentScore = 0;

    // changing visuals according to active player
    playerOne.classList.toggle("active");
    playerTwo.classList.toggle("active");
  }
});
