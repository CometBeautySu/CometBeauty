import React from 'react'
import ImageSlider from '../components/ImageSlider/ImageSlider'
import { SliderData } from '../assets/data/SliderData'
import Cards from '../components/Services/Cards'
import { ServiceData } from '../assets/data/ServiceData'
import AboutUs from '../components/AboutUs/AboutUs'
import Gallery from '../components/Gallery/Gallery'
import Contact from './ContactPage'
import styled from 'styled-components'
import Hero from '../components/Hero'

const HeroSection = styled.div`
  // min-height: calc(100vh - 500px);
`

const Home = () => {
  return (
    <HeroSection>
      <Hero />
      {/* <ImageSlider slides={SliderData}/> */}
      <Cards service={ServiceData}/>
      <AboutUs/>
      {/* <Gallery service={ServiceData}/> */}
      {/* <Contact /> */}
    </HeroSection>
  )
}

export default Home
