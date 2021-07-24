import React, {useState, useRef, useCallback} from 'react'
import styled from 'styled-components/macro'
import { Button } from './Button'
import {ImCancelCircle} from 'react-icons/im'
import { useSpring, animated } from 'react-spring'

const AlertSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem .5rem;
    align-items: center;
    justify-content: space-between;
    width: 400px;
    height: 150px;
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    background: rgb(214, 86, 86);
    z-index: 9999999;

    h3 {
        margin-top: 1rem;
    }
`
const Wrap = styled.div`
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999999;
`

const Close = styled(ImCancelCircle)`
    width: 30px;
    text-align: right;
    position: absolute;
    right: .5rem;
    top: .5rem;
    cursor: pointer;
`
const Btns = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
`

const Alert = ({showPopup, setShowPopup}) => {
    const popupRef = useRef();
    
    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showPopup ? 1 : 0,
        transform: showPopup ? `translateY(0%)` : `translateY(-100%)`
    })

    const closePopup = e => {
        if (popupRef.current === e.target) {
            setShowPopup(false);
        }
    };
    return <>
        {showPopup ? (
            <Wrap ref={popupRef} onClick={closePopup}>
            {/* <animated.div style={animation}> */}
            <AlertSection >
                <Close onClick={() => setShowPopup(prev => !prev)} />
                <h3>LOG IN / SIGN UP TO SAVE</h3>
                <Btns>
                    <Button big="true" css={`font-size: 15px;`}>LOG IN</Button>
                    <Button big="true" primary="true" css={`font-size: 15px;`}>SIGN UP</Button>
                </Btns>
            </AlertSection> 
            {/* </animated.div> */}
        </Wrap>) : null}
    </>    
}

export default Alert
