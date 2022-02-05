//to  execute function run node countDown.js
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
countDown(4)


