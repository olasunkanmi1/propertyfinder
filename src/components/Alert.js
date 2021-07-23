import React from 'react'
import styled from 'styled-components/macro'
import { Button } from './Button'
import {ImCancelCircle} from 'react-icons/im'

const AlertSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem .5rem;
    align-items: center;
    justify-content: space-between;
    width: 400px;
    height: 150px;
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    background: rgb(214, 86, 86);
    opacity: 1;

    h2 {
        margin-top: 1rem;
    }
`

const Close = styled(ImCancelCircle)`
    width: 25px;
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

const Alert = (props, { popup, appear }) => {
    return (props.trigger) ? (
        <AlertSection popup={popup} onClick={appear}>
            <Close onClick={appear} />
            <h2>LOG IN TO SAVE</h2>
            <Btns>
                <Button big="true" css={`font-size: 15px;`}>LOG IN</Button>
                <Button big="true" primary="true" css={`font-size: 15px;`}>SIGN UP</Button>
                {props.children}
            </Btns>
        </AlertSection>
    ) : "";
}

export default Alert
