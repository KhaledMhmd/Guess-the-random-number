const againButton = document.getElementsByClassName("again")[0];
const inputNumber = document.getElementById("inputField");
const checkButton = document.getElementsByClassName("check")[0];
const result = document.getElementsByClassName("result")[0];
const highscore = document.getElementsByClassName("highscore")[0];
const score = document.getElementsByClassName("score")[0];
const randomNumber = Math.floor(Math.random() * 20) + 1;
let x = 20;

console.log(randomNumber);
checkButton.addEventListener("click", compareNumbers);
function compareNumbers() {
  let value = Number(inputNumber.value);
  if (value >= 1 && value <= 20) {
    if (value === randomNumber) {
      result.innerHTML = "You are CORRECT!";
      let trials = 21 - x;
      score.innerHTML = `Congratulations! You guessed it after ${trials} times!`;
      document.body.style.backgroundColor = "#03fc5e";
      document.getElementById("question").innerHTML = randomNumber;
      inputNumber.style.backgroundColor = "#03fc5e";
    } else if (value > randomNumber) {
      result.innerHTML = "That's a little bit high :( Try again!";
      x = x - 1;
      score.innerHTML = "Score: " + x;
    } else if (value < randomNumber) {
      result.innerHTML = "That's a little bit low :( Try again!";
      x = x - 1;
      score.innerHTML = "Score: " + x;
    }
  }
}

againButton.addEventListener("click", resetPage);
function resetPage() {
  document.location.reload(true);
}
