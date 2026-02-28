import { useState, useRef } from 'react';

export default function App() {
    const [isRunning, setIsRunning] = useState(false);

    const startTimeRef = useRef(null);
    const animationRef = useRef(null);
    const elapsedRef = useRef(0);

    const animate = (time) => {
        if (!startTimeRef.current) {
            startTimeRef.current = time;
        }
        const delta = time - startTimeRef.current;
        elapsedRef.current += delta;
        startTimeRef.current = time;
        animationRef.current = requestAnimationFrame(animate);
    };

    const dialTicks = {
        minor: 'h-[8%] w-[1px]',
        major: 'h-[12%] w-[2px]',
    };

    const majorNumbers = [60, 10, 20, 30, 40, 50];

    return (
        <main className='app-container flex flex-col min-h-screen justify-center items-center'>
            <div className='stopwatch flex justify-center items-center relative w-[min(90vw,600px)] aspect-square'>
                <div className='case relative w-full h-full flex flex-col justify-center items-center bg-slate-400 rounded-full'>
                    <div className='dial relative w-[90%] h-[90%] bg-slate-200 rounded-full overflow-hidden'>
                        {Array.from({ length: 60 }).map((_, i) => (
                            <div
                                key={i}
                                className='absolute inset-0 flex justify-center'
                                style={{
                                    transform: `rotate(${i * 6}deg)`,
                                }}
                            >
                                <div
                                    className={`tick ${i % 5 === 0 ? dialTicks.major : dialTicks.minor} bg-black mt-[2%]`}
                                />
                            </div>
                        ))}
                        {majorNumbers.map((number, j) => (
                            <div
                                key={number}
                                className='absolute inset-0 flex justify-center'
                                style={{
                                    transform: `rotate(${j * 60}deg)`,
                                }}
                            >
                                <div className='relative w-full h-full'>
                                    <div
                                        className='number absolute top-[15%] left-1/2 -translate-x-1/2 text-neutral-800 text-2xl font-semibold tracking-tight'
                                        style={{
                                            transform: `rotate(-${j * 60}deg)`,
                                        }}
                                    >
                                        {number}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className='sub-dial absolute left-[50%] top-[22%] translate-x-[-50%] rounded-full bg-white w-[20%] h-[20%]'></div> */}
                </div>
                <div className='pusher start-stop cursor-pointer w-[50px] h-[30px] bg-slate-600 absolute top-[-5%] left-[50%] translate-x-[-50%]'></div>
                <div className='pusher reset cursor-pointer w-[50px] h-[30px] bg-slate-600 absolute top-[10%] right-[10%] rotate-[45deg]'></div>
            </div>
        </main>
    );
}
