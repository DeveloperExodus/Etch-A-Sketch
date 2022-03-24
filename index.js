const container = document.getElementById("container");
const slider = document.getElementById('slider')

const resetBtn = document.getElementById('reset')

let sliderInfo = document.getElementById('slider-info')
let size = slider.value;

const defaultSize = 8

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover', color)
  };
};


function onInput(value) {
  let size = value
  makeRows(size,size)
  sliderInfo.textContent = `${size}, ${size}`
}


function color(e) {

  e.target.style.backgroundColor = 'black';
}

function reset() {
  container.innerHTML = ''
  makeRows(defaultSize, defaultSize);
  slider.value = defaultSize;
  sliderInfo.textContent = `${defaultSize}, ${defaultSize}`
}

resetBtn.addEventListener('click', reset)