
'use client'
import Lottie from 'lottie-react';
import Working from './lottie-animations/working.json'



export default function WorkingAnimation({
    className,
}: {
    className?: string;
}) {

    return (
        <div className={`${className}`}>
            <Lottie animationData={Working} loop={true} autoPlay={true} renderer='svg' />
        </div>
    );
}