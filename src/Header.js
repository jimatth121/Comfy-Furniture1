import React from "react";
import Logo from "./Logo";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import Button from "./Button";
import { useStateValue } from "./StateProvider";


const Header = ({onState, onMenuIconClick, onShowModal }) => {
  const [{basket}, dispatch, totalCount] = useStateValue()
// const cartnumber =  basket.length? basket?.reduce((acumulator, currentValue)=> acumulator + currentValue.qty,0 ):0 


    const handleMenuClick = () =>{
        // console.log('dasbdhasbha')
        if(onState){
            onMenuIconClick(false)
        }else{
            onMenuIconClick(true)
        }
    }
  return (
    <div className="header">
      <div className="logo">
        <span className="logo__holder1">
            <Link to='/' style={{textDecoration:'none'}}>
                <Logo />
            </Link>
        </span>
        <span className="menuicon">
         { !onState && <MenuIcon onClick={handleMenuClick}  />}
         {onState && <CloseIcon onClick={handleMenuClick}/>}
          
        </span>
      </div>
        <span className="logo__header2">
            <Link to='/' style={{textDecoration: 'none'}}>
                <Logo />   
            </Link>
        </span>
      <div className="menucart">
        <div className="menu">
         <Link to='/'  style={{textDecoration: 'none'}}>
          <span>Home</span>
         </Link>
         <Link to='/testing' style={{textDecoration: 'none'}}>
          <span>Products</span>
         </Link>
          <span>
            <Button>Log In</Button>
            {/* <button>Log In</button> */}
          </span>
        </div>
        <div className="cart">
            <ShoppingCartIcon onClick={onShowModal} />
            <span onClick={onShowModal} className="cartnumber">{totalCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
