'use client'

import React, { use, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import useDimensions from '@/hooks/userDimenstion';

const AboutMeDesktop = dynamic(() => import('./AboutMeDesktop'), { ssr: false, loading: () => <div></div> });
const AboutMeMobile = dynamic(() => import('./AboutMeMobile'), { ssr: false, loading: () => <div></div> });





export default function AboutMeRenderPort() {

    const [isRenderMobile, setIsRenderMobile] = useState<boolean>(false)
    const { dimensions, aspectRatio } = useDimensions()

    useEffect(() => {

        if (typeof window === 'undefined') return

        if (matchMedia('(min-width: 1024px)').matches && (aspectRatio > 1.3 && aspectRatio < 2)) {
            setIsRenderMobile(true)
        } else {
            setIsRenderMobile(false)
        }


    },[dimensions])

    return (

        <>  
            {isRenderMobile && <AboutMeDesktop />}
            {!isRenderMobile && <AboutMeMobile />}
        </>
    );
}