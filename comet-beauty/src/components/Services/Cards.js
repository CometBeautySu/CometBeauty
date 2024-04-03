import React from 'react'
import CardItem from './CardItem'
import styled from 'styled-components'


const CardsSection = styled.div`
  padding: 2rem;
  background: #fff;
  margin-top: 0px;

  h1 {
    text-align: center;
    margin-top: 2vh;
    font-size: clamp(1.5rem, 4vw, 200rem); 
    font-weight: 300;
    text-transform: uppercase;
    text-shadow: 5px 10px 20px rgba(0, 0, 0, 0.4);
  }

  p {
    color: #888888;
    text-align: center;
    margin-top: 1vh;
    font-size: clamp(1.2em, 2vw, 4rem);
  }
`

const CardsContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
`

const CardsWrapper = styled.div`
  position: relative;
  margin: 50px 0 45px;
`

const CardsItems = styled.ul`
  margin-bottom: 24px;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`

const Cards = ( props ) => {
  const serviceData = props.service;

  return (
    <>
      <CardsSection
        data-aos='zoom-out'
        data-aod-duration='1000'
        data-aos-once='true'
        data-aos-delay='300'
        data-aos-anchor-placement='center bottom'
      >
        <h1>Our Services</h1>
        <p>Explore more services</p>
        <CardsContainer>
          <CardsWrapper>
            <CardsItems>
              {serviceData.slice(0, 2).map(item => (
                <CardItem 
                  key={item.id} 
                  title={item.title} 
                  detail={item.detail}
                  path={item.path}
                  label={item.label}
                  src={item.images}
                  alt={item.alt}
                  artist={item.artist}>
                </CardItem>
              ))}
            </CardsItems>
            <CardsItems>
              {serviceData.slice(2, 5).map(item => (
                <CardItem 
                  key={item.id} 
                  title={item.title} 
                  detail={item.detail}
                  path={item.path}
                  label={item.label}
                  src={item.images}
                  alt={item.alt}
                  artist={item.artist}>
                  </CardItem>
              ))}
            </CardsItems>
          </CardsWrapper>
        </CardsContainer>
      </CardsSection>
    </>
  )
}

export default Cards
