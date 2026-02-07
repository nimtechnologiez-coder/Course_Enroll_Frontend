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
        duration: "160 Hours",
        price: 45000,
        num: "01"
    },
    {
        icon: <Zap size={28} />,
        title: "AWS, Azure & Cloud Security",
        desc: "Secure cloud infrastructure through IAM hardening, serverless security, and compliance monitoring.",
        skills: ["Cloud Hardening", "IAM Security"],
        duration: "60 Hours",
        price: 50000,
        num: "02"
    },
    {
        icon: <Terminal size={28} />,
        title: "SOC Engineering",
        desc: "Deploy advanced threat hunting, log analysis, and crisis resolution strategies across enterprise networks.",
        skills: ["Threat Hunting", "Log Analysis"],
        duration: "75 Hours",
        price: 40000,
        num: "03"
    },
    {
        icon: <Brain size={28} />,
        title: "AI & Machine Learning in Cybersecurity",
        desc: "Utilize neural networks for threat detection and automated malware analysis in real-time.",
        skills: ["ML Detection", "Malware AI"],
        duration: "180 Hours",
        price: 45000,
        num: "04"
    },
    {
        icon: <Terminal size={28} />,
        title: "AWS DevOps Master Program",
        subtitle: "AWS + Python + Shell + Linux",
        desc: "Comprehensive masterclass covering AWS DevOps, Python & Shell scripting, and Linux administration.",
        skills: ["AWS DevOps", "Automation"],
        duration: "250 Hours",
        price: 60000,
        num: "05"
    },
    {
        icon: <Terminal size={28} />,
        title: "SAP MM SYSTEM OF APPLICATION",
        desc: "Master SAP Material Management (MM) module for efficient supply chain and inventory management.",
        skills: ["SAP MM", "Procurement"],
        duration: "120 Hours",
        price: 45000,
        num: "06"
    },
    {
        icon: <Terminal size={28} />,
        title: "OS + NETWORKING (CCNA)",
        desc: "Deep dive into Operating Systems and Networking fundamentals with Cisco CCNA alignment.",
        skills: ["Networking", "CCNA Cert"],
        duration: "160 Hours",
        price: 40000,
        num: "07"
    },
    {
        icon: <Shield size={28} />,
        title: "Bug Bounty",
        desc: "Master the art of finding and reporting security vulnerabilities in web applications and networks.",
        skills: ["Vulnerability Research", "Bug Hunting"],
        duration: "60 Hours",
        price: 25000,
        num: "08"
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
                            Full Training <br />
                            <span className="text-brand-gradient">Catalog.</span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-gray-500 text-lg font-medium leading-relaxed border-l-2 border-primary-blue/30 pl-8">
                        Master industry-leading technologies with our 100% hands-on, expert-led curriculum designed for the modern job market.
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
                                <span className="text-[10px] font-black text-gray-700 tracking-[0.2em]">COURSE {p.num}</span>
                            </div>

                            {/* Card Content */}
                            <div className="flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-xl md:text-2xl font-black mb-1 tracking-tight leading-tight group-hover:text-primary-blue transition-colors">
                                        {p.title}
                                    </h3>
                                    {/* Subtitle if available */}
                                    {/* @ts-ignore */}
                                    {p.subtitle && (
                                        <div className="text-sm font-bold text-gray-400 mb-3">
                                            {/* @ts-ignore */}
                                            {p.subtitle}
                                        </div>
                                    )}
                                </div>
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

                            {/* Divider */}
                            <div className="w-full h-px bg-white/5 mb-8" />

                            {/* Card Footer: Price, Duration & Button (Pinned to Bottom) */}
                            <div className="mt-auto space-y-6">
                                <div className="flex items-end justify-between gap-4 h-[50px]">
                                    <div className="flex flex-col mb-1">
                                        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-0.5">Price</span>
                                        {/* @ts-ignore */}
                                        <div className="text-2xl font-black text-white whitespace-nowrap">₹{p.price ? p.price.toLocaleString('en-IN') : '5,000'}</div>
                                    </div>
                                    {/* Highlighted Duration Badge */}
                                    <div className="flex flex-col items-end mb-1">
                                        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">Duration</span>
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-br from-primary-blue/10 to-primary-green/10 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-md group-hover:border-primary-blue/30 transition-all duration-500 whitespace-nowrap">
                                            <span className="text-primary-blue text-sm">⏱</span>
                                            <span className="text-[11px] font-black uppercase tracking-wider text-white">{p.duration}</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        if (p.title === "Bug Bounty") {
                                            window.location.href = `https://enroll.nimtechnologies.in?course=${encodeURIComponent(p.title)}`;
                                        } else {
                                            onEnroll(encodeURIComponent(p.title));
                                        }
                                    }}
                                    className="w-full px-6 py-4 rounded-xl bg-primary-blue/10 border border-primary-blue/30 text-primary-blue text-[10px] font-black uppercase tracking-widest hover:bg-primary-blue hover:text-white hover:shadow-[0_0_25px_rgba(3,149,178,0.4)] transition-all duration-300"
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
