import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
// import { plant } from '../../assets/images'

const Section = styled.section`
  width: 100%;
  height: 100%;
  h1 {
    text-align: center;
  }
`
const Container = styled.div`
  padding: 2rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 500px;
  background-image: url(${({ background }) => background || 'none'}); /* 设置背景图片 */
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({reverse}) => (reverse ? '2' : '1')};

  h1 {
    margin-bottom: 0.2rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    font-weight: 300;
  }

  h3 {
    margin-bottom: 2rem;
    line-height: 27px;
    font-weight: 300;
  }

  p {
    margin-bottom: 2rem;
    line-height: 27px;
    // text-align: center;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    
    p {
      text-align: center;
    }
  }
`

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({reverse}) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({reverse}) => (reverse ? '2' : '1')};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 20% 10%;
    border-radius: 10%;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`

const InforSection = ({
  heading, 
  paragraphOne, 
  paragraphTwo, 
  buttonLabel, 
  reverse, 
  image,
  background,
  delay
}) => {
  return (
    <>
    <Section>
      <Container background={background}>
      <ColumnRight reverse={reverse}>
          <img src={image} alt='home' 
            data-aos='zoom-out'
            data-aod-duration='1000'
            data-aos-once='true'
            data-aos-delay={delay}
            data-aos-anchor-placement='center bottom'
          />
        </ColumnRight>
        <ColumnLeft
          reverse={reverse}
          data-aos='fade-up'
          data-aod-duration='1000'
          data-aos-once='true'
          data-aos-delay={delay}
          data-aos-anchor-placement='center bottom'
        >
          <h1>{heading}</h1>
          <h3>{paragraphOne}</h3>
          <p>{paragraphTwo}</p>
          <Button to='/homes' primary='true'>{buttonLabel}</Button>
        </ColumnLeft>
      </Container>
    </Section>
    </>
  )
}

export default InforSection