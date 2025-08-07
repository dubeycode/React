import React from 'react'
import dubey from '../assets/dubey.jpg'
import "./UserCard.css"


const UserCard = (props) => {
  return (
    <div className='user-container'  style={props.style}>
        {/* <p id='user-name'>Satyam Dubey</p> */}
        <p id='user-name'>{props.name}</p>
        {/* <img id='user-img' src={dubey} alt="img "></img> */}
        <img id='user-img' src={props.image} alt="{props.name}"></img>
        {/* <p id='user-desc'>Description of Dubey</p> */}
        <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard