import React from 'react'
import styled, { css } from 'styled-components/macro'
import logo from '../images/logo.png'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from "react-router-dom";

const ChooseSection = styled.section`
    display: block;
    width: 100vw;
    height: 100%;
    padding: 1rem 6rem;
    overflow-x: hidden;
    background: #d93025;

    @media screen and (max-width: 768px) {
        padding: 1rem 3rem;
        overflow-x: hidden;
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
        grid-template-rows: 1fr .6fr;
    }
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4rem;
    padding: 1rem 0;

    img {
        width: 150px;
        height: 150px;
        margin-bottom: 1rem;
    }

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
        line-height: 2rem;
        color: #fff;
        text-transform: uppercase;
    }

    @media screen and (max-width: 768px) {
        order: ${({ reverse }) => (reverse ? '2' : '1')};
    }
`
const smlinks = css`
    width: 30px;
    height: 30px;
    margin: 10px;
    color: midnightblue;
`
const Fb = styled(FaFacebook)`
    ${smlinks}
`
const Ig = styled(FaInstagram)`
    ${smlinks}
`
const Tw = styled(FaTwitter)`
    ${smlinks}
`
const Li = styled(FaLinkedin)`
    ${smlinks}
`
const Wa = styled(FaWhatsapp)`
    ${smlinks}
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        width: 140px;
        height: 50px;
        margin-bottom: 10px;
    }
    p {
        margin-bottom: 10px;
        color: #fff;
    }
`

const Cc = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const Company = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        color: midnightblue;
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
        color: #fff;
        font-size: 17px;
        margin-bottom: 5px;
    }
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        color: midnightblue;
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
        color: #fff;
        font-size: 17px;
        margin-bottom: 5px;
    }
`

const Footer = ({reverse}) => {
    return (
        <ChooseSection id="contact">
            <Container>
                <Left>
                    <h1>Let's find your Dream Home</h1>
                    <div>
                        <Link to="/">
                            <Wa />
                        </Link>
                        <Link to="/">
                            <Li />
                        </Link>
                        <Link to="/">
                            <Tw />
                        </Link>
                        <Link to="/">
                            <Fb />
                        </Link>
                        <Link to="/">
                            <Ig />
                        </Link>
                    </div>
                </Left>
                <Right reverse={reverse}>
                    <Link to="/">
                        <img src={logo} alt="home" />
                    </Link>
                    
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quidem esse blanditiis molestias expedita repellendus nisi, error quia pariatur officia.</p>
                    <Cc>
                        <Company>
                            <h3>Company</h3>
                            <Link to="/">About</Link>
                            <Link to="/">Careers</Link>
                            <Link to="/">How we work</Link>
                        </Company>
                        <Contact>
                            <h3>Contact</h3>
                            <Link to="/">FAQ</Link>
                            <Link to="/">Partners</Link>
                            <Link to="/">Affiliates</Link>
                        </Contact>
                    </Cc>
                </Right>
            </Container>
        </ChooseSection>
    )
}

export default Footer

