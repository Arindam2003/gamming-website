import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function CustomCursor({ isHover3D }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

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
                transition={{ duration: 0.2 }}
            />
            {isHover3D && (
                <motion.div
                    className='absolute inset-0 rounded-full bg-transition border border-violet-500'
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 2, opacity: 0.5 }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            )}
        </motion.div>
    );
}

export default CustomCursor;
