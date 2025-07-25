import { Star } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import CustomCursor from './CustomCursor';

const Charecter = () => {
    const [selectAvator, setselectAvator] = useState("VIKI");
    const [cursorInModeArea, setcursorInModeArea] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true); // For screen size check

    // Detect screen size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 1024); // Tailwind's lg breakpoint
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const avator = {
        VIKI: {
            name: "VIKI",
            power: 75,
            stable: 95,
            penetrate: 30,
            portable: 80,
            stars: 3,
        },
        EVA: {
            name: "EVA",
            power: 90,
            stable: 80,
            penetrate: 70,
            portable: 60,
            stars: 4,
        }
    };

    const currentAvatar = avator[selectAvator];

    const handle3DAreaMouseEnter = () => setcursorInModeArea(true);
    const handle3DAreaMouseLeave = () => setcursorInModeArea(false);

    return (
        <div className='relative w-full h-screen mb-[10%]'>

            {/* Custom cursor only on desktop */}
            {isDesktop && <CustomCursor isHover3D={cursorInModeArea} />}

            {/* Title */}
            <div className='relative z-10 pt-6 text-center'>
                <h1 className='text-5xl font-bold tracking-widest md:-mb-14 mb-8' style={{ textShadow: "0 0 10px rgba(255,255,255,0.7)" }}>
                    FIGHTERS
                </h1>
            </div>

            {/* Main section */}
            <div className='relative z-10 flex flex-col md:flex-row items-center w-full p-4 h-215 md:h-full'>

                {/* Left Side */}
                <div className='w-full md:w-2/4 flex flex-col md:ml-10'>

                    {/* Info card */}
                    <div className='bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(167,139,250,0.2)]'>
                        <h1 className='text-2xl font-semibold mb-2'>{currentAvatar.name}</h1>

                        {/* Stats */}
                        <div className='space-y-3 mb-16'>
                            {["Power", "Stable", "Penetrate", "Portable"].map((label, i) => {
                                const key = label.toLowerCase();
                                return (
                                    <div className='flex items-center' key={label}>
                                        <span className='w-24 text-gray-400'>{label}</span>
                                        <div className='flex-1 rounded-full h-4 bg-gray-800 overflow-hidden'>
                                            <div
                                                className='h-full bg-gradient-to-r from-violet-600 to-white'
                                                style={{ width: `${currentAvatar[key]}%` }}
                                            />
                                        </div>
                                        <span className='ml-2'>{currentAvatar[key]}</span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Buttons */}
                        <div className='flex gap-3'>
                            <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
                                Proficient
                            </button>
                            <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
                                Redemption
                            </button>
                        </div>
                    </div>

                    {/* Avatar Selection */}
                    <div className='grid grid-cols-2 gap-4'>
                        {["VIKI", "EVA"].map((name) => (
                            <div
                                key={name}
                                className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300'
                                onClick={() => setselectAvator(name)}
                            >
                                <div className='text-lg mb-2'>{name}</div>
                                <div className='w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2'>
                                    <img src={`images/${name}.png`} alt={`${name}-img`} />
                                </div>

                                <div className='flex'>
                                    {[...Array(avator[name].stars)].map((_, i) => (
                                        <Star key={i} className='w-4 h-4 fill-violet-400 text-violet-500' />
                                    ))}
                                </div>

                                {selectAvator === name && (
                                    <div className='border-2 rounded-lg inset-0 absolute pointer-events-none'></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side (3D) */}
                <div
                    className='relative z-10 md:w-2/4 w-full h-250 md:h-full flex items-center justify-center overflow-hidden'
                    onMouseEnter={handle3DAreaMouseEnter}
                    onMouseLeave={handle3DAreaMouseLeave}
                >
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={selectAvator}
                            className='absolute inset-0'
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.5 }}
                        >
                            <Spline
                                scene={
                                    selectAvator === "VIKI"
                                        ? "https://prod.spline.design/4jXraxtnJLyO6hgt/scene.splinecode"
                                        : "https://prod.spline.design/Kt0bIM-NVmfD3a3U/scene.splinecode"
                                }
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Charecter;
