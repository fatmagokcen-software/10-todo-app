import { useState } from 'react'
import './App.css'
import Todocreate from './components/Todocreate';
// İlk harfini büyük yazacaksın unutma!!
import Todolist from './Todolist';
import Todo from './Todo';

function App() {

  const [todos, setTodos] = useState([]); // usestate tanımladım

  const createTodo = (newTodo) => { // fonk. tanımladım.

    setTodos([...todos, newTodo]);
  }
  console.log(todos)

  // 1. Ana jsx dosyamda removeTodo'yu tanımladım.

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  }

  // 2. Ana jsx dosyamda updateTodo'yu tanımladım.
  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })
    setTodos([...updatedTodos])
  }



  return (

    <div className='app'>
      <div style={{ width: "500px", display: "flex", justifyContent: 'center', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
        <Todocreate onCreateTodo={createTodo} />
        <Todolist todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>



    </div>
  )
}

export default App
