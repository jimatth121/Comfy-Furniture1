import React from 'react'
import './SlideMenu.css'
import { Link } from 'react-router-dom'

const SlideMenu = (props) => {
  return (
    <div className={`slidemenu  ${props.onState ? 'slide__true':''}`}>
     <Link to="/">
      <span>Home</span>
     </Link>
     <Link to="/testing">
      <span>Products</span>
     </Link>
      <button>Login</button>
    </div>
  )
}

export default SlideMenu
