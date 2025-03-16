'use client'
import { useEffect, useState, useRef } from "react"
import { useSpring, animated } from "@react-spring/web";
import clsx from "clsx"
import LoadingCircle from "./LoadingCircle"
import { useInitLoadingStore } from "../../store/loading";
import gsap from 'gsap'



export default function IndexLoading() {
    const [countTrigger, setCountTrigger] = useState(false)
    const [isTrigger, setIsTrigger] = useState(false)
    const loader_panelLeft = useRef<HTMLDivElement>(null)
    const loader_panelRight = useRef<HTMLDivElement>(null)

    const linerLeft = useRef<HTMLDivElement>(null)
    const linerRight = useRef<HTMLDivElement>(null)
    const middleLine = useRef<HTMLDivElement>(null)
    const loader_circle = useRef<SVGSVGElement>(null)
    const countRef = useRef<any>(null)

    const setLoading = useInitLoadingStore(state => state.setStatus)
    const isLoaded = useInitLoadingStore(state => state.isDone)



    const countAnimation = useSpring({
        trigger: countTrigger,
        number: 100,
        from: { number: 0 },
        config: {
            duration: 2000,
        },
        onChange: ({ value }) => {
            if (value.number >= 10 && value.number <= 20) {
                setIsTrigger(true);
            }
        }
    });

    const tl = gsap.timeline()
    useEffect(() => {
        setCountTrigger(true)
        const loaderCircle: SVGPathElement | null = document.querySelector(".loader_circle");
        let i = 0
        if (loaderCircle) {
            i = loaderCircle ? loaderCircle.getTotalLength() : 0;
        }
        if (loader_panelLeft.current && loader_panelRight.current && isTrigger) {
            tl.to('.loader_circle', {
                strokeDashoffset: i,
                duration: 2.7,
                ease: "expo.inOut",
                stagger: 0.1,
            }, '<')
                .to(linerLeft.current, {
                    duration: 2,
                    yPercent: 100,
                    ease: 'expo.inOut',
                    stagger: 0.1
                }, '<')
                .to(linerRight.current, {
                    duration: 2,
                    yPercent: -100,
                    ease: 'expo.inOut',
                    stagger: 0.1
                }, '<')
                .to(middleLine.current, {
                    duration: 2,
                    scaleY: 0,
                    transformOrigin: 'center center',
                    stagger: 0.1,
                    ease: 'expo.inOut'
                }, '<')
                .to(loader_circle.current, {
                    duration: 0.4,
                    opacity: 0,
                    ease: 'sine.out'
                }, '>+0.2')
                .to(countRef.current, {
                    duration: 0.4,
                    opacity: 0,
                    ease: 'sine.out'
                }, '>')
                .to(loader_panelLeft.current, {
                    duration: 1.4,
                    xPercent: -100,
                    ease: 'expo.inOut'
                })
                .to(loader_panelRight.current, {
                    duration: 1.4,
                    xPercent: 100,
                    ease: 'expo.inOut',
                    onComplete: () => {
                        setLoading(true)
                    }
                }, '<')

        }

    }, [isTrigger])





    return (
        <div className={clsx('w-svw h-svh fixed z-[1000] top-0 left-0', {
            '!hidden': isLoaded
        })}
        >
            <div className="wrapper w-full h-full relative flex justify-center items-center">
                <LoadingCircle className="absolute z-50 sm:w-[7vw] min-w-[6.25rem] max-w-[6.25rem]" ref={loader_circle} fillColor="#FFFFFF" />
                <div className="text-[20px] text-black absolute z-[80] top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 font-bold"
                    ref={countRef}
                >
                    {/* @ts-ignore */}
                    <animated.div>
                        {/* @ts-ignore */}
                        <animated.div className="text-[#1E1E1E] lg:text-3xl">
                            {countAnimation.number.to(val => `${100 - Math.floor(val)}`)}
                        </animated.div>
                    </animated.div>
                </div>
                <div
                    className="w-1/2 h-full absolute left-0 bg-[#FFFFFF]"
                    ref={loader_panelLeft}
                />
                <div
                    className="w-1/2 h-full absolute right-0 bg-[#FFFFFF]"
                    ref={loader_panelRight}
                />
                <div className="w-[4px] h-full top-0 left-[7.5%] bg-[#1E1E1E] absolute"
                    ref={linerLeft}
                />
                <div className="w-[4px] h-full top-0 right-[7.5%] bg-[#1E1E1E] absolute"
                    ref={linerRight}
                />
                <div className="w-[0.5px] absolute h-full bg-[#1E1E1E] top-0 left-1/2 -translate-x-1/2"
                    ref={middleLine}
                />
            </div>
        </div>
    )
}


