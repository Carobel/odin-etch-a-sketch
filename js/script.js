SIZE = 16;

// create a canvas of pixels, the pixels are divs organized in rows
function createPixels() {
    canvas = document.querySelector('#canvas');
    // create row: container for one row of pixels
    for(let x = 0; x < SIZE; x++) {
        const row = document.createElement('div');
        row.classList.add('row');
        canvas.appendChild(row);
        
        // create pixel: a pixel here is a div-element with the grid coordinates as ID (e.g. 'pixel-1-1')
        for(let y = 0; y < SIZE; y++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.id = `pixel-${String(x)}-${String(y)}`
            row.appendChild(pixel);
        }
    }
}

// handle mouse hover
canvas.addEventListener('mouseover', (event) => {
    let targetID = '#' + event.target.id;
    targetPixel = document.querySelector(targetID);
    colorPixel(targetPixel);
});

// color pixel
function colorPixel(pixel) {
    pixel.classList.add("filled");
}

createPixels();