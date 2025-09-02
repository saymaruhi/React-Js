import React from 'react'
import { useState } from 'react'
function Appp() {
    // let num=prompt("Enter a Number")
    // let grade;

    // if(num >= 80 && num <= 100){
    //   grade = "A"
    // } else if (num >= 70 && num <=89){
    //   grade = "B"
    // }
    // else if (num >= 60 && num <= 69){
    //  grade = "C"
    // }
    // else if (num >= 50 && num <= 59){
    //  grade = "D"
    // }else if (num >= 40 && num <=99){
    //   grade = "E"
    // } 
    // else{
    //  grade = "F"
    // }

    // console.log("According to your num ,Your grade is:", grade)

    const [score, setScore]= useState()
    const [grade, setGrade]= useState()

    const checkGrade =  ()=>{
if (score >= 90 && score <= 100 ){
  setGrade(` Your Score is ${score} Congrate you are a topper`)
}
else if (score >=70 && score <= 89){
  setGrade("B")
}
else if (score >=60 && score <= 69){
  setGrade("C")
 } 
 else if (score >=50 && score <= 59){
  setGrade("D")
}
else if (score >=40 && score <= 49){
  setGrade("E")
}
else if (score >=0 && score <= 39){
  setGrade(`Yuor score ${score} not react the passing score, you are fail`)
}

 }


  return (
    <div>
      <h5>Question: 2 </h5>
       <p> Give grades to student according to scores.</p>
       <h4> 90-100 A,
        70-80 B,
        60-69 C, 
        50-59 D ,
        40-49 E ,
        0-39 F
        </h4>
      

     

      <input type='text' placeholder='Enter Scores'
      value={score}
      onChange={(e)=> setScore(e.target.value)}/>

      <button onClick={checkGrade}>Check Grade</button>

      <h4>{grade}</h4>

      
    </div>
  )
}

export default Appp
