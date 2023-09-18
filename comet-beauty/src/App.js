import React, { useState } from 'react'
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InforSection from './components/InforSection';
import { InfoData } from './data/InfoData';
import Listing from './components/Listing';
import Features from './components/Features';
import Footer from './components/Footer';

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
      <ImageSlider slides={SliderData}/>
      <InforSection {...InfoData}/>
      <Listing />
      <Features />
      <InforSection {...InfoData}/>
      <Footer />
    </>
  );
}

export default App;
