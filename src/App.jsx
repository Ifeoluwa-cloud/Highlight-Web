import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import About from './components/About'
import Pricing from './components/Pricing'
import Newsletter from './components/Newsletter'
import Footer from './shared/Footer'

function App() {
  
  return (
    <>
      <Navbar/>
      <div id="home">
        <Home />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
