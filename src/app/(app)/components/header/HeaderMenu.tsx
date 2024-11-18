'use client'
import React, { useEffect } from 'react'
import { headerMenuStore } from '../../store/headerMenu'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { PPFragment } from '../../font/font'
import dynamic from 'next/dynamic'
import gsap from 'gsap'
import clsx from 'clsx'


const DogRunAnimation = dynamic(() => import('../animations-icons/dog-run'), { ssr: false })
const HeaderAnimation = dynamic(() => import('../animations-icons/header'), { ssr: false })

type Props = {}


const dummyData: {
    id: string
    link: string
    name: string
    animationMeta: 'home' | 'about' | 'work' | 'contact' | 'blog'
}[] = [
        {
            id: 'header-menu-1',
            link: '/',
            name: 'Home',
            animationMeta: 'home'
        },
        {
            id: 'header-menu-2',
            link: '/about',
            name: 'About',
            animationMeta: 'about'
        },
        {
            id: 'header-menu-3',
            link: '/work',
            name: 'Work',
            animationMeta: 'work'
        },
        {
            id: 'header-menu-4',
            link: '/contact',
            name: 'Contact',
            animationMeta: 'contact'
        },
        {
            id: 'header-menu-5',
            link: '/blog',
            name: 'Blog',
            animationMeta: 'blog'
        }
    ]



export default function HeaderMenu({ }: Props) {
    const isOpen = headerMenuStore(state => state.isOpen)

    const currentTime = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

    const timerOnly = currentTime.split(' ')[0].split(':');



    const whatDay = Number(timerOnly[0]) < 12 ? 'Good Morning' : Number(timerOnly[0]) < 18 ? 'Good Afternoon' : Number(timerOnly[0]) < 21 ? 'Good Evening' : 'Good Night'

    const greeting = Number(timerOnly[0]) < 12 ? 'Hope you have a wonderful morning!' : Number(timerOnly[0]) < 18 ? 'Hope your afternoon is going well!' : Number(timerOnly[0]) < 21 ? 'Good evening! May this time be filled with peace, reflection, and joy.' : 'It’s time to sleep!'


    const headerContentTl = gsap.timeline(
        {
            onReverseComplete: () => {
                headerMenuStore.setState({ isOpen: false })
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
            // .to('.header-menu-right', {
            //     duration: 1,
            //     xPercent: 100,
            //     ease: 'expo.inOut',
            // }, '<')

        }
    }, [isOpen])
    return (
        <div className={clsx('w-svw h-svh fixed top-0 left-0 z-[999]',
            {
                '!hidden': !isOpen
            }
        )}
            onClick={() => headerContentTl.reverse()}
        >
            <div className="w-full h-full relative flex justify-start items-center">
                <div className="header-menu-overlay bg-[#000000ba] w-full h-full absolute top-0 left-0 z-1"></div>
                <div className="header-menu-left w-[50svw] h-full basis-1/2 bg-[#fbf0da] absolute top-0 left-0">
                    {
                        dummyData.map((item) => (
                            <div key={item.id} className="w-full h-[14.2857142857%] border-b border-[#1E1005] group relative flex justify-between items-center padding-main cursor-pointer">
                                <div className="flex justify-start items-center gap-[8px]">
                                    <div className="flex flex-col justify-center items-center gap-[4px] relative group-hover:rotate-[360deg] duration-200">
                                        <div className="w-[10px] h-[10px] rounded-full bg-[#614C5C]"></div>
                                        <div className="w-[10px] h-[10px] rounded-full bg-[#614C5C] group-hover:translate-x-4 duration-200"></div>
                                        <div className="w-[10px] h-[10px] rounded-full bg-[#614C5C]"></div>
                                        <div className="w-[10px] h-[10px] rounded-full bg-[#614C5C] absolute top-1/2 -translate-y-1/2 left-0 duration-200 group-hover:-translate-x-4"></div>
                                        <div className="w-[10px] h-[10px] rounded-full bg-[#614C5C] absolute top-1/2 -translate-y-1/2 left-0"></div>
                                    </div>
                                    <p className={`text-5xl group-hover:translate-x-4 duration-200 translate-y-[6px] uppercase ${PPFragment.className}`}> {item.name}</p>
                                </div>
                                <div className="w-0 absolute bottom-0 left-0 h-[2px] bg-black group-hover:w-full duration-200 rotate-180"></div>
                                <div className="w-full scale-x-0 h-full absolute odd:bottom-0 even:top-0 left-0 opacity-30 overflow-hidden bg-[#614C5C] duration-300 group-hover:scale-x-100 origin-right">
                                </div>
                                <div className="flex justify-center items-center aspect-square h-2/3 bg-white overflow-hidden relative z-[3] rounded-md border border-[#614C5C]">
                                    <HeaderAnimation className="w-[90%] h-auto" headerAnimtionType={item.animationMeta} />
                                </div>
                            </div>
                        ))
                    }
                    <div className="w-full h-[28.5714285714%] absolute bottom-0 left-0 flex justify-center items-center">
                        <DogRunAnimation className="w-1/3 h-auto" />
                        <div className="w-2/3 flex flex-col justify-center items-center gap-[8px]">
                            <div className="w-full h-auto flex justify-center items-center">
                                <div className="flex justify-start items-center gap-[4px]">
                                    <FaAngleLeft className="text-[#614C5C] text-3xl translate-y-[3px]" />
                                    <h2 className="text-[#614C5C] text-3xl whitespace-nowrap">{whatDay}</h2>
                                    <FaAngleRight className="text-[#614C5C] text-3xl translate-y-[3px]" />
                                </div>
                            </div>
                            <p className='text-1 text-center w-2/3 max-w-[290px] text-[#614c5ce6]'>{greeting}</p>
                        </div>

                    </div>
                </div>
                <div className="header-menu-right w-[50svw] h-full basis-1/2 bg-[#e2aef5] absolute top-0 right-0"></div>
            </div>
        </div>
    )
}