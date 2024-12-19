let gridSize = +prompt("Enter the grid size");
let gridContainer = gridSize * gridSize;
const container = document.querySelector("#container");


for (i = 0; i <= gridContainer - 1; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid");
    container.appendChild(newDiv);
} 

const grid = document.querySelectorAll(".grid");

for (let div of grid) {
    div.style.width = 960 / gridSize + "px";
    div.style.height = 960 / gridSize + "px";
}


