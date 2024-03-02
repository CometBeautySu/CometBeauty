import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Button } from '../Button'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { IoLogoWechat } from "react-icons/io5";
import { xiaohongshu } from '../../assets/images'

const Section = styled.section`
  background: #1B4242;
  color: #fff;
  width: 100%;
  min-height: 100px;
  padding: 1rem calc((100vw - 1300px) / 2);
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem 0 rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Quote = styled.div`
  flex: 0.95;
  padding: 2rem 0rem;

  h3 {
    font-size: clamp(2rem, 5vw, 5rem);
    font-weight: 300;
  }
`

const FooterInfo = styled.div`
  padding: 2rem;
  line-height: 3;
  display: flex;
  flex-direction: column;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0rem;
  }
`

const FooterBottom = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`


const SocialIcons = styled.div`
  display: flex;
  width: 50%;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 1.5rem;
  margin-top: 0.6rem;
  color: #5C8374;
`

const Instagram = styled(FaInstagram)`
  ${Icons};
`

const FaceBook = styled(FaFacebookF)`
  ${Icons};
`

const LinkedIn = styled(FaLinkedinIn)`
  ${Icons};
`

const Youtube = styled(FaYoutube)`
  ${Icons};
`

const WeChat = styled(IoLogoWechat)`
  ${Icons};
`

const XiaoHongShu = styled(xiaohongshu)`
  ${Icons};
`

const Contact = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width:768px) {
    width: 100%;
    justify-content: flex-start;
  }
`

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <Quote>
            <h3>Rediscover Beauty</h3>
            <h3>Unwind in Elegance</h3>
          </Quote>
          <FooterInfo>
            <h4>Contact Us</h4>
            {/* <Link to="/homes">FAQs</Link>
            <Link to="/homes">Support</Link>
            <Link to="/homes">Questions</Link> */}
            <p><i>+(1) 253-457-8967</i></p>
            <SocialIcons>
              <a href="//www.google.com" rel="noopenner noreferrer" target="_blank">
                <WeChat />
              </a>
              <a href="//www.google.com" rel="noopenner noreferrer" target="_blank">
                <Instagram />
              </a>
              {/* <a href="//www.google.com" rel="noopenner noreferrer" target="_blank">
                <XiaoHongShu />
              </a> */}
            </SocialIcons>
          </FooterInfo>
          <FooterInfo>
            <h4>Address</h4>
            <p><i>15935 NE 8TH ST，Suite B100,<br/>BELLEVUE, WA 98008</i></p>
            <p></p>
          </FooterInfo>
        </FooterTop>
        {/* <FooterBottom>
          <SocialIcons>
            <a href="//www.google.com" rel="noopenner noreferrer" target="_blank">
              <Youtube />
            </a>
            <a href="//www.google.com" rel="noopenner noreferrer" target="_blank">
              <Instagram />
            </a>
            <a href="//www.google.com" rel="noopenner noreferrer" target="_blank">
              <FaceBook />
            </a>
            <a href="//www.google.com" rel="noopenner noreferrer" target="_blank">
              <LinkedIn />
            </a>
          </SocialIcons>
          <Contact>
            <Button to='/homes' primary>
              Let's Chat <IoMdArrowRoundForward />
            </Button>
          </Contact>
        </FooterBottom> */}
      </Container>
    </Section>
  )
}

export default Footer
