import React, { useState } from  "react";
import "./todolist.css";

function ToDoList(){
    const[task,setTask]=useState([]);
    const[input,setinput]=useState("");
    const handlechange=()=>{
        setTask([...task,input]);
        setinput("");
    };
  const handleremove=(index)=>{
    setTask(task.filter((_, i) => i !== index));
  }
  return(
    <div>
        <p>To-Do List</p>
        <input type="text" value={input} onClick={(e)=>setinput(e.target.value)}/>
        <button onClick={handlechange}>Add Todo</button>
        <ul>
          {task.map((item,index)=>(
            <div className="item">
                <li key ={index}>{item}</li>
                <button onClick={()=>handleremove(index)}>Delete</button>
            </div>
          ))}
        </ul>
    </div>
  )
}
export default ToDoList;
