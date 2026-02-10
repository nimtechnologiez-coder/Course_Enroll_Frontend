"use client";
import React from 'react';
import PageLayout from '../../components/PageLayout';

export default function AboutUsPage() {
    return (
        <PageLayout
            title="About Us"
            subtitle="Engineers teaching engineers. No fluff, just code."
        >
            <div className="space-y-16">
                <div className="prose prose-invert max-w-none">
                    <h3 className="text-3xl font-black text-white mb-8">The Nim Philosophy</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        We started Nim Technologies because we were tired of "manual follow-ups" and missed opportunities that plague local businesses.
                        Lead capture is only 5% of the story. The real challenge—and value—is in the automation: instant replies,
                        intelligent booking, and seamless customer engagement.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        Our team consists of engineering experts who build production-grade automation systems daily. We don't just provide a tool,
                        we provide the infrastructure that helps your business scale effortlessly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/5 text-center">
                    <div>
                        <div className="text-4xl font-black text-primary-green mb-2">1,200+</div>
                        <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Active Businesses</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-primary-blue mb-2">15+</div>
                        <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Expert Mentors</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-white mb-2">50+</div>
                        <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Projects Built</div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
