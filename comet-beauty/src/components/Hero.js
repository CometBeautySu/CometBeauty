import React from 'react'
import styled from 'styled-components';
import { logoImage } from '../assets/images';
import { Button } from './Button'
import { motion, AnimatePresence } from 'framer-motion'


const HeroSection = styled.div`
  height: 100vh;
  background: #A9B388;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media screen and (min-width: 650px) {
    height: 100vh;
  }
`

const LogoImage = styled.img`
  width: 40%;
  height: 50%;
  object-fit: cover;
  object-position: 20% 10%;
  border-radius: 10%;
  margin-top: 12%;

  @media screen and (max-width: 768px) {
    margin-top: 50%;
    width: 280px;
    height: 280px;
  }
`

const StyledButton = styled(Button)`
  margin-top: 5%;
  &:hover,
  &:active {
      background-color: #1B4242;
  }

  @media screen and (max-width: 768px) {
    margin-top: 30%;
  }
`

function Hero() {
  return (
    <HeroSection>
      <LogoImage src={logoImage} alt='logoImage' data-aos='fade-down' data-aos-duration='600' />
      <StyledButton to='/contact' primary='true' data-aos='fade-up' data-aos-duration='600' >联系我们</StyledButton>
    </HeroSection>
  )
}

export default Hero;