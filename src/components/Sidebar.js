import React from 'react'
import styled, { css } from 'styled-components/macro'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    background: midnightblue;
    z-index: 999;
    position: fixed;
    top: 0;
    right: 0;
    transition: .3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

const Close = styled(FaTimes)`
    color: #fff;
    height: 40px;
    width: 40px;
    cursor: painter;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
`
const SidebarMenu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 4rem;
    padding: 1rem;
`

const SidebarMenuLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 5px;
    text-decoration: none;
    margin-bottom: 30px;
    width: 100%;
    height: 60px;
`

const Footer = styled.footer`
    display: flex;
    height: 50px;
    padding: .5rem;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
`

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <Container isOpen={isOpen} onClick={toggle} id="home">
            <Close onClick={toggle} />
            <SidebarMenu>
                {menuData.map((item, index) => (
                    <SidebarMenuLink to={item.link} key={index}>
                        {item.icon} {item.title}
                    </SidebarMenuLink>
                ))}
                <Button  primary="true" big="true" css={`margin-top: 40px; width: 100%`} onClick={() => window.location.replace("#contact")}>Contact Us</Button>
            </SidebarMenu>
            <Footer>Designed by Olasunkanmi &#169; 2021</Footer>
        </Container>
    )
}

export default Sidebar
