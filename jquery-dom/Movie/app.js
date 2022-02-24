$('form').submit(function(evt) {
    evt.preventDefault();
    let title = $('#movieName').val()
    let rating = $('#movieRating').val()
    if(title === '') {
        alert('We need a title')
    } else {
        $('tbody').append(`<tr><td><button id="delBtn">X</button></td><td>${title}</td><td>${makeStars(rating)}</td></tr>`)
        $('form').trigger("reset");
    }    
})

$('tbody').on('click', '#delBtn',function(e){
    $(this).parent().parent().remove()
})

function makeStars(num) {
    let starString = ''
    for(let i=0; i<num; i++){
        starString += '&bigstar;'
    }
    return starString
}


