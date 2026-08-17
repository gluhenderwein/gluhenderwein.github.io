import React, { useState, useRef, useEffect } from 'react'
import './Experience.css'
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight04Icon, Pdf01Icon } from '@hugeicons/core-free-icons';
import { experienceRef } from './Navbar';
import { useInViewClass } from '../components/useInView';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';

function ExpItem({ text }) {
  return (
    <div className='list-item'>
      <div className='list-item-i'>
        <HugeiconsIcon icon={ArrowRight04Icon} size={32} color="var(--icon-secondary)" strokeWidth={1.5} />
      </div>
      <p className='p2' style={{ color: 'var(--text-secondary)' }}>{text}</p>
    </div>
  );
}

function ExpCard({ left, children, cardRef }) {
  const contentRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [needsButton, setNeedsButton] = useState(false);

  useEffect(() => {
    if (contentRef.current && contentRef.current.scrollHeight > 464) {
      setNeedsButton(true);
    }
  }, []);

  return (
    <div className="grid card-exp fade-in card" ref={cardRef}>
      {left}
      <div
        ref={contentRef}
        className={`exp-content ${expanded ? 'expanded' : ''} ${needsButton ? 'is-clamped' : ''}`}
      >
        <div className="exp-content-inner">
          {children}
        </div>

        {needsButton && !expanded && (
          <ButtonSecondary
            label="показать полностью"
            onClick={() => setExpanded(true)}
          />
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const titleRef = useInViewClass('fade-in');
  const cardRefs = [
    useInViewClass('fade-in'),
    useInViewClass('fade-in'),
    useInViewClass('fade-in'),
  ];

  return (
    <section id='experience' ref={experienceRef}>
      <div className='title s-40 fade-in' ref={titleRef}>
        <h2>мой опыт</h2>
      </div>
      <ButtonPrimary
          icon={Pdf01Icon}
          label="скачать cv"
          href="./assets/Ivan_Vorobyev_CV.pdf"
          download
        />

      <ExpCard
        cardRef={cardRefs[0]}
        left={
          <div className='exp-company'>
            <img className='com-avatar' src='./assets/hh.jpg' alt='' loading='lazy' decoding='async' />
            <div className='c-name'>
              <h3>headhunter</h3>
              <p className='p2' style={{ color: 'var(--text-tertiary)' }}>июль 2024 — март 2025</p>
            </div>

          </div>
        }
      >
        <h3 className='s-24'>senior product designer</h3>
        <ExpItem text="Сделал редизайн настроек уведомлений в рамках редизайна сервиса и перехода на новую дизайн-систему: повысил retention, отклики и продажи услуг за счёт роста подписок до 480%" />
        <ExpItem text="Провёл редизайн рекламных форматов, создав компонентную систему баннеров для лёгкого внедрения и поддержки: по итогам A/B-тестов CTR вырос до +500%" />
        <ExpItem text="Перепроектировал сценарий массовых откликов у соискателей и внедрил осознанный выбор вакансий, что повысило релевантность откликов и снизило стоимость целевого на 30%" />
        <ExpItem text="Спроектировал интерфейс массового продвижения вакансий, который многократно снизил нагрузку на рекрутеров и увеличил количество запущенных кампаний" />
        <ExpItem text="Внедрил AI-генерацию изображений в сценарий создания рекламных кампаний, чем упростил запуск для клиентов без дизайнеров, повысил качество креативов и расширил охват рекламы" />
      </ExpCard>

      <ExpCard
        cardRef={cardRefs[1]}
        left={
          <div className='exp-company'>
            <img className='com-avatar' src='./assets/vk.jpg' alt='' loading='lazy' decoding='async' />
            <div className='c-name'>
              <h3>vk реклама</h3>
              <p className='p2' style={{ color: 'var(--text-tertiary)' }}>май 2021 — июнь 2024</p>
            </div>
          </div>
        }
      >
        <h3 className='s-24'>senior / lead product designer</h3>
        <ExpItem text="Спроектировал основной сценарий создания рекламных кампаний и настройки аудиторий для нового рекламного кабинета VK, масштабируемый под любые объекты рекламы" />
        <ExpItem text="Разработал с нуля Центр коммерции — инструмент для запуска товарной рекламы с загрузкой фидов и аналитикой, который стал вторым по выручке в рекламном кабинете" />
        <ExpItem text="Сделал редизайн приложения и конструктора лид-форм: увеличил конверсию в заявку на 360% и построил масштабируемую платформу, на базе которой запустил опросы, лендинги и онлайн-запись на услуги" />
        <ExpItem text="Запустил MVP конструктора опросов за 1 месяц и приложение онлайн-записи на базе YClients за 3 недели с интеграцией в экосистему ВКонтакте (iOS, Android и web)" />
        <ExpItem text="Провёл редизайн всей рекламной сети VK: создал специализированную дизайн-систему с учётом юридических ограничений, адаптивные форматы под любые размеры слота, интерактивный видеоформат для рекламы товаров" />
        <ExpItem text="Отвечал за консистентность интерфейсов в продукте: заложил принципы навигации и архитектуры интерфейсов, курировал библиотеку продуктовых паттернов и гайдлайнов, внедрил дизайн-ревью и стандарты работы с макетами" />
        <ExpItem text="Активно участвовал в развитии дизайн-системы VKUI: спроектировал ключевые компоненты (поля ввода, селекты, календарь и таблицы), ускорил разработку и обеспечил поддержку сложных кейсов" />
        <ExpItem text="Участвовал в найме и менторил двух middle-дизайнеров: помогал разбираться в сложных бизнес-процессах, строить аргументацию и защищать решения перед командой" />
        <ExpItem text="Участвовал в UX-исследованиях, строил и проверял гипотезы, помогал интерпретировать результаты и правильно расставить приоритеты" />
      </ExpCard >

      <ExpCard
        cardRef={cardRefs[2]}
        left={
          <div className='exp-company'>
            <img className='com-avatar' src='./assets/mg.jpg' alt='' loading='lazy' decoding='async' />
            <div className='c-name'>
              <h3>it megastar</h3>
              <p className='p2' style={{ color: 'var(--text-tertiary)' }}>ноябрь 2019 — май 2021</p>
            </div>
          </div>
        }
      >
        <h3 className='s-24'>product designer</h3>
        <ExpItem text="Спроектировал с нуля b2e-платформу VK People Hub для повышения вовлеченности персонала: социальные функции, календари, встречи, бронирование переговорных и система обучения. Часть решений была интегрирована в корпоративный интранет и мессенджер VK Teams" />
        <ExpItem text="Спроектировал корпоративный портал Лукойла, включая модуль обработки заявок для HR и сотрудников, адаптированный под приложения iOS и Android" />
        <ExpItem text="Разработал интерактивную презентацию умного дома МТС SmartHome для сенсорных экранов " />
      </ExpCard>

    </section >
  )
}
