import React from 'react'

type Props = {}

export default function Video({ }: Props) {
    return (
        <video
            id='blackhole'
            autoFocus={false}
            autoPlay={true}
            tabIndex={-1}
            muted
            loop
            className="absolute top-[7.5rem] lg:top-[5rem] right-0 lg:right-[-15%] object-cover  h-full w-full z-[10] select-none hidden lg:block"
            onClick={(e) => e.preventDefault()}
        >
            <source src="/blackhole.webm" type="video/webm" />
        </video>
    )
}