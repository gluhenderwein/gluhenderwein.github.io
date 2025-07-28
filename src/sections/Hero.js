import React from 'react'
import './Hero.css'
import { HugeiconsIcon } from '@hugeicons/react';
import { CircleArrowUpDoubleIcon, Location01Icon } from '@hugeicons/core-free-icons';
import { aboutRef } from './Navbar';
import { useInViewClass } from '../components/useInView';

export default function Hero() {
    const heroContentRef = useInViewClass({ className: 'visible' });
    const parWrapper1Ref = useInViewClass({ className: 'visible' });
    const parWrapper2Ref = useInViewClass({ className: 'visible' });

    return (    
        <section className='hero' ref={aboutRef} id='about'>
            <div className='grid hero-grid' style={{ alignContent: 'end' }}>
                <div className='hero-content fade-in col-8' ref={heroContentRef}>
                    <h1>привет, я ваня</h1>
                    <div className='par-wrapper fade-in' ref={parWrapper1Ref}>
                        <div className='label'>
                            <HugeiconsIcon className='icon'
                                icon={CircleArrowUpDoubleIcon}
                                size={24}
                                color=""
                                strokeWidth={2}
                            />
                            <p className='label-text'>старший продуктовый дизайнер</p>
                        </div>
                        <div className='label'>
                            <HugeiconsIcon className='icon'
                                icon={Location01Icon}
                                size={24}
                                color=""
                                strokeWidth={2}
                            />
                            <p className='label-text'>москва</p>
                        </div>
                    </div>
                    <div className='par-wrapper fade-in' style={{ maxWidth: '620px' }} ref={parWrapper2Ref}>
                        <p className='p-1'>Больше 6 лет участвую в редизайнах крупных продуктов и проектирую их с нуля, развиваю дизайн-системы, стандартизирую паттерны и подходы к проектированию </p>
                        <p className='p-1'>Имею опыт менторства и найма дизайнеров</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
