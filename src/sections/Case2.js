import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import './Case.css'
import '../components/EmblaCarousel.css'
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft02Icon, ArrowRight02Icon, ArrowRight04Icon, Cancel01Icon, FigmaIcon } from '@hugeicons/core-free-icons';
import ThemeToggle from '../components/ThemeToggle'
import CaseImg from '../components/CaseImg';
import CaseHeader from './CaseHeader';
import Contacts from './Contacts';
import ButtonSecondary from '../components/ButtonSecondary';
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
    { src: './assets/case-2-1.png', title: '', description: '' },
    { src: './assets/case-2-2.png', title: '', description: 'Шаг 1: выбор вакансий' },
    { src: './assets/case-2-3.png', title: '', description: 'Шаг 2: настройка кампаний' },
    { src: './assets/case-2-4.png', title: '', description: 'Массовые изменения' },
    { src: './assets/case-2-5.png', title: '', description: 'Дополнительные состояния' },
    { src: './assets/case-2-6.png', title: '', description: 'Мобильная версия' },
    { src: './assets/case-2-7.png', title: '', description: 'Предложение пополнить баланс на недостающую сумму' },

];

export default function Case2() {
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

            <div className='case-overflow'>
                <CaseHeader
                    logoIndex={0}
                    mainIndex={1}
                    bgIndex={0}
                    title="массовое продвижение вакансий"
                    refProp={headerRef}
                />

                <section className='grid'>
                    <div ref={content1Ref} className='case-content fade-in'>
                        <div className='case-par'>
                            <CaseP>
                                Топ поиска — продукт направления монетизации. Работодатели могут за плату размещать свои вакансии на первых позициях поисковой выдачи.
                            </CaseP>
                            <CaseP>
                                Сейчас подключить топ поиска можно только к каждой вакансии по отдельности, однако есть ряд крупных клиентов, у которых тысячи активных вакансий и появилась необходимость сделать возможность массового запуска продвижения.
                            </CaseP>
                        </div>
                        <CaseH2>проблема</CaseH2>
                        <div className='case-par'>
                            <CaseP>
                                Текущая форма для подключения топа поиска к вакансии сама по себе занимает целый экран, обязательно нужны поля для ставки, бюджета, дат продвижения и индикатор частоты показов. Моей задачей было масштабировать это на условные 100 вакансий одновременно.
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
                        <CaseH2>решение</CaseH2>
                        <div className='case-par'>
                            <CaseP>
                                Любой флоу с массовыми действиями делится на 2 этапа. Первым делом нужно массово выбрать объекты, с которыми будет производиться действие. В нашем случае это вакансии, которых может быть несколько тысяч всего и из них нужно выбрать несколько десятков или сотен.
                            </CaseP>
                            <CaseP>
                                Поэтому один экран мы полностью выделили на выбор вакансий. Здесь есть фильтры, которые позволяют показать только вакансии из определённых регионов или определённых менеджеров, а так же поле поиска, в которое можно вставлять не только одиночные запросы, но и целые колонки из экселя, чтобы одним элегантным движением получить весь список нужных вакансий.
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
                                После выбора вакансий мы переводим пользователя к настройке рекламных кампаний. У каждой вакансии есть свой набор полей и индикатор частоты показов, который зависит от ставки. Ставку и бюджет для каждой вакансии мы рассчитываем автоматически, так что пользователю можно ничего с этим не делать, но при желании он может изменить их отдельно у каждой вакансии.
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
                                При необходимости пользователь может массово изменить ставки/бюджеты/даты продвижения на свои или так же вернуть к рекомендованным значениям
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
                        <CaseH2>побочный продукт задачи</CaseH2>
                        <div className='case-par'>
                            <CaseP>
                                Очень часто, делая одну задачу, ты по дороге можешь решить несколько лежащих рядом. В этом случае мы обрабатывали ситуацию, когда совокупный бюджет всех кампаний превышает баланс на счёте. Это не является блокером для создания кампаний, но может привести к остановке всей рекламы из-за нехватки средств.
                            </CaseP>
                            <CaseP>
                                Решением стал алерт, который мы показываем после успешного завершения сценария, с просьбой пополнить счёт. Оно вовсе не гениальное, но такой механики в рекламном кабинете не было, но было много ситуаций, когда у пользователей заканчивались деньги и останавливалась открутка рекламы. А это неудобно пользователям и не выгодно продукту, так что эту механику мы взяли в рекламный кабинет отдельно от конкретного флоу.
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

                    {/* Результаты */}
                    <div ref={content7Ref} className='case-content fade-in'>
                        <CaseH2>результаты</CaseH2>
                        <div className='case-par'>
                            <CaseP>
                                Это продуктовое улучшение, которое сделано для клиентов, у которых размещены тысячи вакансий, а значит они уже приносят сервису много денег.
                            </CaseP>
                            <CaseP>
                                Мы сделали решение, которое облегчает менеджерам вакансий запуск продвижения и экономит десятки часов, освобождая это время на обработку откликов или кофе с коллегами.
                            </CaseP>
                        </div>
                    </div>

                    <div ref={footerRef} className='case-footer fade-in'>
                        <h3>больше макетов по задаче можно посмотреть в фигме</h3>
                        <ButtonSecondary target='_blanc' href='https://www.figma.com/design/26dZtMoQWiJuTOf8Rmz0go/Ivan-Vorobyev?node-id=2028-128036&p=f&t=cJPKj1O6CmT5s1of-11' icon={FigmaIcon} />
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
