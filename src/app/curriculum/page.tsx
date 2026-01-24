"use client";
import React from 'react';
import PageLayout from '../../components/PageLayout';
import CurriculumTimeline from '../../components/Timeline';

export default function CurriculumPage() {
    return (
        <PageLayout
            title="Curriculum"
            subtitle="A rigorous, engineering-first approach to Agentic AI."
        >
            <div className="space-y-16">
                <div>
                    <h3 className="text-3xl font-black text-white mb-8">The Learning Roadmap</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-12">
                        Our curriculum is built on the 80/20 principle: focus on the 20% of technical skills that drive 80% of real-world impact.
                        No filler, just pure engineering.
                    </p>
                    <div className="bg-white/5 rounded-3xl p-2">
                        <CurriculumTimeline />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/5">
                    {[
                        { title: "Foundations", desc: "Mastering LLM reasoning and prompt-to-structure." },
                        { title: "Infrastructure", desc: "Building the backbone: databases, memory, and tools." },
                        { title: "Deployment", desc: "Scaling agents for production with robust monitoring." }
                    ].map((step, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                            <h4 className="text-primary-blue font-black uppercase tracking-widest text-xs mb-4">Step 0{i + 1}</h4>
                            <h5 className="text-xl font-bold text-white mb-4">{step.title}</h5>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
