import imageOne from '../images/image-6/1.jpg'
import imageTwo from '../images/image-7/1.jpg'
import imageThree from '../images/image-8/1.jpg'
import imageFour from '../images/image-9/1.jpg'
import styled from 'styled-components'
import { FaBed } from 'react-icons/fa'
import { FaBath } from 'react-icons/fa'
import { FaSwimmingPool } from 'react-icons/fa'
import { GiCctvCamera } from 'react-icons/gi'

const Bed = styled(FaBed)`
    fill: #fff ;
    margin-right: 5px;
    width: 20px;
    height: 20px; 
`

const Bath = styled(FaBath)`
    fill: #fff ;
    margin-right: 5px;
    width: 20px;
    height: 20px; 
`

const Pool = styled(FaSwimmingPool)`
    fill: #fff ;
    margin-right: 5px;
    width: 20px;
    height: 20px; 
`
const Cctv = styled(GiCctvCamera)`
    fill: #fff ;
    margin-right: 5px;
    width: 20px;
    height: 20px; 
`

export const FeaturedData = [
    {
        title: 'Nicely built 5bedroom Fully detached duplex for sale',
        location: 'Ikoyi',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, culpa. Culpa consectetur eos dolores. Quisquam modi eveniet earum. Odio qui expedita dolor officiis fuga quis a ex ipsam ut tempora?',
        price: '#130, 000, 000',
        by: 'Listing provided by Olasunkanmi',
        buttonLabel: 'View Details',
        image: imageOne,
        id: '622996',
        bedroom: <Bed />,
        bedroomNo: '5 Bedrooms',
        bathroom: <Bath />,
        bathroomNo: '5 Bathrooms',
        pool: <Pool />,
        poolNo: 'Pool',
        cctv: <Cctv />,
    },

    {
        title: 'Nicely built 6bedroom Semi detached duplex for sale',
        location: 'Ajah',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, culpa. Culpa consectetur eos dolores. Quisquam modi eveniet earum. Odio qui expedita dolor officiis fuga quis a ex ipsam ut tempora?',
        price: '#130, 000, 000',
        by: 'Listing provided by Olasunkanmi',
        buttonLabel: 'View Details',
        image: imageTwo,
        id: '622997',
        bedroom: <Bed />,
        bedroomNo: '6 Bedrooms',
        bathroom: <Bath />,
        bathroomNo: '6 Bathrooms',
        pool: <Pool />,
        poolNo: 'Pool',
        cctv: <Cctv />,
    },

    {
        title: 'Massive 4bedroom Fully detached duplex for sale',
        location: 'Victoria Island',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, culpa. Culpa consectetur eos dolores. Quisquam modi eveniet earum. Odio qui expedita dolor officiis fuga quis a ex ipsam ut tempora?',
        price: '#85, 000, 000',
        by: 'Listing provided by Olasunkanmi',
        buttonLabel: 'View Details',
        image: imageThree,
        id: '622998',
        bedroom: <Bed />,
        bedroomNo: '4 Bedrooms',
        bathroom: <Bath />,
        bathroomNo: '4 Bathrooms',
        pool: <Pool />,
        poolNo: 'Pool',
        cctv: <Cctv />,
    },

    {
        title: 'Massive 5bedroom Semi detached duplex for sale',
        location: 'Lekki',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, culpa. Culpa consectetur eos dolores. Quisquam modi eveniet earum. Odio qui expedita dolor officiis fuga quis a ex ipsam ut tempora?',
        price: '#250, 000, 000',
        by: 'Listing provided by Olasunkanmi',
        buttonLabel: 'View Details',
        image: imageFour,
        id: '622999',
        bedroom: <Bed />,
        bedroomNo: '5 Bedrooms',
        bathroom: <Bath />,
        bathroomNo: '5 Bathrooms',
        pool: <Pool />,
        poolNo: 'Pool',
        cctv: <Cctv />,
    },
]