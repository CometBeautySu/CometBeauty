import React from 'react'
import styled, { css } from 'styled-components/macro'
import { FaInstagram } from 'react-icons/fa'
import { IoLogoWechat } from "react-icons/io5";
import { qrCode, plant, work} from '../../assets/images'
import MicrobladingCard from './MicrobladingCard';
import { ZoeServiceData } from '../../assets/data/ServiceData'
import ContactCard from '../Contact/ContactCard'
import { ContactInfo } from '../../assets/data/ContactInfos'


const ServiceDetailContainer = styled.section`
  width: 100%;
  min-height: 100vh;

  h1 {
    text-align: center;
    font-weight: 500;
    margin-bottom: 1.2rem;
  }
`

const ServiceDetailheader = styled.div`
  position: relative;

  img {
      height: 300px;
  }

  h1 {
      position: absolute;
      font-weight: 500;
      top: 59%; /* 让 h1 的顶部与父元素的中间对齐 */
      left: 50%; /* 让 h1 的左边与父元素的中间对齐 */
      transform: translate(-50%, -50%); /* 使用 transform 属性将 h1 的中心点移到父元素的中心点 */
  }
`

const ContactContainer = styled.div`
  margin: 2rem 2rem;
  text-align: center;

  h3 {
      padding: 5px 0;
  }
`

const Contact = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    line-height: 3em;
    margin: auto;
    text-align: left;
  }

  img {
    padding: 8px;
    width: 60%;
    max-width: 300px;
    height: 100%;
    margin: auto;
    object-fit: cover;
  }
`

const MicrobladingService = () => {
  const ZoeContactInfo = ContactInfo[2];
  return (
    <ServiceDetailContainer>
      <ServiceDetailheader
          data-aos='zoom-out'
          data-aod-duration='1000'
          data-aos-once='true'
          data-aos-delay='300'
          data-aos-anchor-placement='center bottom'
      >
          <img src={plant}/>
          <h1>Microblading</h1>
      </ServiceDetailheader>
      {
        ZoeServiceData.map((item) => (
          <MicrobladingCard
            key={item.id}
            title={item.title}
            description={item.description}
            img={item.img}
            alt={item.alt}
            way={item.way}
            fit={item.fit}
            maintenance={item.maintenance}
          />
        ))
      }
      <h1>联系方式</h1>
      <ContactCard
        name={ZoeContactInfo.name}
        avatar={ZoeContactInfo.avatar}
        alt={ZoeContactInfo.alt}
        contact={ZoeContactInfo.contact}
      />
    </ServiceDetailContainer>
  )
}

export default MicrobladingService
