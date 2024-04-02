import React, { useEffect, useState, useLayoutEffect } from 'react'
import GlobalStyle from './globalStyles';
import Dropdown from './components/NavbarAndFooter/Dropdown';
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages';
import AboutPage from './pages/AboutPage';
import Homes from './pages/ServicePage';
import Aos from 'aos'
import 'aos/dist/aos.css' // Animate on scroll library
import Footer from './components/NavbarAndFooter/Footer';
import Navbar from './components/NavbarAndFooter/Navbar';
import Contact from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import GalleryPage from './pages/GalleryPage';
import MakeupPage from './pages/MakeupPage';

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
        <Route path='/about' exact element={<AboutPage />} />
        <Route path='/services' exact element={< ServicePage />} />
        <Route path='/gallery' exact element={<GalleryPage />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/makeup' exact element={<MakeupPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
