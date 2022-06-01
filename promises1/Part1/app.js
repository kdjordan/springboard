let form = document.querySelector('form')
let favNumberInput = document.querySelector('#fav-number')
let resultsDiv = document.querySelector('#results')




form.addEventListener('submit', async (e)=> {
    e.preventDefault()
    let number = favNumberInput.value
    axios.get(`http://numbersapi.com/${number}?json`)
    .then((res) => {
        console.log('fact 1: ', res.data.text)
        return axios.get(`http://numbersapi.com/${number}?json`)
    }) 
    .then((res) => {
        console.log('fact 2: ', res.data.text)
        return axios.get(`http://numbersapi.com/${number}?json`)
    })
    .then((res) => {
        console.log('fact 3: ', res.data.text)
        return axios.get(`http://numbersapi.com/${number}?json`)
    })
    .then((res) => {
        console.log('fact 4: ', res.data.text)
    })
    .catch((err) => {
        console.log(`Error in fetch ${err}`)
    })
    // let res2 = axios.get(`http://numbersapi.com/${number}`)
    // let res3 = axios.get(`http://numbersapi.com/${number}`)
    // let res4 = axios.get(`http://numbersapi.com/${number}`)

    // let allRes = await Promise.all([res1, res2, res3, res4])
})


function showResults(results) {
    
    for (res of results) {
        let p = document.createElement('p')
        let text = document.createTextNode(res.data)
        p.appendChild(text)
        resultsDiv.appendChild(p)
    }
}