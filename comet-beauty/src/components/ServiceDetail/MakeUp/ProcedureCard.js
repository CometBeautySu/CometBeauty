import React from 'react'
import styled, { css } from 'styled-components/macro'
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill, PiNumberCircleFourFill } from "react-icons/pi";


const ProcedureContainer = styled.div`
  padding: 10px;
`

const Procedure = styled.div`
  background-color: #D4E7C5;
  border-radius: 20px;
`

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  // margin-right: 0.6rem;
  // margin-top: 0.3rem;
  margin: 0.5rem 0.6rem 0.2rem 0;
  color: #5C8374;
  vertical-align: -9px;
`

const Num1 = styled(PiNumberCircleOneFill)`
  ${Icons};
`

const Num2 = styled(PiNumberCircleTwoFill)`
  ${Icons};
`

const Num3 = styled(PiNumberCircleThreeFill)`
  ${Icons};
`

const Num4 = styled(PiNumberCircleFourFill)`
  ${Icons};
`

const Numbers = styled.div`
`

const ProcedureTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    text-align: left;
    font-weight: 300;
    text-transform: uppercase;
    text-shadow: 5px 10px 20px rgba(0, 0, 0, 0.4);
    margin-top: 0.3rem;
  }
`

const ProcedureCard = (props) => {
  return (
    <ProcedureContainer
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-once='true'
    >
      <Procedure>
        <ProcedureTitle>
          <Numbers>
            {props.id === 0 && <Num1 />}
            {props.id === 1 && <Num2 />}
            {props.id === 2 && <Num3 />}
            {props.id === 3 && <Num4 />}
          </Numbers>
          <h3>{props.title}</h3>
        </ProcedureTitle>
        <hr />
        <p>{props.detail}</p>
      </Procedure>
    </ProcedureContainer>
  )
}

export default ProcedureCard
