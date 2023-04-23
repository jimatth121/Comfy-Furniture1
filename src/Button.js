import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div className='button__container ' >
      <button className='py-[0.2rem] md:py-[0.5rem] px-[0.5rem] md:px-[1rem]' onClick={props.onClick}>{props.children}</button>
    </div>
  )
}

export default Button
