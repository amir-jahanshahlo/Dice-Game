"use strict";

// selecting element
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const curr0EL = document.getElementById("current--0");
const curr1EL = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
const scors = [0, 0];
let activePlayer = 0;
let currentScore = 0;
// rolling dice functionally
btnRoll.addEventListener("click", function () {
  //generating a randon dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  //  console.log(dice);
  //  display random dice
  diceEl.classList.remove("hidden");
  diceEl.src = `images/dice-${dice}.png`;

  //  chech for rolled 1
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
  }
});
