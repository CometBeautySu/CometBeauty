import React from 'react'
import styled, { css } from 'styled-components/macro'
import { plant, work} from '../../../assets/images'
import ContactCard from '../../Contact/ContactCard'
import { ContactInfo } from '../../../assets/data/ContactInfos'
import { SusuServiceData } from '../../../assets/data/ServiceData'
import ProcedureCard from './ProcedureCard'

const ServiceDetailContainer = styled.section`
	width: 100%;
	min-height: 100vh;

	h1, h2, h4 {
		font-weight: 500;
		text-align: center;
    width: 100%;
    padding: 5px 0;
	}

  h1, h2 {
    text-shadow: 5px 10px 20px rgba(0, 0, 0, 0.3);
  }
}
`

const ServiceDetailheader = styled.div`
	position: relative;

	img {
			height: 300px;
	}

	h1 {
			position: absolute;
			top: 59%; /* 让 h1 的顶部与父元素的中间对齐 */
			left: 50%; /* 让 h1 的左边与父元素的中间对齐 */
			transform: translate(-50%, -50%); /* 使用 transform 属性将 h1 的中心点移到父元素的中心点 */
	}
`

const ServiceDetailWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin: 2rem 2rem;
	flex-direction: column;

	// h1, h2, h3, h4 {
	// 		text-align: center;
	// 		padding: 5px 0;
	// }
	
	p {
			padding: 10px 20px;
			line-height: 2em;
	}

	img {
			object-fit: cover;
			margin: 20px auto;
			height: 100%;
			width: 90%;
	}

	hr {
		width: 90%;
		margin: 0.2rem auto;
		padding: 0;
	}
`

const Contact = styled.div`
	margin: 20px;

	h1 {
		margin-top: 1.2rem;
	}
`

const OutlineWrapper = styled.div`
  p {
    pading: 0px;
    line-height: 15px;
  }
`

const MakeUp = () => {
  const SusuContactInfo = ContactInfo[0];
  const SusuMakeUpData = SusuServiceData[0];
  const SusuMakeUpProcedure = SusuServiceData[0].procedure;
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
        <h1>{SusuMakeUpData.title}</h1>
      </ServiceDetailheader>

      <ServiceDetailWrapper>
        <h1 data-aos='fade-right' data-aos-duration='600' data-aos-once='true'>Overview</h1>
        <hr />
        <p data-aos='fade-right' data-aos-duration='600' data-aos-once='true'>{SusuMakeUpData.overview}</p>
        <img src={work} data-aos='fade-left' data-aos-duration='600' data-aos-once='true'/>
      </ServiceDetailWrapper>
      <ServiceDetailWrapper>
        <h1 data-aos='fade-right' data-aos-duration='600' data-aos-once='true'>美妆课</h1>
        <hr />
        <p data-aos='fade-left' data-aos-duration='600' data-aos-once='true'>{SusuMakeUpData.description1}</p>

        <h2 data-aos='fade-right' data-aos-duration='600' data-aos-once='true'>课程大纲</h2>
        <hr />
        {/* <br /> */}
        <h4 data-aos='fade-right' data-aos-duration='600' data-aos-once='true'>{SusuMakeUpData.description2}</h4>
        <OutlineWrapper
          data-aos='fade-left' data-aos-duration='600' data-aos-once='true'
        >
          {
            SusuMakeUpData.outline.map((item, id) => (
              <p key={id}>{++id}: {item}</p>
            ))
          }
        </OutlineWrapper>

        <br />
        <h2 data-aos='fade-right' data-aos-duration='600' data-aos-once='true'>课程流程</h2>
        <hr />
        {
          SusuMakeUpProcedure.map((item, id) => (
            <ProcedureCard key={id} id={id} title={item.title} detail={item.detail} />
          ))
        }
      </ServiceDetailWrapper>
    
			<Contact
        data-aos='zoom-out'
        data-aod-duration='1000'
        data-aos-once='true'
        data-aos-delay='300'
        data-aos-anchor-placement='center bottom'
      >
				<h1>联系方式</h1>
				<ContactCard
					name={SusuContactInfo.name}
					avatar={SusuContactInfo.avatar}
					alt={SusuContactInfo.alt}
					contact={SusuContactInfo.contact}
				/>
			</Contact>
    </ServiceDetailContainer>
  )
}

export default MakeUp;