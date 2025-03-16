import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const WorkingAnimation = dynamic(() => import('../../animations-icons/working'), { ssr: false })

type Props = {}

export default function AboutMeMobile({ }: Props) {
    return (
        <div className="w-full h-auto bg-white aspect-[1/1] relative">

            <div className="w-full h-full relative"
            >
                <div className="avatar w-[40%] h-auto aspect-square padding-main absolute right-0 top-0 padding-main-top rounded-xl  pointer-events-none">
                    <Image src='/me.png' alt="my-avatar" className='w-full h-auto object-cover rounded-xl aspect-square object-top' width={800} height={800} />
                </div>
                <div className="w-full h-auto bottom-0 left-0 group padding-main padding-main-top padding-main-bottom">
                    <div className="outer-line w-[40%] bg-transparent aspect-[729.59/60] rounded-sm relative">
                        <div className="inner-line absolute bottom-[25%] w-full h-[12%] right-0 bg-[#1b0e04bd] translate-y-1/2"></div>
                    </div>
                    <div className="typewrite text-[#1E1E1E]  overflow-hidden duration-700 w-[40vw]">
                        <h1 className='first-text text-[6vw] leading-[6.5vw] uppercase font-bold'>About Me.</h1>
                    </div>
                    <div className="outer-line w-[60%] bg-transparent aspect-[729.59/40] rounded-sm relative overflow-hidden">
                        <div className="inner-line absolute top-[25%] w-[80%] h-[12%] bg-[#1b0e04bd] -translate-y-1/2"></div>
                    </div>
                </div>

                <div className="working-animation w-[60%] h-auto padding-main-left pointer-events-none">
                    <WorkingAnimation className='w-full h-auto' />
                </div>
            </div>
        </div>
    )
}