import React from 'react'
import navbarSvg from '../images/navbar.svg'
import CV from '../images/Fuad-Sadiqov.pdf'
function Navbar(props) {

  document.addEventListener("scroll", (event)=>{
    const scroolPosition = event.target.scrollingElement.scrollTop;
    const navBar = document.getElementById("navBar")
    navBar.style.transition = "0.4s all"; 

    if(scroolPosition > 150){
      navBar.style.padding = "1.5rem 4rem";  
      navBar.style.boxShadow = "2px 2px 2px 2px rgba(0, 0, 0, 0.1)";  
    }
    else{
      navBar.style.padding = "2rem 3.1rem"
      navBar.style.boxShadow = "none";  
    }
  })

  let [navBarIcon, setNavBarIcon] = React.useState(true)

  function toggle(){
    setNavBarIcon(prevIcon => !prevIcon)
  }
  return (
    <div id='navBar' className='navBar'>
      <div className="nav-logo" onClick={props.scrollHome}><img src={navbarSvg} alt="logo" /></div>
      {!navBarIcon ? <div className='mob-bg'></div> : ""}
      <div className={navBarIcon ? "navbar-list" : "navbar-list mob-navbar-list"}>
        <ul>
          <li><a href="#">Home</a></li>
          <li onClick={props.scrollServices}>Services</li>
          <li onClick={props.scrollAbout}>About</li>
          <li onClick={props.scrollArticles}>Articles</li>
          <li onClick={props.scrollPortfolio}>Portfloio</li>
          <li><a href={CV}>CV</a></li>
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