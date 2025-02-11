//color picker
const colorPicker = document.querySelector('.color-picker')


const canvas = document.querySelector('.canvas');
let defaultGridCount = 16;
let defaultGridX = 16;
let defaultGridY = 16;
let defaultGrid = defaultGridX * defaultGridY
let DEFAULT_COLOR = "#000000";
colorPicker.value = DEFAULT_COLOR
const canvasWidth = canvas.clientWidth ;
const canvasHeight = canvas.clientHeight;
let allBoxes = canvas.querySelectorAll('.box')
//buttons
const clearbtn = document.querySelector('.clear');
// const colorbtn = document.querySelector('.color');
const erasebtn = document.querySelector('.erase');
const removeBorders = document.querySelector('.remove-grid')
const rainbowbtn = document.querySelector('.rainbow')
// states
let eraseState = false;
let rainbowState = false;

// rgb values
let r;
let g;
let b;

// range sliders
const rangeSlider = document.querySelector('.slider')
const gridSize = document.querySelector('.grid-measure')

console.log(canvasHeight, canvasWidth)

function rainbowEffect() {
    let allBoxes = canvas.querySelectorAll('.box')
    allBoxes.forEach(box => {


        box.addEventListener('mouseover', () => {
            console.log("rainbow!!")
            let randomR = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
            let randomG = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
            let randomB = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
            console.log(randomR,randomG,randomB)
            box.style.background = `rgb(${randomR},${randomG},${randomB})`
        })
    })
}

function changeCanvasSize() {
   
    const rangeValue = rangeSlider.value;
    gridSize.textContent = `${rangeValue} X ${rangeValue}`
    defaultGridX = rangeValue;
    defaultGridY = rangeValue;
    defaultGridCount = rangeValue;
    defaultGrid = defaultGridCount * defaultGridCount
  
    displayBoxes()
    hoverColor()
    eraseBoxes()
    clearAll()    
}

function displayBoxes() {
    canvas.innerHTML = '';
   
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
   
    let allBoxes = canvas.querySelectorAll('.box')
    allBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            console.log("hover")
    
            box.style.background =  colorPicker.value
        })
    })
}
hoverColor()

function eraseBoxes() {
    
    let allBoxes = canvas.querySelectorAll('.box')
    erasebtn.addEventListener('click', () => {
        console.log('erase')

      
            allBoxes.forEach(box => {
                box.addEventListener('mouseover', () => {
                    
                    box.style.background = '#ffffff'
                })
                
            })    
    })
}

eraseBoxes()

function clearAll() {
    let allBoxes = canvas.querySelectorAll('.box')
    clearbtn.addEventListener('click', () => {
        console.log("clear")

        allBoxes.forEach(box => {
            box.style.background = '#ffffff'
        })
    })
}

clearAll()

function clearBorders() {
    console.log('hi')
    let allBoxes = canvas.querySelectorAll('.box');

    allBoxes.forEach(box => {
        box.classList.toggle('no-borders')
    })
}

colorPicker.addEventListener('click', hoverColor)
rangeSlider.addEventListener('input', changeCanvasSize )
removeBorders.addEventListener('click', clearBorders)
rainbowbtn.addEventListener('click',rainbowEffect)