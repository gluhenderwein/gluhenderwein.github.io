import React, { forwardRef } from 'react'
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import './EmblaCarousel.css'

const EmblaCarousel = forwardRef((props, ref) => {
  const {
    slides = [
      { src: 'https://via.placeholder.com/600x400?text=Slide+1', title: '', description: 'First Slide' },
      { src: 'https://via.placeholder.com/600x400?text=Slide+2', title: '', description: '' },
      { src: 'https://via.placeholder.com/600x400?text=Slide+3', title: '', description: 'Last Slide' }
    ],
    options,
    className = '',
    onSlideClick
  } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div ref={ref} className={`embla ${className}`}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={slide.src}
                alt={`Slide ${index}`}
                onClick={() => onSlideClick?.(index, slides)}
                style={{ cursor: 'pointer' }}
              />
              {slide.description && <div className="embla__slide__caption">{slide.description}</div>}
            </div>
          ))}
        </div>
      </div>
      
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} style={{ left: '-24px' }} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} style={{ right: '-24px'}} />
      
    </div>
  )
})

export default EmblaCarousel
