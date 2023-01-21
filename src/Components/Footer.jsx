import React from 'react'
import navbarSvg from '../images/navbar.svg'
import footerİnstagram from '../images/footer-instagram.svg'
import footerLinkedin from '../images/footer-linkedin.svg'
import footerWhatsapp from '../images/footer-whatsapp.svg'

export default function Footer(props) {
  return (
    <div className='footer'>
        <div className="footer-wrapper">
            <div className="footer-item">
                <div className="footer-logo" onClick={props.footerScrollHome}><img src={navbarSvg} alt="" /></div>
                <div className="footer-social">
                    <ul>
                        <li><a href="https://www.instagram.com/iamnotfuad/"><img src={footerİnstagram} alt="" /></a></li>
                        <li><a href="https://www.linkedin.com/in/fuad-sadiqov-9405a61a5/"><img src={footerLinkedin} alt="" /></a></li>
                        <li><a href="https://wa.me/+994503038406"><img src={footerWhatsapp} alt="" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-item footer-list">
                <h4>Pages</h4>
                <ul>
                    <li onClick={props.footerScrollHome}>Home</li>
                    <li onClick={props.footerScrollServices}>Services</li>
                    <li onClick={props.footerScrollAbout}>About</li>
                    <li onClick={props.footerScrollArticles}>Articles</li>
                    <li onClick={props.footerScrollPortfolio}>Portfloio</li>
                </ul>
            </div>
            <div className="footer-item">
                <h4>Contact Me</h4>
                <ul>
                    <li><ion-icon name="mail-outline"></ion-icon><a href="mailto:sadiqovfuad8@gmail.com">sadiqovfuad8@gmail.com</a></li>
                    <li><ion-icon name="call-outline"></ion-icon><a href="tel:+994503038406">+994(50)-303-84-06</a></li>
                </ul>
            </div>
        </div>
      </div>
  )
}
