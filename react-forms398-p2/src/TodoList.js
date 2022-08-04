import React, { useState} from 'react'
import Todo from './Todo'
import './TodoList.css'
import NewTodoForm from './NewTodoForm';

function TodoList() {
    const[todoList, setTodoList] = useState([])

    function addTodo(e, todo) {
        setTodoList(todoList => [...todoList, todo])  
    }

    function removeTodo(e, id) {
        setTodoList(list => {
            return list.filter(td => {
                return td.id !== id
            })
        })
    }

    if(todoList.length === 0) {
        return (
            <div className="TodoList-container">
            <div>
                <h1 style={{marginBottom:'1rem'}}>Super Magic TODO Tracker</h1>
            </div>
            <div className="TodoList" style={{marginTop:'2rem'}}>
                <NewTodoForm addTodo={addTodo}/>
            </div>
            <div style={{marginTop:'2vh'}}>
                <h2 data-testid="no-todos">): You have no Todos yet :(</h2>
            </div>
        </div>
        )
    }

    return (
        <div className="TodoList-container">
             <div>
                <h1 style={{marginBottom:'1rem'}}>Super Magic TODO Tracker</h1>
            </div>
            <div style={{marginTop:'2rem'}}>
                <NewTodoForm  addTodo={addTodo}/>
                <div className="TodoList-wrapper">
                    {todoList.map(d => {
                        return <Todo key={d.id} id={d.id} name={d.name} removeTodo={removeTodo}/>
                    })}
                </div>
            </div>
        </div>
    )
    
}

export default TodoList