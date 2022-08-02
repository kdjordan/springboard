import React from 'react'
import Todo from './Todo'
import './TodoList.css'


function TodoList({data, delTodo}) {

    const removeTodo = (e, id) => {
        delTodo(e => e, id)
    }
    if(data.length === 0) {
        return(
            <h3 style={{marginTop:'2rem'}}>): You Have no todos yet :(</h3>
        )
    }
    else {
        return (
            <div className="TodoList" style={{marginTop:'2rem'}}>
                {data.map(d => {
                    return <Todo key={d.id} id={d.id} name={d.name} completed={d.completed} removeTodo={removeTodo}/>
                })}
            </div>
        )
    }
}

export default TodoList