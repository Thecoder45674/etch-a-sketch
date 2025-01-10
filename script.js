const GRIDSIDE = 960;
let squaresPerSide = 16;

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
    const newSize = prompt("Enter Size between 1 - 35");

    if (!isNaN(newSize) && (newSize >= 1 && newSize <= 35)) {
        squaresPerSide = newSize;
        createGrid(squaresPerSide); 
    } else {
        alert("Please enter a valid number between 1 and 35.");
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

function createGrid(squaresPerSide) {
    grid.innerHTML = '';

    const numOfSquare = squaresPerSide * squaresPerSide;
    const widthOrHeight = `${(GRIDSIDE / squaresPerSide) - 2}px`

    for (let i = 0; i < numOfSquare; i++) {
        const gridCell = document.createElement("div");
        
        gridCell.style.width = gridCell.style.height = widthOrHeight;
        gridCell.classList.add("cell");

        grid.appendChild(gridCell);

        gridCell.addEventListener("mouseover", changeCellBackground);
    }
}

changeSize.addEventListener("click", updateSize)
changeMode.addEventListener("click", toggleMode);
reset.addEventListener("click", resetGrid)

createGrid(squaresPerSide);