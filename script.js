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

let scors, currentScore, playing, activePlayer;

const init = function () {
  // starting condition
  scors = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  curr0EL.textContent = 0;
  curr1EL.textContent = 0;
  diceEl.classList.add("hidden");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};
// rolling dice functionally
btnRoll.addEventListener("click", function () {
  if (playing) {
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
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // add current score to active player
    scors[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scors[activePlayer];
    //check if player's score >= 100
    if (scors[activePlayer] >= 100) {
      //finish the game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // switch
      switchPlayer();
    }
  }
});

btNew.addEventListener("click", init);
