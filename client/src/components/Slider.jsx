// import React from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import banner2 from "../images/banner2.png"
import black_banner from "../images/black_banner.jpg"
import React, { useState } from "react";
// import { sliderItems } from '../data';

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    background-color: #E4FBFF;
    position: relative;
    overflow: hidden;

`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #93B5C6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 50%;
    z-index: 2;

    &:hover {
        transform: scale(1.1);
        // opacity: 30%;
    }
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    margin: 5px 0px;

`
const ImageContainer = styled.div`
    // flex: 1;
    height: 100%;
`
const Image = styled.img`
    height: 85%;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    console.log("Meow")
    const handleClick = (direction) => {
        console.log("Meow 2")

        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 1)
        }
        else {
            setSlideIndex(slideIndex < 1 ? slideIndex+1 : 0)
        }
    };

  return (
    <Container>
        <Arrow direction = "left" onClick = { () => handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
            {/* {sliderItems.map((item)=>(
                <Slide>
                    <ImageContainer>
                        <Image src = {item.img}/>
                    </ImageContainer>
                </Slide>
            ))} */}
            <Slide>
                <ImageContainer>
                    <Image id = {0} src = {banner2}/>
                </ImageContainer>
            </Slide>
            <Slide>
                <ImageContainer>
                    <Image id = {1} src = {black_banner}/>
                </ImageContainer>
            </Slide>
        </Wrapper>
        <Arrow direction = "right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider