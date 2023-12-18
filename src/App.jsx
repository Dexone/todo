import { useState } from 'react'
import './App.css'
import TodoList from './Todolist'

function App() {
  const [todo, setTodo] = useState([{ id: 1, text: 'Hello' }])
  const [value, setValue] = useState('')
  function updateValue(e) {
    setValue(e.target.value)
  }
  function addTodo() {
    const newObject = { id: +new Date() , text: value }
    setTodo([...todo, newObject])
    setValue('')
  }
  function deleteTodo(value){
console.log(value)
const updateTodo = todo.filter((t)=>t.id!=value)
setTodo(updateTodo)
  }
  return (
    <>
      <input placeholder='todo' value={value} onChange={updateValue} />
      <button onClick={addTodo}>Add</button>
      <TodoList todo={todo} deleteItem={deleteTodo}/>
    </>
  )
}

export default App
