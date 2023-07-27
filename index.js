const grid = document.querySelector(".grid");
const dimensionButton = document.querySelector("button");
const mediumQuery = window.matchMedia("(min-width: 500px)");
const largeQuery = window.matchMedia("(min-width: 1000px)");

let gridWidth =
  grid.offsetWidth -
  2 * parseFloat(window.getComputedStyle(grid).paddingTop) -
  2 * parseFloat(window.getComputedStyle(grid).borderTopWidth);
let gridDimension = 16;
let divDimension = gridWidth / gridDimension;

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

function generateRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

function updateGridSize() {
  gridWidth =
    grid.offsetWidth -
    2 * parseFloat(window.getComputedStyle(grid).paddingTop) -
    2 * parseFloat(window.getComputedStyle(grid).borderTopWidth);
  divDimension = gridWidth / gridDimension;

  for (let i = 0; i < gridDimension; ++i) {
    const row = grid.childNodes[i];
    console.dir(grid.childNodes);
    for (let j = 0; j < gridDimension; ++j) {
      row.childNodes[j].style.width = `${divDimension}px`;
      row.childNodes[j].style.height = `${divDimension}px`;
    }
  }
}

function updateGridDimensions() {
  const newDimension = +prompt(
    "How many divs do you want per row/column: (num <= 100) "
  );
  if (newDimension < 1 || newDimension > 100 || Number.isNaN(newDimension)) {
    alert("Number must be less than or equal to 100");
    return;
  }
  grid.innerHTML = "";
  gridDimension = newDimension;
  divDimension = gridWidth / gridDimension;
  drawBoard();
}

mediumQuery.addEventListener("change", updateGridSize);
largeQuery.addEventListener("change", updateGridSize);
dimensionButton.addEventListener("click", updateGridDimensions);

drawBoard();
