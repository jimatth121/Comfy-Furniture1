import React from 'react'
import './SlideMenu.css'
import { Link } from 'react-router-dom'

const SlideMenu = (props) => {
  const handleMenuClick = () =>{
    // console.log('dasbdhasbha')
    if(props.onState){
        props.onMenuIconClick(false)
    }else{
        props.onMenuIconClick(true)
    }
}

  return (
    <div className={`slidemenu  ${props.onState ? 'slide__true':''}`}>
     <Link to="/" onClick={handleMenuClick}>
      <span>Home</span>
     </Link>
     <Link to="/products" onClick={handleMenuClick}>
      <span>Products</span>
     </Link>
      <button>Login</button>
    </div>
  )
}

export default SlideMenu
