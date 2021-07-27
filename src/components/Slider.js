import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components/macro'
import { Button } from './Button'
import view from '../images/view.svg';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y]);

const SliderSection = styled.section`
    display: flex;
    width: 100vw;
    height: 100vh;
    padding-top: 75px;
    // max-height: 1100px;

    // &:before {
    //     content: '';
    //     width: 100vw;
    //     height: 100vh;
    //     position: absolute;
    //     top: 0;
    //     background: #000;
    //     opacity: .5;
    //     z-index: 2;
    // }
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`

const SlideImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const SlideContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 50;
    // max-width: 1600px;
    margin-top: 10px;
    padding: 0 4rem;
    color: #fff;
    width: 90%;  
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    
    @media screen and (max-width: 350px) {
        padding: 0 2rem;
    }

    h1 {
        // font-size: clamp(.3rem, 8vw, 20rem);
        font-size: 2rem;
        font-weight: 500;
        text-transform: uppercase;
        text-align: left;
        padding: 0 1rem;
        text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
        line-height: 2rem;

        @media screen and (min-width: 1300px) {
            // font-size: clamp(.3rem, 4vw, 20rem);
            font-size: 4rem;
            line-height: 4rem;
        }
    }

    p {
        // font-size: clamp(.3rem, 5vw, 15rem);
        font-size: 2rem;
        padding: 1rem 1rem;
        text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
        color: #d93025;
    }
`

const Arrow = styled.i`
    margin-left: 5px;
    background-image: url(${view});
    background-size: contain;
    width: 24px;
    height: 24px;
`

const SliderDisplay = ({ slides }) => {

    return (
        <SliderSection>
            <Container>
                <Swiper 
                className="container"
                spaceBetween={0}
                slidesPerView={1}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                {slides.map((slide, index) => {
                return (
                <SwiperSlide className="slide" key={index}>
                    <SlideImage src={slide.image} alt={slide.alt} />
                    <SlideContent>
                        <h1>{slide.title}</h1>
                        <p>{slide.price}</p>
                        <Button to={slide.path}  big="true"
                        css={`margin-left: 1rem; padding: .5rem .5rem;`}>
                            {slide.label} 
                            <Arrow />
                        </Button>
                    </SlideContent>
                </SwiperSlide>
                )
                })}
                ...
                </Swiper>
            </Container>
        </SliderSection>
    )
}

export default SliderDisplay
