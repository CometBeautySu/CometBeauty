import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import ImageOne from '../../assets/images/image1.jpg'
import { ContactInfoOne } from '../../assets/data/ContactInfos'
import { susu } from '../../assets/images'

const Sections = styled.section`
  padding: 12rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
`

const InfoCards = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: row;

  // img {
  //   height: 100%;
  //   width: 30%;
  //   border
  // }
`

const Avatar = styled.img`
  height: 100%;
  width: 30%;
  border-radius: 50%; /* 将头像变为原型 */
  object-fit: cover; /* 保持图像比例不变 */
`

const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;
`

// const Content = styled.div`
//   flex: 0 0 50%;

//   @media screen and (max-width: 768px) {
//     flex: 0 0 100%;
//     max-width: 100%;
//     margin-top: 250px;
//   }

//   h1 {
//     margin-bottom: 2rem;
//     font-size: 2rem;
//   }

//   p {
//     margin-bottom: 1rem;
//     line-height: 1.5;
//   }
// `

const Content = styled.div`

`

const ColumnRight = styled.div`
  position: absolute;
  top: -80px;
  right: 0;
  max-width: 850px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const Features = () => {
  return (
    <Sections>
      <Container>
        <InfoCards>
          <Avatar src={susu} alt='susu_image'></Avatar>
          <Content>
            <p>Name:</p>
            {
              ContactInfoOne.map((item, id) => (
                <p key={id}>{item.contact}</p>
              ))
            }
          </Content>
        </InfoCards>
      </Container>
    </Sections>
  )
}

export default Features
