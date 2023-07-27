const grid = document.querySelector(".grid");
const gridWidth = grid.offsetWidth - 16;
const dimensionButton = document.querySelector("button");
let gridDimension = 16;
let divDimension = gridWidth / gridDimension;

dimensionButton.addEventListener("click", () => {
  const newDimension = +prompt(
    "How many divs do you want per row/column: (num <= 100) "
  );
  if (newDimension < 1 || newDimension > 100 || Number.isNaN(newDimension)) {
    alert("Number must be less than or equal to 100");
    return;
  }
  clearBoard();
  gridDimension = newDimension;
  divDimension = gridWidth / gridDimension;
  drawBoard();
});

function drawBoard() {
  for (let i = 0; i < gridDimension; ++i) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < gridDimension; ++j) {
      const column = document.createElement("div");
      column.classList.add("column");
      column.style.width = `${divDimension}px`;
      column.style.height = `${divDimension}px`;
      column.addEventListener("mouseover", function () {
        // this.style.background = "blueviolet";
        this.style.background = generateRandomColor();
      });
      row.append(column);
    }
    grid.append(row);
  }
}

function clearBoard() {
  for (let i = 0; i < gridDimension; ++i) {
    grid.removeChild(grid.lastChild);
  }
}

function generateRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

drawBoard();
