'use client'
import React, { useEffect } from 'react'
import Link from 'next/link';
import TextHover from '../../share-components/TextHover';
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";
import { FaGlobeAsia } from "react-icons/fa";
import Image from 'next/image';
import { headerMenuStore } from '../../store/headerMenu'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { PPFragment } from '../../font/font'
import dynamic from 'next/dynamic'
import gsap from 'gsap'
import { Header as HeaderType } from "@/payload-types";
import clsx from 'clsx'


const DogRunAnimation = dynamic(() => import('../animations-icons/dog-run'), { ssr: false })
const HeaderAnimation = dynamic(() => import('../animations-icons/header'), { ssr: false })

type Props = {
    headerData: HeaderType
}



export type animationMeta = 'home' | 'about' | 'work' | 'contact' | 'blog'


export default function HeaderMenu({ headerData }: Props) {
    const isOpen = headerMenuStore(state => state.isOpen)

    const currentTime = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

    const timerOnly = currentTime.split(' ')[0].split(':');



    const whatDay = Number(timerOnly[0]) < 12 ? 'Good Morning' : Number(timerOnly[0]) < 18 ? 'Good Afternoon' : Number(timerOnly[0]) < 21 ? 'Good Evening' : 'Good Night'

    const greeting = Number(timerOnly[0]) < 12 ? 'Hope you have a wonderful morning!' : Number(timerOnly[0]) < 18 ? 'Hope your afternoon is going well!' : Number(timerOnly[0]) < 21 ? 'Good evening! May this time be filled with peace, reflection, and joy.' : 'It’s time to sleep!'


    const headerContentTl = gsap.timeline(
        {
            onStart: () => {
                gsap.to('body', {
                    overflow: 'hidden'
                })
            },
            onReverseComplete: () => {
                headerMenuStore.setState({ isOpen: false })
                gsap.to('body', {
                    overflow: 'auto'
                })
            }
        }
    )
    useEffect(() => {

        if (isOpen) {
            headerContentTl
                .fromTo('.header-menu-overlay', {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 0.5,
                    ease: 'expo.inOut'
                })
                .fromTo('.header-menu-left', {
                    xPercent: -100,
                    duration: 0.5,
                }, {
                    duration: 1.4,
                    xPercent: 0,
                    ease: 'expo.inOut'
                }, '>')
                .fromTo('.header-menu-right', {
                    xPercent: 100,
                    duration: 0.5,
                }, {
                    duration: 1.4,
                    xPercent: 0,
                    ease: 'expo.inOut'
                }, '<')
                .fromTo('.menu-item-text', {
                    opacity: 0,
                    duration: 1,
                    y: 25,
                }, {
                    duration: 1,
                    y: 0,
                    opacity: 1,
                    ease: 'expo.inOut',
                    stagger: 0.1
                }, '<+0.4')
                .fromTo('.menu-item-botline', {
                    duration: 1,
                    xPercent: -100,
                }, {
                    duration: 1,
                    xPercent: 0,
                    opacity: 1,
                    ease: 'expo.inOut',
                    stagger: 0.1
                }, '<')
                .fromTo('.menu-item-icon', {
                    opacity: 0,
                    duration: 1,
                }, {
                    opacity: 1,
                    ease: 'expo.inOut',
                    stagger: 0.1
                }, '<+0.5')
                .fromTo('.dog-run', {
                    duration: 0.5,
                    opacity: 0,
                    yPercent: 10,
                }, {
                    duration: 1,
                    yPercent: 0,
                    opacity: 1,
                    ease: 'expo.inOut',
                    stagger: 0.1
                }, '<+0.2')
                .fromTo('.greeting-text', {
                    duration: 0.5,
                    opacity: 0,
                    yPercent: 10,
                }, {
                    duration: 1,
                    yPercent: 0,
                    opacity: 1,
                    ease: 'expo.inOut',
                    stagger: 0.1
                }, '<')
                .fromTo('.right-panel-line', {
                    xPercent: 100,
                }, {
                    duration: 1,
                    xPercent: 0,
                    ease: 'expo.inOut',
                }, '<+0.2')
                .fromTo('.menu-header-logo', {
                    opacity: 0,
                    duration: 1,
                }, {
                    opacity: 1,
                    ease: 'expo.inOut',
                }, '<')
                .fromTo('.info-item', {
                    duration: 0.5,
                    opacity: 0,
                    y: 10,
                }, {
                    duration: 1,
                    y: 0,
                    opacity: 1,
                    ease: 'expo.inOut',
                    stagger: 0.1
                }, '<')
                .fromTo('.text-panel-right', {
                    opacity: 0,
                    y: 25,
                }, {
                    opacity: 1,
                    duration: 1,
                    y: 0,
                    ease: 'expo.inOut',
                }, '<')
                .fromTo('.header-close-button', {
                    opacity: 0,
                    y: 25,
                }, {
                    opacity: 1,
                    duration: 1,
                    y: 0,
                    ease: 'expo.inOut',
                }, '<')
                .fromTo('#dog-run-mobile', {
                    opacity: 0,
                    y: 25,
                }, {
                    opacity: 1,
                    duration: 1.2,
                    y: 0,
                    ease: 'expo.inOut',
                }, '<')
            // .to('.header-menu-right', {
            //     duration: 1,
            //     xPercent: 100,
            //     ease: 'expo.inOut',
            // }, '<')

        }
    }, [isOpen])
    return (
        <div className={clsx('w-svw h-svh overflow-scroll fixed top-0 left-0 z-[999]',
            {
                '!hidden': !isOpen
            }
        )}
        >
            <div className="w-full h-full min-h-[738px] relative flex justify-start items-center">
                <div className="header-menu-overlay bg-[#000000ba] w-full h-full absolute top-0 left-0 z-1"></div>
                <div className="header-menu-left w-[50svw] h-full basis-1/2 bg-[#fbf0da] absolute top-0 left-0">
                    {
                        headerData.headerMenu && headerData.headerMenu.map((item) => (
                            <Link href={item.link || ''} key={item.id} className="w-full menu-item h-[14.2857142857%] group relative flex justify-between items-center padding-main cursor-pointer">
                                <div className="flex justify-start items-center gap-[8px] opacity-0 menu-item-text">
                                    <div className="flex flex-col justify-center items-center gap-[4px] relative group-hover:rotate-[360deg] duration-200">
                                        <div className="w-[10px] h-[10px] rounded-full bg-[#614C5C]"></div>
                                        <div className="w-[10px] h-[10px] rounded-full bg-[#614C5C] group-hover:translate-x-4 duration-200"></div>
                                        <div className="w-[10px] h-[10px] rounded-full bg-[#614C5C]"></div>
                                        <div className="w-[10px] h-[10px] rounded-full bg-[#614C5C] absolute top-1/2 -translate-y-1/2 left-0 duration-200 group-hover:-translate-x-4"></div>
                                        <div className="w-[10px] h-[10px] rounded-full bg-[#614C5C] absolute top-1/2 -translate-y-1/2 left-0"></div>
                                    </div>
                                    <p className={`text-[7vw] lg:text-5xl group-hover:translate-x-4 duration-200 translate-y-[6px] uppercase ${PPFragment.className}`}> {item.title}</p>
                                </div>
                                <div className="w-0 absolute bottom-0 left-0 h-[2px] bg-black group-hover:w-full duration-200 rotate-180"></div>
                                <div className="menu-item-botline w-full absolute bottom-0 left-0 h-[1px] bg-[#1E1005]"></div>
                                <div className="w-full scale-x-0 h-full absolute odd:bottom-0 even:top-0 left-0 opacity-30 overflow-hidden bg-[#614C5C] duration-300 group-hover:scale-x-100 origin-right">
                                </div>
                                <div className="menu-item-icon hidden lg:flex justify-center items-center aspect-square h-2/3 bg-white overflow-hidden relative z-[3] rounded-md border border-[#614C5C] opacity-0">
                                    <HeaderAnimation className="w-[90%] h-auto" headerAnimtionType={item.animationIcon as animationMeta || 'home'} />
                                </div>
                            </Link>
                        ))
                    }
                    <div className="w-full h-[28.5714285714%] absolute bottom-0 left-0 lg:flex justify-center items-center hidden">
                        <DogRunAnimation className="dog-run w-1/3 h-auto opacity-0" />
                        <div className="greeting-text w-2/3 flex flex-col justify-center items-center gap-[8px] opacity-0">
                            <div className="w-full h-auto flex justify-center items-center cursor-default">
                                <div className="flex justify-start items-center gap-[4px]">
                                    <FaAngleLeft className="text-[#614C5C] text-3xl translate-y-[3px]" />
                                    <h2 className="text-[#614C5C] text-3xl whitespace-nowrap">{whatDay}</h2>
                                    <FaAngleRight className="text-[#614C5C] text-3xl translate-y-[3px]" />
                                </div>
                            </div>
                            <p className='text-1 text-center w-2/3 max-w-[290px] text-[#614c5ce6] cursor-default'>{greeting}</p>
                        </div>

                    </div>
                </div>
                <div className="header-menu-right w-[50svw] h-full basis-1/2 bg-[#fbf0da] lg:bg-[#FFCCEA] absolute top-0 right-0 padding-main padding-main-top flex justify-center flex-col">
                    <div className="w-full h-full relative flex flex-col justify-start items-center">
                        <div className="header-close-button w-[90px] h-[30px] bg-[#463237] rounded-full flex justify-center items-center text-white text-sm uppercase duration-200 font-bold cursor-pointer border border-[#463237] hover:border-[#463237] hover:text-[#463237] hover:bg-white absolute right-0 top-0"
                            onClick={() => headerContentTl.reverse()}
                        >close</div>
                        <div className="menu-header-logo opacity-0 w-1/3 h-auto mt-8 aspect-square bg-white rounded-full justify-center items-center border-[7px] border-white relative hidden lg:flex">
                            <div className="w-full h-full rounded-full border-[7px] border-[#463237] absolute"></div>
                            <Image src="/logo_dark_enhance.png" className="w-3/4 h-auto header-logo opacity-100 !outline-none select-none pointer-events-none" alt="logo" width={100} height={100} />
                        </div>
                        <div className="wliafdew-info flex flex-col lg:grid lg:grid-cols-2 mt-12 lg:mt-20 gap-4 lg:main-gap cursor-default">
                            <div className="info-first flex flex-col gap-4 lg:gap-8">
                                <div className="info-item info-first-email">
                                    <div className="flex justify-center lg:justify-start items-center gap-2">
                                        <MdEmail color='#31304D' className='text-[18px]' />
                                        <h2 className='uppercase text-[#31304D] text-[16px] lg:text-[18px] font-bold'>Email</h2>
                                    </div>
                                    <TextHover content={headerData.headerMenuInfo.headerMenuInfoEmail} className='text-[#463237] ml-[26px] mt' />
                                </div>
                                <div className="info-item info-first-phone">
                                    <div className="flex justify-center lg:justify-start items-center gap-2">
                                        <MdPhone color='#31304D' className='text-[18px]' />
                                        <h2 className='uppercase text-[#31304D] text-[16px] lg:text-[18px] font-bold'>Phone</h2>
                                    </div>
                                    <TextHover content={headerData.headerMenuInfo.headerMenuInfoPhone} className='text-[#463237] ml-[26px] mt' />
                                </div>
                                <div className="info-item info-first-web">
                                    <div className="flex justify-center lg:justify-start items-center gap-2">
                                        <FaGlobeAsia color='#31304D' className='text-[18px]' />
                                        <h2 className='uppercase text-[#31304D] text-[16px] lg:text-[18px] font-bold'>Website</h2>
                                    </div>
                                    <div className="flex flex-col items-center lg:items-start ml-[26px]">
                                        <Link href={headerData.headerMenuInfo.headerMenuInfoHomeLab} target='_' className='uppercase text-[#463237] text-[14px] border-b border-transparent duration-200 w-fit hover:!border-[#463237]'>homelab</Link>
                                        <Link href={headerData.headerMenuInfo.headerMenuInfoFacebook} target='_' className='uppercase text-[#463237] text-[14px] border-b border-transparent duration-200 w-fit hover:!border-[#463237]'>facebook</Link>
                                        <Link href={headerData.headerMenuInfo.headerMenuInfoTele} target='_' className='uppercase text-[#463237] text-[14px] border-b border-transparent duration-200 w-fit hover:!border-[#463237]'>Telegram</Link>
                                        <Link href={headerData.headerMenuInfo.headerMenuInfoGithub} target='' className='uppercase text-[#463237] text-[14px] border-b border-transparent duration-200 w-fit hover:!border-[#463237]'>Github</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="info-second flex flex-col gap-4">
                                <div className="info-item info-second-location">
                                    <div className="flex justify-center lg:justify-start items-center gap-2">
                                        <MdLocationOn color='#31304D' className='text-[18px]' />
                                        <h2 className='uppercase text-[#31304D] text-[16px] lg:text-[18px] font-bold'>Location</h2>
                                    </div>
                                    <TextHover content={headerData.headerMenuInfo.headerMenuInfoLocation} className='text-[#463237] ml-[26px] mt' />
                                </div>
                                <div className="info-item info-second-time">
                                    <div className="flex justify-center lg:justify-start items-center gap-2">
                                        <MdAccessTime color='#31304D' className='text-[18px]' />
                                        <h2 className='uppercase text-[#31304D] text-[16px] lg:text-[18px] font-bold'>available time</h2>
                                    </div>
                                    <TextHover content={headerData.headerMenuInfo.headerMenuInfoTime} className='text-[#463237] ml-[26px] mt' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[14.2857142857%] absolute left-0 bottom-0 hidden lg:flex justify-center items-center main-gap z-50">
                        <div className="w-full h-full relative flex justify-center items-center">
                            <div className="w-full h-[1px] absolute top-0 right-0 bg-[#463237] right-panel-line "></div>

                            <div className="text-panel-right text-[#46323l7] text-[18px]">@2024 - Wliafdew</div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[29.2857142857%] absolute left-0 bottom-0 lg:hidden flex justify-center items-center gap-8 z-[90] bg-[#FFCCEA] opacity-0 overflow-hidden" id='dog-run-mobile'>
                    <DogRunAnimation className="dog-run w-1/2 aspect-square h-auto opacity-0 max-[380px]:hidden" />
                    <div className="greeting-text w-2/3 flex flex-col justify-center items-center gap-[8px] opacity-0">
                        <div className="w-full h-auto flex justify-center items-center cursor-default">
                            <div className="flex justify-start items-center gap-[4px]">
                                <FaAngleLeft className="text-[#614C5C] text-sm translate-y-[3px]" />
                                <h2 className="text-[#614C5C] text-sm whitespace-nowrap">{whatDay}</h2>
                                <FaAngleRight className="text-[#614C5C] text-sm translate-y-[3px]" />
                            </div>
                        </div>
                        <p className='text-1 text-center w-2/3 max-w-[290px] text-[#614c5ce6] cursor-default'>{greeting}</p>
                    </div>


                </div>

            </div>
        </div>
    )
}