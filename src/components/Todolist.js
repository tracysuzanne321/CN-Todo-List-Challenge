import { useState } from "react"; 
import { RiCloseCircleLine } from 'react-icons/ri';


const Todolist = () => {
  
  const [todos, setTodos] = useState([]) 
  const [input, setInput] = useState("") 
 
 
  const onSubmit = () => {
    const newTodos = [...todos];   
    newTodos.push(input);        
    setTodos(newTodos);
    setInput("")          
  }

 
  const onRemove = (i) => {
    const newTodos = [...todos];   
    newTodos.splice(i, 1);   
    setTodos(newTodos);          
    setInput("");              
  }
 return (

    <div>
      <h1>What do you want to do?</h1>

      <div className="todo-form">
              <input onChange={(e) => setInput(e.target.value)}
              type="text" 
              id = "inputBox"
              value={input}
              className="todo-input"/>
              <button className="todo-button" onClick={onSubmit}>Add a Task</button>
        </div>

    
      {todos.map((todo, i) => {
       
        return(
          <div className="todo-container">
            <div key = {i} className = "todo-row">                     
              <h2>{todo}</h2>   
             <div className="icons">
                  <RiCloseCircleLine onClick={() => onRemove(i)} className="delete-icon" />
              </div> 
            </div>                                                                                                               
          </div>
       ) 
      })}
      
      </div>

    
  )};

export default Todolist;

