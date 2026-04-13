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

function enterClass() {
  const code = document.getElementById("classCode").value.toUpperCase();

  if (code === "CPE101") {
    window.location.href = "cpe.html";
  } else if (code === "IT101") {
    window.location.href = "it.html";
  } else if (code === "ECE101") {
    window.location.href = "ece.html";
  } else {
    alert("Invalid class code");
  }
}
