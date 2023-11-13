import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardSection = styled.li`
  display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;

  @media screen and (min-width: 1024px) {
    margin-bottom: 2rem;
  }
`

const CardItemLink = styled(Link)`
  display: flex;
  flex-flow: column;
  width: 100%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
`

const CardItemPicWrap = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 67%;
  overflow: hidden;

  &::after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #1f98f4;
    box-sizing: border-box;
  }
`

// const FafeImage = styled.img`
//   animation-name: fade-img;
//   animation-duration: 2s;
// `

const CardImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`

const CardItemInfo = styled.div`
  padding: 20px 30px 30px;
  
  h5 {
    color: #252e48;
    font-size: 18px;
    line-height: 24px;
  }

  h6 {
    color: #252e48;
    font-size: 16px;
    line-height: 40px;
  }
`

function CardItem(props) {
  return (
    <>
      <CardSection>
        <CardItemLink to={props.path }>
          <CardItemPicWrap data-category={props.label}>
            <CardImage src={props.scr} alt="Images"/>
          </CardItemPicWrap>
          <CardItemInfo>
            <h5>{props.text}</h5>
            <h6>{props.detail}</h6>
          </CardItemInfo>
        </CardItemLink>
      </CardSection>
    </>
  )
}

export default CardItem
