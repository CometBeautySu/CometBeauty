import React, { useState } from 'react'
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';

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
    </>
  );
}

export default App;
