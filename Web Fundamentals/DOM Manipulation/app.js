let one = document.getElementById('container')
let two = document.querySelector('#container')
let three = document.querySelectorAll('second')
let four = document.querySelector('ol>.third')
let five = document.getElementById('container')
// five.innerText =  'Hello'
let six = document.querySelector('.footer')
//six
six.classList.add('main')
//seven
six.classList.remove('main')
//eight
let newLi = document.createElement('li')
//nine
newLi.innerText = 'four'
//ten
document.querySelector('ul').appendChild(newLi)
// theUl.appendChild(newLi)
//eleven
let theList = document.querySelectorAll('ol li')
theList.forEach(function(el) {
    el.style.backgroundColor = 'green'
})
//twelve
document.querySelector('.footer').remove()
