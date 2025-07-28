import React from 'react'
import '../App.css'
import './Case.css'
import '../components/EmblaCarousel.css'
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft02Icon, ArrowRight02Icon, ArrowRight04Icon, Cancel01Icon, FigmaIcon } from '@hugeicons/core-free-icons';
import ThemeToggle from '../components/ThemeToggle';
import CaseImg from '../components/CaseImg';
import Contacts from './Contacts';
import Button from '../components/Button';
import SpotlightCard from '../components/SpotlightCard';
import { useInViewClass } from '../components/useInView';
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
const CaseH2 = ({ children }) => <h2 className='s-24'>{children}</h2>;

const CaseP = ({ children, style }) => (
    <p className='p-2' style={style}>
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
    { src: '/assets/case-4-1.png', title: '', description: '' },
    { src: '/assets/case-4-2.png', title: '', description: 'Визуальный редактор' },
    { src: '/assets/case-4-3.png', title: '', description: 'Редактор мобильной и десктопной формы' },
    { src: '/assets/case-4-4.png', title: '', description: 'Форматирование текста' },
    { src: '/assets/case-4-6.png', title: '', description: 'Блок видео' },
    { src: '/assets/case-4-5.png', title: '', description: 'Настройки изображения и слайдер' },
    { src: '/assets/case-4-9.png', title: '', description: 'Редизайн мобильной лид-формы' },
    { src: '/assets/case-4-10.png', title: '', description: 'Редизайн десктопной лид-формы без обложки' },
    { src: '/assets/case-4-11.png', title: '', description: 'Редизайн десктопной лид-формы с обложкой' },
    { src: '/assets/case-4-7.png', title: '', description: 'Мобильный лендинг и лид-форма' },
    { src: '/assets/case-4-8.png', title: '', description: 'Десктопный лендинг и лид-форма' },
];

