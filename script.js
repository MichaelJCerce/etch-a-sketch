const grid = document.querySelector(".grid");
const squaresPerSideButton = document.querySelector(".squares-button");

function generateRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

function drawBoard(squaresPerSide) {
  for (let i = 0; i < squaresPerSide; ++i) {
    const row = document.createElement("div");

    row.classList.add("row");

    for (let j = 0; j < squaresPerSide; ++j) {
      const column = document.createElement("div");

      column.classList.add("column");
      column.addEventListener("mouseover", function () {
        this.style.background = generateRandomColor();
      });

      row.append(column);
    }

    grid.append(row);
  }
}

function updateSquaresPerSide() {
  const updatedSquaresPerSide = +prompt("how many squares per side [1 - 100]?");

  if (
    updatedSquaresPerSide < 1 ||
    updatedSquaresPerSide > 100 ||
    Number.isNaN(updatedSquaresPerSide)
  ) {
    alert("invalid input. number must be between [1 - 100].");
    return;
  }

  grid.innerHTML = "";
  drawBoard(updatedSquaresPerSide);
}

squaresPerSideButton.addEventListener("click", updateSquaresPerSide);

drawBoard(16);
