import styled, { css } from 'styled-components/macro'
import {AiFillHeart} from 'react-icons/ai'

const Heart = styled(AiFillHeart)`
    fill: #fff ;
    margin-right: 5px;
    width: 20px;
    height: 20px;
`

export const menuData = [
    {title: 'PROPERTIES', link: '/properties'},
    {title: 'RENTALS', link: '/rentals'},
    {title: 'SAVED', link: '/saved', icon: <Heart />}
];