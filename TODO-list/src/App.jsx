
import { useState } from 'react'
import todo from './data'
import Todos from './Component/Todos';
import './App.css'

function App() {
  const [task,setTask] = useState(null);
  const [todos,setTodos] = useState(todo);
  
  


  const handleChange = (e) => {
    event.preventDefault();
    setTask(e.target.value);
  }

  const found = todos.some((todo) => todo.task === task);

  
  const handleClick = () => {
    if (!found)
    setTodos((prev) => [...prev,{task:task}]);
    setTask('');

  }
  console.log(todos);
  return(
    <div className='container'>
      <h1 className='header'>Add your tasks here</h1>
      <div className='inp-holder'>
        <input type="text"  placeholder="Add tasks" className='inp' onChange={handleChange} />
        <button className='btn' onClick={handleClick}>+</button>
      </div>
      <Todos todos ={todos} setTodos = {setTodos} setTask={setTask} task={task} />
    </div>
  )
  
}


export default App
