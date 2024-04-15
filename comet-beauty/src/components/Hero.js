import React from 'react'
import styled from 'styled-components';
import { logoImage, background1 } from '../assets/images';
import { Button } from './Button'
import { motion, AnimatePresence } from 'framer-motion'


const HeroSection = styled.div`
  height: 100vh;
  background-image: url(${background1});
  background-size: cover; // 让背景图片填充整个容器并保持宽高比例
  background-position: left; // 可选：将背景图片居中
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
      background-color: #404731;
  }

  @media screen and (max-width: 768px) {
    margin-top: 30%;
  }
`

function Hero() {
  return (
    <HeroSection>
      <LogoImage 
        src={logoImage} 
        alt='logoImage' 
        data-aos='fade-down' 
        data-aos-duration='600'
      />
      <StyledButton 
        to='/contact' 
        primary='true' 
        data-aos='fade-up' 
        data-aos-duration='600' 
      >Contact Us</StyledButton>
    </HeroSection>
  )
}

export default Hero;