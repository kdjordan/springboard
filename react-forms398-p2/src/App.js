import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList'
import data from './data'
import './App.css';

function App() {
  const[todoList, setTodoList] = useState([])

  function addTodo(e, todo) {
    setTodoList(todoList => [...todoList, todo])  
  }

  function delTodo(e, id) {
    console.log('top level delete ', id)
    setTodoList(list => {
      return todoList.filter(td => {
        return td.id !== id
      })
    })
  }
  
  return (
    <div className="App">
      <NewTodoForm  addTodo={addTodo}/>
      <TodoList data={todoList} delTodo={delTodo}/>
    </div>
  );
}

export default App;
