import React from 'react'
import styled from 'styled-components'

const PartnerSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    padding: 1rem 6rem;
    overflow-x: hidden;
    background: #d93025;
    color: #fff;
    
    h1 {
        margin-bottom: 15px;
        text-transform: uppercase;
        background: midnightblue;
        width: 100%;
        padding: .5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: hidden;
    }

    @media screen and (max-width: 850px) {
        padding: 1rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 1rem 3rem;
    }

    @media screen and (max-width: 450px) {
        padding: 1rem 1.5rem;
    }
`

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-items: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }
`

const Partner = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 70px;

    @media screen and (max-width: 768px) {
        width: 60%;
    }
    @media screen and (max-width: 630px) {
        width: 80%;
    }
    @media screen and (max-width: 630px) {
        width: 100%;
    }
    @media screen and (max-width: 360px) {
        height: 60px;
    }
    @media screen and (max-width: 320px) {
        height: 50px;
    }
`

const Partners = ({ ptnrs }) => {
    return (
        <PartnerSection>
            <h1>Partners</h1>
            <Container>
                {ptnrs.map((partner, index) => {
                    return (
                        <Partner key={index} src={partner.logo} alt='logo' />
                    )
                })}
            </Container>
        </PartnerSection>
    )
}

export default Partners
