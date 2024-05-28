import React from 'react'
import styled from 'styled-components';
import { logoImage, background1 } from '../assets/images';
import { Button } from './Button'
import { motion, AnimatePresence } from 'framer-motion'

const HeroSection = styled.div`
  height: 100vh;
  background-image: url(${background1});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0 20px;

  @media screen and (min-width: 650px) {
    height: 100vh;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LogoImage = styled.img`
  max-width: 100%;
  width: 65%;
  height: auto;
  object-fit: cover;
  border-radius: 10%;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 50%;
    margin-top: 20px;
  }

  @media screen and (max-width: 480px) {
    width: 70%;
    margin-top: 10px;
  }
`

const StyledButton = styled(Button)`
  margin-top: 6rem;
  &:hover,
  &:active {
      background-color: #404731;
  }
  z-index: 10;

  @media screen and (max-width: 768px) {
    margin-top: 3rem;
  }

  @media screen and (max-width: 480px) {
    margin-top: 5rem;
  }
`

function Hero() {
  return (
    <HeroSection>
      <ContentContainer>
        <LogoImage 
          src={logoImage} 
          alt='logoImage' 
          data-aos='fade-down' 
          data-aos-duration='600'
        />
        <StyledButton 
          to='/contact' 
          primary='true'
          big
          round
          data-aos='fade-down' 
          data-aos-duration='600'
        >Contact Us</StyledButton>
      </ContentContainer>
    </HeroSection>
  )
}

export default Hero;
