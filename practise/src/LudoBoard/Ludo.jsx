import React, { useState } from 'react'

export default function Ludo() {

    const [moves,setMoves] = useState({blue:0, green:0, yellow:0, red:0})

    const updateBtn = () =>{
        setMoves((prevState)=>{
         return  {...prevState , blue: prevState.blue+1}
        })
        
    }
  return (
    <div>
        <p>Blue button={moves.blue} </p>
        <button style={{backgroundColor:"blue"}} onClick={updateBtn}>1+</button>

         <p>Green button={moves.green} </p>
        <button style={{backgroundColor:"green"}}>1+</button> 

         <p>Yellow button={moves.yellow} </p>
        <button style={{backgroundColor:"yellow"}}>1+</button>

         <p>Red button={moves.red} </p>
        <button style={{background:"red"}}>1+</button>
    </div>
  )
}
