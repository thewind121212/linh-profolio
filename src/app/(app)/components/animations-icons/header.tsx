
'use client'
import Lottie from 'lottie-react';
import Home from './lottie-animations/home_file.json'
import About from './lottie-animations/about_file.json'
import Blog from './lottie-animations/blogs_file.json'
import Work from './lottie-animations/tech_file.json'
import Contact from './lottie-animations/contact_file.json'



export default function HeaderAnimationType({
    className,
    headerAnimtionType
}: {
    className?: string;
    headerAnimtionType: 'home' | 'about' | 'blog' | 'work' | 'contact';
}) {

    let animation: any = Home

    switch (headerAnimtionType) {
        case 'home':
            animation = Home
            break;
        case 'about':
            animation = About
            break;
        case 'blog':
            animation = Blog
            break;
        case 'work':
            animation = Work
            break;
        case 'contact':
            animation = Contact
            break;
        default:
            animation = Home
    }

    return (
        <div className={`${className}`}>
            <Lottie animationData={animation} loop={true} autoPlay={true} renderer='svg' />
        </div>
    );
}