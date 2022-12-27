import React from 'react'
import navbarSvg from '../images/navbar.svg'
import About from '../Components/About.jsx'
import Portfloio from '../Components/Portfolio.jsx'

function Navbar() {

  let [navBarIcon, setNavBarIcon] = React.useState(true)

  function toggle(){
    setNavBarIcon(prevIcon => !prevIcon)
  }
  return (
    <div className='navBar'>
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