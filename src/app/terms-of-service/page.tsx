"use client";
import React from 'react';
import PageLayout from '../../components/PageLayout';

export default function TermsPage() {
    return (
        <PageLayout
            title="Terms and Conditions"
            subtitle="Nim Technologies"
        >
            <div className="space-y-12 text-gray-400">
                <p className="leading-relaxed italic">
                    Welcome to Nim Technologies. By accessing our website, using our services, or purchasing any automation plan, you agree to these Terms and Conditions.
                </p>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">1. Services</h3>
                    <p className="leading-relaxed">
                        We provide WhatsApp automation solutions, lead capture tools, and business AI services. Plan details are mentioned on respective service pages.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">2. Eligibility</h3>
                    <p className="leading-relaxed">
                        Users must be 18+ or have parental consent. All registration details must be accurate.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">3. Payments & Access</h3>
                    <p className="leading-relaxed">
                        Service access is provided only after successful payment. Sharing credentials is strictly prohibited. We may suspend accounts involved in misuse.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">4. Intellectual Property</h3>
                    <p className="leading-relaxed">
                        All software, code, and documentation belong to Nim Technologies. Materials are for your business use only. Reproduction, resale, or sharing is prohibited.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">5. Acceptable Use</h3>
                    <p className="leading-relaxed">
                        You must not use our services for any illegal, harmful, or abusive purpose. This includes spam, harassment, fraud, or any activity that violates WhatsApp’s Terms of Service.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">6. Third-Party Platforms</h3>
                    <p className="leading-relaxed">
                        Our services integrate with WhatsApp and other platforms. We are not responsible for changes in their policies or service disruptions.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">7. Support & Service</h3>
                    <p className="leading-relaxed">
                        We provide installation assistance and limited support as described at the time of purchase.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">8. Refund Policy</h3>
                    <p className="leading-relaxed">
                        Since our services are digital and delivered instantly, no refunds will be provided.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">9. Modifications</h3>
                    <p className="leading-relaxed">
                        We may update terms anytime. Continued usage means acceptance.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">10. Governing Law</h3>
                    <p className="leading-relaxed">
                        These terms are governed by Indian law. Jurisdiction: Tamil Nadu courts only.
                    </p>
                </section>

                <p className="pt-8 text-xs font-medium text-gray-600">Last Updated: January 2026</p>
            </div>
        </PageLayout>
    );
}
