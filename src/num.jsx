import React from 'react'

function Num() {
const numbers= Array.from({length:10}, (_,i)=>i);
//const evenNumbers= numbers.filter((num) => num % 2 == 0)
console.log(numbers)
   
  return (
    <div>
      <h2>Print no 0-10</h2>
     <ul style={{listStyle: 'none', color: "blue"}}>
        {numbers.map((num)=>(
            <li key= {num}>number= {num}</li>
        ))}
     </ul>
    </div>
  )
}

export default Num
