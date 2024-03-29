import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Button } from '../Button'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'

const SliderSection = styled.section`
  height: 100vh;
  // max-height: 650px;
  pisition: relative;
  overflow: hidden;

  @media screen and (min-width: 650px) {
    height: 100vh;
  }
`

const SlidderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`

const Slide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`

const Slider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg, 
      rgba(0, 0, 0, 0.2) 0%, 
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.2) 100%
    )
  }
`

const SliderImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: 10% 20%;

  @media screen and (max-width: 650px) {
    height: 100vh;
    // object-position: 30% 40%;
  }
`

const SliderContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;
  

  h1 {
    // (smallest size of the font,
    // 8 view port is smallest font based on ur screen,
    // 2rem is the largest font size)
    font-size: clamp(1rem, 7vw, 200rem); 
    font-weight: 300;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
    white-space: pre-line;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`

const SlidderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right:50px;
  display: flex;
  z-index: 10;
`

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #1B4242;
    transform: scale(1.05);
  }
`

const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`

const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`

const ImageSlider = ({ slides }) => {
  // create state function
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const timeout = useRef(null)

  // automate slider
  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1))
    }

    // timeout.current = setTimeout(nextSlide, 3000)

    return function() {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [current, length])

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    // when you push the buttom next slider, it will increase the index
    // current as an index of the images, return to 0 when it reach to the end
    setCurrent(current === length - 1 ? 0 : current + 1)
    // console.log(current)
  }

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    setCurrent(current === 0 ? length - 1 : current - 1)
    // console.log(current)
  }

  // if not data, shound't work
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0 }
  }

  return (
    <SliderSection>
      <SlidderWrapper>
        <AnimatePresence>
          {slides.map((slide, index) => {
            return ( // pass index to get specific image data
              <Slide key={index}>
                {index === current && (
                  <Slider>
                  <SliderImage src={slide.image} alt={slide.alt}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  variants={fadeAnimation}
                  />
                  <SliderContent>
                    <h1 data-aos='fade-down' data-aos-duration='600'>{slide.title}</h1>
                    <p data-aos='fade-down' data-aos-duration='600' data-aos-delay='200'>{slide.price}</p>
                    <Button 
                      data-aos='zoom-out' 
                      data-aos-duration='500'
                      data-aos-delay='250'
                      to={slide.path} 
                      primary='true'
                      css={`max-width: 160px;`}
                    >
                      {slide.label}
                      <Arrow />
                    </Button>
                  </SliderContent>
                </Slider>
                )}
              </Slide>
            )
          })}
        </AnimatePresence>
        <SlidderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SlidderButtons>
      </SlidderWrapper>
    </SliderSection>
  )
}

export default ImageSlider
