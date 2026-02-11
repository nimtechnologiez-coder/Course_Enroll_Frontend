"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, ArrowRight, Clock, PhoneOff, Users, MessageSquareOff, Bell, Database, MailCheck, MessageCircle, BarChart3, Star } from 'lucide-react';

const problems = [
    {
        icon: <Clock size={28} />,
        title: "Late replies to customers",
        desc: "Every delayed response reduces the chance of booking.",
        num: "01"
    },
    {
        icon: <PhoneOff size={28} />,
        title: "Missed calls never followed up",
        desc: "Busy businesses lose 40% of leads due to missed answering.",
        num: "02"
    },
    {
        icon: <Users size={28} />,
        title: "Staff forgets enquiries",
        desc: "Human error leads to lost revenue and customer frustration.",
        num: "03"
    },
    {
        icon: <MessageSquareOff size={28} />,
        title: "Chats get buried in WhatsApp",
        desc: "Important enquiries get lost in a sea of personal chats.",
        num: "04"
    }
];

const solutionSteps = [
    { title: "Instant auto reply", desc: "When a customer sends 'Hi'" },
    { title: "Lead captured", desc: "Data saved automatically" },
    { title: "Owner notified", desc: "Real-time alert sent" },
    { title: "Appointment confirmed", desc: "Booking finalized" }
];

const features = [
    { icon: <Zap size={24} />, title: "Auto Reply", desc: "Instant generic or customized responses." },
    { icon: <Shield size={24} />, title: "Lead Capture", desc: "Automatically save contact details." },
    { icon: <Zap size={24} />, title: "Auto Booking", desc: "Smart scheduling without human interaction." },
    { icon: <Bell size={24} />, title: "Owner Alerts", desc: "Instant notifications for every lead." },
    { icon: <MailCheck size={24} />, title: "Follow-up Messages", desc: "Automatic reminders to your customers." },
    { icon: <Database size={24} />, title: "Customer Database", desc: "Organized list of all your enquiries." },
    { icon: <MessageCircle size={24} />, title: "Broadcast Messaging", desc: "Send updates to all leads at once." },
    { icon: <BarChart3 size={24} />, title: "Analytics", desc: "Detailed reports on your lead conversion." }
];

const WhatYouWillBuild = ({ onEnroll }: { onEnroll: (title?: string) => void }) => {
    return (
        <section className="py-24 md:py-40 relative">
            <div className="container-custom">
                <div id="problem" className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-blue/10 border border-primary-blue/20 text-primary-blue text-[10px] font-black uppercase tracking-[0.4em]">
                            The Problem Every Local Business Faces
                        </div>
                        <h2 className="text-section-title leading-[1.05]">
                            Why Businesses Lose <br />
                            <span className="text-brand-gradient">Customers Daily.</span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-gray-500 text-lg font-medium leading-relaxed border-l-2 border-primary-blue/30 pl-8">
                        Every delayed response reduces the chance of booking. Late replies, missed calls, and buried chats leak revenue every hour.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {problems.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="glass-card flex flex-col h-full group p-8 border-white/5 hover:border-primary-blue/40 transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary-blue mb-8">
                                {p.icon}
                            </div>
                            <h3 className="text-xl font-black mb-4 group-hover:text-primary-blue transition-colors leading-tight">
                                {p.title}
                            </h3>
                            <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                {p.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div id="solution" className="pt-20 border-t border-white/5">
                    <div className="text-center mb-20 space-y-6">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-green/10 border border-primary-green/20 text-primary-green text-[10px] font-black uppercase tracking-[0.4em]">
                            The Solution
                        </div>
                        <h2 className="text-section-title">
                            Your WhatsApp Becomes a <br />
                            <span className="text-brand-gradient">24/7 Sales Assistant.</span>
                        </h2>
                    </div>

                    {/* Horizontal Flow Diagram */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-32 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-linear-to-r from-primary-green/0 via-primary-green/20 to-primary-green/0 z-0" />

                        {solutionSteps.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative z-10 flex flex-col items-center text-center group"
                            >
                                <div className="w-20 h-20 rounded-full bg-background border-2 border-primary-green/30 flex items-center justify-center text-primary-green text-2xl font-black mb-6 group-hover:border-primary-green group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(163,216,97,0.1)]">
                                    {i + 1}
                                </div>
                                <h3 className="text-white font-black mb-2 uppercase tracking-tighter">{s.title}</h3>
                                <p className="text-gray-500 text-xs font-medium">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Features Grid */}
                    <div id="features" className="pt-20 border-t border-white/5">
                        <div className="mb-20 space-y-6">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-blue/10 border border-primary-blue/20 text-primary-blue text-[10px] font-black uppercase tracking-[0.4em]">
                                Features
                            </div>
                            <h2 className="text-section-title">
                                Advanced <br />
                                <span className="text-brand-gradient">Capabilities.</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-primary-blue/30 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue mb-6 group-hover:scale-110 transition-transform">
                                        {f.icon}
                                    </div>
                                    <h3 className="text-lg font-black mb-2 text-white">{f.title}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatYouWillBuild;
