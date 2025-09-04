import { useState } from "react"

function NumTest1(){

    const gameNumber= 7;
    const [guess,setGuess]= useState("")
    const [message, setMessage]= useState("")

    const checkNum = ()=>{
        if(guess ===""){
            setMessage("Enter Number")
        }
else if (parseInt(guess) === gameNumber){
   setMessage("Congrats, You enter wright num.")
} else {
    setMessage("Try Again")
}
    }
    
    

    return(
        <div>

<p style={{color:"blue"}}> Qusetion: Create a game where you start with any game number. 
Ask to user to keep guessing the game number until user enters the correct value.</p>

<input type="text" placeholder= "Enter Game Number" value={guess} onChange={(e)=> setGuess(e.target.value)}/>
<button style={{color: "blue", backgroundColor: "green"}} onClick={checkNum}>Guess Number</button>
<h2>
{message}
</h2>


        </div>
    )
}
export default NumTest1