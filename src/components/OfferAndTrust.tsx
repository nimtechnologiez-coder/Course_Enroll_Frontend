"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Gift, ShieldCheck, ArrowRight, Zap, MessageCircle } from 'lucide-react';

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
                        <h2 id="pricing" className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter">
                            Simple One-Time <br />
                            <span className="text-brand-gradient">Pricing.</span>
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 w-full max-w-5xl items-center">
                            {/* Pricing Card */}
                            <div className="bg-white/[0.02] border border-primary-green/20 p-12 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl group/price relative overflow-hidden">
                                <div className="absolute top-0 right-0 px-6 py-2 bg-primary-green text-background text-[10px] font-black uppercase tracking-widest rounded-bl-2xl">
                                    No Monthly Fee
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.5em] mb-6">WhatsApp Automation Setup</div>
                                    <div className="flex items-center justify-center gap-2 mb-10">
                                        <span className="text-7xl md:text-8xl font-black text-white tracking-tighter">₹7,999</span>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            "Complete setup on your number",
                                            "Automatic Lead tracking",
                                            "24/7 Booking system",
                                            // "30-day support"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center justify-center gap-3 text-gray-400 font-bold text-sm">
                                                <ShieldCheck size={16} className="text-primary-green" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Guarantee Section */}
                            <div className="text-center lg:text-left space-y-10">
                                <div className="space-y-6">
                                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary-blue/10 border border-primary-blue/20 text-primary-blue text-[10px] font-black uppercase tracking-[0.4em]">
                                        Our Guarantee
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                                        One Time <br />
                                        <span className="text-white/40">Setup.</span>
                                    </h3>
                                    <p className="text-gray-500 text-lg font-medium leading-relaxed">
                                        We show the system working live on your own WhatsApp number before you make any payment.
                                    </p>
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-primary-green font-black text-xl italic">
                                        "If you don't like it, you don't pay."
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-32 w-full max-w-5xl pt-24 border-t border-white/5">
                            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter">Ready to Stop <br />Missing Customers?</h2>
                            <p className="text-gray-500 text-xl mb-12 max-w-xl mx-auto">Install your automated WhatsApp booking system today.</p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <button
                                    onClick={() => window.open('https://wa.me/917397224594?text=Hi%20I%20want%20demo%20of%20WhatsApp%20automation', '_blank')}
                                    className="button-primary group w-full sm:w-auto"
                                >
                                    <span>Install This on My WhatsApp</span>
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                <button
                                    onClick={() => window.open('https://wa.me/917397224594', '_blank')}
                                    className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all w-full sm:w-auto flex items-center justify-center gap-3"
                                >
                                    <MessageCircle size={20} className="text-primary-green" />
                                    <span>Chat on WhatsApp</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;
