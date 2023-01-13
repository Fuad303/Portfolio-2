import './App.css'
import '../src/reset.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import SocialMedia from './Components/SocialMedia'
import Services from './Components/Services'
import About from './Components/About'
import Articles from './Components/Articles'
import Carousel from './Components/Carousel'
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
  return (
    <div className="App">
      <div className='container'>
        <div ref={home}>
        <Navbar 
          scrollHome={() => scrollToSection(home)}
          scrollServices={() => scrollToSection(services)}
          scrollAbout={() => scrollToSection(about)}
          scrollArticles={() => scrollToSection(articles)}
          scrollPortfolio={() => scrollToSection(portfolio)}
        /></div>
        <Hero />
        <div ref={services}><Services title="My skills" /></div>
        <div ref={about}><About/></div>
        <SocialMedia title="Take a look at my resume"/>
        <div ref={articles}><Articles/></div>
        <div ref={portfolio}><Carousel/></div>
      </div>
    </div>
  )
}

export default App