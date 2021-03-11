'use strict';

// Selecting Elements player 1 and 2
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
let randomNum = Math.trunc(Math.random() * 6) + 1;
let cScore = 0;

let tScore0 = 0;
let tScore1 = 0;

const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

document.querySelector('.btn--roll').addEventListener('click', function () {
  randomNum = Math.trunc(Math.random() * 6) + 1;

  if (tScore1 <= 20 && tScore0 <= 20) {
    dice.classList.remove('hidden');
    dice.src = `dice-${randomNum}.png`;
    if (player0.classList.contains('player--active')) {
      cScore += randomNum;
      currentScore0.textContent = cScore;
    } else if (player1.classList.contains('player--active')) {
      cScore += randomNum;
      currentScore1.textContent = cScore;
    }

    if (randomNum === 1) {
      if (player0.classList.contains('player--active')) {
        player0.classList.remove('player--active');
        player1.classList.add('player--active');
        cScore = 0;
        currentScore0.textContent = cScore;
      } else if (player1.classList.contains('player--active')) {
        player1.classList.remove('player--active');
        player0.classList.add('player--active');
        cScore = 0;
        currentScore1.textContent = cScore;
      }
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function (e) {
  //   currentScore0.textContent = 0;

  if (player0.classList.contains('player--active')) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');

    tScore0 += cScore;
    score0El.textContent = tScore0;

    cScore = 0;
    currentScore0.textContent = cScore;
  } else if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');

    tScore1 += cScore;
    score1El.textContent = tScore1;

    cScore = 0;
    currentScore1.textContent = cScore;
  }

  if (tScore1 >= 20 || tScore0 >= 20) {
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    dice.classList.add('hidden');
    if (tScore0 >= 20) {
      player0.classList.add('player--winner');
    } else if (tScore1 >= 20) {
      player1.classList.add('player--winner');
    }
  }
});

document.querySelector('.btn--new').addEventListener('click', function () {
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  tScore0 = 0;
  tScore1 = 0;
  cScore = 0;
  score0El.textContent = tScore0;
  score1El.textContent = tScore1;
  currentScore0.textContent = cScore;
  currentScore1.textContent = cScore;
  dice.classList.add('hidden');
});
