import React, { useState } from 'react'
import styled from 'styled-components';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = styled.div`
  // position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Slide = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${props => props.show ? 'block' : 'none'};
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: 0% 20%;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`

const Indicators = styled.span`
  display: flex;
  position: absolute;
  bottom: 1rem;
`

const LeftArrow = styled(BsArrowLeftCircleFill)`
	position: absolute;
  top: 50%;
	filter: drop-shadow(0px 0px 5px #555);
	width: 2rem;
	height: 2rem;
	color: white;
	left: 1rem;
	z-index: 100;

	&:hover {
		cursor: pointer;
	}
`

const RightArrow = styled(BsArrowRightCircleFill)`
	position: absolute;
  top: 50%;
	filter: drop-shadow(0px 0px 5px #555);
	width: 2rem;
	height: 2rem;
	color: white;
	right: 1rem;
	z-index: 100;

	&:hover {
		cursor: pointer;
	}
`

const Indicator = styled.button`
	background-color: ${props => props.active ? 'white' : 'grey'};
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 100%;
  border: none;
  outline: none;
  box-shadow: 0px 0px 5px #555;
  margin: 0 0.2rem;
  cursor: pointer;
`

const CardImage = (props) => {
	const slides = props.images;

	const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition - currentTouch;

    if (diff > 5) {
      nextSlide();
    } else if (diff < -5) {
      prevSlide();
    }

    setTouchPosition(null);
  };

  return (
    <Carousel
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
			{/* <LeftArrow onClick={prevSlide} /> */}
      {slides.map((item, idx) => {
        return (
          <Slide
            src={item.src}
            alt={item.alt}
            key={idx}
						show={slide === idx ? true : false}
          />
        );
      })}

			{/* <RightArrow onClick={nextSlide}/> */}
      <Indicators>
        {slides.map((_, idx) => {
          return (
            <Indicator
              key={idx}
              active={slide === idx ? true : false}
              onClick={() => setSlide(idx)}
            ></Indicator>
          );
        })}
      </Indicators>
    </Carousel>
  )
}

export default CardImage