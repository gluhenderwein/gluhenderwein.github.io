import React from 'react'
import './Feedback.css'
import { feedbackRef } from './Navbar'
import { useInViewClass } from '../components/useInView'

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
      <div className='tltle s-40 fade-in' ref={titleRef}>
        <h2>коллеги о работе со мной</h2>
      </div>
      <div className='grid' >

        <div className='col-feedback'>
          <div className='card-blur card-feedback fade-in' ref={cardRefs[0]}>
            <div className='user-cell'>
              <img className='avatar' src='https://sun1-95.userapi.com/s/v1/ig2/zBjdfzuQY1Uc0lnhAzKBnnHSzvsVpZ6cy-kvcBpHwr2RiAqcNc3uRjTcz1pcR0WjomKZziyFUtcGJBP85-Rmm3gY.jpg?quality=96&crop=0,64,1975,1975&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440&ava=1&u=cLak0LuCCarYB5Vnjx-Ga9mGpOCkxIxfag0rs4ZzbvQ&cs=160x160' alt='' />
              <div>
                <h4 >анна краснова</h4>
                <p className='p-3' style={{ color: 'var(--text-tertiary)' }}>менеджер продукта, HeadHunter</p>
              </div>
            </div>

            <p className='p-2'>
              ты супер талантище, твоя скорость работы и понимание, что именно нужно делать супер крутые для любых продактов, особенно это было полезно для меня, только начинающей работать с интерфейсами
              с тобой было как за каменной стеной))
            </p>
          </div>

          <div className='card-blur card-feedback fade-in' ref={cardRefs[1]}>
            <div className='user-cell'>
              <img className='avatar' src='https://sun1-95.userapi.com/s/v1/ig1/Jrr32cXZ-iJCHizW2zihMmzge8n1vMl_NZI4SEQritNgIibinaazzggCcyYG1SpH39W3xI15.jpg?quality=96&crop=0,0,581,581&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540&ava=1&u=qkKDE_jvKGRo-75kYrmFhxi6f0oekA2eG7KEUAXTeM4&cs=400x400' alt='' />
              <div>
                <h4 >анна назарова</h4>
                <p className='p-3' style={{ color: 'var(--text-tertiary)' }}>менеджер продукта, HeadHunter</p>
              </div>
            </div>

            <p className='p-2'>
              С тобой было очень круто<br></br>Реально!<br></br>На самом деле, сделали с тобой очень крутые вещи<br></br>Ты нам флоу Мультиотклика и ВР помог сделать<br></br>Мы до этого мучались<br></br>А тут прям круто получилось<br></br>И вообще по всем задачам максимально всегда слышал
            </p>

            <p className='p-2'>
              Так вот — ты реально крутой дизайнер. Ты слышишь заказчика, соглашаешься с его бредом, готов к компромиссам
            </p>
          </div>
        </div>

        <div className='col-feedback'>
          <div className='card-blur card-feedback fade-in' ref={cardRefs[2]}>
            <div className='user-cell'>
              <img className='avatar' src='https://sun1-55.userapi.com/s/v1/ig2/DVLEYgj0V9g0kCJd1iU7RPRIoKOZib42pYztZlfnaL7Q_y0dsJ7d9NZgdiwedG1T0Zi9vQ2bDGLZhbGQVSQq-z3s.jpg?quality=95&crop=0,40,1364,1364&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280&ava=1&u=om15WbH5Zm6TItW8qmKCO3gWhKrF5NSPICrHhIkjCj8&cs=160x160' alt='' />
              <div>
                <h4 >халид джавадов</h4>
                <p className='p-3' style={{ color: 'var(--text-tertiary)' }}>менеджер продукта, HeadHunter</p>
              </div>
            </div>

            <p className='p-2'>
              и хочу сказать еще большее спасибо за твой вклад! за то что показал, что такое — высокий уровень!
            </p>

            <p className='p-2'>
              результаты твоей работы радуют нас сейчас, и уверен будут радовать нас и наших пользователей еще долго)
            </p>

            <p className='p-2'>
              решать сложные задачки, да и в целом просто работать с тобой — было прикольно, весело, результативно и, что оч для меня ценно, это было развивающе) ты крутой дизайнер!
            </p>
          </div>

          <div className='card-blur card-feedback fade-in' ref={cardRefs[3]}>
            <div className='user-cell'>
              <img className='avatar' src='https://sun1-95.userapi.com/impg/DW4IDqvukChyc-WPXmzIot46En40R00idiUAXw/l5w5aIHioYc.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360&sign=10ad7d7953daabb7b0e707fdfb7ebefd&u=I6EtahnrCRLlyd0MhT2raQt6ydhuyxX4s72EHGuUSoM&cs=400x400' alt='' />
              <div>
                <h4 >леонид дугенец</h4>
                <p className='p-3' style={{ color: 'var(--text-tertiary)' }}>фронтенд-разработчик, HeadHunter</p>
              </div>
            </div>

            <p className='p-2'>
              Вань, с тобой было приятно работать
            </p>

            <p className='p-2'>
              мне нравятся такие люди как ты люди, которые работают не только из-за денег, а ещё из-за собственных амбиций, идей, интереса, да и просто желания работать
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
