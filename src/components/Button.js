import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ primary }) => (primary ? '#d93025' : 'midnightblue')};
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    padding: ${({ big }) => (big ? '.7rem 1.2rem' : '.4rem .9rem')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '10px')};
    font-weight: ${({ big }) => (big ? '500' : '200')};
    border-radius: 5px;
    transition: .3s ease-in-out;

    &:hover {
        transform: scale(.9);
    }
`