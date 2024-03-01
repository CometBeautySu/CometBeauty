import React from 'react'
import Gallery from '../components/Gallery/Gallery'
import { ServiceData } from '../assets/data/ServiceData'

const GalleryPage = () => {
  return (
    <Gallery service={ServiceData}/>
  )
}

export default GalleryPage
