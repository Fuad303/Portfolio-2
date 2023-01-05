import React from 'react'
import navbarSvg from '../images/navbar.svg'
import About from '../Components/About.jsx'
import Portfloio from '../Components/Portfolio.jsx'

function Navbar() {

  document.addEventListener("scroll", (event)=>{
    const scroolPosition = event.target.scrollingElement.scrollTop;
    const navBar = document.getElementById("navBar")
    navBar.style.transition = "0.4s all"; 

    if(scroolPosition > 150){
      navBar.style.padding = "2rem 7rem";  
      navBar.style.boxShadow = "2px 2px 2px 2px rgba(0, 0, 0, 0.1)";  
    }
    else{
      navBar.style.padding = "3rem 10rem"
      navBar.style.boxShadow = "none";  
    }
  })

  let [navBarIcon, setNavBarIcon] = React.useState(true)

  function toggle(){
    setNavBarIcon(prevIcon => !prevIcon)
  }
  return (
    <div id='navBar' className='navBar'>
      <div className="nav-logo"><a href="./App.js"><img src={navbarSvg} alt="logo" /></a></div>
      {!navBarIcon ? <div className='mob-bg'></div> : ""}
      <div className={navBarIcon ? "navbar-list" : "navbar-list mob-navbar-list"}>
        <ul>
          <a href={Navbar}><li>Home</li></a>
          <a href={About}><li>About</li></a>
          <a href={Portfloio}><li>Portfloio</li></a>
        </ul>
      </div>
      <div className={navBarIcon ? "navbar-email" : "navbar-email mob-navbar-list"}>
        <a href="mailto:sadiqovfuad8@gmail.com"><ion-icon name="mail-outline"></ion-icon><span>sadiqovfuad8@gmail.com</span> </a>
      </div>
      <div onClick={toggle} className="mobileNav"><ion-icon name={navBarIcon ? "menu-outline" : "close-outline"}></ion-icon></div>
    </div>
  )
}
export default Navbar