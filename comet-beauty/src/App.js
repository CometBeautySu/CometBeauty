import React, { useState } from 'react'
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import Home from './pages';
import About from './pages/About';
import Homes from './pages/Homes';
import Rentals from './pages/Rentals';
import Contact from './pages/Contact';

function App() {
  // func for menu bar
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

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
