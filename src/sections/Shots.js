import React, { Component } from 'react'
import '../App.css'
import './Shots.css'
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft02Icon, ArrowRight02Icon, Cancel01Icon } from '@hugeicons/core-free-icons';
import ThemeToggle from '../components/ThemeToggle'
import Contacts from './Contacts';
import { useInViewClass } from '../components/useInView';
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Shot from '../components/Shot';

const useAnimatedRef = () => useInViewClass({ className: 'visible' });


export default class Shots extends Component {
    render() {
        return (
            <div>
                <section className='case-navigation'>
                    <a className='btn-back' href='/#portfolio'>
                        <HugeiconsIcon
                            icon={ArrowLeft02Icon}
                            size={24}
                            color=""
                            strokeWidth={2}
                        />
                        назад
                    </a>
                    <ThemeToggle />
                </section>
                <section style={{paddingBottom:'0px'}}>
                    <div className='shot-header'>
                        <h1 style={{maxWidth:'800px'}}>шоты с разных проектов</h1>
                    </div> 
                </section>

                <section>
                    <div className='masonry'>
                    <Shot src="https://images.unsplash.com/photo-1682687219356-e820ca126c92?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" caption="Описание изображения" style={{ width: 'calc(100% / 3 - 18px)' }} />
                    <Shot src="https://images.unsplash.com/photo-1752654976506-d74220924976?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" caption="Описание изображения" />
                    <Shot src="https://images.unsplash.com/photo-1750493189284-7ca9d3583f48?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D" caption="" />
                    <Shot src="https://images.unsplash.com/photo-1752606402425-fa8ed3166a91?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D" caption="" />
                    <Shot src="https://images.unsplash.com/photo-1752772228600-3197cd9c343d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTJ8fHxlbnwwfHx8fHw%3D" caption="Описание изображения" />
                    <Shot src="https://images.unsplash.com/photo-1753012102486-e6fa2dd0558a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D" caption="Описание изображения" />
                    <Shot src="https://images.unsplash.com/photo-1751402059577-463e1c0b4490?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5Nnx8fGVufDB8fHx8fA%3D%3D" caption="" />
                    <Shot src="https://images.unsplash.com/photo-1682687218982-6c508299e107?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D" caption="" />
                    </div>
                </section>

            </div>
        )
    }
}
