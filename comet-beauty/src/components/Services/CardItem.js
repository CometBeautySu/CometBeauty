import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardSection = styled.li`
  display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;

  // @media screen and (min-width: 1024px) {
  //   margin-bottom: 2rem;
  // }
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
  margin-bottom: 2rem;
`

const CardItemPicWrap = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 67%;
  overflow: hidden;
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
  object-position: 0% 20%;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`

const CardItemInfo = styled.div`
  padding: 20px 30px 30px;
  
  h5 {
    color: #252e48;
    line-height: 28px;
    font-size: clamp(0.5rem, 4vw, 1.5rem); 
    font-weight: 500;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  h7 {
    color: #252e48;
    font-size: 15px;
    line-height: 27px;
    text-align: left;
    margin: 5px 0 0 0;
  }
`

const CardItem = (props) => {
  return (
    <>
      <CardSection
        data-aos='zoom-out'
        data-aod-duration='1000'
        data-aos-once='true'
        data-aos-delay='300'
        data-aos-anchor-placement='center bottom'
      >
        <CardItemLink to={props.path}>
          <CardItemPicWrap>
            <CardImage src={props.scr} alt="Images"/>
          </CardItemPicWrap>
          <CardItemInfo>
            <h5>{props.title}</h5>
            <h7>{props.detail}</h7>
            {/* <p>By: {props.artist}</p> */}
          </CardItemInfo>
        </CardItemLink>
      </CardSection>
    </>
  )
}

export default CardItem
