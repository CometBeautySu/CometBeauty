import styled from "styled-components";
import { InfoData, InfoDataThree, InfoDataTwo } from "../../assets/data/InfoData";
import InforSection from "./InforSection";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem;
  h1 {
    text-align: center;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
`

const AboutUs = () => {
    return (
        <>
        <Section><h1>About Us</h1></Section>
        <InforSection {...InfoData} />
        <InforSection {...InfoDataTwo}/>
        <InforSection {...InfoDataThree}/>
        </>
    )
}

export default AboutUs;