const GRIDSIDE = 960;
let size = 16;

let isRainbowMode = false;

const grid = document.querySelector("#grid");
const changeSize = document.querySelector("#size");
const changeMode = document.querySelector("#mode");
const reset = document.querySelector("#reset");

function resetGrid() {
    const cells = document.querySelectorAll(".cell")
    cells.forEach(cell => {
        cell.style.backgroundColor = '';
    });
}

function toggleMode() {
    isRainbowMode = !isRainbowMode;
    changeMode.textContent = isRainbowMode ? "Normal Mode" : "Rainbow Mode";
}

function updateSize() {
    const newSize = prompt("Enter Size between 1 - 100");

    if (!isNaN(newSize) && (newSize >= 1 && newSize <= 100)) {
        size = newSize;
        createGrid(size); 
    } else {
        alert("Please enter a valid number between 1 and 100.");
    };
}

function changeCellBackground() {
    if (isRainbowMode) {
        const colors = [
            '#FF0000', // Red
            '#FF7F00', // Orange
            '#FFFF00', // Yellow
            '#00FF00', // Green
            '#0000FF', // Blue
            '#4B0082', // Indigo
            '#9400D3'  // Violet
        ];

        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.style.backgroundColor = randomColor;
    }
    else {
        this.style.backgroundColor = 'black';
    }
}

function createGrid(size) {
    grid.innerHTML = '';

    grid.style.width = `${GRIDSIDE}px`;
    grid.style.height = `${GRIDSIDE}px`;

    const cellSize = Math.floor(GRIDSIDE / size) - 2;

    for (let i = 0; i < size * size; i++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add("cell");

        gridCell.style.width = `${cellSize}px`;
        gridCell.style.height = `${cellSize}px`;

        gridCell.addEventListener("mouseover", changeCellBackground);

        grid.appendChild(gridCell);
    }
}

changeSize.addEventListener("click", updateSize)
changeMode.addEventListener("click", toggleMode);
reset.addEventListener("click", resetGrid)

createGrid(size);