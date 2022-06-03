let form = document.querySelector('form')
let favNumberInput = document.querySelector('#fav-number')
let resultsDiv = document.querySelector('#results')
let numMssg = document.querySelector('#num-mssg')

window.onload = () => {
    randomBatchRequest()
  };

form.addEventListener('submit', async (e)=> {
    e.preventDefault()
    
    numMssg.innerText = 'Random Facts about Your Favorite Number !'
    let number = favNumberInput.value
    favoriteFacts(number).then((res) => {
        resultsDiv.innerHTML = ''
        res.forEach(el => {
            let p = document.createElement('p')
            let text = document.createTextNode(el.data.text)
            p.appendChild(text)
            resultsDiv.appendChild(p)
        })
        
    })
    .catch(e => {
        console.log(`Error ${e}`)
    })
})


function favoriteFacts(number) {
    return new Promise((resolve, reject) => {
        axios.all([
            axios.get(`http://numbersapi.com/${number}?json`),
            axios.get(`http://numbersapi.com/${number}?json`),
            axios.get(`http://numbersapi.com/${number}?json`),
            axios.get(`http://numbersapi.com/${number}?json`)
        ]).then((res)=> {
            resolve(res)
        }).catch((e) => {
            console.log(`Error ${e}`)
            reject()
        })
    })
}
// function favoriteFacts(number) {
//     return new Promise((resolve, reject) => {
//         let returnArr = []
//         axios.get(`http://numbersapi.com/${number}?json`)
//             .then((res) => {
//                 returnArr.push(res.data.text)
//                 return axios.get(`http://numbersapi.com/${number}?json`)
//             }) 
//             .then((res) => {
//                 returnArr.push(res.data.text)
//                 return axios.get(`http://numbersapi.com/${number}?json`)
//             })
//             .then((res) => {
//                 returnArr.push(res.data.text)
//                 return axios.get(`http://numbersapi.com/${number}?json`)
//             })
//             .then((res) => {
//                 returnArr.push(res.data.text)
//             })
//             .catch((err) => {
//                 console.log(`Error in fetch ${err}`)
//                 reject()
//             })
//         resolve(returnArr)
        
//     })
// }

// on windpw load this function generates 3 random numbers and gets facts in one call
function randomBatchRequest() {
    let numsArr = []
    for (let i=0; i<3; i++) {
        let num =  Math.floor(Math.random() * 500);
        numsArr.push(num)
    }
    str = ''
    numsArr.forEach((num) => {
        str += num.toString() + ','
    })
    str = str.slice(0, str.length-1)
    url = `http://numbersapi.com/${str}`
    axios.get(url)
    .then((res) => {
        showResults(res.data)
    })
    .catch(e => {
        console.log('error ', e)
    })
}




function showResults(results) {
    resultsDiv.innerHTML = ''
    for (const [key,value] of Object.entries(results)) {
        let p = document.createElement('p')
        let text = document.createTextNode(value)
        p.appendChild(text)
        resultsDiv.appendChild(p)
    }
}