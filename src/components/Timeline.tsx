"use client";
import React from 'react';
import { motion } from 'framer-motion';

const modules = [
    {
        week: "Step 01",
        title: "Ethical Hacking Foundations",
        desc: "Master network scanning, vulnerability assessment, and offensive security principles."
    },
    {
        week: "Step 02",
        title: "Cloud Infrastructure Security",
        desc: "Secure AWS/Azure environments, IAM policies, and cloud-native defense strategies."
    },
    {
        week: "Step 03",
        title: "Incident Response & SIEM",
        desc: "Deploy Splunk/ELK, hunt for threats, and manage enterprise security operations."
    },
    {
        week: "Step 04",
        title: "AI & ML in Defense",
        desc: "Implement automated threat detection and neural network-based malware analysis."
    }
];

const Curriculum = () => {
    return (
        <section id="curriculum" className="py-24 md:py-40 bg-white/[0.01]">
            <div className="container-custom">
                <div className="text-center mb-24">
                    <h2 className="text-section-title mb-4">Curriculum <span className="text-primary-blue text-glow">Roadmap.</span></h2>
                    <p className="text-gray-500 max-w-xl mx-auto">A professional-grade path from basic concepts to industry-ready security expertise.</p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {modules.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row gap-8 items-start relative group"
                        >
                            <div className="flex-shrink-0 w-full md:w-32 text-xs font-black uppercase tracking-[0.3em] text-primary-green pt-2">
                                {m.week}
                            </div>

                            <div className="flex-1 glass-card p-10 hover:bg-white/[0.05] transition-all relative overflow-hidden group">
                                {/* Side Indicator Line */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-blue/30 group-hover:bg-primary-blue transition-colors" />

                                <h3 className="text-2xl font-extrabold mb-4">{m.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Curriculum;
