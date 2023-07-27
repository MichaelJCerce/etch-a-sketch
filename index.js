const container = document.querySelector(".container");
const containerWidth = container.offsetWidth;
const sideOfDivs = 100;
const divSideWidth = containerWidth / sideOfDivs;

for (let i = 0; i < sideOfDivs; ++i) {
  for (let j = 0; j < sideOfDivs; ++j) {
    const div = document.createElement("div");
    div.style.width = `${divSideWidth}px`;
    div.style.height = `${divSideWidth}px`;
    div.style.background = "crimson";
    container.append(div);
  }
}
