'use client'
import React, { useEffect } from 'react'
import LinhSvg from "../../svg/LinhSvg";
import Devsvg from "../../svg/Devsvg";
import dynamic from 'next/dynamic';
import { useInitLoadingStore } from '../../../store/loading';
import gsap from 'gsap'
import { HeroDataType } from '../../../page';
import { FaArrowDown } from "react-icons/fa";
import Image from 'next/image';




import { isMobile } from 'react-device-detect';

const Meteors = dynamic(() => import('./Meteors'), { ssr: false });

const Clock = dynamic(() => import('./Clock'), { ssr: false });

const Video = dynamic(() => import('./Video'), { ssr: false });

type Props = {
    heroData: HeroDataType
}




export default function Hero({ heroData }: Props) {

    const [showVideo, setShowVideo] = React.useState<boolean>(false)

    const isLoaded = useInitLoadingStore(state => state.isDone)
    useEffect(() => {

        const heroTl = gsap.timeline(
            {
                onComplete: () => {
                    setShowVideo(true)
                }
            }
        )

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
        <div className="w-full h-svh hero-mod !lg:min-h-auto hero-section relative flex overflow-hidden max-h-svh z-[996] bg-[#000014]">
            <div className="absolute z-[19] top-0">
                <Meteors number={20} />
            </div>
            <div className="svg-group flex justify-center h-full items-start gap-[40px] flex-col w-full relative z-[20] pt-[vw]">
                <div className="linh w-[50vw] min-w-[20rem] lg:min-w-auto  md:w-[50vw] max-w-[700px] opacity-[0.9] mx-auto lg:mx-0">
                    <LinhSvg />
                </div>
                <div className="w-full flex justify-between items-center mb-[30rem] lg:mb-0">
                    <div className="dev w-[50vw] min-w-[20rem] lg:min-w-auto md:w-[40vw] max-w-[450px] opacity-[0.9] mx-auto lg:mx-0">
                        <Devsvg />
                    </div>
                </div>

                <div className="w-full lg:w-auto status-banner opacity-0 flex absolute flex-col right-0 bottom-0 gap-4">
                    <div className="flex lg:min-w-[40rem] justify-between w-full items-start mt-[20px]">
                        <div className="w-full lg:w-[40vw] lg:min-w-[40rem] gap-[12px] h-[5rem] bg-[#ffffff] rounded-md text-black px-2 py-2 flex justify-between items-center cursor-default overflow-hidden">
                            <div className="h-full flex justify-end items-start w-auto flex-col">
                                <div className="text-[32px] font-[500] text-[#1E1E1E]">
                                    2025
                                </div>
                                <p>Time.</p>
                            </div>
                            <Clock />
                        </div>
                    </div>
                    <div className="max-[500px]:w-full  w-[80%] lg:w-[40vw] lg:min-w-[40rem] h-[50px] bg-white rounded-md self-end flex justify-start items-center overflow-hidden">
                        <div className="basis-1/3 h-full bg-[#FBCCEA]"></div>
                        <div className="basis-1/3 h-full bg-[#fbf0da]"></div>
                        <div className="basis-1/3 h-full flex justify-end items-center px-2 gap-2">
                            <p className='cursor-default'>Scroll</p>
                            <FaArrowDown className="text-[#1b0e04bd] text-xl arrow-scroll" />
                        </div>
                    </div>

                </div>
            </div>


            <Image
                src="/blackhole.gif"
                alt="hero-image"
                quality={100}
                width={0}
                height={0}
                className="absolute top-[7.5rem] lg:top-[5rem] right-0 lg:right-[-15%] object-cover  h-full w-full z-[10] select-none lg:hidden"
            />
            {
                !isMobile  && showVideo && <Video />
            }
        </div>
    )
}