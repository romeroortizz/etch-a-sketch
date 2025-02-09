
const canvas = document.querySelector('.canvas');

let defaultGridCount = 16;
let defaultGridX = 16;
let defaultGridY = 16;
let defaultGrid = defaultGridX * defaultGridY
let DEFAULT_COLOR = "#000000"; // black
const canvasWidth = canvas.clientWidth ;
const canvasHeight = canvas.clientHeight;

/*buttons */
const clearbtn = document.querySelector('.clear');
const colorbtn = document.querySelector('.color');
const erasebtn = document.querySelector('.erase');
/*states */
let eraseState = false;


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



const allBoxes = document.querySelectorAll('.box')

function hoverColor() {
    allBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            console.log("hover")
    
            box.style.background = DEFAULT_COLOR
        })
    })
}


hoverColor()

function eraseBoxes() {
    erasebtn.addEventListener('click', () => {
        console.log('erase')
        eraseState = true;

      
            allBoxes.forEach(box => {
                box.addEventListener('mouseover', () => {
                    
                    box.style.background = '#ffffff'
                })
                
            })
        
    })
}

eraseBoxes()
function clearAll() {

    clearbtn.addEventListener('click', () => {
        console.log("clear")

        allBoxes.forEach(box => {
            box.style.background = '#ffffff'
        })
    })
}

clearAll()



colorbtn.addEventListener('click', hoverColor)