'use client'
import React, { useEffect } from 'react'
import LinhSvg from "../../svg/LinhSvg";
import Devsvg from "../../svg/Devsvg";
import dynamic from 'next/dynamic';
import { useInitLoadingStore } from '../../../store/loading';
import gsap from 'gsap'
import { HeroDataType } from '../../../page';
import { FaArrowDown } from "react-icons/fa";

const Meteors = dynamic(() => import('./Meteors'), { ssr: false });

const Clock = dynamic(() => import('./Clock'), { ssr: false });

type Props = {
    heroData: HeroDataType
}





export default function Hero({ heroData }: Props) {

    const isLoaded = useInitLoadingStore(state => state.isDone)
    useEffect(() => {

        const heroTl = gsap.timeline()
        if (isLoaded) {
            heroTl
                .delay(1.5)
                .fromTo('.hero-sub-title', {
                    y: 50,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'expo.out',
                    stagger: 0.2
                }, '<')
                .fromTo('.hero-button', {
                    y: 50,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'expo.out',
                    stagger: 0.1
                }, '<')
                .fromTo('.header-line', {
                    xPercent: -100,
                    opacity: 0
                },
                    {
                        xPercent: 0,
                        opacity: 1,
                        duration: 2,
                        ease: 'expo.inOut',
                    }, '<')
                .fromTo('.header-text', {
                    y: 50,
                    opacity: 0
                },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'expo.inOut',
                    }, '<+0.5')
                .fromTo('.menu-toggle', {
                    x: 50,
                    opacity: 0
                },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'expo.inOut',
                    }, '<')
                .fromTo('.header-logo', {
                    x: -50,
                    opacity: 0
                },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'expo.inOut',
                    }, '<')
                .fromTo('.status-banner', {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 1,
                    ease: 'power4.in',
                    stagger: 0.1,
                }, '+0.2')
        }

    }, [isLoaded])

    return (
        <div className="w-full h-svh hero-section relative flex overflow-hidden max-h-svh z-[996] bg-[#000014]">
            <div className="absolute z-[19] top-0">
                <Meteors number={20} />
            </div>
            <div className="svg-group flex justify-start h-full items-start gap-[40px] flex-col w-full relative z-[20] pt-[40px]">
                <div className="linh w-[80vw] md:w-[50vw] max-w-[700px] opacity-[0.9]">
                    <LinhSvg />
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="dev w-[70vw] md:w-[40vw] max-w-[450px] opacity-[0.9]">
                        <Devsvg />
                    </div>
                </div>

                <p className='hero-sub-title text-white text-2xl max-w-[50vw] opacity-0 cursor-default mt-8'>{heroData.subtitle}</p>
                <button
                    className="hero-button opacity-0 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] px-8 -translate-y-4"
                >
                    {heroData.button}
                </button>
                <div className="status-banner opacity-0 flex absolute flex-col right-0 bottom-0 gap-4">
                    <div className="flex justify-between w-full items-start mt-[20px]">
                        <div className="w-[40vw] gap-[12px] h-[80px] bg-[#fbf0da] rounded-md text-black px-2 py-2 flex justify-between items-center cursor-default overflow-hidden">
                            <div className="h-full flex justify-end items-start w-auto flex-col">
                                <div className="text-[32px] font-[500] text-[#1b0e04bd]">
                                    2024
                                </div>
                                <p>Time.</p>
                            </div>
                            <Clock />
                        </div>
                    </div>
                    <div className="w-[40vw] h-[50px] bg-white rounded-md self-end flex justify-start items-center overflow-hidden">
                        <div className="basis-1/3 h-full bg-[#FFCCEA]"></div>
                        <div className="basis-1/3 h-full bg-[#fbf0da]"></div>
                        <div className="basis-1/3 h-full flex justify-end items-center px-2 gap-2">
                            <p className='cursor-default'>Scroll</p>
                            <FaArrowDown className="text-[#1b0e04bd] text-xl arrow-scroll" />
                        </div>
                    </div>

                </div>
            </div>
            <video
                autoPlay
                muted
                loop
                className="absolute top-[80px] right-[-15%]  h-full w-full z-[10] object-cover"
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video>
        </div>
    )
}