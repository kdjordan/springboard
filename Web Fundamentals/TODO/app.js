const theInput = document.querySelector('#input')
const theUl = document.querySelector('ul')
const theForm = document.querySelector('form');

const savedTodos = window.localStorage


if(savedTodos.length >= 1) {
    console.log('running')
    for (const key in localStorage) {
        // Skip built-in properties like length, setItem, etc.
        // code snippet taken from https://attacomsian.com/blog/javascript-iterate-over-local-storage-keys
        if (localStorage.hasOwnProperty(key)) {
            addTodo(key)
        }
    }
    
}
theForm.addEventListener('submit', function(e) {
    e.preventDefault()
    newTodo = e.target.children[0].value
    if(newTodo == '') {
        alert('You cant have an empty TODO !')
    } else {
        theForm.reset()
        addTodo(newTodo)
    }
})

theUl.addEventListener('click', function(e) {

    if(e.target.nodeName == 'SPAN' && e.target.previousSibling.classList.contains('completed')) {
        console.log(e.target.previousSibling.innerText)
        localStorage.removeItem(e.target.previousSibling.innerText)
        console.log(localStorage)
        e.target.previousSibling.remove(e.target.previousSibling.innerText)
        e.target.remove()
    }

    if(e.target.nodeName == 'LI') {
        if(e.target.classList.contains('completed')) {
            e.target.classList.remove('completed')
            e.target.nextSibling.remove()
        } else {
            e.target.classList.add('completed')
            e.target.insertAdjacentHTML('afterend', '<span>X</span>')
        }

    }
})

function addTodo(todo) {
    console.log('thetodo', todo)
    const newLi = document.createElement('div')
    newLi.innerHTML = `<li>${todo}</li>`
    theUl.appendChild(newLi)
    localStorage.setItem(`${todo}`, `${todo}`)
    console.log('added', localStorage)

}

function todoCompleted(e) {
    e.classList.add('completed')
}

