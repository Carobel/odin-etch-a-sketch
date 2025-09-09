SIZE = 16;

function createPixels() {
    canvas = document.querySelector('#canvas');
    for(let x = 0; x < SIZE; x++) {
        for(let y = 0; y < SIZE; y++) {
            console.log(x,y);
        }
    }
}

createPixels();