"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';

const benefits = [
    {
        icon: <Award className="text-primary-green" />,
        title: "WhatsApp Auto-Reply Setup",
        desc: "Instant automated responses to every enquiry on your business number."
    },
    {
        icon: <TrendingUp className="text-primary-blue" />,
        title: "Lead Capture & Tracking",
        desc: "Automatically save lead details and track them in real-time."
    },
    {
        icon: <Briefcase className="text-primary-green" />,
        title: "Appointment Templates",
        desc: "Ready-made templates to confirm bookings instantly via WhatsApp."
    }
];

const Certification = () => {
    return (
        <section id="certification" className="py-24 md:py-40 bg-white/[0.01]">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    {/* Certificate Preview Card */}
                    <motion.div
                        initial={{ opacity: 0, rotateY: -20 }}
                        whileInView={{ opacity: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full max-w-xl"
                    >
                        <div className="relative group">
                            {/* Glow */}
                            <div className="absolute inset-x-10 inset-y-10 bg-primary-blue/20 blur-[100px] rounded-full group-hover:scale-125 transition-transform duration-700" />

                            <div className="relative glass-card aspect-[1.4/1] bg-linear-to-br from-white/10 to-transparent border-white/20 p-8 md:p-12 flex flex-col justify-between overflow-hidden shadow-2xl">
                                <div className="flex justify-between items-start">
                                    <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center">
                                        <Award size={32} className="text-white" />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">Certificate ID</div>
                                        <div className="text-xs font-mono text-primary-blue">#CYBER-2026-NIM</div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter">Live Business <br />Automation.</h3>
                                    <div className="h-px w-full bg-linear-to-r from-white/20 to-transparent" />
                                    <p className="text-sm text-gray-400 font-medium">This system handles auto-replies, lead capture, and appointment scheduling 24/7 on your existing WhatsApp number.</p>
                                </div>

                                <div className="flex justify-between items-end border-t border-white/10 pt-8">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary-green">Developed By</span>
                                        <span className="text-lg font-black italic">Nim Technologies</span>
                                    </div>
                                    <div className="w-24 h-24 border border-white/10 rounded-lg flex items-center justify-center opacity-40">
                                        <span className="text-[8px] font-black text-center rotate-45">AUTHENTIC SEAL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Benefits Grid */}
                    <div className="flex-1 space-y-12">
                        <div>
                            <div className="text-primary-green text-[10px] font-black uppercase tracking-[0.5em] mb-4">What You Get</div>
                            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Everything You Need <br />To <span className="text-brand-gradient">Automate.</span></h2>
                            <p className="text-gray-500 text-lg leading-relaxed">Runs 24/7, even when you are busy, offline, or closed. 30 days setup support included.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-8">
                            {benefits.map((b, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-all duration-500 shadow-xl">
                                        {b.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 group-hover:text-primary-green transition-colors">{b.title}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed max-w-md">{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certification;
