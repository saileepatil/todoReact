import React, { useState } from 'react';
import './TodoList.css'

export default function TodoList() {

    const [todoList , setTodoList] = useState([]);
    const [inpTodo,setInpTodo] = useState('');

    const addTodo = (e) =>{
        
      setInpTodo(e.target.value);
      
    }

    const todoBtn = () =>{

        if(inpTodo.trim() === "")return
        const item = {
            id:todoList.length+1,
            text:inpTodo,
            completed:false,
        }
        setTodoList((prev)=>[...prev,item]);
        setInpTodo('')
    }

    const toggleTodo = (id)=>{
    setTodoList(todoList.map((todo)=>{
if(todo.id === id){
 return{
    ...todo,
    completed: !todo.completed
 }
}else{
return todo
}
    }))
    }

    const delTodo = (id) =>{
        setTodoList(
            todoList.filter(
                (todo)=>(todo.id !== id)
            )
        )
        
    }


  return (
    <div>
        <h1>TodoList</h1>
        <input placeholder='Enter Your Todo Here..'
        type='text'
        value={inpTodo}
        onChange={addTodo}
        />
        <button onClick={todoBtn}>ADD</button>
    
        <ul>
            {
             todoList.map((todo)=>{
      return     <li key={todo.id}>
        <input type='checkbox' 
        checked={todo.completed}
        onChange={()=>{toggleTodo(todo.id)}}
        />
        <span className={todo.completed ? 'strikeThrough': ""}>{todo.text}</span>
         <button onClick={()=>{delTodo(todo.id)}}>DEL</button>
      </li>
             })
            }
        </ul>
    </div>
  )
}
