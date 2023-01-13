import React from 'react'
import Item from './Item'
import TitleImg from '../images/hero-img.svg'
import reactLogo from '../images/react.svg'
import bootstrapLogo from '../images/bootstrap.svg'
import javascriptLogo from '../images/Javascript_Logo.svg'

export default function Services(props) {
  return (
    <div  className='services'>
        <div className="services-title"><h2>{props.title}</h2> <img className='titleImg' src={TitleImg} alt="" /></div>
        <div className="service-wrapper">
            <Item
              socialImg={reactLogo}
              socialLink="https://reactjs.org/"
              socialName="React"
              socialText="React is a JavaScript library for building user interfaces, specifically for creating reusable components that can efficiently update and render.
              It was developed by Facebook and is commonly used for building single-page applications and mobile applications."
              />
            <Item 
              socialImg={bootstrapLogo}
              socialLink="https://getbootstrap.com/"
              socialName="Bootstrap"
              socialText="Bootstrap is a free front-end framework for faster and easier web development. It includes HTML 
                          and CSS based design templates for typography, forms, buttons, tables, navigation, modals, 
                          image carousels, and many other components."
              />
            <Item 
              socialImg={javascriptLogo}
              socialLink="https://www.javascript.com/"
              socialName="JavaScript"
              socialText="JavaScript is a programming language that is commonly used to add interactivity to 
                          websites. It runs in the browser and allows developers to manipulate the content 
                          and design of a web page, as well as to make network requests and interact with APIs. "            
              />
            <Item 
              socialImg="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png"
              socialLink="https://www.adobe.com/tr/creativecloud.html"
              socialName="Adobe XD"
              socialText="Adobe XD is a user experience (UX) design tool developed by Adobe that allows designers 
                          to create wireframes, prototypes, and high-fidelity designs for websites, mobile apps, and other 
                          digital products."
              />
        </div>
    </div>
  )
}
