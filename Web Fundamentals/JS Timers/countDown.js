//to  execute function run node app.js
function countDown(limit) {
    let counter = limit
    let theInterval = setInterval(function() {
        //add check  to make the parameter is passed is a positive number
        if(counter <= 0) {
            console.log("DONE !")
            clearInterval(theInterval) 
        } else {
            console.log(counter)
            counter--
        }
    }, 1000)
}
countDown(0)


//Color generator
// let r, g, b, width = 510, height = 510

// onresize = function(e) {
//     width = e.target.outerWidth;
//     height = e.target.outerHeight;
//  }
//  window.addEventListener("resize", onresize);

// onmousemove = function(e) {
    // if(width <= 510) {
        //calculate color off of width 510 and <
    // console.log(e.clientX/width)
    // r = randomNumber(0, 255)
    // g = randomNumber(0, 255)
    // b = randomNumber(0, 255)
    // if(g >= 255) {
        //     g == e.clientY - 255
        // }
        // b = Math.round(Math.abs(255 - e.clientY * .50))
        // // console.log('position', r,g,b)
        // console.log('position', r,g,b)
        // if(e.clientX/width >= 1.75) {
        //     makeBackgroundColor(r, g, b)
        // }
        // makeBackgroundColor('small', x, y) 
    // }
    // return [e.clientX, e.clientY]
// }
// window.addEventListener("onmousemove", onmousemove)

// function makeBackgroundColor(red, green, blue) {
    // if(size === 'small') {
    //     // r = Math.random() * (max - min) + min;
    //     r = Math.random() * 255;
    //     g = Math.random() * 255;
    //     b = Math.random() * 255;
    // }
    //get 
    //max value for rgb is 255
    // console.log('making color', x, y)
    // r = Math.floor(Math.random() * Math.round(width/x))
    // b = Math.floor(Math.random() * Math.round(height/y))
    // g = Math.floor(Math.random() * Math.round((width+height)/Math.abs(x-y)))
    // r = Math.floor(Math.random() * Math.abs(255-width))
    // b = Math.floor(Math.random() * Math.abs(255-height))
    // g = Math.floor(Math.random() * Math.abs(255-(width+height)))
    // console.log(g)
    // console.log(r)
    // console.log(b)
//     document.body.style.backgroundColor = `rgb(${r},${g},${b})` 
// }

// function randomNumber(min, max) { 
//     return Math.random() * (max - min) + min;
// } 

