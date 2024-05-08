import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GallerySection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const GalleryContainer = styled.div`
  // display: flex;
  // align-items: flex-start;
  // justify-content: space-around;
  // flex-wrap: wrap;

  // // &::after {
  // //   content: '';
  // //   flex: 1; 


  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* 自动填充，每列最小宽度250px */
  // grid-gap: 16px; /* 定义行和列之间的间距 */
  // width: 100%;    /* 容器宽度 */

  // @media screen and (max-width: 768px) {
  //   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* 屏幕较小时调整列宽 */
  // }

  column-count: 3;  /* 三列布局 */
  column-gap: 16px; /* 列与列之间的间距 */
  width: 100%;      /* 容器宽度 */

  @media screen and (max-width: 768px) {
    column-count: 2; /* 屏幕较小时减少列数 */
  }
`

const FilterItem = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
    gap: 20px;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
      margin-top: 13%;
      gap: 0px;
      justify-content: space-around;
      padding: 0 2rem;
    }
  }
`

const GalleryWrapper = styled.div`
  padding: 8% 1%;
`

const GalleryItems = styled.div`
  // img {
  //   max-width: 300px; // 最大宽度
  //   height: auto;     // 高度自适应
  //   object-fit: cover;
  //   border-radius: 15px;

  //   @media screen and (max-width: 768px) {
  //     max-width: 200px; // 最大宽度
  //     height: auto;     // 高度自适应
  //   }
  // }


  // img {
  //   width: 100%;       /* 图片宽度完全填充容器 */
  //   height: auto;      /* 高度自适应 */
  //   border-radius: 15px;
  // }

  break-inside: avoid; /* 防止内容被拆分到不同列 */
  margin-bottom: 16px; /* 图片与图片之间的间距 */

  img {
    width: 100%;       /* 图片宽度完全填充容器 */
    height: auto;      /* 高度自适应 */
    border-radius: 15px;
  }
`

const StyledButton = styled(Link)`
  appearance: none;
  background-color: #FFFFFF;
  border-width: 0;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  font-family: Clarkson,Helvetica,sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1em;
  margin: 0;
  opacity: 1;
  outline: 0;
  padding: 1.5em 2.2em;
  position: relative;
  text-align: center;
  text-decoration: underline;
  text-rendering: geometricprecision;
  text-transform: uppercase;
  transition: opacity 300ms cubic-bezier(.694, 0, 0.335, 1), background-color 100ms cubic-bezier(.694, 0, 0.335, 1), color 100ms cubic-bezier(.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

  &:before {
    animation: opacityFallbackOut .5s step-end forwards;
    backface-visibility: hidden;
    background-color: #EBEBEB;
    clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateZ(0);
    transition: clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1), -webkit-clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1);
    width: 100%;
  }

  &:hover:before {
    animation: opacityFallbackIn 0s step-start forwards;
    clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
  }

  &:after {
    background-color: #FFFFFF;
  }

  span {
    z-index: 1;
    position: relative;
  }

  @media screen and (max-width: 768px) {
    padding: 1em 1.1em;
  }
`

const Gallery = ( props ) => {
  const serviceData = props.service;

  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(serviceData);
    setCollection([...new Set(serviceData.map((item) => item.label))])
  }, [])

  const gallery_filter = (itemData) => {
    const filterData = serviceData.filter((item) => item.label === itemData);
    setData(filterData);
  }
  
  return(
    <GallerySection>
      <GalleryWrapper>
        <FilterItem>
          <ul>
            <li><StyledButton round='true' onClick={() => setData(serviceData)}><span>All</span></StyledButton></li>
            {collection.map((item, id) => 
              <li key={id}>
                <StyledButton round='true' onClick={() => {gallery_filter(item)}}>
                  <span>{item}</span>
                </StyledButton>
              </li>
            )}
          </ul>
        </FilterItem>
        <GalleryContainer>
          {data.map((item) => (
            <GalleryItems key={item.id}>
              <img src={item.img} alt={item.alt}/>
            </GalleryItems>
          ))}
        </GalleryContainer>
      </GalleryWrapper>
    </GallerySection>
  )
}

export default Gallery;