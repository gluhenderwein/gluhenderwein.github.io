import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import './Case.css'
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft02Icon, ArrowRight02Icon, ArrowRight04Icon, Cancel01Icon, FigmaIcon } from '@hugeicons/core-free-icons';
import ThemeToggle from '../components/ThemeToggle'
import CaseImg from '../components/CaseImg';
import Contacts from './Contacts';
import ButtonSecondary from '../components/ButtonSecondary';
import CaseHeader from './CaseHeader';
import { useInViewClass } from '../components/useInView';
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const CaseH2 = ({ children }) => <h2 className='s-24'>{children}</h2>;

const CaseP = ({ children, style }) => (
  <p className='p-case' style={style}>
    {children}
  </p>
);

const CaseListItem = ({ children, style }) => (
  <div className='list-item'>
    <div className='list-item-i'>
      <HugeiconsIcon className='icon' icon={ArrowRight04Icon} size={32} color="var(--icon-secondary)" strokeWidth={1.5} />
    </div>
    <CaseP style={style}>{children}</CaseP>
  </div>
);

const slides = [
  { src: './assets/case-1-old-1.png', title: '', description: 'Старые уведомления соискателя' },
  { src: './assets/case-1-old-2.png', title: '', description: 'Старые уведомления работодателя' }
];

const slides2 = [
  { src: './assets/case-1-1.png', title: '', description: 'Соискатель' },
  { src: './assets/case-1-2.png', title: '', description: 'Работодатель' },
  { src: './assets/case-1-3.png', title: '', description: 'Настройки уведомлений по отдельным вакансиям' }
];


