import './App.css';
import About from './components/about/About';
import Benefit from './components/benefit/Benefit';
import Fit from './components/fit/Fit';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Process from './components/process/Process';
import Stats from './components/stats/Stats';
import Thing from './components/things/Thing';

function App() {
  return(
    <div className='app'>
      <Hero />
      <About />
      <Stats />
      <Process />
      <Benefit />
      <Thing />
      <Fit />
      <Footer />
    </div>
  )
}

export default App;