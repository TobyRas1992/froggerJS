const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");
const leftLogs = document.querySelectorAll(".log-left");
const rightLogs = document.querySelectorAll(".log-right");
let currentIndex = 76;
const width = 9;

function moveFrog(e) {
  //required to remove green trail
  squares[currentIndex].classList.remove("frog");
  //handle key press event
  switch (e.key) {
    case "ArrowLeft":
      //keep frog inside left grid border
      if (currentIndex % width !== 0) {
        currentIndex -= 1;
      }
      break;
    case "ArrowRight":
      if (currentIndex % width < width - 1) {
        currentIndex += 1;
      }
      break;
    case "ArrowUp":
      if (currentIndex - width >= 0) {
        currentIndex -= width;
      }
      break;
    case "ArrowDown":
      if (currentIndex + width < width * width) {
        currentIndex += width;
      }
      break;
  }
  squares[currentIndex].classList.add("frog");
}
//listen for key press
document.addEventListener("keyup", moveFrog);

//Move logs left
function autoMoveLogs() {
  leftLogs.forEach((leftLog) => moveLogLeft(leftLog));
  rightLogs.forEach((rightLog) => moveLogRight(rightLog));
}
function moveLogLeft(leftLog) {
  switch (true) {
    case leftLog.classList.contains("l1"):
      leftLog.classList.remove("l1");
      leftLog.classList.add("l2");
      break;
    case leftLog.classList.contains("l2"):
      leftLog.classList.remove("l2");
      leftLog.classList.add("l3");
      break;
    case leftLog.classList.contains("l3"):
      leftLog.classList.remove("l3");
      leftLog.classList.add("l4");
      break;
    case leftLog.classList.contains("l4"):
      leftLog.classList.remove("l4");
      leftLog.classList.add("l5");
      break;
    case leftLog.classList.contains("l5"):
      leftLog.classList.remove("l5");
      leftLog.classList.add("l1");
      break;
  }
}
function moveLogRight(rightLog) {
  switch (true) {
    case rightLog.classList.contains("l1"):
      rightLog.classList.remove("l1");
      rightLog.classList.add("l5");
      break;
    case rightLog.classList.contains("l2"):
      rightLog.classList.remove("l2");
      rightLog.classList.add("l1");
      break;
    case rightLog.classList.contains("l3"):
      rightLog.classList.remove("l3");
      rightLog.classList.add("l2");
      break;
    case rightLog.classList.contains("l4"):
      rightLog.classList.remove("l4");
      rightLog.classList.add("l3");
      break;
    case rightLog.classList.contains("l5"):
      rightLog.classList.remove("l5");
      rightLog.classList.add("l4");
      break;
  }
}
setInterval(autoMoveLogs, 1000);
