import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { IoMdArrowRoundForward } from 'react-icons/io'

const ExploreContainer = styled.div``

const ExploreWrapper = styled.div`
display: flex;
position: relative;
overflow: hidden; // 隐藏超出容器的内容
padding: 1rem 1rem 0 1rem;
gap: 20px;

&:after {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	width: 100px; // 控制渐变效果的宽度
	height: 100%;
	background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
	border: none;
}
`

const Image = styled.img`
  max-height: 150px; // 控制图片大小
  width: auto;
  border-radius: 10px; // 图片圆角
`

const StyledLink = styled(Link)`
	display: block;
  text-align: right;
  text-decoration: none;
  color: #000d1a;
  transition: 0.3s;
  padding: 0.1rem;
  margin: 0rem 2rem 1rem 0;

  &:hover {
    transform: translateY(-2px);
  }
`
const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 8px;
	vertical-align: -2px;
`

const Explore = ({ images, label }) => {
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    if (images && label) {
      const filtered = images.filter(image => image.label === label);
      setFilteredImages(filtered);
    }
  }, [images, label]); // 依赖于 images 和 filterLabel

  return (
    <ExploreContainer>
			<ExploreWrapper>
				{filteredImages.map(image => (
					<Image key={image.id} src={image.img} alt={image.alt} />
				))}
			</ExploreWrapper>

			<StyledLink to={'/gallery'}>View More <Arrow /></StyledLink>
    </ExploreContainer>
  );
}

export default Explore;
