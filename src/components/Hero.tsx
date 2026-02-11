"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Star, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface OfferProps {
    onEnroll: (courseTitle?: string) => void;
}

const Hero: React.FC<OfferProps> = ({ onEnroll }) => {
    return (
        <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden">
            {/* Focal Lighting & Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(3,149,178,0.15)_0%,rgba(163,216,97,0.05)_30%,transparent_70%)] pointer-events-none animate-pulse-slow" />
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary-blue/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary-green/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-custom relative z-10 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] text-primary-green mb-10 backdrop-blur-xl shadow-2xl"
                >
                    <img src="/logo.png" alt="" className="h-5 w-auto" />
                    WhatsApp Lead Capture & Auto-Booking System by Nim Technologies
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-hero mb-8 tracking-[-0.07em]"
                >
                    Smart SEO Automation <br />
                    <span className="text-brand-gradient drop-shadow-[0_0_30px_rgba(3,149,178,0.3)]">on WhatsApp.</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-white text-2xl md:text-4xl max-w-4xl mb-6 font-black tracking-tight"
                >
                    Turn Every Customer Message into a Confirmed Appointment Automatically.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-400 text-lg md:text-xl max-w-3xl mb-16 leading-relaxed font-medium px-4"
                >
                    Our automation system converts WhatsApp enquiries into organized leads and scheduled bookings — even when you are offline.
                    <br />
                    <span className="text-white/60">Automate enquiries, responses, and bookings across your digital channels.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
                >
                    <button
                        onClick={() => window.open('https://wa.me/917397224594?text=Hi%20I%20want%20demo%20of%20WhatsApp%20automation', '_blank')}
                        className="button-primary group w-full sm:w-auto"
                    >
                        <span>Install This on My WhatsApp</span>
                        <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* <button
                        onClick={() => {
                            const element = document.getElementById('contact');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all w-full sm:w-auto flex items-center justify-center gap-3"
                    >
                        See Live Demo
                    </button> */}
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12"
                >
                    {[
                        { icon: <ShieldCheck size={18} />, text: "Works with WhatsApp Business" },
                        { icon: <Zap size={18} />, text: "Setup within 24 hrs" },
                        { icon: <Star size={18} />, text: "24/7 Support" }
                    ].map((badge, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-500 font-black text-[10px] uppercase tracking-widest">
                            <span className="text-primary-green">{badge.icon}</span>
                            {badge.text}
                        </div>
                    ))}
                </motion.div>


            </div >
        </section >
    );
};

export default Hero;
