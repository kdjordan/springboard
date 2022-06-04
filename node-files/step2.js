const process = require('process')
const fs = require('fs')
const axios = require('axios')


function controller(arg) {
    if(arg.slice(0,4) === 'http'){
        webCat(arg)
    } else {
        cat(arg)
    }
    
}

function cat(path) {
    fs.readFile(path, 'utf8', (err, data)=> { 
        if (err) {
            console.log(`${err}`)
            process.exit(1)
        }
        console.log(data)
    })
}

async function webCat(url) {
    try {
        let res = await axios.get(url)
        console.log(res.data)
    } catch(e) {
        console.log(`ERROR fetching ${url}: ${e}`)
        process.exit(1)
    }   
}



controller(process.argv[2])