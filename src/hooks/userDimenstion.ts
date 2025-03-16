import { useState, useEffect } from 'react';

export default function useDimensions() {
    const [dimensions, setDimensions] = useState({
        width:  0,
        height:  0,
    });

    const aspectRatio = dimensions.width / dimensions.height;


    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleResize);
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return {
        dimensions,
        aspectRatio,
    };
}