import React from 'react'
import styled, { css } from 'styled-components/macro'
import { FaInstagram } from 'react-icons/fa'
import { IoLogoWechat } from "react-icons/io5";
import { xhsIcon } from '../../assets/images/xhsIcon';

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
  margin: auto;
  height: 30vw; /* 或者您可以使用固定高度/宽度值 */
  width: 30vw; /* 使用vw单位可以确保在不同尺寸的屏幕上保持一致的比例 */
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

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 0.6rem;
  margin-top: 0.3rem;
  color: #5C8374;
  vertical-align: -9px;
`

const Instagram = styled(FaInstagram)`
  ${Icons};
`

const WeChat = styled(IoLogoWechat)`
  ${Icons};
`

const XHS = styled(xhsIcon)`
  ${Icons};
`

const ContactCard = ( props ) => {
  return (
    <InfoCards
      data-aos='zoom-out'
      data-aod-duration='1000'
      data-aos-once='true'
      data-aos-delay='300'
      data-aos-anchor-placement='center bottom'
    >
      <Avatar src={props.avatar} alt={props.alt}></Avatar>
      <Content>
        <h2>{props.name}</h2>
        {
          props.contact.map((item, id) => (
            <p key={id}> 
              {item.type === 'WX' && <WeChat />}
              {item.type === 'INS' && <Instagram />}
              {item.type === 'XHS' && <XHS />}
              {item.value}
            </p>
          ))
        }
      </Content>
  </InfoCards>
  )
}

export default ContactCard
