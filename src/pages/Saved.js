import React, {useEffect} from 'react'
import styled from 'styled-components'

const SavedSection= styled.section`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

const Saved = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <SavedSection>
            <h1>Empty</h1>
        </SavedSection>
    )
}

export default Saved
