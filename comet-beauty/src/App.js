import React from 'react'
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './data/SliderData';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <ImageSlider slides={SliderData}/>
    </>
  );
}

export default App;
