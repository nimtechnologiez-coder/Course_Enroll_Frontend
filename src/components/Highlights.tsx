"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Terminal, Zap, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        icon: <Shield size={28} />,
        title: "Ethical Hacking & Penetration Testing",
        desc: "Master network vulnerability assessment, web application hacking, and offensive security techniques.",
        skills: ["Vuln Assessment", "Exploit Dev"],
        num: "01"
    },
    {
        icon: <Zap size={28} />,
        title: "AWS, Azure & Cloud Security",
        desc: "Secure cloud infrastructure through IAM hardening, serverless security, and compliance monitoring.",
        skills: ["Cloud Hardening", "IAM Security"],
        num: "02"
    },
    {
        icon: <Terminal size={28} />,
        title: "SIEM, Incident Response & Monitoring",
        desc: "Deploy advanced threat hunting, log analysis, and crisis resolution strategies across enterprise networks.",
        skills: ["Threat Hunting", "Log Analysis"],
        num: "03"
    },
    {
        icon: <Brain size={28} />,
        title: "AI & Machine Learning in Cybersecurity",
        desc: "Utilize neural networks for threat detection and automated malware analysis in real-time.",
        skills: ["ML Detection", "Malware AI"],
        num: "04"
    }
];

const WhatYouWillBuild = ({ onEnroll }: { onEnroll: (title?: string) => void }) => {
    return (
        <section className="py-24 md:py-40 relative">
            <div className="container-custom">
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-blue/10 border border-primary-blue/20 text-primary-blue text-[10px] font-black uppercase tracking-[0.4em]">
                            Professional Tracks
                        </div>
                        <h2 id="benefits" className="text-section-title leading-[1.05]">
                            Elite <br />
                            <span className="text-brand-gradient">Security Domains.</span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-gray-500 text-lg font-medium leading-relaxed border-l-2 border-primary-blue/30 pl-8">
                        Master the most critical domains in modern cybersecurity with our 100% industry-ready, hands-on curriculum.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="glass-card flex flex-col h-full group p-8 md:p-10 border-white/5 hover:border-primary-blue/40 hover:bg-white/[0.04] transition-all duration-500"
                        >
                            {/* Card Header: Icon & Marker */}
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary-blue group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(3,149,178,0.3)] group-hover:bg-primary-blue group-hover:text-white transition-all duration-500">
                                    {p.icon}
                                </div>
                                <span className="text-[10px] font-black text-gray-700 tracking-[0.2em]">TRACK {p.num}</span>
                            </div>

                            {/* Card Content */}
                            <div className="flex-1 flex flex-col">
                                <h3 className="text-2xl font-black mb-4 tracking-tight leading-tight group-hover:text-primary-blue transition-colors">
                                    {p.title}
                                </h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8">
                                    {p.desc}
                                </p>

                                {/* Aligned Bullet Points */}
                                <div className="space-y-3 mb-10">
                                    {p.skills.map((skill, si) => (
                                        <div key={si} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary-green shadow-[0_0_10px_rgba(163,216,97,0.5)]" />
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Card Footer: Price & Button (Pinned to Bottom) */}
                            <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between gap-4">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-0.5">Price</span>
                                    <div className="text-2xl font-black text-white">₹5,000</div>
                                </div>
                                <button
                                    onClick={() => onEnroll(p.title)}
                                    className="px-6 py-3 rounded-xl bg-primary-blue/10 border border-primary-blue/30 text-primary-blue text-[10px] font-black uppercase tracking-widest hover:bg-primary-blue hover:text-white hover:shadow-[0_0_25px_rgba(3,149,178,0.4)] transition-all duration-300"
                                >
                                    Enroll Now
                                </button>
                            </div>

                            {/* Subtle Corner Accents */}
                            <ArrowUpRight
                                size={20}
                                className="absolute top-6 right-6 text-white/5 group-hover:text-primary-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatYouWillBuild;
