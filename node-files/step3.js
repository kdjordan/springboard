const process = require('process')
const fs = require('fs')
const axios = require('axios')



function handleOut(data, out) {
    if(out) {
        fs.writeFile(out, data, 'utf8', (err) => {
          if (err) {
            console.error(`Couldn't write ${out}: ${err}`);
            process.exit(1);
          }
        });
      } else {
        console.log(data);
      }
}

function cat(path, out) {
    fs.readFile(path, 'utf8', (err, data)=> { 
        if (err) {
            console.log(`${err}`)
            process.exit(1)
        }
        handleOut(data, out)
    })
}

async function webCat(url, out) {
    try {
        let res = await axios.get(url)
        handleOut(res.data, out)
    } catch(e) {
        console.log(`ERROR fetching ${url}: ${e}`)
        process.exit(1)
    }   
}

let out, path

function controller(arg) {
    if(arg[2] === '--out') {
       out = arg[3]
       path = arg[4]
       doOperation(path, out)
    } else {
        path = arg[2]
        doOperation(path)
    }
}

function doOperation(path, out) {
    if(path.slice(0,4) === 'http'){
        webCat(path, out)
    } else {
        cat(path, out)
    }
}

controller(process.argv)