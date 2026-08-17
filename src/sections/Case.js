import React from 'react'
import '../App.css'
import './Case.css'
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft02Icon, ArrowRight02Icon, Cancel01Icon, FigmaIcon } from '@hugeicons/core-free-icons';
import ThemeToggle from '../components/ThemeToggle'
import EmblaCarousel from '../components/EmblaCarousel';
import Contacts from './Contacts';
import ButtonSecondary from '../components/ButtonSecondary';
import { useInViewClass } from '../components/useInView';
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const useAnimatedRef = () => useInViewClass({ className: 'visible' });

const slides = [
  { src: 'https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '', description: 'Описание 1' },
  { src: 'https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '', description: '' },
  { src: 'https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '', description: 'Описание 3' }
];

const slides2 = [
  { src: 'https://images.unsplash.com/photo-1752805252779-000e9d493b1f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '', description: 'Описание 1' },
  { src: 'https://images.unsplash.com/photo-1752805252779-000e9d493b1f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '', description: '' },
  { src: 'https://images.unsplash.com/photo-1752805252779-000e9d493b1f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '', description: 'Описание 3' }
];

export default function Case() {
  const headerRef = useAnimatedRef();
  const content1Ref = useAnimatedRef();
  const content2Ref = useAnimatedRef();
  const footerRef = useAnimatedRef();
  const carouselRef1 = useAnimatedRef();
  const carouselRef2 = useAnimatedRef();
  const [open, setOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);
  const [lightboxSlides, setLightboxSlides] = React.useState([]);
  const captionsRef = React.useRef(null);

  return (
    <>
      <section className='case-navigation'>
        <a className='btn-back' href='/#portfolio'>
          <HugeiconsIcon
            icon={ArrowLeft02Icon}
            size={24}
            color=""
            strokeWidth={2}
          />
          назад
        </a>
        <ThemeToggle />
      </section>

      <div className='case-overflow'>
        <section className='grid case'>

          <div ref={headerRef} className='case-header fade-in'>
            <img className='case-head-img' src='/assets/hh.webp' alt='' />
            <h1>редизайн настроек уведомлений</h1>
          </div>
          <div ref={content1Ref} className='case-content fade-in'>
            <div className='case-par'>
              <p className='p-2'>
                Целью задачи было просто перевести на новые компоненты раздел настройки уведомлений у работодателей и соискателей и добавить несколько каналов для каждой категории.
              </p>
              <p className='p-2'>
                Редизайн был довольно кардинальным, однако нам удалось не только не уронить никакие метрики, но и значительно подрастить некоторые из них
              </p>
            </div>
            <h2 className='s-24'>cтарый дизайн</h2>
            <div className='case-par'>
              <p className='p-2'>
                Изначальный дизайн предполагал группировку по каналам, но при желании добавить к одному типу уведомлений несколько каналов происходило бы ненужное дублирование.
              </p>
              <p className='p-2'>
                Для сервиса уведомления важны, чтобы поддерживать посещаемость и возвращаемость пользователей на сервис, осведомлённость о новых функциях, а через некоторые рассылки происходят продажи сервисов hh.
              </p>
            </div>
          </div>


          <EmblaCarousel
            ref={carouselRef1}
            className='fade-in'
            slides={slides}
            onSlideClick={(index) => {
              setLightboxSlides(slides);
              setLightboxIndex(index);
              setOpen(true);
            }}
          />

          <EmblaCarousel
            ref={carouselRef2}
            className='fade-in'
            slides={slides2}
            onSlideClick={(index) => {
              setLightboxSlides(slides2);
              setLightboxIndex(index);
              setOpen(true);
            }}
          />

          <div ref={content2Ref} className='case-content fade-in'>
            <div className='case-par'>
              <p className='p-2'>
                Я заметил, что название некоторых уведомлений мало говорит об их ценности для пользователя и предложил с помощью редактора добавить к ним описание.
              </p>
            </div>
          </div>

          <div ref={footerRef} className='case-footer fade-in'>
            <h3>больше макетов по задаче можно посмотреть в фигме</h3>
            <ButtonSecondary href='/' icon={FigmaIcon} />
          </div>

          
        </section>
      </div>

      <Lightbox
        render={{
          iconPrev: () => <HugeiconsIcon icon={ArrowLeft02Icon} size={40} color="#fff" strokeWidth={1.5} />,
          iconNext: () => <HugeiconsIcon icon={ArrowRight02Icon} size={40} color="#fff" strokeWidth={1.5} />,
          iconClose: () => <HugeiconsIcon icon={Cancel01Icon} size={32} color="#fff" strokeWidth={1.5} />,
          iconZoomIn: () => React.ReactNode,
          iconZoomOut: () => React.ReactNode,
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
    </>
  );
}
