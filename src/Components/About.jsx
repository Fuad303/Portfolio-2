import React from 'react'
import aboutImg from '../images/about-img.jpeg'
export default function About() {
  return (
    <div className='about'>
      <div className="about-img"><img src={aboutImg} alt="" /></div>
      <div className="about-description">
        <div className="about-title"><h2>About me</h2></div>
        <div className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc 
            aliquam tincidunt est non. Viverra nec eu, in ridiculus egestas mi. 
            Vulputate tristique porttitor enim aliquam ullamcorper. 
            Velit dui laoreet in et mus.
        </div>
        <div className="about-btn"><button className='getInTouch'>More About me</button></div>
      </div>
    </div>
  )
}
