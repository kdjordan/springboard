/** Command-line tool to generate Markov text. */
const process = require('process')
const fs = require('fs')
const axios = require('axios')
const {MarkovMachine} = require('./markov')


function goMarkov(text) {
    let mm = new MarkovMachine(text)
    console.log(mm.makeText())
}

async function controller(arg) {
    if(arg[2] == 'file') {
        cat(arg[3])
    } else if( arg[2] == 'url') {
        webCat(arg[3])
    } else {
        console.log('Unrecognized type')
        process.exit(1)
    }
}

async function webCat(url) {
    try {
        let res = await axios.get(url)
        goMarkov(res.data)
    } catch(e) {
        console.log(`ERROR fetching ${url}: ${e}`)
        process.exit(1)
    }   
}

function cat(path) {
    fs.readFile(path, 'utf8', (err, data)=> { 
        if (err) {
            console.log(`${err}`)
            process.exit(1)
        }
        goMarkov(data)
    })
}



controller(process.argv)