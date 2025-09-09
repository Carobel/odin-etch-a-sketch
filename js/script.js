SIZE = 16;

// create a canvas of pixels
function createPixels() {
    canvas = document.querySelector('#canvas');
    for(let x = 0; x < SIZE; x++) {
        for(let y = 0; y < SIZE; y++) {
            console.log(x,y);
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.id = `${String(x)},${String(y)}`
            canvas.appendChild(pixel);
        }
    }
}

createPixels();