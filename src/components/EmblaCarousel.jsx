import React, { forwardRef } from 'react'
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import './EmblaCarousel.css'

const EmblaCarousel = forwardRef((props, ref) => {
  const {
    slides = [
      { src: 'https://via.placeholder.com/600x400?text=Slide+1', caption: 'First Slide' },
      { src: 'https://via.placeholder.com/600x400?text=Slide+2' },
      { src: 'https://via.placeholder.com/600x400?text=Slide+3', caption: 'Last Slide' }
    ],
    options,
    className = ''
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
              <img className="embla__slide__img" src={slide.src} alt={`Slide ${index}`} />
              {slide.caption && <div className="embla__slide__caption">{slide.caption}</div>}
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} style={{ marginLeft: '-24px' }} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} style={{ marginRight: '-24px' }} />
      </div>
    </div>
  )
})

export default EmblaCarousel
