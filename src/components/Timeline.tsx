"use client";
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        week: "Step 01",
        title: "We connect your WhatsApp",
        desc: "We securely connect your existing WhatsApp Business number to our automation engine. No new number needed."
    },
    {
        week: "Step 02",
        title: "We configure replies & booking flow",
        desc: "Our team sets up your custom auto-replies, lead capture fields, and appointment booking logic based on your business."
    },
    {
        week: "Step 03",
        title: "You start receiving confirmed customers",
        desc: "Sit back and watch as your WhatsApp handles enquiries and books appointments automatically 24/7."
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 md:py-40 bg-white/[0.01]">
            <div className="container-custom">
                <div className="text-center mb-24">
                    <h2 className="text-section-title mb-4">How It <span className="text-primary-blue text-glow">Works.</span></h2>
                    <p className="text-gray-500 max-w-xl mx-auto">No technical knowledge required. We set up everything for you within 24 hours.</p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {steps.map((m, i) => (
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

export default HowItWorks;
