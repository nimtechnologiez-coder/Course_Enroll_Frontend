"use client";
import React from 'react';
import PageLayout from '../../components/PageLayout';

export default function PrivacyPage() {
    return (
        <PageLayout
            title="Piracy Policy"
            subtitle="Protecting our Intellectual Property"
        >
            <div className="space-y-12 text-gray-400">

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">1. Strictly Prohibited</h3>
                    <p className="leading-relaxed mb-4">Users must not:</p>
                    <ul className="list-disc pl-6 space-y-3">
                        <li>Record classes</li>
                        <li>Screen capture videos</li>
                        <li>Share login credentials</li>
                        <li>Upload materials to any platform</li>
                        <li>Sell or redistribute content</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">2. Monitoring</h3>
                    <p className="leading-relaxed">
                        We may use watermarking, IP tracking, and access logs to detect misuse.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">3. Action on Violation</h3>
                    <p className="leading-relaxed">
                        If piracy is detected:
                        <ul className="list-disc pl-6 mt-4 space-y-3">
                            <li>Access will be terminated</li>
                            <li>Certificate cancelled</li>
                            <li>Legal action may be initiated under Indian Copyright Act and IT Act</li>
                            <li>No refund will be provided.</li>
                        </ul>
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">4. Legal & Financial Claims</h3>
                    <p className="leading-relaxed">
                        We reserve the right to claim damages and legal costs in piracy cases.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">5. Reporting</h3>
                    <p className="leading-relaxed">
                        Report misuse to: <span className="text-primary-blue">contactnimacademy@gmail.com</span>
                        <br />
                        Phone: <span className="text-white">+91 7397 224 594</span>
                    </p>
                </section>
            </div>
        </PageLayout>
    );
}
