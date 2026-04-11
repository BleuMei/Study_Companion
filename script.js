let points = parseInt(localStorage.getItem("points")) || 0;

function updatePointsDisplay() {
  const el = document.getElementById("points");
  if (el) el.innerText = points;
}

function savePoints() {
  localStorage.setItem("points", points);
  updatePointsDisplay();
}

function earnPoints(amount) {
  points += amount;
  savePoints();
  alert("+" + amount + " points");
}

function checkAnswer(answer) {
  const result = document.getElementById("result");

  if (answer === 4) {
    result.innerText = "Correct!";
    points += 10;
  } else {
    result.innerText = "Wrong answer.";
  }

  savePoints();
}

updatePointsDisplay();
