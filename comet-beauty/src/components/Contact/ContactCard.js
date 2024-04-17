import React from 'react'
import styled from 'styled-components'

const InfoCards = styled.div`
  max-width: 1200px;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  padding: 1rem 1rem;
  border-radius: 40px;

  h2 {
    font-weight: 300;
    text-transform: uppercase;
    text-shadow: 5px 10px 20px rgba(0, 0, 0, 0.4);
    margin-bottom: 8px;
  }
`

const Avatar = styled.img`
  height: 25vw; /* 或者您可以使用固定高度/宽度值 */
  width: 25vw; /* 使用vw单位可以确保在不同尺寸的屏幕上保持一致的比例 */
  border-radius: 50%; /* 将头像变为原型 */
  object-fit: cover; /* 保持图像比例不变 */
  object-position: center; /* 确保图像在容器中居中 */
  overflow: hidden; /* 隐藏溢出部分，使得圆形生效 */
  object-position: top;
`

const Content = styled.div`
  margin: auto;
  line-height: 23px;
  max-width: 110px;
  min-width: 110px;

  p {
    font-size: 0.85rem;
  }
`

const ContactCard = ( props ) => {
  return (
    <InfoCards>
      <Avatar src={props.avatar} alt={props.alt}></Avatar>
      <Content>
        <h2>{props.name}</h2>
        {
          props.contact.map((item, id) => (
            <p key={id}>{item.contact}</p>
          ))
        }
      </Content>
  </InfoCards>
  )
}

export default ContactCard
