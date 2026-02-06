"use client";
import React from 'react';
import PageLayout from '../../components/PageLayout';

export default function ProgramsPage() {
    return (
        <PageLayout
            title="Cybersecurity Track"
            subtitle="Four specialized modules designed for modern security professionals."
        >
            <div className="space-y-12">
                <div>
                    <h3 className="text-3xl font-black text-white mb-6">Course Modules</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Our program covers the entire spectrum of modern cybersecurity, from fundamental hacking techniques to advanced AI-driven defense strategies.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            {
                                title: "Ethical Hacking & Penetration Testing",
                                features: ["Network Vulnerability Assessment", "Web Application Hacking", "Wireless Security Analysis"]
                            },
                            {
                                title: "AWS, Azure & Cloud Security",
                                features: ["Cloud Infrastructure Hardening", "Identity & Access Management", "Serverless Security Patterns"]
                            },
                            {
                                title: "SIEM, Incident Response & Monitoring",
                                features: ["Threat Hunting & Detection", "Log Analysis & Correlation", "Crisis Resolution Strategies"]
                            },
                            {
                                title: "AI & Machine Learning in Cybersecurity",
                                features: ["Neural Network Threat Detection", "Automated Malware Analysis", "Adversarial Machine Learning"]
                            }
                        ].map((module, idx) => (
                            <div key={idx} className="space-y-4">
                                <h4 className="text-xl font-bold text-primary-blue">{module.title}</h4>
                                <ul className="space-y-3">
                                    {module.features.map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-gray-400 font-medium text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary-green" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5">
                    <h3 className="text-3xl font-black text-white mb-6">Professional Certification</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Upon completion, receive an industry-recognized certification verified on the blockchain.
                        Demonstrate your expertise in Cloud Security and AI-driven defense mechanisms.
                    </p>
                </div>
            </div>
        </PageLayout>
    );
}
