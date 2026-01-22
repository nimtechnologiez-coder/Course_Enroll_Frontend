"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Terminal, Zap, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        icon: <Brain size={28} />,
        title: "Autonomous GPT",
        desc: "Build an agent that can plan and execute multi-step tasks independently.",
        num: "01"
    },
    {
        icon: <Code size={28} />,
        title: "Tool Integrator",
        desc: "Equip your AI with custom tools, APIs, and real-time data search.",
        num: "02"
    },
    {
        icon: <Terminal size={28} />,
        title: "CLI Analyst",
        desc: "Deploy an agent that manages system resources and writes optimized code.",
        num: "03"
    },
    {
        icon: <Zap size={28} />,
        title: "Team Swarm",
        desc: "Orchestrate a team of agents collaborating to solve complex issues.",
        num: "04"
    }
];

const WhatYouWillBuild = () => {
    return (
        <section className="py-32 md:py-48 relative">
            <div className="container-custom">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="space-y-6">
                        <div className="text-primary-blue text-[10px] font-black uppercase tracking-[0.5em]">Project Ecosystem</div>
                        <h2 id="benefits" className="text-section-title">Build the <br /><span className="text-white/30">Future.</span></h2>
                    </div>
                    <p className="max-w-xs text-gray-500 text-lg font-medium leading-relaxed border-l-2 border-primary-blue pl-8">
                        The course is 100% project-based. You ship four production agents.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card group p-10 hover:border-primary-blue/30 cursor-default"
                        >
                            <div className="flex justify-between items-start mb-10">
                                <span className="text-[10px] font-black text-gray-700 group-hover:text-primary-blue transition-colors">PROJECT {p.num}</span>
                                <ArrowUpRight size={18} className="text-white/10 group-hover:text-white transition-colors" />
                            </div>

                            <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-primary-blue mb-8 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500 shadow-2xl">
                                {p.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4 tracking-tighter">{p.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                {p.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatYouWillBuild;
