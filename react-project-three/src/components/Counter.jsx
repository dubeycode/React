import React , {useState} from 'react'
import './Counter.css'
const Counter = () => {
    const[count,setCount]=useState(0);
  return (
    <div className='counter-container'>
        <p id='para'>You have Clicked {count} Times</p>
        <button id='btn' onClick={()=>{setCount(count+1)}}>Click here</button>
    </div>
  )
}

export default Counter