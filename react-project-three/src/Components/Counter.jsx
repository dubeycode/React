import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
    const[count,setcount]=useState(0);
  return (
    <div className='comp-container'>
        <p id='para'>You have click {count} Times</p>
        <button id='btn' onClick={()=>{ setcount(count+1) }}>Click here</button>
    </div>
  )
}

export default Counter