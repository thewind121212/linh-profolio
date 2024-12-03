import clsx from 'clsx';
import { useEffect, useState, useRef } from 'react';




export default function Clock() {
    const [start, setStart] = useState<boolean>(true);
    const intervalRef = useRef<any>(null);


    const currentTime = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

    const timerOnly = currentTime.split(' ')[0].split(':');

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setStart(!start)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    })

    return ( 
        <div className="clock flex justify-start items-center text-5xl absolute right-2 !text-[#1E1E1E]">
            <div className="hours flex justify-start items-center w-[60px] relative overflow-hidden">
                <div className="first opacity-0">
                    <div className="number">0</div>
                </div>
                <div className="second opacity-0">
                    <div className="number">0</div>
                </div>
                <div className={clsx('flex flex-col justify-center items-center absolute left-0 duration-300 ease-in', {

                })}
                    style={{ top: `-${Number(timerOnly[0][0] ?? 0) * 48}px` }}
                >
                    {
                        Array.from({ length: 10 }).map((_, index) => (
                            <span key={`sec-${index}`} >{index}</span>
                        ))
                    }
                </div>
                <div className={clsx('flex flex-col justify-center items-center absolute right-0 duration-300 ease-in', {

                })}
                    style={{ top: `-${Number(timerOnly[0][1] ?? 0) * 48}px` }}
                >
                    {
                        Array.from({ length: 10 }).map((_, index) => (
                            <span key={`sec2-${index}`} >{index}</span>
                        ))
                    }
                </div>
            </div>
            <div className="tick -translate-y-[3px]">:</div>
            <div className="minutes flex justify-start items-center w-[60px] relative overflow-hidden">
                <div className="first opacity-0">
                    <div className="number">0</div>
                </div>
                <div className="second opacity-0">
                    <div className="number">0</div>
                </div>
                <div className={clsx('flex flex-col justify-center items-center absolute left-0 duration-300 ease-in', {

                })}
                    style={{ top: `-${Number(timerOnly[1][0] ?? 0) * 48}px` }}
                >
                    {
                        Array.from({ length: 10 }).map((_, index) => (
                            <span key={`sec-${index}`} >{index}</span>
                        ))
                    }
                </div>
                <div className={clsx('flex flex-col justify-center items-center absolute right-0 duration-300 ease-in', {

                })}
                    style={{ top: `-${Number(timerOnly[1][1] ?? 0) * 48}px` }}
                >
                    {
                        Array.from({ length: 10 }).map((_, index) => (
                            <span key={`sec2-${index}`} >{index}</span>
                        ))
                    }
                </div>
            </div>
            <div className="tick -translate-y-[3px]">:</div>
            <div className="seconds flex justify-start items-center w-[60px] relative overflow-hidden">
                <div className="dummy opacity-0">
                    <div className="number">0</div>
                </div>
                <div className="dummy opacity-0">
                    <div className="number">0</div>
                </div>
                <div className={clsx('flex flex-col justify-center items-center absolute left-0 duration-300 ease-in', {

                })}
                    style={{ top: `-${Number(timerOnly[2][0] ?? 0) * 48}px` }}
                >
                    {
                        Array.from({ length: 10 }).map((_, index) => (
                            <span key={`sec-${index}`} >{index}</span>
                        ))
                    }
                </div>
                <div className={clsx('flex flex-col justify-center items-center absolute right-0 duration-300 ease-in', {

                })}
                    style={{ top: `-${Number(timerOnly[2][1] ?? 0) * 48}px` }}
                >
                    {
                        Array.from({ length: 10 }).map((_, index) => (
                            <span key={`sec2-${index}`} >{index}</span>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}