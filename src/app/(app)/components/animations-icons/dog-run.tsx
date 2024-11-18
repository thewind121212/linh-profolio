'use client'
import Lottie from 'lottie-react';
import DogRunAnimation from './lottie-animations/dog.json'



export default function DogRunAnimationComponent({
    className,
}: {
    className?: string;
}) {
    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: DogRunAnimation,
        renderer: 'svg',
    };

    return (
        <div className={`${className}`}>
            <Lottie animationData={DogRunAnimation} loop={true} autoPlay={true} renderer='svg' />
        </div>
    );
}