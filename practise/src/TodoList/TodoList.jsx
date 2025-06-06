import React, { useState } from 'react'

export default function TodoList() {

    const [todoList,setTodoList] = useState([]);
    const[todo,setTodo] = useState('');

    const todoBtn= () =>{
  let todoCopy = [...todoList]
  todoCopy.push(todo)
  setTodoList(todoCopy)
   setTodo("")
    }

    const addTodo = (e) =>{
setTodo(e.target.value);

    }

    const delBtn = (idx) =>{
        let todoCopy = [...todoList]
        todoCopy.splice(idx,1)
        setTodoList(todoCopy)
    }

    const updBtn = (idx) =>{
    let todoCopy = [...todoList]
    todoCopy.splice(idx,1,document.getElementById(`id${idx}`).value);
    document.getElementById(`id${idx}`).value = ""
      setTodoList(todoCopy)
    }

  return (
    <div>
        <input placeholder='enter your tod task here...'
        type='text'
        onChange={addTodo}
        value={todo}
        />
    
        <button onClick={todoBtn}>ADD</button>

        <ul>
            {
                todoList.map((data,idx)=>{
      return            <li>
                           {data}
                           <input placeholder='Type updated todo.....' id={`id${idx}`} />
                           <button onClick={()=>{updBtn(idx)}}>UPD</button>
                           <button onClick={()=>{delBtn(idx)}}>DEL</button>
                           </li>
                })
            }
        </ul>
    </div>
    
  )
}
