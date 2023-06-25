import React from 'react'
import "./css/input.css"

const Input = (p) => {
  return (
    
    <div className='input-box'>
    <i className={p.icon}></i>
    <input type={p.type} placeholder={p.placeholder} onChange={p.onChange}/>
    </div>

   
  )
}

export default Input
