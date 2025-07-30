import React from 'react'
import '../App.css'
import { HugeiconsIcon } from '@hugeicons/react';
import { ChartBreakoutSquareIcon, SourceCodeSquareIcon, UserIdVerificationIcon } from '@hugeicons/core-free-icons';

import { useInViewClass } from '../components/useInView';
import SpotlightCard from '../components/SpotlightCard';

const About = () => {
    const cardRef1 = useInViewClass({ className: 'visible' });
    const cardRef2 = useInViewClass({ className: 'visible' });
    const cardRef3 = useInViewClass({ className: 'visible' });
    const parRef = useInViewClass({ className: 'visible' });

    return (
        <section>
            <div className='grid'>
                <SpotlightCard className="fade-in card" ref={cardRef1}>
                    <HugeiconsIcon className='icon'
                        icon={ChartBreakoutSquareIcon}
                        size={64}
                        color="var(--icon-secondary)"
                        strokeWidth={1.5}
                    />
                    <p className='p-2'>
                        Продакты ценят работу со мной за скорость, глубокое понимание задач и продуманные, масштабируемые решения, которые избавляют их от лишней суеты
                    </p>
                </SpotlightCard>
                <SpotlightCard className="fade-in card" ref={cardRef2}>
                    <HugeiconsIcon className='icon'
                        icon={SourceCodeSquareIcon}
                        size={64}
                        color="var(--icon-secondary)"
                        strokeWidth={1.5}
                    />
                    <p className='p-2'>
                        Фронтендеры любят мои интерфейсы за проработанную логику, учёт тонкостей вёрстки и проработку всех состояний, потому что их легко и быстро внедрять
                    </p>
                </SpotlightCard>
                <SpotlightCard className="fade-in card" ref={cardRef3}>
                    <HugeiconsIcon className='icon'
                        icon={UserIdVerificationIcon}
                        size={64}
                        color="var(--icon-secondary)"
                        strokeWidth={1.5}
                    />
                    <p className='p-2'>
                        Пользователи об этом не догадываются, но могли бы тоже любить мои интерфейсы, потому что я всегда стараюсь найти компромисс между ними и интересами бизнеса
                    </p>
                </SpotlightCard>
                

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
