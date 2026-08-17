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
                <SpotlightCard className="fade-in card card-about" ref={cardRef1}>
                    <HugeiconsIcon className='icon'
                        icon={ChartBreakoutSquareIcon}
                        size={64}
                        color="var(--icon-tertiary)"
                        strokeWidth={1.5}
                    />
                    <p className='p2'>
                        Продакты ценят работу со мной за скорость, глубокое понимание задач и продуманные, масштабируемые решения, которые избавляют их от лишней суеты
                    </p>
                </SpotlightCard>
                <SpotlightCard className="fade-in card card-about" ref={cardRef2}>
                    <HugeiconsIcon className='icon'
                        icon={SourceCodeSquareIcon}
                        size={64}
                        color="var(--icon-tertiary)"
                        strokeWidth={1.5}
                    />
                    <p className='p2'>
                        Фронтендеры любят мои интерфейсы за проработанную логику, учёт тонкостей вёрстки и проработку всех состояний, потому что их легко и быстро внедрять
                    </p>
                </SpotlightCard>
                <SpotlightCard className="fade-in card card-about" ref={cardRef3}>
                    <HugeiconsIcon className='icon'
                        icon={UserIdVerificationIcon}
                        size={64}
                        color="var(--icon-tertiary)"
                        strokeWidth={1.5}
                    />
                    <p className='p2'>
                        Пользователи об этом не догадываются, но могли бы тоже любить мои интерфейсы, потому что я всегда стараюсь найти компромисс между ними и бизнесом
                    </p>
                </SpotlightCard>
                

                <div
                    className='text-about fade-in'
                    ref={parRef}
                >
                    <p className='p0'>
                        Я запускал с нуля сложные коммерческие продукты, оптимизировал сценарии и проводил редизайны, которые кратно растили метрики и выручку
                    </p>
                    <p className='p0'>
                        Создавал и развивал дизайн-системы, участвовал в найме и наставлял дизайнеров, делал гайды и выстраивал дизайн-процессы в команде
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
