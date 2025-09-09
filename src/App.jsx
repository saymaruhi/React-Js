

import React from 'react'
import { useState } from 'react'
import Appp from './student'
import Num from './num'
import ArrMethod from './arrMethod'


function App(){

  const [num, setNum]= useState("")
  const [message, setMessage]= useState("")

  const checkMultiple= ()=>{

if (num % 5 === 0){
setMessage(`${num}  is divided by 5`)
} 
else{
  setMessage(`${num} is not divided by 5`)
}



  }
  return(
    <div>
      <input type='text' placeholder='Enter a Number'
      value={num}
      onChange={(e)=> setNum(e.target.value)}/>

      <button onClick={checkMultiple}>Check Num</button>
      <p>{message}</p>


<Appp/>
<Num/>
<ArrMethod />
    </div>
  )
}
export default App
