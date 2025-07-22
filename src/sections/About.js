import React from 'react'
import '../App.css'
import { HugeiconsIcon } from '@hugeicons/react';
import { CircleArrowUpDoubleIcon } from '@hugeicons/core-free-icons';

import { useInViewClass } from '../components/useInView';

const About = () => {
    const cardRef1 = useInViewClass({ className: 'visible' });
    const cardRef2 = useInViewClass({ className: 'visible' });
    const cardRef3 = useInViewClass({ className: 'visible' });
    const parRef = useInViewClass({ className: 'visible' });

    return (
        <section>
            <div className='grid'>

                <div
                    className='card-blur fade-in'
                    ref={cardRef1}
                >
                    <HugeiconsIcon className='icon'
                        icon={CircleArrowUpDoubleIcon}
                        size={64}
                        color="var(--icon-secondary)"
                        strokeWidth={1.5}
                    />
                    <p className='p-2'>
                        Умею выстраивать работу с фронтенд-разработчиками, так как хорошо понимаю HTML и CSS и проектирую реалистичные и простые для внедрения интерфейсы
                    </p>
                </div>

                <div
                    className='card-blur fade-in'
                    ref={cardRef2}
                >
                    <HugeiconsIcon className='icon'
                        icon={CircleArrowUpDoubleIcon}
                        size={64}
                        color="var(--icon-secondary)"
                        strokeWidth={1.5}
                    />
                    <p className='p-2'>
                        Умею выстраивать работу с фронтенд-разработчиками, так как хорошо понимаю HTML и CSS и проектирую реалистичные и простые для внедрения интерфейсы
                    </p>
                </div>

                <div
                    className='card-blur fade-in'
                    ref={cardRef3}
                >
                    <HugeiconsIcon className='icon'
                        icon={CircleArrowUpDoubleIcon}
                        size={64}
                        color="var(--icon-secondary)"
                        strokeWidth={1.5}
                    />
                    <p className='p-2'>
                        Умею выстраивать работу с фронтенд-разработчиками, так как хорошо понимаю HTML и CSS и проектирую реалистичные и простые для внедрения интерфейсы
                    </p>
                </div>

                <div
                    className='h3-par-wrap fade-in'
                    ref={parRef}
                >
                    <h3 className='h-3-par'>
                        мой опыт связан, в основном, с b2b продуктами: рекламными платформами, большими и сложными интерфейсами
                    </h3>
                    <h3 className='h-3-par'>
                        но я открыт и к смене направления, и к перспективам роста в позицию дизайн-лида
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default About;
