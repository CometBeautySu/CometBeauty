import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Footer from './Components/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Slider/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