export default function Case1() {
  const headerRef = useInViewClass();
  const content1Ref = useInViewClass();
  const content2Ref = useInViewClass();
  const content3Ref = useInViewClass();
  const content4Ref = useInViewClass();
  const footerRef = useInViewClass();
  const carouselRef1 = useInViewClass();
  const carouselRef2 = useInViewClass();
  const carouselRef3 = useInViewClass();
  const [open, setOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);
  const [lightboxSlides, setLightboxSlides] = React.useState([]);
  const captionsRef = React.useRef(null);

  return (
    <>
      <section className='case-navigation'>
        <Link to='/' className='btn-back'>
          <HugeiconsIcon
            icon={ArrowLeft02Icon}
            size={24}
            color=""
            strokeWidth={2}
          />
          назад
        </Link>
        <ThemeToggle />
      </section>

      <CaseHeader
      logoIndex={0}
        mainIndex={0}
        bgIndex={0}
        title="редизайн настроек уведомлений" 
        refProp={headerRef}
      />

      

      <div className='case-overflow'>
        <section className='grid case'>

          <div ref={content1Ref} className='case-content fade-in'>
            <div className='case-par'>
              <CaseP>
                Целью задачи было просто перевести на новые компоненты раздел настройки уведомлений у работодателей и соискателей и добавить несколько каналов для каждой категории.
              </CaseP>
              <CaseP>
                Редизайн был довольно кардинальным, однако нам удалось не только не уронить никакие метрики, но и значительно подрастить некоторые из них
              </CaseP>
            </div>
            <CaseH2>cтарый дизайн</CaseH2>
            <div className='case-par'>
              <CaseP>
                Изначальный дизайн предполагал группировку по каналам, но при желании добавить к одному типу уведомлений несколько каналов происходило бы ненужное дублирование.
              </CaseP>
            </div>
          </div>

          <CaseImg
            src={slides[0].src}
            caption={slides[0].description}
            index={0}
            onClick={() => {
              setLightboxSlides([slides[0]]);
              setLightboxIndex(0);
              setOpen(true);
            }}
          />

          <CaseImg
            src={slides[1].src}
            caption={slides[1].description}
            index={1}
            onClick={() => {
              setLightboxSlides([slides[1]]);
              setLightboxIndex(1);
              setOpen(true);
            }}
          />

          <div ref={content2Ref} className='case-content fade-in'>
            <div className='case-par'>
              <CaseP>
                Для сервиса уведомления важны, чтобы поддерживать посещаемость и возвращаемость пользователей на сервис, осведомлённость о новых функциях, а через некоторые рассылки происходят продажи сервисов hh.
              </CaseP>
              <CaseP>
                Я заметил, что название некоторых уведомлений мало говорит об их ценности для пользователя и предложил с помощью редактора добавить к ним описание.
              </CaseP>
            </div>
            <CaseH2>новый дизайн</CaseH2>
            <div className='case-par'>
              <CaseP>
                Мы сгруппировали уведомления по общим категориям, добавили возможность настроить несколько каналов для каждого типа и пояснения, чтобы подсветить для пользователя их ценность.
              </CaseP>
              <CaseP>
                Финальная реализация выглядит достаточно простой, но сложность заключалась в том, что работодатели и соискатели принесли кардинально разные требования и технические ограничения. Пришлось искать вариант дизайна, который удовлетворит обе стороны, будет достаточно гибким при масштабировании и обеспечит одинаковый опыт для пользователя, который в разные периоды может искать как сотрудников, так и работу.
              </CaseP>
            </div>
          </div>

          <CaseImg
            src={slides2[0].src}
            caption={slides2[0].description}
            index={0}
            onClick={() => {
              setLightboxSlides([slides2[0]]);
              setLightboxIndex(0);
              setOpen(true);
            }}
          />

          <CaseImg
            src={slides2[1].src}
            caption={slides2[1].description}
            index={1}
            onClick={() => {
              setLightboxSlides([slides2[1]]);
              setLightboxIndex(1);
              setOpen(true);
            }}
          />

          <div ref={content3Ref} className='case-content fade-in'>
            <div className='case-par'>
              <CaseP>
                Для менеджеров работодателей, некоторые из которых могут вести сотни и тысячи вакансий одновременно, мы добавили не только полное отключение уведомлений по всем вакансиям, но и возможность настроить их для определённых вакансий:
              </CaseP>
            </div>
          </div>

          <CaseImg
            src={slides2[2].src}
            caption={slides2[2].description}
            index={2}
            onClick={() => {
              setLightboxSlides([slides2[2]]);
              setLightboxIndex(2);
              setOpen(true);
            }}
          />

          {/* Результаты */}
          <div ref={content4Ref} className='case-content fade-in'>
            <CaseH2>результаты</CaseH2>
            <div className='case-par'>
              <CaseP>
                Результаты теста у работодателей (соискатели в процессе тестирования):
              </CaseP>
              <CaseListItem>
                Получили значительный зеленый прокрас по подпискам на email (+35.92%, одна из категорий +55.7%). Пуши и СМС выросли нестатзначимо, но с трендом на рост
              </CaseListItem>
              <CaseListItem>
                Метрики отписок, тотал подписок и отписок не изменились
              </CaseListItem>
              <CaseListItem>
                Значимо уменьшилось среднее количество отписок и подписок которые делают пользователи за одну сессию (пользователи стали меньше скликивать свитчи подряд)
              </CaseListItem>
              <CaseListItem>
                Старые пользователи (которые могли видеть старую версию страницы) реагируют на новый дизайн сильнее чем новые — доля пользователей которые подписались на канал среди старых пользователей +46%, среди новых +16%
              </CaseListItem>
            </div>
          </div>



          <div ref={footerRef} className='case-footer fade-in'>
            <h3>больше макетов по задаче можно посмотреть в фигме</h3>
            <ButtonSecondary target='_blanc' href='https://www.figma.com/design/26dZtMoQWiJuTOf8Rmz0go/Ivan-Vorobyev?node-id=2028-128035&p=f&t=cJPKj1O6CmT5s1of-11' icon={FigmaIcon} />
          </div>

        </section>
      </div>

      <Lightbox
        render={{
          iconPrev: () =>
            lightboxSlides.length > 1
              ? <HugeiconsIcon icon={ArrowLeft02Icon} size={40} color="#fff" strokeWidth={1.5} />
              : null,
          iconNext: () =>
            lightboxSlides.length > 1
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
    </>
  );
}
