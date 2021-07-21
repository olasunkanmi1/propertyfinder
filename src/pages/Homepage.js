import React, { useState } from 'react'


import SliderDisplay from '../components/Slider';
import Choose from '../components/Choose'
import Featured from '../components/Featured';
import Beautiful from '../components/Beautiful';
import Partners from '../components/Partners';
import Tour from '../components/Tour';

import { SliderData } from '../data/SliderData'
import { ChooseData, InteriorData } from '../data/ChoIntData'
import { FeaturedData } from '../data/FeaturedData'
import { PartnersData } from '../data/PartnersData';

const Homepage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }

    return (
        <>
            <SliderDisplay slides={SliderData}/>
            <Choose {...ChooseData} />
            <Featured homes={FeaturedData} />
            <Beautiful {...InteriorData} />
            <Partners ptnrs={PartnersData} />
            <Tour />
        </>
    )
}

export default Homepage
