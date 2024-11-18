'use client'
import Lottie from 'lottie-react';
import DogRunAnimation from './lottie-animations/dog_file.json'



export default function DogRunAnimationComponent({
    className,
}: {
    className?: string;
}) {

    return (
        <div className={`${className}`}>
            <Lottie animationData={DogRunAnimation} loop={true} autoPlay={true} renderer='svg' />
        </div>
    );
}