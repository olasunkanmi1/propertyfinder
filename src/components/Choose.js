import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import hand from '../images/hand.png'

const ChooseSection = styled.section`
    display: flex;
    width: 100vw;
    height: 100%;
    padding: 3rem 6rem;
    overflow-x: hidden;

    @media screen and (max-width: 850px) {
        padding-left: 0 4rem 1.5rem;
    }

    @media screen and (max-width: 768px) {
        padding: 0rem 3rem 1.5rem;
    }

    @media screen and (max-width: 450px) {
        padding: 0rem 1.5rem 1.5rem;
    }
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 100%;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4rem;
    padding: 1rem 2rem;

    img {
        width: 150px;
        height: 150px;
        margin-bottom: 1rem;
    }

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
        line-height: 2rem;
        color: #d93025;
    }

    p {
        margin-bottom: 2rem;
        font-size: 1.5rem
    }
`

const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    order: ${({ reverse }) => (reverse ? '2' : '1')};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Choose = ({ heading, paragraph, buttonLabel, reverse, image }) => {
    return (
        <ChooseSection>
            <Container>
                <Left>
                    <img src={hand} alt="perfect" />
                    <h1>{heading}</h1>
                    <p>{paragraph}</p>
                    <Button to="/properties" primary={true} big={true}>{buttonLabel}</Button>
                </Left>
                <Right reverse={reverse}>
                    <img src={image} alt="home" />
                </Right>
            </Container>
        </ChooseSection>
    )
}

export default Choose
