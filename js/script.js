SIZE = 16;

// create a canvas of pixels
function createPixels() {
    canvas = document.querySelector('#canvas');
    for(let x = 0; x < SIZE; x++) {
        const row = document.createElement('div');
        row.classList.add('row');
        canvas.appendChild(row);
        
        for(let y = 0; y < SIZE; y++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.id = `${String(x)},${String(y)}`
            row.appendChild(pixel);
        }
    }
}

createPixels();