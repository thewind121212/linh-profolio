'use client'
import React, { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const WorkingAnimation = dynamic(() => import('../../animations-icons/working'), { ssr: false })



type Props = {}

export default function Experiment({ }: Props) {

  if (typeof window !== 'undefined') {
  }
  gsap.registerPlugin(ScrollTrigger)

  const scrollRef = useRef<HTMLDivElement>(null)


  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    // const scrollTl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.section-two',
    //     start: "start start",
    //     end: "+=200%",
    //     scrub: true,
    //   }
    // })

    // scrollTl.to('.experiment', {
    //   backgroundColor: '#FFCCEA',
    //   duration: 0.2,
    //   animation: 'power4.out'
    // }, '<')

    // const scrollFn = () => {
    //   if (typeof window === 'undefined') return

    //   if (window.scrollY >= window.innerHeight) {
    //     gsap.set('.experiment', {
    //       position: 'relative'
    //     })
    //   } else {
    //     gsap.set('.experiment', {
    //       position: 'fixed'
    //     })
    //   }
    // }
    // document.addEventListener('scroll', scrollFn)

    // return () => {
    //   document.removeEventListener('scroll', scrollFn)
    // }

  }, [scrollRef.current])




  return (
    <div className="experiment w-full h-svh bg-[#fbf0da] fixed z-[899] top-0 left-0"
      ref={scrollRef}
    >
      <div className="w-full h-full relative ">
        <div className="w-1/3 h-auto padding-main-left">
          <WorkingAnimation className='w-full h-auto' />
        </div>
        <div className="w-[38%] h-auto aspect-square padding-main absolute right-0 top-0 padding-main-top rounded-xl overflow-hidden">
          <Image src='/linh.png' alt="my-avatar" className='w-full h-auto object-cover rounded-xl aspect-square' width={800} height={800} />
        </div>
        <div className="w-full h-auto absolute bottom-0 left-0 group padding-main padding-main-top padding-main-bottom">
          <div className="w-[40%] bg-white aspect-[729.59/60] rounded-md relative">
            <div className="absolute bottom-[25%] w-full h-[12%] right-0 bg-[#1b0e04bd] translate-y-1/2"></div>
          </div>
          <div className="typewrite text-[#1b0e04bd]  overflow-hidden duration-700 w-[40vw]">
            <h1 className='text-[6vw] leading-[6.5vw] uppercase font-bold'>my working</h1>
          </div>
          <div className="w-[60%]">
            <h1 className='text-[6vw] leading-[6.5vw] text-[#1b0e04bd] flex justify-end items-center uppercase font-bold'>experience.</h1>
          </div>
          <div className="w-[60%] bg-white aspect-[729.59/40] rounded-md relative overflow-hidden">
            <div className="absolute top-[25%] w-[80%] h-[12%] bg-[#1b0e04bd] -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}