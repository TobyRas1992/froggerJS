const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");
console.log(squares);
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
