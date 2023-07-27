const container = document.querySelector(".container");
const containerWidth = container.offsetWidth - 2;
const sideOfDivs = 16;
const divSideWidth = containerWidth / sideOfDivs;

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
