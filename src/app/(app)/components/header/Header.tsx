'use client'
import Image from "next/image";
import { useRef } from "react";
import dynamic from 'next/dynamic'
import clsx from 'clsx'
import { headerMenuStore } from "../../store/headerMenu";
import { Header as HeaderType } from "@/payload-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const HeaderMenu = dynamic(() => import('./HeaderMenu'), {
    ssr: false,
})

export default function Header(
    { headerData }: {
        headerData: HeaderType
    }
) {
    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger)
    }

    let lastScrollY = useRef(0);

    useEffect(() => {

        ScrollTrigger.create({
            trigger: "body",
            start: "+=0",
            onUpdate: (self) => {
                const currentScrollY = self.scroll();


                if (typeof window === 'undefined') return

                if (currentScrollY > (window.innerHeight - 90 )) {
                    gsap.to(".header", {
                        y: "-90px",
                        duration: 0.2,
                        ease: "ease-in-out",
                    });
                }

                else if (currentScrollY < lastScrollY.current) {
                    gsap.to(".header", {
                        y: "0%",
                        backgroundColor: "#000014",
                        duration: 0.2,
                        ease: "ease-in-out",
                    });
                }


                lastScrollY.current = currentScrollY; // 
            },
        });


    }, [])

    const setHeaderMenu = headerMenuStore(state => state.setStatus)
    return (
        <>
            <HeaderMenu headerData={headerData} />
            <div className="header w-svw h-[90px] fixed top-0 left-0 z-[998]">
                <div className="header-wrapper h-full w-full relative flex justify-between items-center bg-[#000014]">
                    {/* logo */}
                    <Image src="/inverted_image-removebg-preview.png" className="w-auto h-[90px] header-logo opacity-0" alt="logo" width={100} height={100} />
                    <div className="right-header flex justify-start items-center gap-[4vw]">
                        <h1 className="glitch cursor-default header-text text-rem opacity-0" data-glitch={headerData.title} >{headerData.title}</h1>
                        <div className="text-white menu-toggle w-[40px] h-auto flex flex-col gap-[10px] group justify-center items-center opacity-0 cursor-pointer"
                            onClick={() => setHeaderMenu(true)}
                        >
                            <div className={clsx('w-full h-[1px] bg-white group-hover:!w-[60%] duration-200',
                                { '!w-[60%]': headerMenuStore(state => state.isOpen) }
                            )}></div>
                            <div className={clsx('w-full h-[1px] bg-white group-hover:!w-[90%] duration-200',
                                { '!w-[90%]': headerMenuStore(state => state.isOpen) }
                            )}></div>
                            <div className="w-full flex justify-between h-auto">
                                <svg width="10" height="10" viewBox="0 -4 10 10" className="duration-200 rotate-180">
                                    <path d="M 0 5 L 25 5" className={clsx('eye duration-200', {
                                        'active': headerMenuStore(state => state.isOpen)
                                    })} />
                                </svg>
                                <svg width="10" height="10" viewBox="0 -4 10 10" className="duration-200">
                                    <path d="M 0 5 L 25 5" className={clsx('smile duration-200', {
                                        'active': headerMenuStore(state => state.isOpen)
                                    })} />
                                </svg>
                                <svg width="10" height="10" viewBox="0 -4 10 10" className="duration-200 rotate-180">
                                    <path d="M 0 5 L 25 5" className={clsx('eye duration-200', {
                                        'active': headerMenuStore(state => state.isOpen)
                                    })} />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="header-line w-full h-[1px] absolute bottom-0 left-0 bg-[#FBF0fA] opacity-0"></div>
                </div>

            </div >
        </>
    );
}