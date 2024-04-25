import React from 'react'
import styled, { css } from 'styled-components/macro'
import { qrCode, plant, work} from '../../assets/images'
import { FaInstagram } from 'react-icons/fa'
import { IoLogoWechat } from "react-icons/io5";
import Gallery from '../Gallery/Gallery'
import { ServiceData } from '../../assets/data/ServiceData';
import ContactCard from '../Contact/ContactCard'
import { ContactInfo } from '../../assets/data/ContactInfos'

const ServiceDetailContainer = styled.section`
	width: 100%;
	min-height: 100vh;

	h1 {
		font-weight: 500;
		text-align: center;
	}

	hr {
		width: 85%;
		margin: 0 auto;
		padding: 0;
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
			font-weight: 500;
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

	h1 {
			text-align: center;
			padding: 5px 0;
	}
	
	p {
			padding: 20px;
			line-height: 2em;
	}

	img {
			object-fit: cover;
			margin: 20px auto;
			height: 100%;
			width: 90%;
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
	// display: flex;
	// justify-content: space-between;

	// p {
	//     // padding: 25% 0;
	//     line-height: 3em;
	//     margin: auto;
	//     text-align: left;
			
	// }

	// img {
	//     padding: 8px;
	//     width: 60%;
	//     max-width: 300px;
	//     height: 100%;
	//     margin: auto;
	//     object-fit: cover;
	// }

	margin: 20px;

	h1 {
		margin-top: 1.2rem;
	}
`

const ImageCardContainer = styled.div`
	


`

const ImageCard = styled.div`
	position: relative;
	overflow: hidden;
	background-color: #F2DAD7;
	width: 30%;
	height: 100%;

	img {
		position: absolute;
		opacity: 0.9;
		object-fit: cover;
	}
	p {
    position: absolute;
    text-align: center;
    width: 100%;
    padding: 1em 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    z-index: 3;
	}

	&:hover {
		transform: translateY(0%);
	}
`

const ButtonWrap = styled.div`
  background: rgba(darken($primary, 10%), .9);
  height: 100%;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  transform: translateY(101%);
  // transition: $ease;
  button {
    background: none;
    outline: none;
    font-weight: 100;
    letter-spacing: 2px;
    border: 1px solid $white;
    color: $white;
    text-transform: uppercase;
    padding: 10px;
    &:hover {
      transition: $ease;
      background: $white;
      color: $secondary;
      transform: scale(1.05);
    }
  }
`

// const IMG = styled.img`

// `

const ProjectCard = styled.div`
  position: relative;
  background: black; // 使用主题的 primary 颜色
  overflow: hidden;
  width: 30%;
  height: 300px; // 可以根据需要调整高度

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
  }

  p {
    position: absolute;
    text-align: center;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2px;
    z-index: 3;
  }

  &:hover {
    transform: translateY(0);
  }
`;

const GridOverlay = styled.div`
  background: rgba(darken(black, 10%), .9);; // 假设 theme 中有 primaryDark 颜色
  height: 100%;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  position: absolute;
  display: grid;
  justify-items: center;
  align-items: center;
  transform: translateY(101%);
  transition: all 0.3s ease-in-out;; // 使用主题的 ease 过渡效果

  &:hover {
    transform: translateY(0);
  }

  button {
    background: none;
    outline: none;
    font-weight: 100;
    letter-spacing: 2px;
    border: 1px solid white; // 使用主题的 white 颜色
    color: white;
    text-transform: uppercase;
    padding: 10px;

    &:hover {
      background: white;
      color: #D1A39E; // 使用主题的 secondary 颜色
      transform: scale(1.05);
    }
  }
`;

const ServiceDetail = () => {
	const SusuContactInfo = ContactInfo[0];
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
					<h1>新娘妆发 / 写真妆发</h1>
			</ServiceDetailheader>
			<ServiceDetailWrapper>
					<h1 data-aos='fade-left' data-aos-duration='600' data-aos-once='true'>Overview</h1>
					<p data-aos='fade-left' data-aos-duration='600' data-aos-once='true'>在我们的工作室，我们擅长亚洲风格的化妆和发型设计，专注于令人惊叹的中国新娘造型。 我们的专业知识确保每位新娘在特殊的日子里散发出自然之美，将传统优雅与现代风格融为一体。 让我们通过专业服务提升您的新娘风格。

我们为婚礼新娘、登记新娘和新娘拍摄提供化妆和发型设计服务。 此外，我们还满足生日化妆和各种活动发型设计的需求。</p>
					<img src={work} alt='工作照' data-aos='fade-right' data-aos-duration='600' data-aos-once='true'/>
			</ServiceDetailWrapper>
	
			<ServiceDetailWrapper>
					<h1 data-aos='fade-left' data-aos-duration='600' data-aos-once='true'>How is that work</h1>
					<p data-aos='fade-right' data-aos-duration='600' data-aos-once='true'>
							与化妆师susu预约后，请素颜到店。期间会商讨妆发风格，婚礼时间，为您打造属于您的最美造型
							<br />
							时长：2hrs (超出时长按 $20 / 分钟计算)
					</p>
			</ServiceDetailWrapper>

			<hr />
			<Contact>
				<h1>联系方式</h1>
				<ContactCard
					name={SusuContactInfo.name}
					avatar={SusuContactInfo.avatar}
					alt={SusuContactInfo.alt}
					contact={SusuContactInfo.contact}
				/>
			</Contact>

			{/* <ContactContainer>
					<h3 data-aos='fade-down' data-aos-duration='600' data-aos-once='true'>Contact Me</h3>
					<Contact data-aos='fade-up' data-aos-duration='600' data-aos-once='true'>
							<p>
									<WeChat />SUSUWX
									<br />
									<Instagram />SUSUINS
									<br />
									XHS: SUSUXHS
									<br />
							</p>
							<img src={qrCode} alt='qrCode'/>
					</Contact>
			</ContactContainer> */}

			{/* <Gallery service={ServiceData}/> */}
      {/* <ProjectCard>
        <img src={plant} alt="Project Image" />
        <p>Description here</p>
        <GridOverlay>
          <button>Learn More</button>
        </GridOverlay>
      </ProjectCard> */}
		</ServiceDetailContainer>
  )
}

export default ServiceDetail
