"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Gift, ShieldCheck, ArrowRight, Zap } from 'lucide-react';

interface OfferProps {
    onEnroll: (courseTitle?: string) => void;
}

const Offer: React.FC<OfferProps> = ({ onEnroll }) => {
    const [timeLeft, setTimeLeft] = useState({ h: 23, m: 59, s: 59 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.s > 0) return { ...prev, s: prev.s - 1 };
                if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
                if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-32 md:py-64 relative overflow-hidden">
            <div className="container-custom">
                <div className="relative glass-card border-white/10 p-10 md:p-32 rounded-[3.5rem] overflow-hidden group">

                    {/* Animated Accents */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-primary-blue/10 to-transparent blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-tr from-primary-green/5 to-transparent blur-[120px]" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary-green/10 border border-primary-green/20 text-primary-green text-[10px] font-black uppercase tracking-[0.4em] mb-14"
                        >
                            <Zap size={14} className="animate-pulse" />
                            Final Cohort Open
                        </motion.div>

                        <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter">
                            Ready to Secure the <br />
                            <span className="text-brand-gradient">Digital World?</span>
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 w-full max-w-5xl items-center">
                            {/* Modern Timer */}
                            <div className="bg-white/[0.02] border border-white/5 p-12 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl group/timer">
                                <div className="flex items-center justify-center gap-3 text-primary-green text-[10px] font-black uppercase tracking-[0.5em] mb-10 opacity-60 group-hover/timer:opacity-100 transition-opacity">
                                    <Clock size={16} />
                                    OFFER CLOSING
                                </div>
                                <div className="flex justify-center gap-6 md:gap-10">
                                    {[{ v: timeLeft.h, l: "HRS" }, { v: timeLeft.m, l: "MIN" }, { v: timeLeft.s, l: "SEC" }].map((t, i) => (
                                        <div key={i} className="text-center">
                                            <div className="text-5xl md:text-7xl font-black tabular-nums transition-colors group-hover/timer:text-primary-green">{t.v.toString().padStart(2, '0')}</div>
                                            <div className="text-[10px] text-gray-700 font-black mt-3 tracking-widest">{t.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Pricing & Value */}
                            <div className="text-center lg:text-left space-y-10">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-center lg:justify-start gap-4">
                                        <span className="text-7xl md:text-8xl font-black text-white tracking-tighter">₹5,000</span>
                                        <div className="flex flex-col">
                                            <span className="text-gray-600 line-through text-2xl font-bold">₹25,000</span>
                                            <span className="text-primary-green font-black text-xs uppercase tracking-widest mt-1">SAVE 99%</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-lg font-medium">Limited to the first 50 seats for this batch.</p>
                                </div>

                                <div className="grid grid-cols-1 gap-5">
                                    {[
                                        "Professional Cybersecurity Certificate",
                                        "LIFETIME Access to Video Modules",
                                        "Direct Mentorship Channel Access"
                                    ].map((txt, i) => (
                                        <div key={i} className="flex items-center justify-center lg:justify-start gap-4 text-gray-400 font-bold text-sm">
                                            <div className="w-6 h-6 rounded-full bg-primary-green/10 flex items-center justify-center text-primary-green shrink-0">
                                                <ShieldCheck size={14} />
                                            </div>
                                            <span>{txt}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-20 w-full max-w-sm">
                            <button
                                onClick={() => onEnroll()}
                                className="button-primary w-full group"
                            >
                                <span>SECURE MY SEAT</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <div className="mt-6 flex items-center justify-center gap-4 text-[10px] font-black text-gray-700 uppercase tracking-widest">
                                <span>Powered by Razorpay</span>
                                <div className="w-1 h-1 rounded-full bg-gray-800" />
                                <span>7-Day Refund Policy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;
