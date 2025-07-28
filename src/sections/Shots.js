import React, { Component } from 'react'
import '../App.css'
import './Shots.css'
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft02Icon, ArrowRight02Icon, Cancel01Icon } from '@hugeicons/core-free-icons';
import ThemeToggle from '../components/ThemeToggle'
import Contacts from './Contacts';
import { useInViewClass } from '../components/useInView';
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Shot from '../components/Shot';

const useAnimatedRef = () => useInViewClass({ className: 'visible' });

const shot = [
    { src: '/assets/shot-1.png', title: '', description: 'HeadHunter: лендинг партнёрской программы' },
    { src: '/assets/shot-2.png', title: '', description: 'Resume.co: концепция дашборда для удержания и возвращения пользователя' },
    { src: '/assets/shot-3.png', title: '', description: 'Resume.co: концепция дашборда для удержания и возвращения пользователя' },
    { src: '/assets/shot-6.png', title: '', description: 'VK: приложение для онлайн-записи на услуги' },
    { src: '/assets/shot-7.png', title: '', description: 'VK: приложение для онлайн-записи на услуги' },
    { src: '/assets/shot-8.png', title: '', description: 'VK: приложение для онлайн-записи на услуги' },
    { src: '/assets/shot-9.png', title: '', description: 'Авито: переосмысление UI просмотра объявления для автора' },
    { src: '/assets/shot-10.png', title: '', description: 'VK Реклама: интерактивный html-видео формат для рекламы товаров внутри видео' },
    { src: '/assets/shot-4.png', title: '', description: 'HeadHunter и VK Реклама: примеры рекламных форматов' },
    { src: '/assets/shot-15.png', title: '', description: 'VK People Hub: главная страница' },
    { src: '/assets/shot-16.png', title: '', description: 'VK People Hub: профиль сотрудника' },
    { src: '/assets/shot-17.png', title: '', description: 'VK People Hub: календарь' },
    { src: '/assets/shot-11.png', title: '', description: 'МТС Smart Home: интерактивная презентация для сенсорных экранов' },
    { src: '/assets/shot-12.png', title: '', description: 'МТС Smart Home: интерактивная презентация для сенсорных экранов' },
    { src: '/assets/shot-13.png', title: '', description: 'МТС Smart Home: интерактивная презентация для сенсорных экранов' },
];

