import React from 'react'
import './SlideMenu.css'

const SlideMenu = (props) => {
  return (
    <div className={`slidemenu  ${props.onState ? 'slide__true':''}`}>
      <span>Home</span>
      <span>Products</span>
      <button>Login</button>
    </div>
  )
}

export default SlideMenu
