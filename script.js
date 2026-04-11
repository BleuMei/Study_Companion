// Load points
let points = localStorage.getItem("points") || 0;
points = parseInt(points);

// Display points if element exists
const pointsDisplay = document.getElementById("points");
if (pointsDisplay) {
  pointsDisplay.innerText = points;
}

// Earn points
function earnPoints(amount) {
  points += amount;
  localStorage.setItem("points", points);
  alert("You earned " + amount + " points!");
}

// Quiz logic
function checkAnswer(answer) {
  const result = document.getElementById("result");

  if (answer === 4) {
    result.innerText = "Correct! +10 points";
    points += 10;
  } else {
    result.innerText = "Wrong answer.";
  }

  localStorage.setItem("points", points);
}