import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";

const GallerySection = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin: 4rem 2rem;
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
    }

`

const GalleryWrapper = styled.div`
    padding: 8% 1%;
`

const GalleryItems = styled.div`
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
    }
`

const StyledButton = styled(Button)`
    &:hover,
    &:active {
        background-color: #1B4242;
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
                        <li><StyledButton big primary round onClick={() => setData(serviceData)}>All</StyledButton></li>
                        {collection.map((item) => 
                            <li>
                                <StyledButton big primary round onClick={() => {gallery_filter(item)}}>
                                    {item}
                                </StyledButton>
                            </li>
                        )}
                    </ul>
                </FilterItem>
                <GalleryContainer>
                    {data.map((item) => (
                        <GalleryItems key={item.id}>
                            <img src={item.image} alt="img"/>
                        </GalleryItems>
                    ))}
                </GalleryContainer>
            </GalleryWrapper>
        </GallerySection>
    )
}

export default Gallery;