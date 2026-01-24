"use client";
import React from 'react';
import PageLayout from '../../components/PageLayout';

export default function CompanyPage() {
    return (
        <PageLayout
            title="Our Company"
            subtitle="Nim Academy: Building the workforce for the Agentic Era."
        >
            <div className="space-y-16">
                <div>
                    <h3 className="text-3xl font-black text-white mb-8">Bridging the Gap</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        Nim Technologies was founded with a singular mission: to democratize advanced AI engineering.
                        As the world moves from "Chatting with AI" to "Building with Agents," a massive talent gap has emerged.
                        We exist to bridge that gap.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Based in Bangalore, India, we work with global partners and contributors to ensure our curriculum
                        stays at the absolute bleeding edge of what's possible with LLMs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">Our Vision</h4>
                        <p className="text-gray-500 leading-relaxed">
                            To create a world where every engineer can build autonomous systems that solve meaningful problems.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">Our Values</h4>
                        <p className="text-gray-500 leading-relaxed">
                            Engineering excellence, radical transparency, and a relentless focus on builder-centric education.
                        </p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
