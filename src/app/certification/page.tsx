"use client";
import React from 'react';
import PageLayout from '../../components/PageLayout';
import CertificationSection from '../../components/Certification';

export default function CertificationPage() {
    return (
        <PageLayout
            title="Certification"
            subtitle="Validate your mastery with the industry's most rigorous AI certificate."
        >
            <div className="space-y-16">
                <div>
                    <h3 className="text-3xl font-black text-white mb-8">The Nim Academy Standard</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-12">
                        Unlike traditional certificates, Nim Academy certification and verifiable credentials are awarded only after successful completion
                        of the Capstone project. It represents real-world engineering capability.
                    </p>
                    <CertificationSection />
                </div>

                <div className="pt-12 border-t border-white/5">
                    <h4 className="text-2xl font-bold text-white mb-6">How it works</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-400">
                        <div className="space-y-4">
                            <p className="leading-relaxed">
                                <strong className="text-white block mb-2">1. Technical Assessment</strong>
                                Pass 4 module-level technical assessments with a minimum score of 80%.
                            </p>
                            <p className="leading-relaxed">
                                <strong className="text-white block mb-2">2. Capstone Submission</strong>
                                Build and deploy a fully autonomous agentic system based on a real-world enterprise brief.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <p className="leading-relaxed">
                                <strong className="text-white block mb-2">3. Peer & Mentor Review</strong>
                                Your codebase is reviewed by expert mentors for security, efficiency, and scalability.
                            </p>
                            <p className="leading-relaxed">
                                <strong className="text-white block mb-2">4. Verifiable Badge</strong>
                                Receive a cryptographically signed digital certificate for your LinkedIn and Github.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
