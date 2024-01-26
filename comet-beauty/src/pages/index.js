import React from 'react'
import ImageSlider from '../components/ImageSlider'
import { SliderData } from '../data/SliderData'
import InforSection from '../components/AboutUs/InforSection'
import { InfoData, InfoDataTwo } from '../data/InfoData'
import Listing from '../components/Listing'
import Features from '../components/Features'
import Cards from '../components/Services/Cards'
import { ServiceData } from '../data/ServiceData'
import AboutUs from '../components/AboutUs/AboutUs'

const Home = () => {
  return (
    <>
      <ImageSlider slides={SliderData}/>
      <Cards service={ServiceData}/>
      <AboutUs/>
      {/* {<Listing /> } */}
      {/* {<Features />} */}
      
    </>
  )
}

export default Home
