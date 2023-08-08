import { useState } from 'react';
import Students from './student';
import './App.css';
import Score from './score';
import students from './data/data';

function App() {
  const [studentData, setStudentData] = useState(students)
  
  const stuff = studentData.map((stu)=><p>{stu.name} <p>{stu.bio}</p></p>);
  // const bios = studentData.map((stu)=><p>{stu.bio}</p>)
  const score = studentData.map((item)=>{
    return item.scores.map((item)=><p>{item.score}</p>)
  })
  
  return (
    
    <div className="App">
      <div className='students'>
      <Students 
      stuff = {stuff}
      />
      </div>
      <div className='score'>
      <Score score={score}/>
      </div>

      {/* <Score score = {score} /> */}
    </div>
  );
}

export default App;
