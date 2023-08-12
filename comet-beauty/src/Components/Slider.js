import React from 'react';
import "../Style/Slider.css";
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return(
    <div className='slider-container'>
      <Carousel className='slider'>
        <Carousel.Item className='slider-item'>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/3800060/pexels-photo-3800060.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="First slide"
          />
          <Carousel.Caption className='slider-title'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='slider-item'>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="First slide"
          />
          <Carousel.Caption className='slider-title'>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='slider-item'>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/6899550/pexels-photo-6899550.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Third slide"
          />
          <Carousel.Caption className='slider-title'>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider;

