//import { useState } from "react";
function Marks(){

//const[marks,setMarks]= useState("");
//const[message,setMessage]= useState("");

const StudentMarks= [85, 97, 44, 37, 76, 60];
let sum= 0;

for(let val of StudentMarks){
    sum= sum + val;
   }
   console.log(sum)
   let avg= sum / StudentMarks.length;
   console.log(avg);

  
   

    return(
        <div>
<p>Q: Find the average marks of student in array.</p>
<h3>Student Marks</h3>
<h2>Total Marks: {sum}</h2>
<h2>Average Marks: {avg}</h2>

        </div>
    )
}
export default Marks;