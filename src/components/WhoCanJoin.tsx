"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Zap, TrendingUp } from 'lucide-react';

const targets = [
    {
        icon: <Clock size={24} />,
        title: "Small Businesses",
        desc: "Handle every customer enquiry instantly without hiring extra staff."
    },
    {
        icon: <Users size={24} />,
        title: "Growing Companies",
        desc: "Organize leads and track customer interactions automatically."
    },
    {
        icon: <Zap size={24} />,
        title: "Service Providers",
        desc: "Convert enquiries into confirmed bookings automatically."
    },
    {
        icon: <TrendingUp size={24} />,
        title: "Established Businesses",
        desc: "Improve response speed and customer experience at scale."
    }
];

const WhoThisIsFor = () => {
    return (
        <section id="who" className="py-32 md:py-48 relative overflow-hidden bg-background">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(3,149,178,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-black uppercase tracking-[0.5em] text-primary-blue"
                    >
                        Universal Automation
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
                    >
                        Who This Is <span className="text-white/40">For.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg md:text-xl font-medium"
                    >
                        Any business that receives customer enquiries and wants faster responses and more conversions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {targets.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative glass-card p-10 md:p-12 overflow-hidden border-white/5 hover:border-primary-blue/30 transition-all shadow-2xl"
                        >
                            {/* Left Accent Bar */}
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-primary-blue to-primary-green opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 space-y-6">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-background transition-all duration-500 shadow-xl">
                                    {t.icon}
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-black text-white tracking-tight">{t.title}</h3>
                                    <p className="text-gray-500 text-lg font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {t.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Corner Accent */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-blue/5 blur-3xl rounded-full group-hover:bg-primary-blue/10 transition-colors" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-24 pt-12 border-t border-white/5 text-center"
                >
                    <p className="text-xs font-black uppercase tracking-[0.4em] text-gray-500/60">
                        Works for businesses of all sizes and categories.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhoThisIsFor;
