import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import tour from '../images/tour.jpg'
import { SiGooglecalendar } from 'react-icons/si'

const ChooseSection = styled.section`
    display: flex;
    width: 100vw;
    height: 100%;
    padding: 0rem 0rem;
    overflow-x: hidden;
    background: midnightblue;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: .85fr 1.15fr;
    grid-template-rows: 800px;
    width: 100%;
    height: 100%;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: .6fr 1fr;
    }
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4rem;

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

    @media screen and (max-width: 768px) {
        padding: 1rem 3rem;
    }

    @media screen and (max-width: 450px) {
        padding: 1rem 1.5rem;
    }
`

const Lc = styled.div`
    width: 100%;
    background: #fff;
    padding: 2rem 4rem;
`

const Cal = styled(SiGooglecalendar)`
    width: 45px;
    height: 45px;
    color: midnightblue;
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

        @media screen and (max-width: 768px) {
            width: 100vw;
            
        }
    }
`

const Tour = () => {
    return (
        <ChooseSection>
            <Container>
                <Left>
                    <Lc>
                        <Cal />
                        <h1>Schedule a Tour</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt beatae labore est tempore odio aliquid accusantium consequuntur, autem enim explicabo dolore.</p>
                        <Button onClick={() => window.location.replace("#contact")} primary={true} big={true}>Contact Us</Button>
                    </Lc>
                    
                </Left>
                <Right>
                    <img src={tour} alt="tour" />
                </Right>
            </Container>
        </ChooseSection>
    )
}

export default Tour
