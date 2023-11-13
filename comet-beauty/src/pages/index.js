import React from 'react'
import ImageSlider from '../components/ImageSlider'
import { SliderData } from '../data/SliderData'
import InforSection from '../components/InforSection'
import { InfoData, InfoDataTwo } from '../data/InfoData'
import Listing from '../components/Listing'
import Features from '../components/Features'
import Cards from '../components/Cards'

const Home = () => {
  return (
    <>
      <ImageSlider slides={SliderData}/>
      {/* <InforSection {...InfoData}/> */}
      {/* <Listing />
      <Features /> */}
      {/* <InforSection {...InfoDataTwo}/> */}
      <Cards />
    </>
  )
}

export default Home
