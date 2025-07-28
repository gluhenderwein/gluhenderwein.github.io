import React from 'react'
import '../App.css'
import './Case.css'
import '../components/EmblaCarousel.css'
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft02Icon, ArrowRight02Icon, ArrowRight04Icon, Cancel01Icon, FigmaIcon } from '@hugeicons/core-free-icons';
import ThemeToggle from '../components/ThemeToggle'
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
    { src: './assets/case-3-1.png', title: '', description: 'Форма создания каталога' },
    { src: './assets/case-3-2.png', title: '', description: 'Вкладка товаров' },
    { src: './assets/case-3-3.png', title: '', description: 'Превью товара' },
    { src: './assets/case-3-4.png', title: '', description: 'Создание группы товаров по динамическим фильтрам' },
    { src: './assets/case-3-5.png', title: '', description: 'Статистика по событиям' },
    { src: './assets/case-3-6.png', title: '', description: 'Настройки рекламной кампании' },
    { src: './assets/case-3-7.png', title: '', description: 'Настройка группы объявлений' },
    { src: './assets/case-3-9.png', title: '', description: 'Расширенный режим объявления' },
    { src: './assets/case-3-8.png', title: '', description: 'Упрощённый режим' },



];

export default function Case3() {
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
    const content9Ref = useInViewClass();
    const content10Ref = useInViewClass();
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

                <SpotlightCard className="case-head fade-in" ref={headerRef}>
                    <div className='head-content'>
                        <img className='case-head-img' src='./assets/vk.jpg' alt='' />
                        <h1>центр<br></br>коммерции</h1>
                    </div>
                </SpotlightCard>
                <section className='grid case'>

                    <div ref={content1Ref} className='case-content fade-in'>
                        <div className='case-par'>
                            <CaseP>
                                Центр коммерции в VK Рекламе — раздел, в который рекламодатели загружают свои товары с сайта, сообщества или маркетплейса, чтобы продвигать их на площадках VK и партнёров.
                            </CaseP>
                            <CaseP>
                                Здесь пользователь следит за актуальностью каталога, управляет группами товаров для рекламы, может отслеживать статистику и воронку по основным метрикам: просмотры, покупки и т. д. Раздел проектировался с нуля.
                            </CaseP>
                        </div>
                        <CaseH2>каталог товаров</CaseH2>
                        <div className='case-par'>
                            <CaseP>
                                Первым делом пользователю нужно загрузить информацию о своих товарах в VK Рекламу. Из интернет-магазина можно импортировать XML-фид, а ещё можно импортировать товары из сообщества ВКонтакте или магазина на маркетплейсе. Для каталогов, загружаемых по ссылке или API, можно настраивать частоту автоматического обновления.
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
                                После загрузки рекламодатель видит актуальную информацию по товарам в каталоге внутри рекламного кабинета, всю историю загрузок и диагностику проблем с каталогом
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
                            setLightboxIndex(3);
                            setOpen(true);
                        }}
                        ref={imgRef2}
                        className="fade-in"
                    />

                    <div ref={content5Ref} className='case-content fade-in'>
                        <div className='case-par'>
                            <CaseP>
                                Пользователь может рекламировать весь каталог целиком, а может создавать отдельные группы товаров вручную или используя фильтры — в этом случае группа автоматически обновляется, если, например, какой-то товар закончился на складе.
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

                    <div ref={content6Ref} className='case-content fade-in'>
                        <div className='case-par'>
                            <CaseP>
                                Позже добавился раздел событий — он нужен для просмотра статистики по воронке продаж, если рекламодатель подключил на сайте или мобильном приложении трекер аналитики.
                            </CaseP>
                            <CaseP>
                                А ещё помогает отслеживать, что в каталоге VK Рекламы есть все товары из магазина и их идентификаторы совпадают — это нужно для того, чтобы рекламные алгоритмы могли ранжировать популярные товары и отслеживать эффективность продвижения.
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

                    <div ref={content7Ref} className='case-content fade-in'>
                        <CaseH2>запуск рекламы</CaseH2>
                        <div className='case-par'>
                            
                            <CaseP>
                                Пользователь может запустить рекламную кампанию прямо из каталога или из раздела кампаний. Можно выбрать тип кампании (привлечение новых клиентов или ретаргетинг), а также установить целевое действие, чтобы алгоритмы рекламы отдавали предпочтение людям, которые с большей вероятностью добавят товар в корзину или купят.
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
                                На следующем шаге можно выбрать группу товаров для продвижения, настроить аудиторию для показа рекламы и задать специфические настройки для ретаргетинга
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
                        ref={imgRef7}
                        className="fade-in"
                    />

                    <div ref={content9Ref} className='case-content fade-in'>
                        <div className='case-par'>
                            <CaseP>
                                В конце можно настроить внешний вид объявления и посмотреть, как оно будет выглядеть в разных форматах.
                            </CaseP>
                            <CaseP>
                                Здесь со временем всё настолько обросло требованиями и дополнительными полями, что стало выглядеть слишком монструозно. Я выдвинул обоснованное предположение, что такая сложная форма отпугивает владельцев малого/среднего бизнеса и некоторые поля им настраивать даже вредно.
                            </CaseP>
                            <CaseP>
                                Я предложил по умолчанию скрыть поля, без которых большинство рекламодателей может обойтись, а настройки для изысканных господ спрятать в режим эксперта.
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

                    <CaseImg
                        src={slides[7].src}
                        caption={slides[7].description}
                        index={7}
                        onClick={() => {
                            setLightboxSlides([slides[7]]);
                            setLightboxIndex(7);
                            setOpen(true);
                        }}
                        ref={imgRef9}
                        className="fade-in"
                    />

                    {/* Результаты */}
                    <div ref={content10Ref} className='case-content fade-in'>
                        <CaseH2>результаты</CaseH2>
                        <div className='case-par'>
                            <CaseP>
                                Мы создали инструмент для продвижения товаров из разных источников: от сообщества ВКонтакте до популярных маркетплейсов. И хотя изначально он нацелен на крупных рекламодателей и профессиональных таргетологов, мы старались по возможности упростить его и для обычных владельцев маленьких магазинов, которые настраивают рекламу самостоятельно.
                            </CaseP>
                        </div>
                    </div>

                    <div ref={footerRef} className='case-footer fade-in'>
                        <h3>больше макетов по задаче можно посмотреть в фигме</h3>
                        <Button target='_blanc' href='https://www.figma.com/design/26dZtMoQWiJuTOf8Rmz0go/Ivan-Vorobyev?node-id=2018-41092&p=f&t=cJPKj1O6CmT5s1of-11' icon={FigmaIcon} />
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
