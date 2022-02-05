
let r, g, b

onmousemove = function(e) {
    r = randomNumber(0, 255)
    g = randomNumber(0, 255)
    b = randomNumber(0, 255)

    makeBackgroundColor(r,g,b)
}

function makeBackgroundColor(red, green, blue) {
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})` 
}

function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.random() * (max - min) + min;
} 

window.addEventListener("onmousemove", onmousemove)
