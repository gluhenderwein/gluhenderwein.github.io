import React from 'react'
import './Feedback.css'
import { feedbackRef } from './Navbar'
import { useInViewClass } from '../components/useInView'
import SpotlightCard from '../components/SpotlightCard';

export default function Feedback() {
  const titleRef = useInViewClass('fade-in')
  const cardRefs = [
    useInViewClass('fade-in'),
    useInViewClass('fade-in'),
    useInViewClass('fade-in'),
    useInViewClass('fade-in'),
  ]

  return (
    <section id='feedback' ref={feedbackRef}>
      <div className='title s-40 fade-in' ref={titleRef}>
        <h2>коллеги о работе со мной</h2>
      </div>
      <div className='grid' >

        <div className='col-feedback'>

          <SpotlightCard className="card-feedback fade-in card" ref={cardRefs[0]}>
            <div className='user-cell'>
              <img className='avatar' src='./assets/r-1.jpg' alt='' />
              <div className='user-cell-text'>
                <h4 >анна краснова</h4>
                <p className='p2' style={{ color: 'var(--text-tertiary)' }}>менеджер продукта, HeadHunter</p>
              </div>
            </div>

            <p className='p2'>
              ты супер талантище, твоя скорость работы и понимание, что именно нужно делать супер крутые для любых продактов, особенно это было полезно для меня, только начинающей работать с интерфейсами
              с тобой было как за каменной стеной))
            </p>
          </SpotlightCard>

          <SpotlightCard className="card-feedback fade-in card" ref={cardRefs[1]}>
            <div className='user-cell'>
              <img className='avatar' src='./assets/r-3.jpg' alt='' />
              <div className='user-cell-text'>
                <h4 >анна назарова</h4>
                <p className='p2' style={{ color: 'var(--text-tertiary)' }}>менеджер продукта, HeadHunter</p>
              </div>
            </div>

            <p className='p2'>
              С тобой было очень круто<br></br>Реально!<br></br>На самом деле, сделали с тобой очень крутые вещи<br></br>Ты нам флоу Мультиотклика и ВР помог сделать<br></br>Мы до этого мучались<br></br>А тут прям круто получилось<br></br>И вообще по всем задачам максимально всегда слышал
            </p>
            <p className='p2'>
              Так вот — ты реально крутой дизайнер. Ты слышишь заказчика, соглашаешься с его бредом, готов к компромиссам
            </p>
          </SpotlightCard>

        </div>

        <div className='col-feedback'>
          <SpotlightCard className="card-feedback fade-in card" ref={cardRefs[2]}>
            <div className='user-cell'>
              <img className='avatar' src='./assets/r-2.jpg' alt='' />
              <div className='user-cell-text'>
                <h4 >халид джавадов</h4>
                <p className='p2' style={{ color: 'var(--text-tertiary)' }}>менеджер продукта, HeadHunter</p>
              </div>
            </div>

            <p className='p2'>
              и хочу сказать еще большее спасибо за твой вклад! за то что показал, что такое — высокий уровень!
            </p>

            <p className='p2'>
              результаты твоей работы радуют нас сейчас, и уверен будут радовать нас и наших пользователей еще долго)
            </p>

            <p className='p2'>
              решать сложные задачки, да и в целом просто работать с тобой — было прикольно, весело, результативно и, что оч для меня ценно, это было развивающе) ты крутой дизайнер!
            </p>
          </SpotlightCard>

          <SpotlightCard className="card-feedback fade-in card" ref={cardRefs[3]}>
            <div className='user-cell'>
              <img className='avatar' src='./assets/r-4.jpg' alt='' />
              <div className='user-cell-text'>
                <h4 >леонид дугенец</h4>
                <p className='p2' style={{ color: 'var(--text-tertiary)' }}>фронтенд-разработчик, HeadHunter</p>
              </div>
            </div>

            <p className='p2'>
              Вань, с тобой было приятно работать
            </p>

            <p className='p2'>
              мне нравятся такие люди как ты люди, которые работают не только из-за денег, а ещё из-за собственных амбиций, идей, интереса, да и просто желания работать
            </p>
          </SpotlightCard>

        </div>

      </div>
    </section>
  )
}
