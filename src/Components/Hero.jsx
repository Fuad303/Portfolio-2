import React from 'react'
import textImg from '../images/hero-img.svg'

function Hero(props) {
  return (
    <div className='hero'>
      <div className="hero-info">
        <div className="hero-name">Hey, I’m John Carter</div>
        <div className="hero-title">
          <h1>
          I enjoy designing tech websites and digital products
          </h1>
          <img src={textImg} alt="" />
          </div>
          <div className="hero-btn">
            <button className='getInTouch'>Get in touch</button>
          </div>
      </div>
      <div className="hero-img">
        <img src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112af58d6338c4181aaed8c_hero-image-personal-x-template-p-500.png" alt="" />
      </div>
    </div>
  )
}
export default Hero
