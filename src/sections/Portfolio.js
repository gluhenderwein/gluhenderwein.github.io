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
    imageSrc: "https://i.pinimg.com/originals/3c/34/18/3c34187630af4ba9d2273d70933c1f89.png",
    overlayContent: <p className="tilted-card-demo-text"> редизайн </p>
  },
  {
    linkTo: '/case-2',
    imageSrc: "https://i.pinimg.com/originals/3c/34/18/3c34187630af4ba9d2273d70933c1f89.png",
    overlayContent: <p className="tilted-card-demo-text"> редизайн </p>
  },
  {
    linkTo: '/case-3',
    imageSrc: "https://i.pinimg.com/originals/3c/34/18/3c34187630af4ba9d2273d70933c1f89.png",
    overlayContent: <p className="tilted-card-demo-text"> редизайн </p>
  },
  {
    linkTo: '/case-4',
    imageSrc: "https://i.pinimg.com/originals/3c/34/18/3c34187630af4ba9d2273d70933c1f89.png",
    overlayContent: <p className="tilted-card-demo-text"> редизайн </p>
  },
  {
    linkTo: '/case-5',
    imageSrc: "https://i.pinimg.com/originals/3c/34/18/3c34187630af4ba9d2273d70933c1f89.png",
    overlayContent: <p className="tilted-card-demo-text"> редизайн </p>
  },
  {
    linkTo: '/shots',
    imageSrc: "https://i.pinimg.com/originals/3c/34/18/3c34187630af4ba9d2273d70933c1f89.png",
    overlayContent: <p className="tilted-card-demo-text"> редизайн </p>
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
        {cardsData.map(({ linkTo, imageSrc, overlayContent }, index) => (
          <TiltedCard
            key={index}
            className='card-case card'
            linkTo={linkTo}
            imageSrc={imageSrc}
            overlayContent={overlayContent}
            onClick={handleNavigateToCase}
          />
        ))}
      </div>
    </section>
  )
}
