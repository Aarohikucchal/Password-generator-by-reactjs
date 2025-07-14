// import { useState } from "react"
// export default function App() {
//   const [counter, setCounter]=useState(0);
//   return (
//     <>
//     <div>
//       <h1 className="text-3xl">{counter}</h1>
//       <button className="p-3 m-3 bg-green-500" onClick={()=>setCounter(counter+1)} >Increase</button>
//       <button className="p-3 m-3 bg-red-400" onClick={()=>setCounter(counter-1)} >Decrease</button>
//     </div>
//      </>
//   )
// }



// import React , {useState} from 'react'

// const App = () => {
//   const [color,setColor]= useState(true);
//   return (
//     <div>
//       <h1 className='text-3xl'>My favorite color is {color ?'red':'blue'}</h1>
//       <button className='p-3 m-3 bg-blue-600' onClick={()=>setColor(!color)}>Change</button>
//     </div>
//   )
// }

// export default App


// import React , {useEffect, useState} from 'react'

// const App = () => {
//   const [color,setColor]= useState(true);
//   return (
//     <div style={{
//       background:color,
//       height:'100vh',
//       width:'100vw'
//     }}>
//       <h1 className='text-3xl'>Color picker</h1>
//       <button className='p-3 m-3 bg-blue-600' onClick={()=>setColor('blue')}>Change</button>
//       <button className='p-3 m-3 bg-red-600' onClick={()=>setColor('red')}>Change</button>
//       <button className='p-3 m-3 bg-green-600' onClick={()=>setColor('green')}>Change</button>
//       <button className='p-3 m-3 bg-purple-600' onClick={()=>setColor('purple')}>Change</button>
//       <button className='p-3 m-3 bg-pink-600' onClick={()=>setColor('pink')}>Change</button>
//     </div>
//   )
// }
// export default App

// useEffect(()=>{

// },[color])
// [] => dependency Array;

// import React ,{useEffect , useState} from 'react'

// const App = () => {
//   const [data,setData]= useState([]);
//   const [text,setText]= useState('');

//   const getData = async()=>{
//     try{
//       const response = await fetch('https://fakestoreapi.com/products')
//       const res = await response.json();
//       console.log(res,'00000000000000000')
//       setData(res);
//     }catch(error){
//       console.log(error.message);
//     }
//   }
//   useEffect(()=>{
//     getData();
//   },[]);
//   // console.log(data)
//     const filteredProducts = data.filter((each) =>
//       each.title.toLowerCase().includes(text.toLowerCase())
//     );
//   return (
    
//     <div>
//       <input className='border border-red-800' type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
//       {/* {data.map((each)=>(
//         <p key={each.id} >{each.title}</p>
//       ))} */}

//         {
//       filteredProducts.map((each) => (
//         <p key={each.id}>{each.title}</p>
//       ))}
//     </div>
//   )
// }

// export default App


import React, {useEffect, useState} from 'react'
const App =()=>{
  const [time,setTime]=useState(0);
  const [isRunning, setIsRunning]=useState(false);
  useEffect(()=>{
    let intervalId;
    if(isRunning){
      intervalId= setInterval(()=>{
        setTime((prev)=>prev +10);
      },10)
    }
  },[]);
  const startAndStop=()=>{
    setIsRunning(!isRunning);
  }
  const resetInterval=()=>{
    setIsRunning(false);
    setTime(0);
  }
  const formatTime =(time)=>{
    const hours= Math.floor(time/3600000)
    const min= Math.floor(time%3600000)/60000
    const sec= Math.floor(time%60000)/1000

    return `${hours.toString().padStart(2,0)}: ${min.toString().padStart(2,0)}:${sec.toString().padStart(2,0)}`
  }
  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <button onClick={resetInterval}> Reset</button>
      <button>{isRunning? "Stop" : "Start"}</button>
    </div>
  )
}
export default App