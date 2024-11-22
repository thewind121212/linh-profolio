'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type Props = {}
export default function ExperienceLayer2({ }: Props) {
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
            // if (window.scrollY > window.innerHeight * 2) {
            //     gsap.set('.experiment2', {
            //         position: 'relative',
            //     })
            // } else {
            //     gsap.set('.experiment2', {
            //         position: 'fixed',
            //     })
            // }

        }

        scrollFn1()

        document.addEventListener('scroll', scrollFn1)

        return () => {
            document.removeEventListener('scroll', scrollFn1)
        }

    }, [])

    return (
        <div className="experiment2 w-full h-[200svh] bg-[#DAEAF1] z-[994] top-0 left-0 relative"
        >
            <div className="w-full h-full relative flex justify-start items-center">
                <div className="w-1/4 aspect-auto bg-white rounded-lg h-auto"></div>
            </div>
        </div>
    )
}