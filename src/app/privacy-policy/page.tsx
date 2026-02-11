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
                        <li>Attempt to copy, clone, or reverse-engineer the automation system</li>
                        <li>Share system access, credentials, or configuration with third parties</li>
                        <li>Modify workflows to bypass licensing or payment</li>
                        <li>Use the system for spam, bulk unsolicited messaging, or illegal activities</li>
                        <li>Use the system for fraud, scams, or misleading communication</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">2. Monitoring</h3>
                    <p className="leading-relaxed">
                        To protect service integrity, we may monitor system usage, access patterns, and workflow configurations.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">3. Action on Violation</h3>
                    <p className="leading-relaxed">
                        If misuse is detected:
                        <ul className="list-disc pl-6 mt-4 space-y-3">
                            <li>Access to the system will be terminated immediately</li>
                            <li>Support will be discontinued</li>
                            <li>License will be cancelled</li>
                            <li>No refund will be provided.</li>
                        </ul>
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">4. Legal & Financial Claims</h3>
                    <p className="leading-relaxed">
                        Users are responsible for complying with all applicable laws and regulations. Nim Technolo
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">5. Reporting</h3>
                    <p className="leading-relaxed">
                        Report misuse to: <span className="text-primary-blue">nimtechnologiez@gmail.com</span>
                        <br />
                        Phone: <span className="text-white">+91 7397 224 594</span>
                    </p>
                </section>
            </div>
        </PageLayout>
    );
}
