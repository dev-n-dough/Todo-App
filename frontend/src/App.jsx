import { useState ,useEffect} from 'react'
import {CreateTodo} from "./components/CreateTodo";
import {Todos} from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  // to prevent infinite requests being sent
  useEffect(function()
  {
    fetch("http://localhost:3000/todos")
    .then(async function(res)
    {
      const json = await res.json();
      const _todos = json.todos;
      setTodos(_todos);
    })
  },[]);
  

  return (
    <div>
      <CreateTodo  todos ={todos} setTodos={setTodos}/>
      <Todos todos = {todos} /> 
    </div>
  )
}

export default App
