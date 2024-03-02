import styled from "styled-components";
import { InfoData, InfoDataThree, InfoDataTwo } from "../../assets/data/InfoData";
import InforSection from "./InforSection";
import { plant } from '../../assets/images'

const Section = styled.div`
  width: 100%;
  height: 100%;
  // padding: 1rem;
  h1 {
    text-align: center;
    font-size: clamp(1.5rem, 4vw, 200rem); 
    font-weight: 300;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }

  p {
    color: #888888;
    text-align: center;
    margin: 1vh 0 3vh 0;
    font-size: clamp(1.2em, 2vw, 4rem);
  }
`

const AboutUs = () => {
    return (
        <>
          <Section>
            <h1>About Us</h1>
            <p>Meet our teams</p>
          </Section>
          <InforSection {...InfoData} background={plant}/>
          <InforSection {...InfoDataTwo}/>
          <InforSection {...InfoDataThree} background={plant}/>
        </>
    )
}

export default AboutUs;