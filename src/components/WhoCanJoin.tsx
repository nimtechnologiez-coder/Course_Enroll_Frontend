"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, GraduationCap } from 'lucide-react';

const targets = [
    {
        icon: <User />,
        title: "Students",
        desc: "Build a standout AI engineering portfolio before graduation."
    },
    {
        icon: <Briefcase />,
        title: "Professionals",
        desc: "Upskill to become the AI lead in your current tech organization."
    },
    {
        icon: <GraduationCap />,
        title: "Teaching Staff",
        desc: "Learn modern agentic workflows to mentor the next generation."
    }
];

const WhoThisIsFor = () => {
    return (
        <section id="who" className="py-24 md:py-40">
            <div className="container-custom">
                <div className="text-center mb-24 space-y-4">
                    <div className="text-[10px] font-black uppercase tracking-[0.5em] text-primary-blue">Target Cohort</div>
                    <h2 className="text-section-title">Who This Is <span className="text-white/40">For.</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {targets.map((t, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="p-10 rounded-3xl bg-linear-to-b from-white/5 to-transparent border border-primary-blue/20 flex flex-col items-center text-center gap-6"
                        >
                            <div className="w-16 h-16 rounded-full bg-primary-blue/10 flex items-center justify-center text-primary-blue">
                                {t.icon}
                            </div>
                            <h3 className="text-xl font-bold">{t.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoThisIsFor;
