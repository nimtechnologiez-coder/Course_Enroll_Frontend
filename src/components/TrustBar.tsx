"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, ShieldCheck } from 'lucide-react';

const TrustBar = () => {
    return (
        <section className="relative py-4 border-y border-white/5 bg-primary-blue/[0.03] backdrop-blur-sm overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-center"
                >
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary-green" />
                        <span className="text-[11px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500">
                            Trusted by <span className="text-white">3,000+ businesses</span>
                        </span>
                    </div>

                    <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />

                    <div className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-primary-blue" />
                        <span className="text-[11px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500">
                            Using our <span className="text-white">automation systems</span>
                        </span>
                    </div>

                    <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />

                    <div className="flex items-center gap-2">
                        <Star size={16} className="text-primary-green" />
                        <span className="text-[11px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500">
                            99.9% <span className="text-white">Uptime Guaranteed</span>
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary-blue/[0.05] to-transparent pointer-events-none" />
        </section>
    );
};

export default TrustBar;
