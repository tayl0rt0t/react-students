import { useState } from 'react';
import Students from './student';
import './App.css';
import students from './data/data';

function App() {
  const [studentData, setStudentData] = useState(students)
  
  const stuff = studentData.map((stu)=><Students name={stu.name} bio={stu.bio} scores={stu.scores}/>)
  // <p>{stu.name} <p>{stu.bio}</p></p>);
  // const bios = studentData.map((stu)=><p>{stu.bio}</p>)
  // const score = studentData.map((item)=>{
  // return item.scores.map((item)=><p>{item.score}</p>)
  //  })
  
  return (
    
    <div className="App">
      <div className='students'>
      <h2>{stuff}</h2>
      </div>
      <div className='score'>
    
      </div>

      {/* <Score score = {score} /> */}
    </div>
  );
}

export default App;
