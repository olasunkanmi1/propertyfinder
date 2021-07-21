import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components/macro'
import { Button } from './Button'
import left from '../images/left-arrow.svg';
import right from '../images/right-arrow.svg';
import view from '../images/view.svg';

const SliderSection = styled.section`
    height: 100vh;
    padding-top: 75px;
    max-height: 1100px;
    width: 100vw;
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

const Slide = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
`

const Slider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100vh;
        bottom: 0;
        left: 0;
        z-index: 2;
        background: #000;
        opacity: .4;
    }
`

const SlideImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`

const SlideContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 10;
    max-width: 1600px;
    margin-top: 70px;
    padding: 0 4rem;
    color: #fff;
    width: 100%;  
    
    @media screen and (max-width: 350px) {
        padding: 0 2rem;
    }

    h1 {
        font-size: clamp(.3rem, 8vw, 20rem);
        font-weight: 500;
        text-transform: uppercase;
        text-align: left;
        padding: 0 1rem;
        text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);

        @media screen and (min-width: 1300px) {
            font-size: clamp(.3rem, 4vw, 20rem);
        }
    }

    p {
        font-size: clamp(.3rem, 5vw, 15rem);
        padding: .4rem 1rem;
        text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
    }
`

const Arrow = styled.i`
    margin-left: 5px;
    background-image: url(${view});
    background-size: contain;
    width: 24px;
    height: 24px;
`

const PrevNext = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    z-index: 10;
    width: 100%;
`

const arrowBtns = css`
    width: 50px;
    height: 50px;
    cursor: pointer;
    background: midnightblue;
    border-radius: 50%;

    @media screen and (max-width: 350px) {
        width: 30px;
        height: 30px;
    }
`

const Previous = styled.i`
    ${arrowBtns}
    background-image: url(${left});
    background-size: contain;
`

const Next = styled.i`
    ${arrowBtns}
    background-image: url(${right});
    background-size: contain;
`


const SliderDisplay = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 5000)

        return () => {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }

        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }

        setCurrent(current === 0 ? length - 1 : current - 1)
    }



    return (
        <SliderSection>
            <Container>
                {slides.map((slide, index) => {
                    return (
                        <Slide key={index}>
                            {index === current && (
                                <Slider>
                                    <SlideImage src={slide.image} alt={slide.alt} />
                                    <SlideContent>
                                        <h1>{slide.title}</h1>
                                        <p>{slide.price}</p>
                                        <Button to={slide.path}  big="true"
                                        css={`margin-left: 1rem;`}>
                                            {slide.label} 
                                            <Arrow />
                                        </Button>
                                    </SlideContent>
                                </Slider>
                            )}
                        </Slide>
                    )
                })}
                <PrevNext>
                    <Previous onClick={prevSlide} />
                    <Next onClick={nextSlide} />
                </PrevNext>
            </Container>
        </SliderSection>
    )
}

export default SliderDisplay
