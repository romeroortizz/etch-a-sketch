
const canvas = document.querySelector('.canvas');

let defaultGridCount = 16;
let defaultGridX = 16;
let defaultGridY = 16;
let defaultGrid = defaultGridX * defaultGridY
let DEFAULT_COLOR = "#000000"; // black
const canvasWidth = canvas.clientWidth ;
const canvasHeight = canvas.clientHeight;

console.log(canvasHeight,canvasWidth)

function displayBoxes() {
    for (let i = 0; i < defaultGrid; i++){
        const newBox = document.createElement('div');
        // css styles to add appropriate size to boxes
        newBox.style.width = `${canvasWidth / defaultGridCount}px`
        newBox.style.height = `${canvasHeight / defaultGridCount}px`
        newBox.classList.add("box");
        canvas.appendChild(newBox)
    }
}

displayBoxes()

function hoverColor() {
    
}



