import React from 'react'
import Product from './Product'
import './HomeProducts.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import { myData } from './App';

const HomeProducts = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  let randomArray=[]
  function getRandomNum(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }
  for(let  i = 0; i < 3; i++ ){
    const index = getRandomNum(15,1)
    console.log('my index',index);
    randomArray.push(myData[index])
  }


  return (
    <div className='home__products'>
       
       <h2>
        We Feature Products That Makes Really Feels Like Home
       </h2>
       <div className='home__products__container'>
       {randomArray.map((item, index)=>( <Product key={index} {...item}/>)
       )}

       </div>

    <div className='checkmore'>
      <Link to='/testing'  style={{textDecoration:'none'}}>
      <button onClick={scrollToTop}>Check more products 
        <ArrowForwardIcon/>
      </button>
      </Link>
    </div>

    </div>
  )
}

export default HomeProducts
