const againButton = document.getElementsByClassName("again")[0];
const inputNumber = document.getElementById("inputField");
const checkButton = document.getElementsByClassName("check")[0];
const result = document.getElementsByClassName("result")[0];
const highscore = document.getElementsByClassName("highscore")[0];
const score = document.getElementsByClassName("score")[0];
const randomNumber = Math.floor(Math.random() * 20) + 1;
let x = 5;

checkButton.addEventListener("click", compareNumbers);
function compareNumbers() {
  let value = Number(inputNumber.value);
  if (value >= 1 && value <= 20) {
    if (value === randomNumber) {
      result.innerHTML = "You are CORRECT!";
      let trials = 6 - x;
      score.innerHTML = `Congratulations! You guessed it after ${trials} times!`;
      document.body.style.backgroundColor = "#03fc5e";
      document.getElementById("question").innerHTML = randomNumber;
      inputNumber.style.backgroundColor = "#03fc5e";
    } else if (value > randomNumber) {
      if (x > 1) {
        result.innerHTML = "That's a little bit high :( Try again!";
        x = x - 1;
        score.innerHTML = "You have " + x + " guesses left.";
      } else {
        result.innerHTML = "You didn't guess the correct number. Press AGAIN button to try again!";
        score.innerHTML = "You have 0 guesses left.";
        document.body.style.backgroundColor = "#ff3333";
        inputNumber.style.backgroundColor = "#ff3333";
      }
    } else if (value < randomNumber) {
      if (x > 1) {
        result.innerHTML =
          "That's a little bit low :( Try again!";
        x = x - 1;
        score.innerHTML = "You have " + x + " guesses left.";
      } else {
        result.innerHTML =
          "You didn't guess the correct number. Press AGAIN button to try again!";
        score.innerHTML = "You have 0 guesses left.";
        document.body.style.backgroundColor = "#ff3333";
        inputNumber.style.backgroundColor = "#ff3333";
      }
    }
  } else {
    result.innerHTML = "Number is invalid! Guess a number from 1 to 20.";
  }
}

againButton.addEventListener("click", resetPage);
function resetPage() {
  document.location.reload(true);
}
