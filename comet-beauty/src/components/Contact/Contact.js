import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import ImageOne from '../../assets/images/image1.jpg'
import { ContactInfo } from '../../assets/data/ContactInfos'
import ContactCard from './ContactCard'
import ContactForm from './ContactForm'

const Sections = styled.section`
  padding: 2rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
`

const Features = () => {
  return (
    <Sections>
      <Container>
        {
          ContactInfo.map(item => (
            <ContactCard
              key={item.id}
              name={item.name}
              avatar={item.avatar}
              alt={item.alt}
              contact={item.contact}
            />
          ))
        }
      </Container>
      <ContactForm />
    </Sections>
  )
}

export default Features
