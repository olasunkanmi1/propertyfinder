import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'
import logo from '../images/logo.png'
import {AiOutlineMenu} from 'react-icons/ai'
import { menuData } from '../data/MenuData'
import { Button } from './Button'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    width: 100%;
    padding: 1rem 6rem;
    z-index: 100;
    position: fixed;
    background: midnightblue;
    color: #fff;
    overflow: hidden;


    @media screen and (max-width: 850px) {
        padding: 1rem 4rem;
    }

    @media screen and (max-width: 450px) {
        padding: 1rem 1rem;
    }
`
const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`

const Logo = styled.a`
    ${NavLink}
` 

const Img = styled.img`
    width: 11rem;
    height: 3.5rem;

    @media screen and (max-width: 350px) {
        width: 10rem;
    }
`

const MenuBars = styled(AiOutlineMenu)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        height: 40px;
        width: 40px;
        cursor: pointer;
    }
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
const NavMenuLinks = styled(Link)`
    ${NavLink}
    font-size: 20px;
    font-weight: 400;
`



const Navbar = ({ isOpen,toggle }) => {
    return (
        <Nav>
            <Logo href="https://propertyfinder.netlify.app/" css={`padding: 0`}>
                <Img src={logo} alt="logo" />
            </Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {/* {item.icon} {item.title} */}
                    </NavMenuLinks>
                ))}
                <Button primary='true' big='true' onClick={() => window.location.replace("#contact")}>Contact Us</Button>
            </NavMenu>
        </Nav>
    )
}

export default Navbar
