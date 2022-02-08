const theInput = document.querySelector('#input')
const theUl = document.querySelector('ul')
const theForm = document.querySelector('form');

let newTodo = null

theForm.addEventListener('submit', function(e) {
    e.preventDefault()
    newTodo = e.target.children[0].value
    theForm.reset()
    console.log('submitting',newTodo)
    addTodo(newTodo)
})

function addTodo(todo) {
    const newLi = document.createElement('li')
    newLi.innerText = todo
    theUl.appendChild(newLi)
}

