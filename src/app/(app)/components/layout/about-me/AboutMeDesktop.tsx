'use client'
import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useDimensions from '@/hooks/userDimenstion'
import AboutMeContent from './AboutMeContent'

const WorkingAnimation = dynamic(() => import('../../animations-icons/working'), { ssr: false })



type Props = {}

export default function AboutMeDesktop({ }: Props) {

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
  }


  const { dimensions, aspectRatio } = useDimensions()


  const scrollRef1 = useRef<boolean>(false)
  const experienceFirstLayerTl2 = gsap.timeline({
    paused: true,
  })


  useEffect(() => {
    if (typeof window === 'undefined') return
    const experienceFirstLayerTl1 = gsap.timeline({
      scrollTrigger: {
        trigger: 'dummy-section-2',
        start: '+=2%',
        end: '+=120%',
        scrub: 1,
      }
    })
    experienceFirstLayerTl1.to(".outer-line", {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power4.in',
      stagger: 0.1
    }, '<')
      .to('.first-text', {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power4.out',
      }, '<+0.6')
      .to('.second-text', {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power4.out',
      }, '<+0.4')
      .to('.inner-line', {
        width: '100%',
        opacity: 1,
        duration: 0.7,
        ease: 'power4.out',
        stagger: 0.1,
      }, '<+0.4')
      .to(
        '.working-animation', {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power4.in',
        stagger: 0.1,
      }, '<+0.4')
      .to(
        ".avatar", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power4.in',
        stagger: 0.1,
      }, '<+0.5')



    gsap.set('.outer-line', {
      y: 50,
      opacity: 0
    })
    gsap.set('.inner-line', {
      width: 0,
      opacity: 0
    })
    gsap.set('.first-text', {
      y: -50,
      opacity: 0
    })
    gsap.set('.second-text', {
      y: 50,
      opacity: 0
    })
    gsap.set('.avatar', {
      opacity: 0,
      x: 50
    })
    gsap.set('.working-animation', {
      opacity: 0,
      x: -50
    })

    const scrollFn = () => {
      if (typeof window === 'undefined') return

      const scrollY = window.scrollY

      if (scrollY >= window.innerHeight) {
        // gsap.set('.experiment', {
        //   position: 'relative'
        // })
        if (scrollY > window.innerHeight * 2 && scrollY < window.innerHeight * 3) {
          gsap.to('.experiment', {
            top: (-(scrollY - window.innerHeight * 2)) / ((scrollY / (window.innerHeight * 2))),
          })

        }
        //  else {
        //   gsap.to('.experiment', {
        //     top: (scrollY - window.innerHeight * 2) / (scrollY / window.innerHeight * 2),
        //   })
        // }

        // if (scrollY >= window.innerHeight * 2.1) {
        //   gsap.set('.experiment', {
        //     display: 'none',
        //   })
        // }

        // if (scrollY < window.innerHeight * 2.2) {
        //   gsap.set('.experiment', {
        //     display: 'block',
        //   })
        // }



        scrollRef1.current = true
        // if (scrollY >= window.innerHeight / 100 * 20) {
        //   experienceFirstLayerTl1.play()
        // }
        // if (scrollY >= window.innerHeight / 100 * 55) {
        //   experienceFirstLayerTl2.play()
        // }
        return
      } else if (scrollY < window.innerHeight && scrollRef1.current) {
        gsap.set('.experiment', {
          position: 'fixed'
        })
        scrollRef1.current = false
        return
      }

      //   if (scrollY >= window.innerHeight / 100 * 25) {
      //     experienceFirstLayerTl1.play()
      //   }

      //   if (scrollY >= window.innerHeight / 100 * 55) {
      //     experienceFirstLayerTl2.play()
      //   }

      //   if (scrollY < window.innerHeight / 100 * 55) {
      //     experienceFirstLayerTl2.reverse()
      //   }

      //   if (scrollY < window.innerHeight / 100 * 25) {
      //     experienceFirstLayerTl1.reverse()
      //   }
    }



    scrollFn()
    document.addEventListener('scroll', scrollFn)



    return () => {
      document.removeEventListener('scroll', scrollFn)
    }



  }, [])




  return (
    <>
      <div className="experiment w-full h-[200svh] bg-[#FFFFFF] fixed z-[899] top-0 left-0 max-w-svw overflow-hidden">
        <div className="w-full h-1/2 relative"
        >
          <div className="working-animation w-1/2 lg:w-[40%] h-auto padding-main-left pointer-events-none">
            <WorkingAnimation className='w-full h-auto' />
          </div>
          <div className="avatar w-1/2 lg:w-[40%] h-auto aspect-square padding-main absolute right-0 top-0 padding-main-top rounded-xl  pointer-events-none">
            <Image src='/me.png' alt="my-avatar" className='w-full h-auto object-cover rounded-xl aspect-square object-top' width={800} height={800} />
          </div>
          <div className="w-full h-auto absolute bottom-0 left-0 group padding-main padding-main-top padding-main-bottom hidden lg:block">
            <div className="outer-line w-[40%] bg-transparent aspect-[729.59/60] rounded-sm relative opacity-0">
              <div className="inner-line absolute bottom-[25%] w-full h-[12%] right-0 bg-[#1b0e04bd] translate-y-1/2 opacity-0"></div>
            </div>
            <div className="typewrite text-[#1E1E1E]  overflow-hidden duration-700 w-[40vw]">
              <h1 className='first-text text-[6vw] leading-[6.5vw] uppercase font-bold'>Something</h1>
            </div>
            <div className="w-[60%]">
              <h1 className='second-text text-[6vw] leading-[6.5vw] text-[#1E1E1E] flex justify-end items-center uppercase font-bold'>About Me.</h1>
            </div>
            <div className="outer-line w-[60%] bg-transparent aspect-[729.59/40] rounded-sm relative overflow-hidden opacity-0">
              <div className="inner-line absolute top-[25%] w-[80%] h-[12%] bg-[#1b0e04bd] -translate-y-1/2 opacity-0"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="dummy-section-2 w-full h-[200svh] bg-transparent"></div>
      <AboutMeContent/>
    </>
  )
}