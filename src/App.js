import './App.css';
// import React from "react";
import Button from './button';



 
// import React, { useState, useEffect } from 'react';

// const Clock = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const timerID = setInterval(() => tick(), 1000);

//     return function cleanup() {
//       clearInterval(timerID);
//     };
//   });

//   function tick() {
//     setCurrentTime(new Date());
//   }

//   return (
//     <div style={{
//       backgroundColor: 'khaki',
//            padding: '7px',
//             border:'6px solid black', 
//             textAlign: 'center',
//             fontSize:'15px',
//             width:'70%',
//             margin:'auto',
//             marginTop:'20px',
//             borderRadius:'20px',
//             height:'70vh',
//             justifyContent:'center',
//             alignContent:'center',
//     }}>
//       <h1 style={{color:'gray',}}> HEY I AM AHMAD !</h1>

//       <h2 style={{color:'red',}}>WELCOME TO MY FIRST PAGE IN REACT JS !</h2>

//       <p style={{color:'green', fontSize:'30px',}}>{currentTime.toLocaleTimeString()}</p>
      
//     </div>
//   );
// }
// export default Clock;










function first() {
  const name ='HEY';
  return (
    <div style={{ color: 'black',
     backgroundColor: 'gray',
     padding: '10px',
      border:'4px solid black', 
      textAlign: 'center',
      fontSize:'25px',
      width:'70%',
      height:'70vh',
      margin:'auto',
      marginTop:'20px',
      alignContent:'center',
      borderRadius:'20px',
      }}>
        <Button name={"oty wala button"}></Button>
     <h1 style={{color:'black', fontSize:'35px',}}> {name} I AM AHMAD !</h1>
      <h2 style={{color:'yellow', fontSize:'25px',}}>WELCOME TO MY FIRST PAGE IN REACT JS !</h2>
      <p style={{color:'white',}}>Today's date is {new Date().toLocaleDateString()}</p>
      <Button color={"pink"} name ={"thaly wala button"}></Button>
     </div>
  );
};

export default first;

