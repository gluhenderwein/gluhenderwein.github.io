import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import './Case.css'
import '../components/EmblaCarousel.css'
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
    { src: './assets/case-5-1.png', title: '', description: 'Шаг 1: оформление' },
    { src: './assets/case-5-2.png', title: '', description: '' },
    { src: './assets/case-5-3.png', title: '', description: 'Шаг 2: вопросы' },
    { src: './assets/case-5-4.png', title: '', description: 'Настройка вопроса' },
    { src: './assets/case-5-5.png', title: '', description: 'Настройка вопроса со шкалой' },
    { src: './assets/case-5-6.png', title: '', description: 'Настройка стоп-экрана' },
    { src: './assets/case-5-7.png', title: '', description: 'Условия для показа вопроса' },
    { src: './assets/case-5-8.png', title: '', description: 'Шаг 3: экран результата' },
    { src: './assets/case-5-9.png', title: '', description: 'Приложение с опросом' },
    { src: './assets/case-5-10.png', title: '', description: 'Список опросов в рекламном кабинете' }
];

export default function Case5() {
    const headerRef = useInViewClass();
    const content1Ref = useInViewClass();
    const content2Ref = useInViewClass();
    const footerRef = useInViewClass();
    const content8Ref = useInViewClass();
    const imgRef0 = useInViewClass();
    const imgRef1 = useInViewClass();
    const imgRef2 = useInViewClass();
    const imgRef3 = useInViewClass();
    const imgRef4 = useInViewClass();
    const imgRef5 = useInViewClass();
    const imgRef6 = useInViewClass();
    const imgRef7 = useInViewClass();
    const imgRef8 = useInViewClass();
    const imgRef9 = useInViewClass();
    const content9Ref = useInViewClass();
    const content11Ref = useInViewClass();
    const content12Ref = useInViewClass();
    const content13Ref = useInViewClass();
    // Added unique refs for duplicated content sections
    const content14Ref = useInViewClass();
    const content15Ref = useInViewClass();
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
                logoIndex={1}
                mainIndex={3}
                bgIndex={1}
                title="конструктор опросов"
                refProp={headerRef}
            />

            <div className='case-overflow'>
                <section className='grid case'>
                    <div ref={content1Ref} className='case-content fade-in'>
                        <div className='case-par'>
                            <CaseP>
                                Опросы технически похожи на лид-формы, но используются для других целей: сбор обратной связи о продукте, социальные и другие исследования, бренд-лифты.
                            </CaseP>
                            <CaseP>
                                В отличие от лид-форм здесь не нужно собирать контакты пользователей, но нужно иметь возможность настраивать логику ветвления вопросов в зависимости от ответов.
                            </CaseP>
                            <CaseP>
                                Это MVP, поэтому многие функции, которые можно встретить в крупных инструментах для создания опросов, упрощены и выпилены.
                            </CaseP>
                        </div>
                        <CaseH2>создание опроса</CaseH2>
                        <div className='case-par'>
                            <CaseP>
                                Флоу делится на 3 шага: настройка оформления, вопросов и экрана результата. Оформление настраивается аналогично лид-формам: логотип, заголовок и короткое описание, выбор цветовой схемы, чтобы больше соответствовать бренду
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
                        <div className='case-par'>
                            <CaseP>
                                На втором шаге можно настроить вопросы. Доступно 4 типа: выбор одного варианта, выбор нескольких вариантов, шкала и свободный ответ. У типа «шкала» есть настройка диапазона, потому что в разных типах опросов есть необходимость использовать разные шкалы. Для вопросов с вариантами можно добавлять шаблонные ответы.
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
                                Рекламодатель платит за заполненную анкету, поэтому мы предусмотрели фичу, которая позволит отсеивать нерелевантных респондентов — стоп-экран. Если при ответе на вопрос пользователь даст ответ из условия, то опрос для него закончится, а рекламодатель не будет платить за эту анкету.
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
                        <div className='case-par'>
                            <CaseP>
                                Вопросам также можно задавать условия показа, например, если нужно, чтобы определённый вопрос показывался только при определённом ответе на предыдущий.
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

                    <div ref={content14Ref} className='case-content fade-in'>
                        <div className='case-par'>
                            <CaseP>
                                На последнем шаге можно настроить экран с благодарностью и сразу запустить рекламу опроса, используя стандартные таргетинги рекламного кабинета.
                            </CaseP>
                        </div>
                    </div>

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

                    <div ref={content9Ref} className='case-content fade-in'>
                        <CaseH2>как это работает</CaseH2>
                        <div className='case-par'>
                            <CaseP>
                                При нажатии на объявление в ленте ВКонтакте открывается форма опроса в мини-приложении. Пользователь отвечает на вопросы пошагово
                            </CaseP>
                        </div>
                    </div>

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

                    <div ref={content15Ref} className='case-content fade-in'>
                        <div className='case-par'>
                            <CaseP>
                                Рекламодатель может отслеживать статус опроса в рекламном кабинете и скачивать анкеты с ответами в формате xlsx.
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


                    {/* Результаты */}
                    <div ref={content13Ref} className='case-content fade-in'>
                        <CaseH2>результаты</CaseH2>
                        <div className='case-par'>
                            <CaseP>
                                Этот продукт мы делали не ради повышения выручки, а скорее для придания большей продуктовой ценности рекламному кабинету. А ещё он очень быстро получил популярность у коллег из других продуктов VK и начал активно использоваться как замена гугл форм для внутренних опросов и сбора внешней обратной связи.
                            </CaseP>
                        </div>
                    </div>

                    <div ref={footerRef} className='case-footer fade-in'>
                        <h3>больше макетов по задаче можно посмотреть в фигме</h3>
                        <ButtonSecondary target='_blanc' href='https://www.figma.com/design/26dZtMoQWiJuTOf8Rmz0go/Ivan-Vorobyev?node-id=1-3&p=f&t=cJPKj1O6CmT5s1of-11' icon={FigmaIcon} />
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
