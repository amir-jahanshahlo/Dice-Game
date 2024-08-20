"use strict";

// selecting element
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// rolling dice functionally
btnRoll.addEventListener("click", function () {
  //generating a randon dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  //  console.log(dice);
  //  display random dice
  diceEl.classList.remove("hidden");
  diceEl.src = `images/dice-${dice}.png`;
});
