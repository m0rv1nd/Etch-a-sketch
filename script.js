const container = document.querySelector("#container");
const gridDrawBtn = document.querySelector("#grid-draw-btn");
let ifClick = false;
let grid;

document.addEventListener('dragstart', e => e.preventDefault());

gridDrawBtn.addEventListener("click", drawGrid);

function drawGrid () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      
    let gridSize = +prompt("how many squares per side of a square grid? (max. 256)");
    
    while (gridSize > 256) {
        gridSize = +prompt("how many squares per side of a square grid? (max. 256)");
      }
    
    let gridContainer = gridSize * gridSize;

    for (i = 0; i <= gridContainer - 1; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid");
        container.appendChild(newDiv);
    } 
    
    grid = document.querySelectorAll(".grid");
    
    for (let div of grid) {
        div.style.width = 960 / gridSize + "px";
        div.style.height = 960 / gridSize + "px";
    }
    draw();  
}
    
function draw () {
    for (let div of grid) {

        div.addEventListener("mousedown", (event) => {
            if (event.button === 0) {
                ifClick = true;
                const currentOpacity = parseFloat(div.style.opacity || 1);
                div.style.opacity = currentOpacity - 0.1;
            }
        });
    
        div.addEventListener("mousemove", () => {
            if (ifClick) {
                div.style.backgroundColor = randomColor();
            }
        });
    
        div.addEventListener("mouseup", () => {
            ifClick = false;
            }
        );
    }
}

function randomColor() {
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);

    return "rgb(" + color1 + "," + color2 + "," + color3 + ")";
  }

 