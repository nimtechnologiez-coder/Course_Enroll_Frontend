"use client";
import React from 'react';

const TrustStrip = () => {
    return (
        <div className="w-full bg-white/[0.02] border-y border-white/5 backdrop-blur-md py-8">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    <p className="text-xs font-black uppercase tracking-[0.4em] text-center md:text-left">
                        Developed by <span className="text-white">Nim Technologies</span>
                    </p>
                    <div className="hidden md:block w-px h-6 bg-white/10" />
                    <div className="flex gap-8 text-[11px] font-black uppercase tracking-widest">
                        <span>LIFETIME ACCESS</span>
                        <span>CERTIFIED</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustStrip;
