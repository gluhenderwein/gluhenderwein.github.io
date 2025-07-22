import React from 'react'
import './Experience.css'
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight04Icon, Asterisk02Icon } from '@hugeicons/core-free-icons';
import { experienceRef } from './Navbar';
import { useInViewClass } from '../components/useInView';

export default function Experience() {
  const titleRef = useInViewClass('fade-in');
  const cardRefs = [
    useInViewClass('fade-in'),
    useInViewClass('fade-in'),
    useInViewClass('fade-in'),
  ];

  return (
    <section id='experience' ref={experienceRef}>
      <div className='tltle s-40 fade-in' ref={titleRef}>
        <h2>мой продуктовый опыт</h2>
      </div>

      <div className='card-exp fade-in' ref={cardRefs[0]}>
        {/* Первый блок */}
        <div className='exp-col-l'>
          <img className='avatar s-24' src='https://sun9-67.userapi.com/s/v1/ig2/xYI95k-F49tIMrEhYjzlF8ryxmpr6ZAEgMT8FDmnxVaj_fkFhPEgOMymcsbxNZS1B7nxKWNP_mNEFiGTMemfevw6.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&from=bu&cs=1080x0' alt='' />
          <h3 className='s-8'>HeadHunter</h3>
          <p className='p-2' style={{ color: 'var(--text-tertiary)' }}>9 месяцев<br />июль 2024 — март 2025</p>
        </div>
        <div className='exp-col-r'>
          <h3 className='s-24'>cтарший продуктовый дизайнер</h3>
          <div className='list-item s-12'>
            <div className='list-item-i'>
              <HugeiconsIcon className='icon' icon={ArrowRight04Icon} size={32} color="var(--icon-secondary)" strokeWidth={1.5} />
            </div>
            <p className='p-2' style={{ color: 'var(--text-secondary)' }}>Сделал редизайн и подрастил метрики в некоторых разделах сервиса: выбор гео, настройки уведомлений, профиль работодателя</p>
          </div>
          <div className='list-item s-12'>
            <div className='list-item-i'>
              <HugeiconsIcon className='icon' icon={ArrowRight04Icon} size={32} color="var(--icon-secondary)" strokeWidth={1.5} />
            </div>
            <p className='p-2' style={{ color: 'var(--text-secondary)' }}>Проектировал новые сценарии и фичи для рекламного кабинета Clickme и работодательской вертикали</p>
          </div>
          <div className='list-item s-24'>
            <div className='list-item-i'>
              <HugeiconsIcon className='icon' icon={ArrowRight04Icon} size={32} color="var(--icon-secondary)" strokeWidth={1.5} />
            </div>
            <p className='p-2' style={{ color: 'var(--text-secondary)' }}>Сделал редизайн всех рекламных мест на hh</p>
          </div>
          <div className='callout'>
            <HugeiconsIcon className='icon' icon={Asterisk02Icon} size={24} color="var(--text-primary)" strokeWidth={2} />
            <p className='p-2'>Увеличил CTR рекламных баннеров в поиске вакансий на 500%</p>
          </div>
        </div>
      </div>

      <div className='card-exp fade-in' ref={cardRefs[1]}>
        {/* Второй блок */}
        <div className='exp-col-l'>
          <img className='avatar s-24' src='https://sun1-54.userapi.com/s/v1/ig2/TFwaVboUPyaWCUYqe_9PHv9oicu1FB_-ZgWFxeOPrVxC3MpUrBnkr5VNR2xxdBIhNZspGwngmPlzoEjJEgCtOwVi.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1000x1000&from=bu&cs=1000x0' alt='' />
          <h3 className='s-8'>VK Реклама</h3>
          <p className='p-2' style={{ color: 'var(--text-tertiary)' }}>3 года 2 месяца<br />май 2021 — июнь 2024</p>
        </div>
        <div className='exp-col-r'>
          <h3 className='s-24'>cтарший продуктовый дизайнер</h3>
          <div className='list-item s-12'>
            <div className='list-item-i'>
              <HugeiconsIcon className='icon' icon={ArrowRight04Icon} size={32} color="var(--icon-secondary)" strokeWidth={1.5} />
            </div>
            <p className='p-2' style={{ color: 'var(--text-secondary)' }}>Совместно с командой дизайнеров проектировал с нуля новый кабинет VK Рекламы и самостоятельно работал над отдельными направлениями внутри него — центр коммерции, лид-формы, опросы, аудитории</p>
          </div>
          <div className='list-item s-12'>
            <div className='list-item-i'>
              <HugeiconsIcon className='icon' icon={ArrowRight04Icon} size={32} color="var(--icon-secondary)" strokeWidth={1.5} />
            </div>
            <p className='p-2' style={{ color: 'var(--text-secondary)' }}>Активно участвовал в развитии дизайн-системы VKUI</p>
          </div>
          <div className='list-item s-12'>
            <div className='list-item-i'>
              <HugeiconsIcon className='icon' icon={ArrowRight04Icon} size={32} color="var(--icon-secondary)" strokeWidth={1.5} />
            </div>
            <p className='p-2' style={{ color: 'var(--text-secondary)' }}>Взял на себя стандартизацию и систематизацию паттернов и подходов к дизайну внутри продукта, писал гайды и вёл библиотеку продуктовых компонентов</p>
          </div>
          <div className='list-item s-12'>
            <div className='list-item-i'>
              <HugeiconsIcon className='icon' icon={ArrowRight04Icon} size={32} color="var(--icon-secondary)" strokeWidth={1.5} />
            </div>
            <p className='p-2' style={{ color: 'var(--text-secondary)' }}>Внедрил несколько новых интерактивных рекламных форматов для e-comm и спроектировал полностью адаптивный рекламный формат</p>
          </div>
          <div className='list-item s-12'>
            <div className='list-item-i'>
              <HugeiconsIcon className='icon' icon={ArrowRight04Icon} size={32} color="var(--icon-secondary)" strokeWidth={1.5} />
            </div>
            <p className='p-2' style={{ color: 'var(--text-secondary)' }}>Участвовал в найме и менторил новых дизайнеров</p>
          </div>
          <div className='list-item s-24'>
            <div className='list-item-i'>
              <HugeiconsIcon className='icon' icon={ArrowRight04Icon} size={32} color="var(--icon-secondary)" strokeWidth={1.5} />
            </div>
            <p className='p-2' style={{ color: 'var(--text-secondary)' }}>Проводил ревью дизайн-решений в команде</p>
          </div>
          <div className='callout'>
            <HugeiconsIcon className='icon' icon={Asterisk02Icon} size={24} color="var(--text-primary)" strokeWidth={2} />
            <p className='p-2'>Спроектировал дизайн-систему и сделал редизайн всех рекламных форматов рекламной сети VK</p>
          </div>
        </div>
      </div>

      <div className='card-exp fade-in' ref={cardRefs[2]}>
        {/* Третий блок */}
        <div className='exp-col-l'>
          <img className='avatar s-24' src='https://sun9-68.userapi.com/s/v1/ig2/T8oODz9B1t4l4-Higz_EyxaiwBlcveFa2eOqY8fu_7UfaNzl43UveMc_w7b7hqOSftLYypYII-I2hIUI3t7gl4jk.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1200x1200&from=bu&cs=1200x0' alt='' />
          <h3 className='s-8'>IT MegaStar</h3>
          <p className='p-2' style={{ color: 'var(--text-tertiary)' }}>1 год 7 месяцев<br />ноябрь 2019 — май 2021</p>
        </div>
        <div className='exp-col-r'>
          <h3 className='s-24'>продуктовый дизайнер</h3>

          <p className='p-2' style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>Выступал как аутсорсный продуктовый дизайнер в проектном офисе VK:</p>

          <div className='list-item s-12'>
            <div className='list-item-i'>
              <HugeiconsIcon className='icon' icon={ArrowRight04Icon} size={32} color="var(--icon-secondary)" strokeWidth={1.5} />
            </div>
            <p className='p-2' style={{ color: 'var(--text-secondary)' }}>Заложил первую кнопку и больше года был единственным дизайнером в VK People Hub (платформа для повышения вовлеченности и эффективности персонала)</p>
          </div>

          <div className='list-item s-12'>
            <div className='list-item-i'>
              <HugeiconsIcon className='icon' icon={ArrowRight04Icon} size={32} color="var(--icon-secondary)" strokeWidth={1.5} />
            </div>
            <p className='p-2' style={{ color: 'var(--text-secondary)' }}>Совместно с ещё одним дизайнером проектировал корпоративный портал для Лукойла</p>
          </div>

          <div className='list-item s-12'>
            <div className='list-item-i'>
              <HugeiconsIcon className='icon' icon={ArrowRight04Icon} size={32} color="var(--icon-secondary)" strokeWidth={1.5} />
            </div>
            <p className='p-2' style={{ color: 'var(--text-secondary)' }}>Спроектировал интерактивную презентацию для МТС Smart Home</p>
          </div>

          <div className='list-item'>
            <div className='list-item-i'>
              <HugeiconsIcon className='icon' icon={ArrowRight04Icon} size={32} color="var(--icon-secondary)" strokeWidth={1.5} />
            </div>
            <p className='p-2' style={{ color: 'var(--text-secondary)' }}>Создал пресейловую концепцию и презентацию корпоративного портала для Минкомсвязи (цифровое рабочее место сотрудника)</p>
          </div>

        </div>
      </div>

    </section>
  )
}
