import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import styled, {css} from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
//actions
import { selectedHome, removeSelectedHome } from '../redux/actions/homeActions'
import { Button } from '../components/Button'
import {GrNotes} from 'react-icons/gr'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {FaWhatsappSquare} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
import {MdMessage} from 'react-icons/md'
import {MdReportProblem} from 'react-icons/md'
import {FiArrowLeftCircle, FiArrowRightCircle} from 'react-icons/fi'
import '../rough.css'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



const Home = styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    overflow-x: hidden;
    padding: 75px 6rem 3rem;
    overflow-x: hidden;
    background: #eee;

    @media screen and (max-width: 850px) {
        padding: 75px 4rem 1rem;
    }

    @media screen and (max-width: 768px) {
        padding: 75px 3rem 1.5rem;
    }

    @media screen and (max-width: 450px) {
        padding: 75px 1.5rem 1.5rem;
    }
`

const Load = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

const Name = styled.div`
    padding: 1rem 0;
    background: #eee;
    display: flex;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 500px auto;

    img {
        width: 100%;
        height: 100%;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 400px auto auto auto;
    }
`
const Img = styled.div`
    display: flex;
    overflow: hidden;
    position: relative;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
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



const Desciption = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: column;
    // border: 2px solid midnightblue;
    background: #fff;
    padding: 1rem;

    @media screen and (max-width: 768px) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }
    
    h3 {
        padding: .5rem 0;
        border-bottom: 2px solid midnightblue;
        margin-bottom: 1rem;
        align-items: center;
        display: flex;
    }
    p {
        padding: .5rem 0;
    }
    
    ul {
        list-style: none;
    }
`

const Lc = styled.div`
    display: flex;
    margin-bottom: 5px;
`
const Pr = styled.div`
    margin-bottom: 5px;
    color: #d93025;
`
const icon = css`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`
const Note = styled(GrNotes)`
    ${icon}
`
const Sv = styled(AiOutlineHeart)`
    ${icon}
    color: #d93025;
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    padding: 2rem;
    
    @media screen and (max-width: 768px) {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
    }
    input {
        width: 100%;
        padding: .5rem;
        font-size: 15px;
        margin-bottom: 15px;
        outline: none;

        &:focus {
            outline: 1px solid #d93025;
            border: none;
        }
    }
    p {
        margin-left: 50px;

        @media screen and (max-width: 430px) {
            margin-left: 0px;
        }
    }
`

const Call = styled.div`
    display: flex;
    padding: .5rem 0 0;
    align-items: center;

    a {
        text-decoration: none;
        color: #d93025;
    }
    
    span {
        margin: 0 10px;
    }

    @media screen and (max-width: 430px) {
        flex-direction: column;
        align-items: start;
    }
`
const Ch = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: green
    }
`
const Cl = styled(AiOutlinePhone)`
    ${icon}
`
const Wa = styled(FaWhatsappSquare)`
    ${icon}
    width: 30px;
    height: 30px;
    color: green;
`
const Nm = styled(AiOutlineUser)`
    ${icon}
`
const Em = styled(AiOutlineMail)`
    ${icon}
`
const Ms = styled(MdMessage)`
    ${icon}
`

const Form = styled.div`
    h3 {
        padding: .5rem 0
    }
`
const Input = styled.div`
    display: flex;
    flex-direction: column;

     h4 {
        display: flex;
         align-items: center;
     }
`
const Disclaimer = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 2;
    padding: 2rem;
    background: #d93025;
    color: #fff;

    @media screen and (max-width: 768px) {
        grid-column: 1 / 2;
        grid-row: 4 / 5;
    }

    p {
        padding: 1rem 0;
    }
`
const Report = styled.div`
    display: flex;
    align-items: center;
    background: #fff;
`
const Btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem;
    font-size: 1rem;
    width: 100%;
    border: 2px solid #d93025;
    color: #d93025;
    cursor: pointer;
`
const Rp = styled(MdReportProblem)`
    ${icon}
`

const Details = () => {
    const home = useSelector(state => state.home); //access to store
    console.log(home);
    const {id} = useParams();
    const dispatch = useDispatch();
    console.log(id);

    const fetchHomeInfo = async () => {
        const response = await axios.get(`https://my-pf-api.herokuapp.com/homes/${id}`)
        .catch((err) => {
            console.log("Err", err);
        })
        dispatch(selectedHome(response.data));
    }

    useEffect(() => {
        if (id && id !== "")fetchHomeInfo();
        return () => {
            dispatch(removeSelectedHome());
        };
    }, [id])
    
    return (
        <Home>
            {Object.keys(home).length === 0 ? (
                <Load><h1>Loading.......</h1> </Load>
            ) : (
                <div>
                    <Name>
                        <h1>{home.title}</h1>
                    </Name>
                    <Grid>
                        <Img>
                            <Swiper className="container"
                                spaceBetween={10}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide className="slide"><img src={home.image} alt="home" className="photo" /></SwiperSlide>
                                <SwiperSlide className="slide"><img src={home.imageTwo} alt="home" className="photo" /></SwiperSlide>
                                <SwiperSlide className="slide"><img src={home.imageThree} alt="home" className="photo" /></SwiperSlide>
                                <SwiperSlide className="slide"><img src={home.imageFour} alt="home" className="photo" /></SwiperSlide>
                                <SwiperSlide className="slide"><img src={home.imageFive} alt="home" className="photo" /></SwiperSlide>
                                ...
                            </Swiper>
                        </Img>
                        
                        <Desciption>
                            <Lc><h1>LOCATION: {home.location}</h1></Lc>
                            <Pr><h1>{home.price}</h1></Pr>
                            <h3><Note />Property Details</h3>
                            <ul>
                                <li>- {home.bedroom} Bedroom</li>
                                <li>- {home.bathroom} Bathroom</li>
                                <li>- Parking Space</li>
                                <li>- CCTV</li>
                                <li>- Pool</li>
                                <li>- Fully Fitted Kitchen</li>
                            </ul>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nemo nulla laudantium odio illum sit repellendus corporis maiores labore facilis!</p>                            <Btn><Sv />SAVE</Btn>
                        </Desciption>
                        <Contact>
                            <h1>Contact Agent on:</h1>
                            <Call><Cl /><a href="tel:xxxxxx">080X-XXX-XXXX</a><span>or</span><a href="tel:xxxxxx">080X-XXX-XXXX</a></Call>
                            <p>Tap number to call</p>
                            <Ch><a href="/"><Wa />Tap to Chat on WhatsApp</a></Ch>
                            <Form>
                                <h3>Contact Agent through Email</h3>
                                <Input>
                                    <h4><Nm />Name</h4>
                                    <input type="text" />
                                </Input>
                                <Input>
                                    <h4><Cl />Phone Number</h4>
                                    <input type="text" />
                                </Input>
                                <Input>
                                    <h4><Em />Email</h4>
                                    <input type="text" />
                                </Input>
                                <Input>
                                    <h4><Ms />Message</h4>
                                    <input type="text" />
                                </Input>
                                <Button primary big>Send Message</Button>
                            </Form>
                        </Contact>
                        <Disclaimer>
                            <h1>Disclaimer</h1>
                            <p>This Information about this property is provided by Olasunkanmi. Property Finder will not be liable for any action of the Agent or property owner.</p>
                            <Report>
                                <Btn><Rp />Report Listing</Btn>
                            </Report>
                        </Disclaimer>
                    </Grid>
                </div>
            )}
            
        </Home>
    )
}

export default Details
