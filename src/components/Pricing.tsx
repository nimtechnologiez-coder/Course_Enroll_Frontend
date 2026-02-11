"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Zap, ArrowRight, Server, Database, MessageSquare, Bell, Layout, TestTube, Headphones } from 'lucide-react';

interface PricingProps {
    onEnroll: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onEnroll }) => {
    const features = [
        { icon: <MessageSquare size={18} />, text: "WhatsApp auto-reply setup" },
        { icon: <Database size={18} />, text: "Lead capture system" },
        { icon: <Layout size={18} />, text: "Appointment booking flow" },
        { icon: <Bell size={18} />, text: "Owner instant alerts" },
        { icon: <Zap size={18} />, text: "Ready-to-use message templates" },
        { icon: <TestTube size={18} />, text: "Live testing on your number" },
        { icon: <Headphones size={18} />, text: "30 days support" }
    ];

    return (
        <section id="pricing" className="py-5 md:py-10 relative overflow-hidden bg-background">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(3,149,178,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-black tracking-tighter"
                    >
                        Simple One-Time <br />
                        <span className="text-brand-gradient">Installation.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg md:text-xl font-medium"
                    >
                        Start automating your customer enquiries without monthly subscriptions.
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative glass-card border-primary-blue/20 p-10 md:p-20 rounded-[3rem] shadow-2xl overflow-hidden group"
                    >
                        {/* Business License Badge */}
                        <div className="absolute top-0 right-0 px-8 py-3 bg-linear-to-r from-primary-blue to-primary-green text-background text-xs font-black uppercase tracking-widest rounded-bl-3xl shadow-xl">
                            Business License
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <div className="text-[10px] font-black text-primary-blue uppercase tracking-[0.5em]">Software Installation & Configuration</div>
                                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                                        WhatsApp Business <br /> Automation Setup
                                    </h3>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-7xl md:text-8xl font-black text-white tracking-tighter">₹7,999</span>
                                    </div>
                                    <div className="flex flex-col gap-1 mt-4">
                                        <span className="text-primary-green font-black text-xs uppercase tracking-widest">One-Time Setup Fee</span>
                                        <span className="text-gray-500 font-bold text-xs uppercase tracking-widest">No Monthly Charges • No Renewal Fees</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6 pt-6">
                                    <button
                                        onClick={() => window.open('https://wa.me/917397224594?text=Hi%20I%20want%20demo%20of%20WhatsApp%20automation', '_blank')}
                                        className="button-primary group py-6 text-lg"
                                    >
                                        <span>Install This on My WhatsApp</span>
                                        <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest text-center lg:text-left">
                                        Setup within 24 hrs after confirmation.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white/[0.03] border border-white/5 p-10 md:p-12 rounded-3xl space-y-8">
                                <h4 className="text-sm font-black text-white uppercase tracking-widest border-b border-white/10 pb-4">What's Included</h4>
                                <div className="space-y-5">
                                    {features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-4 group/item">
                                            <div className="w-8 h-8 rounded-lg bg-primary-green/10 flex items-center justify-center text-primary-green group-hover/item:bg-primary-green group-hover/item:text-background transition-colors duration-300">
                                                <Check size={16} strokeWidth={3} />
                                            </div>
                                            <span className="text-gray-400 font-bold text-sm group-hover/item:text-white transition-colors">
                                                {feature.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-6 border-t border-white/10 mt-auto">
                                    <div className="flex items-center gap-3 text-primary-blue font-black text-[10px] uppercase tracking-widest">
                                        <ShieldCheck size={16} />
                                        Works on your existing WhatsApp Business account.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Animated Accent */}
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-blue/10 blur-[100px] rounded-full group-hover:bg-primary-blue/20 transition-colors duration-700" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
