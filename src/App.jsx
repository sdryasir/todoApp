import { useState } from "react";
import './App.css'

//props (Properties)

function App() {

  const [todo, setTodo] = useState({
    title:'',
    description:'',
    isCompleted:false,
    isImportant:false,
    dueDate:''
  });

  const [todos, setTodos] = useState([]);

  const handleTitle = (e)=>{    
    setTodo({...todo, title:e.target.value});
  }

  const handleDescription = (e)=>{
    setTodo({...todo, description:e.target.value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault();

    let newTodo = {
      ...todo,
      id:Date.now()
    }

    let a = [...todos, newTodo]
    
    setTodos(a);

  }


  let handleComplete = (t)=>{

    const foundIndex = todos.findIndex(item => item.id == t.id);

    const updatedArray = [...todos]; // Copy the original array

    updatedArray[foundIndex] = { ...updatedArray[foundIndex], isCompleted:!updatedArray[foundIndex].isCompleted };

    setTodos(updatedArray);

  }
  return (
    <div className="container">
      <div className="todo-wrapper bg-info p-5 w-50">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-10">
              <input type="text" onChange={handleTitle} className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <textarea className="form-control" onChange={handleDescription} name="" id=""></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Save Todo</button>
        </form>
        {
          todos.map((todo)=>{
            return <div key={todo.id} style={{backgroundColor:todo.isCompleted?'red':'green', padding:'6px', margin:'6px'}}>
              <h1 style={{textDecoration: todo.isCompleted ? 'line-through': 'none'}} onClick={()=>handleComplete(todo)}>{todo.title}</h1>
              {
                todo.isCompleted ? <span>Completed</span>:<span>Not completed</span>
              }
            </div>
          })
        }
      </div>
    </div>
  )

}

export default App;










/*
XML:
1 - We can create custom tags.
2 - We can specify custom props (properties/attributes)
3 - XML restrics us to provide closing of all the tags.

*/