import React from 'react'
import textImg from '../images/hero-img.svg'
import heroImg from '../images/image0.jpeg'
function Hero() {
  return (
    <div className='hero'>
      <div className="hero-info">
        <div className="hero-name">Hey, I’m Fuad</div>
        <div className="hero-title">
          <h1>
          I enjoy designing tech websites and digital products
          </h1>
          <img src={textImg} alt="" />
          </div>
          <div className="hero-btn">
          <a href="mailto:sadiqovfuad8@gmail.com"><button className='getInTouch'>Get in touch</button></a>
          </div>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="" />
      </div>
    </div>
  )
}
export default Hero
