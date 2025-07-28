import React from 'react'
import './Portfolio.css'
import TiltedCard from '../components/TiltedCard';
import { portfolioRef } from './Navbar';
import { useInViewClass } from '../components/useInView';

const handleNavigateToCase = () => {
  sessionStorage.setItem('mainScrollY', window.scrollY.toString());
};
const cardsData = [
  {
    linkTo: '/case-1',
    imageSrc: "/assets/cover-1.jpg",
    avatarSrc: "/assets/h-cover-1.svg",
    overlayContent: <p className="tilted-card-demo-text"> настройка <br></br>уведомлений </p>
  },
  {
    linkTo: '/case-2',
    imageSrc: "/assets/cover-2.jpg",
    avatarSrc: "/assets/h-cover-2.svg",
    overlayContent: <p className="tilted-card-demo-text"> массовое <br></br>продвижение </p>
  },
  {
    linkTo: '/case-3',
    imageSrc: "/assets/cover-3.jpg",
    avatarSrc: "/assets/h-cover-3.svg",
    overlayContent: <p className="tilted-card-demo-text"> центр <br></br>коммерции </p>
  },
  {
    linkTo: '/case-4',
    imageSrc: "/assets/cover-4.jpg",
    avatarSrc: "/assets/h-cover-4.svg",
    overlayContent: <p className="tilted-card-demo-text"> лендинги <br></br>в лид-формах </p>
  },
  {
    linkTo: '/case-5',
    imageSrc: "/assets/cover-5.jpg",
    avatarSrc: "/assets/h-cover-5.svg",
    overlayContent: <p className="tilted-card-demo-text"> конструктор <br></br>опросов </p>
  },
  {
    linkTo: '/shots',
    imageSrc: "/assets/cover-6.jpg",
    avatarSrc: "/assets/h-cover-6.svg",
    overlayContent: <p className="tilted-card-demo-text"> шоты из разных проектов </p>
  }
];

export default function Portfolio() {
  const titleRef = useInViewClass('fade-in');
  const gridRef = useInViewClass('fade-in');

  return (
    <section id='portfolio' ref={portfolioRef}>
      <div className='tltle s-40 fade-in' ref={titleRef}>
        <h2>кейсы</h2>
      </div>
      <div className='grid fade-in' ref={gridRef}>
        {cardsData.map(({ linkTo, imageSrc, overlayContent, avatarSrc }, index) => (
          <TiltedCard
            key={index}
            className='card-case card'
            linkTo={linkTo}
            imageSrc={imageSrc}
            avatarSrc={avatarSrc}
            overlayContent={overlayContent}
            onClick={handleNavigateToCase}
          />
        ))}
      </div>
    </section>
  )
}
