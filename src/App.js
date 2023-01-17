import './App.css'
import '../src/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
// import SocialMedia from './Components/SocialMedia'
import Services from './Components/Services'
import About from './Components/About'
import Articles from './Components/Articles'
import Carousel from './Components/Carousel'
import Footer from './Components/Footer'
import { useRef } from 'react'

function App() {
  const home = useRef(null)
  const services = useRef(null)
  const about = useRef(null)
  const articles = useRef(null)
  const portfolio = useRef(null)

  const scrollToSection = (elementRef) =>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollHome = () => scrollToSection(home)
  const scrollServices = () => scrollToSection(services)
  const scrollAbout = () => scrollToSection(about)
  const scrollArticles = () => scrollToSection(articles)
  const scrollPortfolio = () => scrollToSection(portfolio)
  return (
    <div className="App">
      <div className='container'>
        <div ref={home}>
        <Navbar 
          scrollHome={scrollHome}
          scrollServices={scrollServices}
          scrollAbout={scrollAbout}
          scrollArticles={scrollArticles}
          scrollPortfolio={scrollPortfolio}
        />
        </div>
        <Hero />
        <div ref={services}><Services title="My skills" /></div>
        <div ref={about}><About/></div>
        <div ref={articles}><Articles/></div>
        <div ref={portfolio}><Carousel/></div>
        <Footer
          footerScrollHome={() => scrollToSection(home)}
          footerScrollServices={() => scrollToSection(services)}
          footerScrollAbout={() => scrollToSection(about)}
          footerScrollArticles={() => scrollToSection(articles)}
          footerScrollPortfolio={() => scrollToSection(portfolio)}
          />
      </div>
    </div>
  )
}
export default App