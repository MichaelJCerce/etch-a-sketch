const grid = document.querySelector(".grid");
const changeDimensionsButton = document.querySelector("button");



function drawBoard(divsPerSide) {
  for (let i = 0; i < divsPerSide; ++i) {
    const row = document.createElement("div");

    row.classList.add("row");
    
    for (let j = 0; j < divsPerSide; ++j) {
      const column = document.createElement("div");

      column.classList.add("column");
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

function updateDivsPerSide() {
  const newDivDimension = +prompt(
    "How many divs do you want per row/column: (num <= 100) "
  );

  if (
    newDivDimension < 1 ||
    newDivDimension > 100 ||
    Number.isNaN(newDivDimension)
  ) {
    alert("Number must be less than or equal to 100");
    return;
  }

  grid.innerHTML = "";
  drawBoard(newDivDimension);
}

changeDimensionsButton.addEventListener("click", updateDivsPerSide);

drawBoard(16);
