'use client'
import Lottie from 'lottie-react';
import DogRunAnimation from './lottie-animations/dog_file.json'



export default function DogRunAnimationComponent({
    className,
    isMobile,
}: {
    className?: string;
    isMobile?: boolean;
}) {

    return (
        <div className={`${className}`}>
            <Lottie animationData={DogRunAnimation} loop={true} autoPlay={true} renderer='svg' />
        </div>
    );
}