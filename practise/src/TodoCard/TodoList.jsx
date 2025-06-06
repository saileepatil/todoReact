import React, { useState } from 'react'

export default function TodoList() {

    const [todo,setTodo] = useState([])
    const [todoName,setTodoName] = useState('')

    const  addClick = ( )=>{
        let todoCopy = [...todo]
        todoCopy.push(todoName)
        setTodo(todoCopy)
        setTodoName("")
    }

    const addTodo = (e) =>{
setTodoName(e.target.value);

    }

    const deleteBtn = (idx) =>{
        let todoCopy = [...todo]
        todoCopy.splice(idx,1)
        setTodo(todoCopy)
        
    }

    const updateBtn = (idx) => {
      let todoCopy = [...todo]
      todoCopy.splice(idx,1, document.getElementById(`id${idx}`).value)
      document.getElementById(`id${idx}`).value = ""
setTodo(todoCopy)
    }
  return (
    <div>
        <input placeholder='enter todo here...'
        type='text'
        onChange={addTodo}
        value={todoName}
        />
        <button onClick={addClick}>ADD</button>
        {
            todo.map((data,idx)=>{
      return     <ul>
            {
                <li>{data}
                <input placeholder='update your todo...' id={`id${idx}`}/>
                <button onClick={()=>{updateBtn(idx)}} >Update</button>
                <button onClick={()=>{deleteBtn(idx)}}>Delete</button>
                </li>
            }
           </ul>
            })
        }
    </div>
  )
}
