import React from 'react'
import aboutImg from '../images/about-img.jpeg'
export default function About() {
  return (
    <div className='about'>
      <div className="about-img"><img src={aboutImg} alt="" /></div>
      <div className="about-description">
        <div className="about-title"><h2>About me</h2></div>
        <div className="about-text">
        I am a highly skilled and experienced 
        React front-end developer with a passion 
        for creating visually stunning and intuitive 
        websites. My portfolio showcases my ability 
        to deliver responsive and user-friendly 
        designs that drive engagement and conversions. 
        I am always striving to stay on top of the latest 
        technologies and industry trends to bring 
        the best possible solutions to my clients.
        </div>
        <div className="about-btn"><a href="https://github.com/Fuad303"><button className='getInTouch'>More About me</button></a></div>
      </div>
    </div>
  )
}
