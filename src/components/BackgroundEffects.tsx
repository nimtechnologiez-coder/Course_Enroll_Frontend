"use client";
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
            {/* Dynamic Grid */}
            <div className="absolute inset-0 grid-pattern opacity-40" />

            {/* Moving Blobs */}
            <motion.div
                animate={{
                    x: [-100, 100, -100],
                    y: [-50, 50, -50],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-primary-blue/10 rounded-full blur-[140px]"
            />

            <motion.div
                animate={{
                    x: [100, -100, 100],
                    y: [50, -50, 50],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary-green/10 rounded-full blur-[120px]"
            />

            {/* Depth Shadows */}
            <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background opacity-80" />
        </div>
    );
};

export default BackgroundEffects;
