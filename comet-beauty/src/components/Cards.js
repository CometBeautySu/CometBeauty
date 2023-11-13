import React from 'react'
import CardItem from './CardItem'
import styled from 'styled-components'
import ImageOne from '../images/image1.jpg'

const CardsSection = styled.div`
  padding: 2rem;
  background: #fff;

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

function Cards() {
  return (
    <>
      <CardsSection>
        <h1>Our Services</h1>
        <CardsContainer>
          <CardsWrapper>
            <CardsItems>
              <CardItem 
                scr={ImageOne}
                text="美容(美甲 / 美睫 / 纹绣)"
                detail="本店提供美甲美睫纹绣等美容服务"
                label="Facial"
                path="/About"
              />
              <CardItem 
                scr={ImageOne}
                text="美体(经络疏通 / 祛毛)"
                detail="本店提供美甲美睫纹绣等美容服务"
                label="Body"
                path="/About"
              />
            </CardsItems>
            <CardsItems>
              <CardItem 
                scr={ImageOne}
                text="妆造(婚礼跟妆 / 写真)"
                detail="本店提供美甲美睫纹绣等美容服务"
                label="MakeUp"
                path="/About"
              />
              <CardItem 
                scr={ImageOne}
                text="纹绣(纹眉 / 纹眼线)"
                detail="本店提供美甲美睫纹绣等美容服务"
                label="Facial"
                path="/About"
              />
              <CardItem 
                scr={ImageOne}
                text="祛毛"
                detail="本店提供美甲美睫纹绣等美容服务"
                label="Body"
                path="/About"
              />
            </CardsItems>
          </CardsWrapper>
        </CardsContainer>
      </CardsSection>
    </>
  )
}

export default Cards
