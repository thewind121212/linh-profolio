'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useDimensions from '@/hooks/userDimenstion'

type Props = {}
export default function AboutMeContent({ }: Props) {

    const containerRef = useRef<HTMLDivElement>(null)
    const { dimensions, aspectRatio } = useDimensions()

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        if (typeof window === 'undefined') return
        const scrollTl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.experiment2',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
            }
        })



        const scrollFn1 = () => {
            if (containerRef.current) {
                if (containerRef.current.getBoundingClientRect().top < 0) {
                    gsap.set('.experiment2_1', {
                        position: 'fixed',
                        width: '100svw',
                        height: '100svh',
                    })
                } else {
                    gsap.set('.experiment2_1', {
                        position: 'absolute',
                    })
                }
            }
        }

        scrollFn1()

        document.addEventListener('scroll', scrollFn1)

        return () => {
            document.removeEventListener('scroll', scrollFn1)
        }

    }, [])

    return (
        <div className="experiment2 w-full h-[200svh] bg-[#1E1E1E] z-[994] relative top-0 left-0 flex justify-start items-center flex-col"
            ref={containerRef}
        >
            <div className="experiment2_1 w-full h-1/2 absolute top-0 left-0">
                <div className="w-full h-full relative flex justify-between items-start padding-main-left padding-main padding-main-top flex-col padding-main-bottom">
                    <div className="w-full h-auto flex justify-between items-start">
                        <h1 className='text-white text-[1.5vw] uppercase block font-[500]'>● INTRODUCTION Myself</h1>
                        <p className='text-white text-[2vw] uppercase w-2/3 leading-[2.4vw] font-[400]'>
                            Hi, I&apos;m Tran Duy Linh, a passionate full-stack developer with a flair for creating best web solutions. <span className='text-gradient block font-[500]'>● Welcome to my profile!</span>
                        </p>

                    </div>
                    <h1 className='w-full text-[18vw] font-bold text-white leading-[22vw]'>ABOUT ME</h1>
                    <div className="w-full h-auto flex justify-between items-start gap-40">
                        <div className="w-[40%] aspect-[20/2] bg-white rounded-xl min-w-[40%]"></div>
                        <p className='text-white text-[1.5vw] w-auto font-light leading-[1.71vw]'>
                            I&apos;m a versatile Software Engineer specializing in both frontend and backend in web development. With a strong proficiency in frontend technologies.
                            Outside professional pursuits in software engineering, I&apos;m deeply committed to lifelong learning, personal growth. Outside of work, I love play piano and enjoy reading some detective novels.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}