export default function Case4() {
    const headerRef = useInViewClass();
    const content1Ref = useInViewClass();
    const content2Ref = useInViewClass();
    const content3Ref = useInViewClass();
    const content4Ref = useInViewClass();
    const footerRef = useInViewClass();
    const carouselRef1 = useInViewClass();
    const carouselRef2 = useInViewClass();
    const carouselRef3 = useInViewClass();
    const content5Ref = useInViewClass();
    const content6Ref = useInViewClass();
    const content7Ref = useInViewClass();
    const content8Ref = useInViewClass();
    const imgRef0 = useInViewClass();
    const imgRef1 = useInViewClass();
    const imgRef2 = useInViewClass();
    const imgRef3 = useInViewClass();
    const imgRef4 = useInViewClass();
    const imgRef5 = useInViewClass();
    const imgRef6 = useInViewClass();
    // Added refs for additional images and contents
    const imgRef7 = useInViewClass();
    const imgRef8 = useInViewClass();
    const imgRef9 = useInViewClass();
    const imgRef10 = useInViewClass();
    const imgRef11 = useInViewClass();
    const content9Ref = useInViewClass();
    const content10Ref = useInViewClass();
    // Additional content refs to avoid duplication
    const content11Ref = useInViewClass();
    const content12Ref = useInViewClass();
    const content13Ref = useInViewClass();
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

            <SpotlightCard className="case-head fade-in" ref={headerRef}>
                <div className='head-content'>
                    <img className='case-head-img' src='/assets/vk.jpg' alt='' />
                    <h1>лид-формы<br></br>и лендинги</h1>
                </div>
            </SpotlightCard>

            <div className='case-overflow'>
                <section className='grid case'>

                    <div ref={content1Ref} className='case-content fade-in'>
                        <div className='case-par'>
                            <CaseP>
                                Лид-формы — инструмент для сбора контактов людей, заинтересованных в товарах или услугах, которые рекламируются.
                            </CaseP>
                            <CaseP>
                                В рамках этой задачи мы расширяли стандартную функциональность лид-форм для продажи сложных продуктов.
                            </CaseP>
                        </div>
                        <CaseH2>обычная лид-форма</CaseH2>
                        <div className='case-par'>
                            <CaseP>
                                Базово это интерактивный формат, который открывается в мини-приложении внутри ВКонтакте при нажатии на рекламную запись. Внутри может быть короткое описание, форма сбора контактов и несколько наводящих вопросов.
                            </CaseP>
                            <CaseP>
                                Стандартная лид-форма содержит мало контента и подходит для самых простых и понятных продуктов или услуг, поэтому возник продуктовый запрос помочь более сложным продуктам подробнее раскрыть детали своего предложения, добавить больше текстового и медиа-контента.
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
                        ref={imgRef0}
                        className="fade-in"
                    />

                    <div ref={content2Ref} className='case-content fade-in'>
                        <CaseH2>конструктор лендингов</CaseH2>
                        <div className='case-par'>
                            <CaseP>
                                Изначально проект начинался под таким названием и мог бы превратиться в клон тильды, но очень быстро мы поняли, что у нас для этого маловато ресурсов и что расширение лид-форм не должно быть больше самих лид-форм. Поэтому выбрали формат WYSIWYG конструктора статей, который добавился в флоу создания формы.
                            </CaseP>
                            <CaseP>
                                На верхнем уровне можно оперировать тремя типами блоков: текст, изображение и видео. Можно добавлять, удалять, переставлять их местами.
                            </CaseP>
                        </div>
                    </div>

                    <CaseImg
                        src={slides[1].src}
                        caption={slides[1].description}
                        index={1}
                        onClick={() => {
                            setLightboxSlides([slides[1]]);
                            setLightboxIndex(1);
                            setOpen(true);
                        }}
                        ref={imgRef1}
                        className="fade-in"
                    />

                    <div ref={content5Ref} className='case-content fade-in'>
                        <div className='case-par'>
                            <CaseP>
                                Есть возможность редактирования с предпросмотром как мобильной, так и десктопной версии
                            </CaseP>
                        </div>
                    </div>

                    <CaseImg
                        src={slides[2].src}
                        caption={slides[2].description}
                        index={2}
                        onClick={() => {
                            setLightboxSlides([slides[2]]);
                            setLightboxIndex(2);
                            setOpen(true);
                        }}
                        ref={imgRef2}
                        className="fade-in"
                    />

                    <div ref={content6Ref} className='case-content fade-in'>
                        <div className='case-par'>
                            <CaseP>
                                В текстовом блоке можно ограниченно настраивать форматирование, добавлять списки и ссылки. Таким образом мы обеспечиваем достаточную гибкость и при этом пользователь не сможет сделать текст некрасивым даже при большом желании.
                            </CaseP>
                        </div>
                    </div>

                    <CaseImg
                        src={slides[3].src}
                        caption={slides[3].description}
                        index={3}
                        onClick={() => {
                            setLightboxSlides([slides[3]]);
                            setLightboxIndex(3);
                            setOpen(true);
                        }}
                        ref={imgRef3}
                        className="fade-in"
                    />

                    <div ref={content11Ref} className='case-content fade-in'>
                        <div className='case-par'>
                            <CaseP>
                                Видео можно загрузить из ВК Видео, Ютуба (когда-то можно было) или файлом. Видео добавляется с соотношением сторон оригинала, чтобы избежать чёрных полос плеера.
                            </CaseP>
                        </div>
                    </div>

                    <CaseImg
                        src={slides[4].src}
                        caption={slides[4].description}
                        index={4}
                        onClick={() => {
                            setLightboxSlides([slides[4]]);
                            setLightboxIndex(4);
                            setOpen(true);
                        }}
                        ref={imgRef4}
                        className="fade-in"
                    />

                    <div ref={content12Ref} className='case-content fade-in'>
                        <div className='case-par'>
                            <CaseP>
                                Изображение вставляется не в исходном соотношении сторон, а в контейнер с соотношением 16:9, 1:1 или 3:4 — ближайшем подходящем к исходному. Это сделано, чтобы рекламодатели не загружали слишком высокие или узкие изображения и сам блок было проще превратить в слайдер.
                            </CaseP>
                            <CaseP>
                                За один раз можно выбрать до 10 изображений, в этом случае блок изображения сразу превращается в слайдер. Сотношение сторон первого слайда наследуется на все последующие, независимо от их исходного соотношения. Но в настройках слайдера можно изменить соотношение для всех слайдов сразу и при необходимости обрезать изображения как нужно.
                            </CaseP>
                        </div>
                    </div>

                    <CaseImg
                        src={slides[5].src}
                        caption={slides[5].description}
                        index={5}
                        onClick={() => {
                            setLightboxSlides([slides[5]]);
                            setLightboxIndex(5);
                            setOpen(true);
                        }}
                        ref={imgRef5}
                        className="fade-in"
                    />

                    <div ref={content8Ref} className='case-content fade-in'>
                        <CaseH2>редизайн приложения</CaseH2>
                        <div className='case-par'>
                            <CaseP>
                                В процессе мы обновили и дизайн самой лид-формы, чтобы сделать его посвежее, использовать всю доступную ширину на десктопной версии и сделать её консистентной с лендингами. Заодно я визуально обошёл проблему того, что на андроидах статус-бар не получалось динамично красить в цвет фона лид-формы и оформил её как модалку
                            </CaseP>
                        </div>
                    </div>

                    <CaseImg
                        src={slides[6].src}
                        caption={slides[6].description}
                        index={6}
                        onClick={() => {
                            setLightboxSlides([slides[6]]);
                            setLightboxIndex(6);
                            setOpen(true);
                        }}
                        ref={imgRef6}
                        className="fade-in"
                    />

                    <CaseImg
                        src={slides[7].src}
                        caption={slides[7].description}
                        index={7}
                        onClick={() => {
                            setLightboxSlides([slides[7]]);
                            setLightboxIndex(7);
                            setOpen(true);
                        }}
                        ref={imgRef7}
                        className="fade-in"
                    />

                    <CaseImg
                        src={slides[8].src}
                        caption={slides[8].description}
                        index={8}
                        onClick={() => {
                            setLightboxSlides([slides[8]]);
                            setLightboxIndex(8);
                            setOpen(true);
                        }}
                        ref={imgRef8}
                        className="fade-in"
                    />

                    <div ref={content9Ref} className='case-content fade-in'>
                        <CaseH2>как это работает</CaseH2>
                        <div className='case-par'>
                            <CaseP>
                                Теперь при нажатии объявления в ленте ВКонтакте откроется сразу лендинг, пользователь может изучить подробности и нажать на закреплённую кнопку, откроется обычная лид-форма и можно оставлять заявку
                            </CaseP>
                        </div>
                    </div>

                    <CaseImg
                        src={slides[9].src}
                        caption={slides[9].description}
                        index={9}
                        onClick={() => {
                            setLightboxSlides([slides[9]]);
                            setLightboxIndex(9);
                            setOpen(true);
                        }}
                        ref={imgRef9}
                        className="fade-in"
                    />

                    <CaseImg
                        src={slides[10].src}
                        caption={slides[10].description}
                        index={10}
                        onClick={() => {
                            setLightboxSlides([slides[10]]);
                            setLightboxIndex(10);
                            setOpen(true);
                        }}
                        ref={imgRef10}
                        className="fade-in"
                    />

                    {/* Результаты */}
                    <div ref={content13Ref} className='case-content fade-in'>
                        <CaseH2>результаты</CaseH2>
                        <div className='case-par'>
                            <CaseP>
                                К сожалению, я не застал релиз фичи и не знаю какой эффект она оказала на выручку, но мы всё же сделали хороший инструмент, который позволяет рекламодателям использовать лид-формы, даже если их продукт слишком сложный, чтобы описать его несколькими словами. И не тратить бюджеты на полноценные лендинги при тестировании.
                            </CaseP>
                        </div>
                    </div>

                    <div ref={footerRef} className='case-footer fade-in'>
                        <h3>больше макетов по задаче можно посмотреть в фигме</h3>
                        <Button target='_blanc' href='https://www.figma.com/design/26dZtMoQWiJuTOf8Rmz0go/Ivan-Vorobyev?node-id=1-2&p=f&t=cJPKj1O6CmT5s1of-11' icon={FigmaIcon} />
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
