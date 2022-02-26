$().ready(function() {
    axios.defaults.baseURL = 'http://api.giphy.com/v1/gifs/';
    $('#removeBtn').on('click', function(e) {
        e.preventDefault()
        $('#display').empty()
    })
    
})

$('form').on('submit', function(e) {
    e.preventDefault();
    let searchTerm = $('#search').val()
    if(searchTerm === '') {
        alert('Please enter a search term !')
    } else {
        getGif(searchTerm)
        $('#search').val('')
    }

})


async function getGif(term) {
    try{
        let api_key = 'S6hhaCXvQ12D5Bd0rAXSRvwk7ZkoBQhW'
        let res = await axios.get(`search?q=${term}&api_key=${api_key}`)
        let randomIndex = getRandomIndex(res.data.data.length)
        addGif(res.data.data[randomIndex].images.original.url)
    } catch(e) {
        alert(e)
    }

}

function addGif(theLink) {
    let $div = $('<div>', {class: 'gif'})
    let $gif = document.createElement('img')
    $gif.src = theLink
    $div.append($gif)
    $('#display').append($div)
}

function getRandomIndex(limit) {
    return Math.floor(Math.random() * limit)
}
