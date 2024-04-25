import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Section = styled.section`
  background: #636c59;
  color: #fff;
  width: 100%;
  min-height: 100px;
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
  flex: 0.7;
  padding: 2rem 4rem;

  h3 {
    font-size: clamp(2rem, 5vw, 5rem);
    font-weight: 300;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`

const FooterInfo = styled.div`
  padding: 2rem;
  line-height: 3;
  display: flex;
  flex-direction: column;
  flex: 0.35;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0rem;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;

  p {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      display: block;
    }
  }
`

const StyledLink = styled(Link)`
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-3px); /* 或者其他过渡效果 */
  }
`

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 使用平滑滚动
    });
  };

  return (
    <Section>
      <Container>
        <FooterTop>
          <Quote>
            <h3>SUSU BEAUTY</h3>
            <h3>打造你的美</h3>
          </Quote>
          <FooterInfo>
            <h4>Address</h4>
            <p><i>15935 NE 8TH ST，Suite B100,<br/>BELLEVUE, WA 98008</i></p>
            <p></p>
          </FooterInfo>
          <FooterInfo>
            <h4>Useful Links</h4>
            <Links>
              <StyledLink to="/" onClick={scrollToTop}>Home</StyledLink>
              <p>|</p>
              <StyledLink to="/#services">Services</StyledLink>
              <p>|</p>
              <StyledLink to="/contact">Contact Us</StyledLink>
            </Links>
          </FooterInfo>
        </FooterTop>
      </Container>
    </Section>
  )
}

export default Footer
