import { useState } from "react";
import students from './data/data';
import Score from "./score";


export default function Students(props){
const {name,bio,scores} = props;
// console.log(score);
// console.log(props.stuff.students)
//const [studentData, setStudentData] = useState(students);


  // const score = studentData.map((item)=>{
  //   return item.scores.map((item)=><p>{item.score}</p>)
  // })
  
    return(
        <>
        <h2>{name}</h2>
        <h3>{bio}</h3>
        
          <h2><p>{props.stuff}</p></h2>
          <h3>Score Info: </h3>
          {scores.map((score,index)=> (
            <Score key={index} date={score.date} score={score.score}/>
          ))}
        </>
    )
}