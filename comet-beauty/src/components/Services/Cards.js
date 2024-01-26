import React from 'react'
import CardItem from './CardItem'
import styled from 'styled-components'

const CardsSection = styled.div`
  padding: 2rem;
  background: #fff;
  margin-top: 30px;

  h1 {
    text-align: center;
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
      <CardsSection>
        <h1>Our Services</h1>
        <CardsContainer>
          <CardsWrapper>
            <CardsItems>
              {serviceData.slice(0, 2).map(item => (
                <CardItem 
                  key={item.id} 
                  title={item.title} 
                  detail={item.detail}
                  // path={item.path}
                  label={item.label}
                  scr={item.image}
                  alt={item.alt}>
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
                  scr={item.image}
                  alt={item.alt}>
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
