import React from 'react'
import styled, { css } from 'styled-components/macro'

const MicrobladingContainer = styled.section`
	display: flex;
	flex-direction: row;
	margin: 2rem 2rem;
	flex-direction: column;

	h1 {
		text-align: center;
		padding: 5px 0;
		margin-bottom: 1rem;
    font-weight: 300;
    text-shadow: 5px 10px 20px rgba(0, 0, 0, 0.4);
	}

	h4 {
		padding: 0 20px;
		font-weight: 300;
	}

	p {
			padding: 0 20px;
			line-height: 2em;
			font-weight: 300;
	}

	img {
		object-fit: cover;
		margin: 20px auto;
		height: 100%;
		width: 90%;
	}

	hr {
		margin-top: 1.5rem;
	}
`

const MicrobladingCard = (props) => {	
  return (
    <MicrobladingContainer data-aos='fade-down' data-aos-duration='600' data-aos-once='true'>
      <h1>{props.title}</h1>
      <h4>{props.description}</h4>
			<img src={props.img} alt={props.alt} />
      <p>操作手法：{props.way}</p>
      <p>适合人群：{props.fit}</p>
      <p>维持时间：{props.maintenance}</p>
			<hr />
    </MicrobladingContainer>

  )
}

export default MicrobladingCard
