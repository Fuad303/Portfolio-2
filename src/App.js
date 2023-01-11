import './App.css'
import '../src/reset.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import SocialMedia from './Components/SocialMedia'
import Services from './Components/Services'
import About from './Components/About'
import Articles from './Components/Articles'
import Carousel from './Components/Carousel'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar/>
        {/* <Carousel/> */}
        <Hero/>
        <Services title="My skills" />
        <About/>
        <SocialMedia title="Take a look at my resume"/>
        <Articles/>
      </div>
    </div>
  )
}

export default App