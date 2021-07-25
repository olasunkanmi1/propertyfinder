import React, { useEffect, useState } from 'react'
import styled, {css, keyframes} from 'styled-components/macro'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { useCart } from 'react-use-cart'

import { Button } from '../components/Button'
import {AiOutlineHeart} from 'react-icons/ai'
import {ImLocation2} from 'react-icons/im'
import {FaBed} from 'react-icons/fa'
import {FaBath} from 'react-icons/fa'
import {FaSwimmingPool} from 'react-icons/fa'
import {GiCctvCamera} from 'react-icons/gi'
import { Link } from "react-router-dom";
import heart from '../images/heart.svg'
import heartfill from '../images/heartfill.svg'
import logo from '../images/logo.png'

//action
import { setHomes } from '../redux/actions/homeActions'

import Alert from '../components/Alert'

const Homes = styled.section`
display: flex;
flex-direction: column;
width: 100vw;
padding: 3rem 6rem;
overflow-x: hidden;
background: #eee;

@media screen and (max-width: 850px) {
    padding: 1rem 4rem;
}

@media screen and (max-width: 768px) {
    padding: 1.5rem 3rem 1.5rem;
}

@media screen and (max-width: 450px) {
    padding: 1.5rem 1.5rem 1.5rem;
}
`

const loading = keyframes`
    from{transform: rotate(0deg)};
    to{transform: rotate(360deg)};
`

const Ld = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const Load = styled.div`
    display: flex;
    background: #d93025;
    opacity: .7;
    border-radius: 50%;
    height: 300px;
    width: 300px;
    justify-content: center;
    align-items: center;
   

    img {
        width: 11rem;
        height: 3.5rem;
        animation: ${loading} 5s infinite;
    }
`

const Famp = styled.div`
    margin-bottom: 1rem;
    margin-top: 75px;;
`
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const House = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 300px 60px;
    background: #fff;
    padding: 1rem;
    border-radius: 10px;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
        grid-template-rows: 300px 200px 70px;
    }

    @media screen and (max-width: 940px) {
        grid-template-rows: 300px 200px 80px;
    }

    @media screen and (max-width: 845px) {
        grid-template-rows: 300px 220px 80px;
    }

    @media screen and (max-width: 768px) {
        grid-template-rows: 300px 180px;
    }

    @media screen and (max-width: 700px) {
        grid-template-rows: 300px 230px;
    }

    @media screen and (max-width: 555px) {
        grid-template-rows: 300px 270px;
`

const Thumbmail = styled(Link)`
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
    

    @media screen and (max-width: 1200px) {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
    overflow: hidden;

    h3 {
        color: midnightblue;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;

        @media screen and (max-width: 430px) {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
    }

    p {
        // padding-bottom: 5px;
        // border-bottom: 2px solid midnightblue;
        overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;

        @media screen and (max-width: 900px) {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
        }
    }

    @media screen and (max-width: 1200px) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }
`

const Location = styled.div`
    display: flex;
    align-items: center;
    
    h3 {
        color: #d93025;
        text-transform: uppercase;
    }
`
const Lct = styled(ImLocation2)`
    width: 25px;
    height: 25px;
    fill: midnightblue;
    margin-right: 5px;
`

const PrSa = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: midnightblue;
`

const Save = styled.i`
    background-image: url(${heart});
    width: 25px;
    height: 25px;
    cursor: pointer;

    &:active, &:hover, &:target {
        background-image: url(${heartfill});
    }
`

const ProDet = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        border: none;
        // font-size: 14px;
        margin: none;
        padding-bottom: 0px;

        @media screen and (max-width: 1200px) {
            display: flex;
            // font-size: 20px;
        }

        @media screen and (max-width: 845px) {
            display: flex;
            // font-size: 15px;
        }

        @media screen and (max-width: 768px) {
            // font-size: 20px;
        }

        @media screen and (max-width: 370px) {
            display: none;
        }
    }
`

const Features = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    background: midnightblue;
    border-radius: 10px;
    color: #fff;
    margin-top: 10px;
    padding: 5px;
    overflow: hidden;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 25%;
        padding: 5px 10px;
        border-right: 2px solid #fff;
        text-align: center;

        @media screen and (max-width: 1050px) {
            flex-direction: column;
        }
    }
    div:last-child {
        border-right: none;
    }

    @media screen and (max-width: 1200px) {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`
const icons = css`
    width: 20px;
    margin-right: 5px;
`

const Bed = styled(FaBed)`
    ${icons}
`
const Bath = styled(FaBath)`
    ${icons}
`
const Pool = styled(FaSwimmingPool)`
    ${icons}
`
const Cctv = styled(GiCctvCamera)`
    ${icons}
`

const HomesList = () => {
    const homes = useSelector(state => state.allHomes.homes); //access to store
    console.log(homes);

    const dispatch = useDispatch();

    //destructuring
    // const { id, title, price, location, paragraph, by, buttonLabel, image, bedroom, bathroom } = homes;

    const fetchHomes = async () => {
        const response = await axios.get("https://my-pf-api.herokuapp.com/homes")
        .catch((err) => {
            console.log("Err", err);
        })
        dispatch(setHomes(response.data));
    }

    useEffect(() => {
        fetchHomes();
    }, [])
    console.log("Homes: ", homes);

    //add to saved
    const { addItem } = useCart();

    //popup
    const [showPopup, setShowPopup] = useState(false)

    const appear = () => {
        setShowPopup(prev => !prev)
    }
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <Homes>
            {Object.keys(homes).length === 0 ? (
                <Ld><Load><img src={logo} alt="logo" /></Load></Ld>
            ) : (
                <div>
                <Famp>
                    <h1>Properties Available for Sale</h1>
                </Famp>
                <Container>
                    {homes.map((home, index) => {
                        return (
                            <House key={index}>
                                <Thumbmail to={`/properties/${home.id}`}>
                                    <img src={home.image} alt="home" />
                                </Thumbmail> 
                                <Info>
                                    <h3>{home.title}</h3>
                                    <Location><Lct/> <h3>{home.location}</h3></Location>
                                    <p>{home.paragraph}</p>
                                    <PrSa>
                                        <h1>{home.price}</h1>
                                        <Save onClick={appear} />
                                    </PrSa>
                                    <ProDet>
                                        <p>{home.by}</p>
                                        <Button to={`/properties/${home.id}`} primary='true'  css={`min-width: 125px; font-size: 14px;`}>{home.buttonLabel}</Button>
                                    </ProDet>
                                </Info>
                                <Features>
                                    <div> <i><Bed /></i>{home.bedroom} Bedrooms</div>
                                    <div><i><Bath /></i>{home.bathroom} Bathrooms</div>
                                    <div><i><Pool /></i>Pool</div>
                                    <div><i><Cctv /></i>CCTV</div>
                                </Features>
                            </House>
                        )
                    })}
                </Container>
                <Alert showPopup={showPopup} setShowPopup={setShowPopup} />
                </div>)}
        </Homes>
    )
}

export default HomesList
