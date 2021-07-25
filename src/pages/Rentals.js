import React, {useEffect} from 'react'
import styled from 'styled-components'

const Rt = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Rentals = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <Rt>
            <h1>Coming Soon...</h1>
        </Rt>
    )
}

export default Rentals
