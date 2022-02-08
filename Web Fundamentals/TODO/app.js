const theInput = document.querySelector('#input')
const theUl = document.querySelector('ul')
const theForm = document.querySelector('form');

let newTodo = null
let todoToDelete = false

const completedTodo = '<span class="todo-list__delete">X</span>'




theForm.addEventListener('submit', function(e) {
    e.preventDefault()
    newTodo = e.target.children[0].value
    if(newTodo == '') {
        alert('You cant have an empty TODO !')
    } else {
        theForm.reset()
        console.log('submitting',newTodo)
        addTodo(newTodo)
    }
})

theUl.addEventListener('click', function(e) {
    // e.target.remove()
    // if(e.target.)
    // e.preventDefault()
    // console.log(e.target.nodeName)
    if(e.target.nodeName == 'SPAN' && e.target.previousSibling.classList.contains('completed')) {
        e.target.previousSibling.remove()
        e.target.remove()
    }

    if(e.target.nodeName == 'LI') {
        if(e.target.classList.contains('completed')) {
            e.target.classList.remove('completed')
            e.target.nextSibling.remove()
            // console.log(removeSpan.nextSibling)
            // console.log(e.target.previousSibling)
        } else {
            e.target.classList.add('completed')
            const newSpan = document.createElement('span')
            newSpan.innerHTML = 'X'
            // console.log(newSpan)
            console.log(e)
            e.target.insertAdjacentHTML('afterend', '<span>X</span>')
        }

    }
    // console.log(e.target.classList.contains('completed'))
    // if(e.target.nodeName == 'LI' && e.target.classList.contains('completed')) {
        
    // }

    
    // todoCompleted(e.target)
})

function addTodo(todo) {
    const newLi = document.createElement('div')
    newLi.innerHTML = `<li>${todo}</li>`
    theUl.appendChild(newLi)
}

function todoCompleted(e) {
    e.classList.add('completed')
}

