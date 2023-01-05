import './App.css';
import '../src/reset.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero'
import SocialMedia from './Components/SocialMedia';
import Services from './Components/Services';
import About from './Components/About';
import Articles from './Components/Articles';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Services title="My skills" />
      <About/>
      <SocialMedia title="Take a look at my resume"/>
      <Articles/>
    </div>
  );
}

export default App