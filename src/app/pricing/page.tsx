"use client";
import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Check, Shield } from 'lucide-react';

export default function PricingPage() {
    return (
        <PageLayout
            title="Cybersecurity Mastery"
            subtitle="Industry-leading training. Professional certification. Career-ready skills."
        >
            <div className="flex flex-col items-center">
                <div className="w-full max-w-lg p-12 rounded-[3rem] bg-white/[0.03] border border-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8">
                        <Shield className="text-primary-green opacity-20 group-hover:opacity-100 transition-opacity" size={48} />
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-black uppercase tracking-[0.3em] text-primary-blue mb-4">Cyber Expert Pass</h3>
                        <div className="flex items-baseline gap-4">
                            <span className="text-6xl font-black text-white">₹5,000</span>
                            <span className="text-gray-500 line-through text-2xl font-bold">₹25,000</span>
                        </div>
                        <p className="text-primary-green font-black uppercase tracking-widest text-[10px] mt-4">Full Program Enrollment</p>
                    </div>

                    <ul className="space-y-6 mb-12">
                        {[
                            "Ethical Hacking & Pentesting",
                            "Cloud Security (AWS/Azure)",
                            "SIEM & Incident Response",
                            "AI in Cybersecurity",
                            "Verifiable Certification",
                            "Lifetime Access to Resources"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-gray-300 font-medium">
                                <Check size={20} className="text-primary-green" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="text-center text-gray-500 text-xs font-medium">
                        Secure payment via Razorpay.
                        No hidden fees or recurring subscriptions.
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 w-full border-t border-white/5 pt-16">
                    <div className="text-center">
                        <h4 className="text-white font-bold mb-2">Secure Payment</h4>
                        <p className="text-gray-500 text-sm">Industry-standard encryption via Razorpay.</p>
                    </div>
                    <div className="text-center">
                        <h4 className="text-white font-bold mb-2">Lifetime Access</h4>
                        <p className="text-gray-500 text-sm">Pay once, keep all content forever.</p>
                    </div>
                    <div className="text-center">
                        <h4 className="text-white font-bold mb-2">Money Back</h4>
                        <p className="text-gray-500 text-sm">Satisfaction guaranteed, see refund policy.</p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
