import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner__text'>
            <div className="banner__content_wrap">
                <h1>Your' are Home UnWined Relax Rest</h1>
                <p>Embrace Your choice - We do</p>
                <button>Shop Now</button>
            </div>
        </div>
        <div className='banner__img'>
            <img className='main__img' src='https://silva-comfy.netlify.app/static/media/frame-big.90172494.jpg' alt='banner'/>
            <div className='frame_top'> 
          
            </div>
            <div className='card1'>
            <img src='https://silva-comfy.netlify.app/static/media/frame-small-2.b89dc329.jpg' alt='card1img'/>
            </div>
            <div className='card2'>
            <img src='https://silva-comfy.netlify.app/static/media/frame-small-1.32dfbc4b.jpg' alt='card2img'/>
            </div>
        </div>
      
    </div>
  )
}

export default Banner
