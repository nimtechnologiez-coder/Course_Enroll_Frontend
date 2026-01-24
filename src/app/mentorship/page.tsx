"use client";
import React from 'react';
import PageLayout from '../../components/PageLayout';

export default function MentorshipPage() {
    return (
        <PageLayout
            title="Mentorship"
            subtitle="Learn directly from senior AI engineers at top tech companies."
        >
            <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-black text-white mb-6">Personalized Guidance</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Don't just watch videos. Get your code reviewed by pros. Our mentors come from OpenAI, DeepMind, and Anthropic,
                            bringing real-world production experience to your learning journey.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Weekly 1-on-1 Office Hours",
                                "Direct Slack access to mentors",
                                "Detailed Code Reviews & Feedback",
                                "Career Transition Support"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-white font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-blue" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                        <span className="text-gray-600 font-black uppercase tracking-[0.2em]">Mentor Spotlight</span>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 text-center">
                    <p className="text-gray-500 font-medium">
                        Join our community of mentors and help shape the future of AI engineering.
                        <br />
                        <span className="text-primary-green cursor-pointer hover:underline">Apply as a mentor →</span>
                    </p>
                </div>
            </div>
        </PageLayout>
    );
}
