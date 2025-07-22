import React from 'react'
import '../App.css'
import './Case.css'
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft02Icon, Link02Icon } from '@hugeicons/core-free-icons';
import ThemeToggle from '../components/ThemeToggle'
import EmblaCarousel from '../components/EmblaCarousel';
import Contacts from './Contacts';
import Button from '../components/Button';
import { useInViewClass } from '../components/useInView';

const useAnimatedRef = () => useInViewClass({ className: 'visible' });

const slides = [
    { src: 'https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Описание 1' },
    { src: 'https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { src: 'https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Описание 3' }
];

export default function Case() {
  const headerRef = useAnimatedRef();
  const content1Ref = useAnimatedRef();
  const content2Ref = useAnimatedRef();
  const footerRef = useAnimatedRef();
  const carouselRef = useAnimatedRef();

  return (
    <>
      <section className='case-navigation'>
        <a className='btn-back' href='/#portfolio'>
          <HugeiconsIcon className='icon'
            icon={ArrowLeft02Icon}
            size={24}
            color=""
            strokeWidth={2}
          />
          назад
        </a>
        <ThemeToggle />
      </section>
      <section className='grid case'>
        <div ref={headerRef} className='case-header fade-in'>
          <img className='case-img' src='https://sun9-67.userapi.com/s/v1/ig2/xYI95k-F49tIMrEhYjzlF8ryxmpr6ZAEgMT8FDmnxVaj_fkFhPEgOMymcsbxNZS1B7nxKWNP_mNEFiGTMemfevw6.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&from=bu&cs=1080x0' alt='' />
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

        <EmblaCarousel ref={carouselRef} className='fade-in' slides={slides} />

        <div ref={content2Ref} className='case-content fade-in'>
          <div className='case-par'>
            <p className='p-2'>
              Я заметил, что название некоторых уведомлений мало говорит об их ценности для пользователя и предложил с помощью редактора добавить к ним описание.
            </p>
          </div>
        </div>

        <div ref={footerRef} className='case-footer fade-in'>
          <h3>больше макетов по задаче можно посмотреть в фигме</h3>
          <Button href='/' icon={Link02Icon} />
        </div>
      </section>

      <Contacts />
    </>
  );
}
