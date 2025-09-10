const btnClear = document.querySelector('#clear');
const btnChangeSize = document.querySelector('#change-size');
const canvas = document.querySelector('#canvas');

// create a canvas of pixels, the pixels are divs organized in rows
function createPixels(size = 16) {
    // create row: container for one row of pixels
    for(let x = 0; x < size; x++) {
        const row = document.createElement('div');
        row.classList.add('row');
        canvas.appendChild(row);
        
        // create pixel: a pixel here is a div-element with the grid coordinates as ID (e.g. 'pixel-1-1')
        for(let y = 0; y < size; y++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.id = `pixel-${String(x)}-${String(y)}`
            row.appendChild(pixel);
        }
    }
}

// color pixel
function colorPixel(pixel) {
    pixel.classList.add("filled");
}

// clear all pixels
function clearPixels() {
    canvas.textContent = '';
}

// handle mouse hover over canvas pixels
canvas.addEventListener('mouseover', (event) => {
    const targetID = '#' + event.target.id;
    targetPixel = document.querySelector(targetID);
    colorPixel(targetPixel);
});

// handle clear button
btnClear.addEventListener('click', () => {
    clearPixels();
    createPixels();
});

// handle change size button
btnChangeSize.addEventListener('click', () => {
    const input = prompt('Specify a size:');
    let size = Number(input);
    if (size > 100) {
        size = 100;
    }
    clearPixels();
    createPixels(size);
});


createPixels();