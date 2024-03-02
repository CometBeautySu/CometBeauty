import React from 'react'
import ImageSlider from '../components/ImageSlider'
import { SliderData } from '../assets/data/SliderData'
import Cards from '../components/Services/Cards'
import { ServiceData } from '../assets/data/ServiceData'
import AboutUs from '../components/AboutUs/AboutUs'
import Gallery from '../components/Gallery/Gallery'
import Contact from './ContactPage'

const Home = () => {
  return (
    <>
      <ImageSlider slides={SliderData}/>
      <Cards service={ServiceData}/>
      <AboutUs/>
      {/* <Gallery service={ServiceData}/> */}
      {/* <Contact /> */}
    </>
  )
}

export default Home
