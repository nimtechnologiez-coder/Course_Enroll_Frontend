"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Star, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
    onEnroll: () => void;
}

const Hero: React.FC<HeroProps> = ({ onEnroll }) => {
    return (
        <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden">
            {/* Focal Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(3,149,178,0.1)_0%,transparent_60%)] pointer-events-none" />

            <div className="container-custom relative z-10 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] text-primary-green mb-10 backdrop-blur-xl shadow-2xl"
                >
                    <img src="/brand/logo.png" alt="" className="h-5 w-auto" />
                    Join the Elite AI Squad
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-hero mb-8 tracking-[-0.07em]"
                >
                    Agentic AI <br />
                    <span className="text-brand-gradient drop-shadow-[0_0_30px_rgba(3,149,178,0.3)]">Mastery.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-400 text-lg md:text-2xl max-w-3xl mb-16 leading-relaxed font-medium px-4"
                >
                    Master the technical architecture of <span className="text-white">autonomous agents</span>.
                    The only program that goes beyond prompts into pure engineering.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-10 w-full sm:w-auto"
                >
                    <button
                        onClick={onEnroll}
                        className="button-primary group w-full sm:w-auto"
                    >
                        <span>Claim Your Spot</span>
                        <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex flex-col items-center sm:items-start">
                        <div className="flex items-center gap-4">
                            <span className="text-4xl md:text-5xl font-black text-white tabular-nums">₹3,499</span>
                            <div className="flex flex-col leading-none">
                                <span className="text-gray-600 line-through text-lg font-bold">₹17,000</span>
                                <span className="text-primary-green text-[10px] font-black uppercase tracking-widest mt-1">Limited</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 1 }}
                    className="mt-24 flex flex-wrap justify-center gap-10 text-[10px] font-black uppercase tracking-[0.5em] grayscale"
                >
                    <span>OpenAI</span>
                    <span>Anthropic</span>
                    <span>LangChain</span>
                    <span>Vercel</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
