const container = document.querySelector(".container");
const containerWidth = container.offsetWidth - 2;
const dimensionsButton = document.querySelector("button");
let sideOfDivs = 16;
let divSideWidth = containerWidth / sideOfDivs;

dimensionsButton.addEventListener("click", () => {
  const newDimension = +prompt(
    "How many divs do you want per row/column: (num < 100) "
  );
  if (newDimension < 1 || newDimension > 100 || Number.isNaN(newDimension)) {
    alert("Number must be less than or equal to 100");
    return;
  }
  clearBoard();
  sideOfDivs = newDimension;
  divSideWidth = containerWidth / sideOfDivs;
  drawBoard();
});

function drawBoard() {
  for (let i = 0; i < sideOfDivs; ++i) {
    for (let j = 0; j < sideOfDivs; ++j) {
      const div = document.createElement("div");
      div.style.border = "1px solid black";
      div.style.width = `${divSideWidth}px`;
      div.style.height = `${divSideWidth}px`;
      div.style.background = "crimson";
      div.addEventListener("mouseover", function (e) {
        // e.target.style.background = "blueviolet";
        this.style.background = "blueviolet";
      });
      container.append(div);
    }
  }
}

function clearBoard() {
  for (let i = 0; i < sideOfDivs; ++i) {
    for (let j = 0; j < sideOfDivs; ++j) {
      container.removeChild(container.lastChild);
    }
  }
}

drawBoard();
