"use client";
import React from 'react';
import PageLayout from '../../components/PageLayout';

export default function ProgramsPage() {
    return (
        <PageLayout
            title="Our Programs"
            subtitle="Master the future of AI with our elite engineering tracks."
        >
            <div className="space-y-12">
                <div>
                    <h3 className="text-3xl font-black text-white mb-6">Agentic AI Mastery</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Our flagship program designed for world-class engineers. Move from prompt engineering to infrastructure architecture.
                        Learn to build autonomous, self-correcting agents that can reason and execute complex workflows.
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Llama 3.1 & GPT-4o Multi-Agent Systems",
                            "Advanced RAG Architectures",
                            "Agentic Workflow Design",
                            "Self-Correction & Reasoning Patterns"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-white font-medium">
                                <div className="w-2 h-2 rounded-full bg-primary-green" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-12 border-t border-white/5">
                    <h3 className="text-3xl font-black text-white mb-6">Enterprise SDK Track</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Specialized training for integrating AI agents at scale within enterprise environments.
                        Focused on security, observability, and cost-optimization.
                    </p>
                </div>
            </div>
        </PageLayout>
    );
}
