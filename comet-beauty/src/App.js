import React, { useEffect, useState, useLayoutEffect } from 'react'
import GlobalStyle from './globalStyles';
import Dropdown from './components/Dropdown';
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages';
import About from './pages/About';
import Homes from './pages/Homes';
import Rentals from './pages/Rentals';
import Contact from './pages/Contact';
import Aos from 'aos'
import 'aos/dist/aos.css' // Animate on scroll library
import Footer from './components/NavbarAndFooter/Footer';
import Navbar from './components/NavbarAndFooter/Navbar';

function App() {
  // func for menu bar
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation() 

  // console.log(location.pathname)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0) // back to top when page changed
  }, [location.pathname])

  useEffect(() => {
    Aos.init({})
  }, [])

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/homes' exact element={< Homes/>} />
        <Route path='/rentals' exact element={<Rentals />} />
        <Route path='/contact' exact element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
