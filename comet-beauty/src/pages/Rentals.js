import React from 'react'
import ImageSlider from '../components/ImageSlider'
import { SliderData } from '../data/SliderData'

const Rentals = () => {
  return (
    <ImageSlider slides={SliderData} />
  )
}

export default Rentals
