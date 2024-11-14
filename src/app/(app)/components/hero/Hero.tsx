import React from 'react'
import LinhSvg from "../svg/LinhSvg";
import Devsvg from "../svg/Devsvg";
import dynamic from 'next/dynamic';

const Meteors = dynamic(() => import('./Meteors'), { ssr: false });

type Props = {}


export default function Hero({ }: Props) {
    return (
        <div className="w-full h-svh hero-section relative flex overflow-hidden">
            <div className="absolute z-[19] top-0">
                <Meteors number={20} />
            </div>
            <div className="svg-group flex justify-center h-full items-start gap-[40px] flex-col w-full relative z-[20]">
                <div className="linh w-[80vw] md:w-[50vw] max-w-[700px] opacity-[0.9]">
                    <LinhSvg />
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="dev w-[70vw] md:w-[40vw] max-w-[450px] opacity-[0.9]">
                        <Devsvg />
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