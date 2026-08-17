import React from 'react'
import '../App.css'
import './Case.css'
import SpotlightCard from '../components/SpotlightCard';

const logos = [
    './assets/hh.jpg',
    './assets/vk.jpg'
]

const mains = [
    './assets/bell.png',
    './assets/plane.png',
    './assets/envelope.png',
    './assets/pencil.png',
    './assets/cart.png'
]

const backgrounds = [
    '#CCBBB3',
    '#B3B9CC'
]

export default function CaseHeader({ logoIndex, mainIndex, title, bgIndex, refProp }) {
    const bgColor = backgrounds[bgIndex] || backgrounds[0];

    return (
        <SpotlightCard
            className="case-head fade-in"
            bgColor={bgColor}
            ref={refProp}
        >
            <div className='head-content'>
                <img className='case-head-img' src={logos[logoIndex]} alt='' />
                <img className='case-illustration' src={mains[mainIndex]} alt='' />
                <h1 className='case-h'>{title}</h1>
            </div>
        </SpotlightCard>
    )
}