export default function Shots() {
    const contentRef = useAnimatedRef();
    const [open, setOpen] = React.useState(false);
    const [lightboxIndex, setLightboxIndex] = React.useState(0);
    const [lightboxSlides, setLightboxSlides] = React.useState([]);
    const captionsRef = React.useRef(null);

    const handleClick = (index) => {
        setLightboxSlides(shot);
        setLightboxIndex(index);
        setOpen(true);
    };

    return (
        <div>
            <section className='case-navigation'>
                <a className='btn-back' href='/#portfolio'>
                    <HugeiconsIcon icon={ArrowLeft02Icon} size={24} color="" strokeWidth={2} />
                    назад
                </a>
                <ThemeToggle />
            </section>

            <section style={{ paddingBottom: '0px' }}>
                <div className='shot-header'>
                    <h1 style={{ maxWidth: '800px' }}>шоты с разных проектов</h1>
                </div>
            </section>

            <section className='shot-list'>
                <div className='shot-item'>
                    <div className='shot-title'>
                        <h3> HeadHunter: лендинг партнёрской программы </h3>
                        <h3 style={{opacity:'60%'}} > 2025 </h3>
                    </div>
                    <img className='shot-img' src='/assets/shot-1.png' onClick={() => handleClick(shot.findIndex(s => s.src === '/assets/shot-1.png'))} />
                </div>

                <div className='shot-item'>
                    <div className='shot-title'>
                        <h3> Resume.co: концепция дашборда для удержания и возвращения пользователя </h3>
                        <h3 style={{opacity:'60%'}} > 2025 </h3>
                    </div>
                    <img className='shot-img' src='/assets/shot-2.png' onClick={() => handleClick(shot.findIndex(s => s.src === '/assets/shot-2.png'))} />
                    <img className='shot-img' src='/assets/shot-3.png' onClick={() => handleClick(shot.findIndex(s => s.src === '/assets/shot-3.png'))} />
                </div>

                <div className='shot-item'>
                    <div className='shot-title'>
                        <h3> VK: приложение для онлайн-записи на услуги </h3>
                        <h3 style={{opacity:'60%'}} > 2024 </h3>
                    </div>
                    <img className='shot-img' src='/assets/shot-6.png' onClick={() => handleClick(shot.findIndex(s => s.src === '/assets/shot-6.png'))} />
                    <img className='shot-img' src='/assets/shot-7.png' onClick={() => handleClick(shot.findIndex(s => s.src === '/assets/shot-7.png'))} />
                    <img className='shot-img' src='/assets/shot-8.png' onClick={() => handleClick(shot.findIndex(s => s.src === '/assets/shot-8.png'))} />
                </div>

                <div className='shot-item'>
                    <div className='shot-title'>
                        <h3> Авито: переосмысление UI просмотра объявления для автора </h3>
                        <h3 style={{opacity:'60%'}} > 2024 </h3>
                    </div>
                    <img className='shot-img' src='/assets/shot-9.png' onClick={() => handleClick(shot.findIndex(s => s.src === '/assets/shot-9.png'))} />
                </div>

                <div className='shot-item'>
                    <div className='shot-title'>
                        <h3> VK Реклама и HeadHunter: примеры рекламных форматов </h3>
                        <h3 style={{opacity:'60%'}} > 2024 </h3>
                    </div>
                    <img className='shot-img' src='/assets/shot-4.png' onClick={() => handleClick(shot.findIndex(s => s.src === '/assets/shot-4.png'))} />
                </div>

                <div className='shot-item'>
                    <div className='shot-title'>
                        <h3> VK Реклама: интерактивный html-видео формат для рекламы товаров внутри видео </h3>
                        <h3 style={{opacity:'60%'}} > 2023 </h3>
                    </div>
                    <img className='shot-img' src='/assets/shot-10.png' onClick={() => handleClick(shot.findIndex(s => s.src === '/assets/shot-10.png'))} />
                </div>

                <div className='shot-item'>
                    <div className='shot-title'>
                        <h3> VK People Hub: главная, профиль сотрудника и календарь </h3>
                        <h3 style={{opacity:'60%'}} > 2021 </h3>
                    </div>
                    <img className='shot-img' src='/assets/shot-15.png' onClick={() => handleClick(shot.findIndex(s => s.src === '/assets/shot-15.png'))} />
                    <img className='shot-img' src='/assets/shot-16.png' onClick={() => handleClick(shot.findIndex(s => s.src === '/assets/shot-16.png'))} />
                    <img className='shot-img' src='/assets/shot-17.png' onClick={() => handleClick(shot.findIndex(s => s.src === '/assets/shot-17.png'))} />
                </div>

                <div className='shot-item'>
                    <div className='shot-title'>
                        <h3> МТС Smart Home: интерактивная презентация для сенсорных экранов </h3>
                        <h3 style={{opacity:'60%'}} > 2020 </h3>
                    </div>
                    <img className='shot-img' src='/assets/shot-11.png' onClick={() => handleClick(shot.findIndex(s => s.src === '/assets/shot-11.png'))} />
                    <img className='shot-img' src='/assets/shot-12.png' onClick={() => handleClick(shot.findIndex(s => s.src === '/assets/shot-12.png'))} />
                    <img className='shot-img' src='/assets/shot-13.png' onClick={() => handleClick(shot.findIndex(s => s.src === '/assets/shot-13.png'))} />
                </div>
            </section>

            <Lightbox
                render={{
                    iconPrev: () =>
                        shot.length > 1
                            ? <HugeiconsIcon icon={ArrowLeft02Icon} size={40} color="#fff" strokeWidth={1.5} />
                            : null,
                    iconNext: () =>
                        shot.length > 1
                            ? <HugeiconsIcon icon={ArrowRight02Icon} size={40} color="#fff" strokeWidth={1.5} />
                            : null,
                    iconClose: () => <HugeiconsIcon icon={Cancel01Icon} size={32} color="#fff" strokeWidth={1.5} />,
                    iconZoomIn: () => null,
                    iconZoomOut: () => null,
                }}
                open={open}
                close={() => setOpen(false)}
                slides={lightboxSlides}
                index={lightboxIndex}
                plugins={[Captions, Zoom]}
                captions={{
                    ref: captionsRef,
                    hidden: false,
                    descriptionTextAlign: "center",
                    descriptionMaxLines: 3,
                }}
                styles={{
                    slide: { padding: 0 },
                }}
                on={{
                    click: () => {
                        (captionsRef.current?.visible
                            ? captionsRef.current.hide
                            : captionsRef.current.show)?.();
                    },
                    view: ({ index }) => setLightboxIndex(index),
                }}
            />

            <Contacts />
        </div>
    );
}
