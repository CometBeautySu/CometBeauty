import React from 'react'
import Gallery from '../components/Gallery/Gallery'
import { ServiceData } from '../assets/data/ServiceData'
import { GalleryData } from '../assets/data/GalleryData'

const GalleryPage = () => {
  return (
    <Gallery service={GalleryData}/>
  )
}

export default GalleryPage
