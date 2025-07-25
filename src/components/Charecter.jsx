import { Star } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';

// the customcursor component to acceet ishovering3d a prop

function CustomCursor({ isHover3D }) {
    const [position, setposition] = useState({ x: 0, y: 0 })
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setposition({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener("mousemove", handleMouseMove)
        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
        }
    })

    return (
        <motion.div
            ref={cursorRef}
            className='fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference'
            animate={{
                x: position.x - (isHover3D ? 12 : 15),
                y: position.y - (isHover3D ? 12 : 15),
                scale: isHover3D ? 1.5 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5,
            }}
        >
            <motion.div
                className={`rounded-full ${isHover3D ? "bg-violet-500" : "bg-white"}`}
                animate={{
                    width: isHover3D ? "24px" : "40px",
                    height: isHover3D ? "24px" : "40px",
                }}
                transition={{
                    duration: 0.2
                }}
            />
            {isHover3D && (<motion.div
                className='absolute inset-0 rounded-full bg-transition border border-violet-500'
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 2, opacity: 0.5 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            />)}

        </motion.div>
    )
}


const Charecter = () => {

    const [selectAvator, setselectAvator] = useState("VIKI");
    const [cursorInModeArea, setcursorInModeArea] = useState(false);

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
    }

    const currentAvatar = avator[selectAvator];
    const handle3DAreaMouseEnter = () => {
        setcursorInModeArea(true);
    }

    const handle3DAreaMouseLeave = () => {
        setcursorInModeArea(false);
    }

    return (
        <div className='relative w-full h-screen mb-[10%]'>

            <CustomCursor isHover3D={cursorInModeArea} />

            {/* Title */}
            <div className='relative z-10 pt-6 text-center'>
                <h1 className='text-5xl font-bold tracking-widest md:-mb-14 mb-8 ' style={{ textShadow: "0 0 10px rgba(255,255,255,0.7)" }}>FIGHTERS</h1>
            </div>

            {/* main section */}

            <div className='relative z-10 flex flex-col md:flex-row items-center w-full  p-4 h-180 md:h-full'>

                {/* left side */}

                <div className='w-full md:w-2/4 flex flex-col md:ml-10'>
                    {/* info card */}
                    <div className='bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(167,139,250,0.2)]'>
                        <h1 className='text-2xl font-semibold mb-2'>{currentAvatar.name}</h1>

                        {/* avatar statistic */}
                        <div className='space-y-3 mb-16'>

                            {/* power */}
                            <div className='flex items-center'>
                                <span className='w-24 text-gray-400'>Power</span>
                                <div className='flex-1 rounded-full h-4 bg-gray-800 overflow-hidden'>
                                    <div className='h-full bg-gradient-to-r from-violet-600 to-white'
                                        style={{ width: `${currentAvatar.power}%` }}
                                    >
                                    </div>
                                </div>
                                <span className='ml-2'>{currentAvatar.power}</span>
                            </div>

                            {/* stable */}

                            <div className='flex items-center'>
                                <span className='w-24 text-gray-400'>Stable</span>
                                <div className='flex-1 rounded-full h-4 bg-gray-800 overflow-hidden'>
                                    <div className='h-full bg-gradient-to-r from-violet-600 to-white'
                                        style={{ width: `${currentAvatar.stable}%` }}>
                                    </div>
                                </div>
                                <span className='ml-2'>{currentAvatar.stable}</span>
                            </div>

                            {/* penitrate */}

                            <div className='flex items-center'>
                                <span className='w-24 text-gray-400'>Penetrate</span>
                                <div className='flex-1 rounded-full h-4 bg-gray-800 overflow-hidden'>
                                    <div className='h-full bg-gradient-to-r from-violet-600 to-white'
                                        style={{ width: `${currentAvatar.penetrate}%` }}
                                    >
                                    </div>
                                </div>
                                <span className='ml-2'>{currentAvatar.penetrate}</span>
                            </div>

                            {/* portable */}

                            <div className='flex items-center'>
                                <span className='w-24 text-gray-400'>Portable</span>
                                <div className='flex-1 rounded-full h-4 bg-gray-800 overflow-hidden'>
                                    <div className='h-full bg-gradient-to-r from-violet-600 to-white'
                                        style={{ width: `${currentAvatar.portable}%` }}
                                    >
                                    </div>
                                </div>
                                <span className='ml-2'>{currentAvatar.portable}</span>
                            </div>



                        </div>

                        {/* Action button */}
                        <div className='flex gap-3'>
                            <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
                                Proficient
                            </button>
                            <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
                                Redemption
                            </button>
                        </div>
                    </div>


                    {/* Avater selection */}
                    <div className='grid grid-cols-2 gap-4'>
                        {/* viki card  */}
                        <div className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300'
                            onClick={() => setselectAvator("VIKI")}
                        >

                            <div className='text-lg mb-2'>VIKI</div>
                            <div className='w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2'>
                                <img src="images/VIKI.png" alt="viki-img" />
                            </div>

                            {/* start rating */}

                            <div className=' flex'>
                                {[...Array(3)].map((_, i) => (
                                    <Star key={i} className='w-4 h-4 fill-violet-400 text-violet-500' />
                                ))}
                            </div>

                            {/* Heighlight for seleted */}

                            {selectAvator === "VIKI" && (
                                <div className='border-2 rounded-lg inset-0 absolute pointer-events-none'></div>
                            )}

                        </div>


                        {/* EVA card  */}
                        <div className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300'
                            onClick={() => setselectAvator("EVA")}
                        >

                            <div className='text-lg mb-2'>EVA</div>
                            <div className='w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2'>
                                <img src="images/EVA.png" alt="EVA-img" />
                            </div>

                            {/* start rating */}

                            <div className=' flex'>
                                {[...Array(4)].map((_, i) => (
                                    <Star key={i} className='w-4 h-4 fill-violet-400 text-violet-500' />
                                ))}
                            </div>

                            {/* Heighlight for seleted */}

                            {selectAvator === "EVA" && (
                                <div className='border-2 rounded-lg inset-0 absolute pointer-events-none'></div>
                            )}

                        </div>


                    </div>


                </div>



                {/* right side  3d */}
                <div className='relative z-10 md:w-2/4 w-full h-180 md:h-full flex items-center justify-center overflow-hidden '
                    onMouseEnter={handle3DAreaMouseEnter}
                    onMouseLeave={handle3DAreaMouseLeave}
                >

                    <AnimatePresence mode='wait'>

                        {selectAvator === "VIKI" ? (
                            <motion.div
                                key="VIKI"
                                className='absolute inset-0'
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ duration: 0.5 }}
                            >
                                <Spline scene="https://prod.spline.design/4jXraxtnJLyO6hgt/scene.splinecode" />

                            </motion.div>
                        ) : (
                            <motion.div
                                key="EVA"
                                className='absolute inset-0'
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ duration: 0.5 }}
                            >
                                <Spline scene="https://prod.spline.design/Kt0bIM-NVmfD3a3U/scene.splinecode" />


                            </motion.div>

                        )}
                    </AnimatePresence>
                </div>

            </div>

        </div>
    )
}

export default Charecter