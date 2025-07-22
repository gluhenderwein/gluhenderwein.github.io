import React from 'react'
import './Contacts.css'
import ProfileCard from '../components/ProfileCard'
import CircularText from '../components/CircularText';
import { ReactComponent as TgIcon } from '../assets/tg.svg';
import { ReactComponent as InIcon } from '../assets/in.svg';
import { contactsRef } from './Navbar';
import { useInViewClass } from '../components/useInView';

export default function Contacts() {
    const leftRef = useInViewClass({ className: 'visible' });

    return (
        <section className='footer' id='contacts' ref={contactsRef}>
            <div className='grid'>
                <div ref={leftRef} className='contact-left fade-in'>

                    <h2 className='footer-header s-32'> у вас есть проект или вакансия? </h2>
                    <h3 className='s-40' style={{ color: 'var(--text-tertiary' }}> свяжитесь со мной: </h3>

                    <div className='con-footer'>
                        <a className='link-circle'>
                            <svg
                                className="link-c-image"
                                viewBox="0 0 64 64"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M50.0254 17.2309C50.3572 15.0377 48.318 13.3065 46.4108 14.1627L8.42654 31.216C7.05891 31.83 7.15896 33.9485 8.57739 34.4103L16.4106 36.9611C17.9058 37.448 19.5246 37.1961 20.8302 36.2739L38.4909 23.7973C39.0235 23.421 39.604 24.1954 39.1489 24.6749L26.4363 38.0773C25.2031 39.3775 25.4479 41.5806 26.9313 42.5317L41.1644 51.6585C42.7608 52.6821 44.8144 51.6539 45.1129 49.6811L50.0254 17.2309Z" />
                            </svg>
                            <CircularText
                                text=" ✦ TELEGRAM ✦ TELEGRAM"
                                onHover="pause"
                                spinDuration={30}
                                className="custom-class"
                            />
                        </a>

                        <a className='link-circle'>
                            <svg
                                className="link-c-image"
                                viewBox="0 0 64 64"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M45.0254 21.5742C51.0654 21.5742 55.7959 25.4876 55.7959 33.8926V49.001H46.166V34.9473C46.166 31.2722 44.6683 28.7539 41.3506 28.7539C38.8155 28.7539 37.4034 30.4555 36.7568 32.0889C36.5187 32.6673 36.5527 33.4838 36.5527 34.3174V49.001H27.0078C27.0078 49.001 27.1269 24.092 27.0078 21.8291H36.5527V26.0996C37.1144 24.2281 40.1598 21.5743 45.0254 21.5742ZM21.8359 49H13.3457V21.8281H21.8359V49ZM17.4121 9C20.5426 9.00007 22.4651 11.0247 22.5332 13.7129C22.5502 16.3329 20.5597 18.4256 17.3613 18.4258H17.293C14.2134 18.4258 12.2227 16.3501 12.2227 13.7129C12.2227 11.0247 14.2815 9 17.4121 9Z" />
                            </svg>
                            <CircularText
                                text=" ✦ LINKEDIN ✦ LINKEDIN"
                                onHover="pause"
                                spinDuration={30}
                                className="custom-class"
                            />
                        </a>
                    </div>
                </div>

                <ProfileCard
                    className='pro-card'
                    name="иван воробьёв"
                    title="senior product designer"
                    handle="gluhenwein"
                    status="online"
                    contactText="написать"
                    avatarUrl="/assets/me.png"
                    iconUrl='/assets/emo.png'
                    miniAvatarUrl='/assets/telegram.png'
                    grainUrl='https://i.pinimg.com/736x/12/af/2b/12af2b8954eb67257975dbddcd793fdd.jpg'
                    innerGradient=''
                    showUserInfo={true}
                    enableTilt={true}
                    onContactClick={() => console.log('Contact clicked')}
                    showBehindGradient={false}
                />
            </div>
        </section>
    );
}
