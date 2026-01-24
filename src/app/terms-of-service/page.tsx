"use client";
import React from 'react';
import PageLayout from '../../components/PageLayout';

export default function TermsPage() {
    return (
        <PageLayout
            title="Terms and Conditions"
            subtitle="NIM Academy – Operated by NIM Technologies"
        >
            <div className="space-y-12 text-gray-400">
                <p className="leading-relaxed italic">
                    Welcome to NIM Academy, operated by NIM Technologies. By accessing our website, enrolling in any course, or purchasing any service, you agree to these Terms and Conditions.
                </p>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">1. Services</h3>
                    <p className="leading-relaxed">
                        We provide online/offline training programs, workshops, webinars, certifications, and learning materials. Course details are mentioned on respective course pages.
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
                        Course access is provided only after successful payment. Sharing login credentials is strictly prohibited. We may suspend accounts involved in misuse.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">4. Intellectual Property</h3>
                    <p className="leading-relaxed">
                        All videos, PDFs, assignments, recordings, and code belong to NIM Academy. Content is for personal learning only. Reproduction, resale, or sharing is prohibited.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">5. Student Conduct</h3>
                    <p className="leading-relaxed">
                        Any abuse, disruption, piracy, or misconduct will result in termination without refund.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">6. Certificates</h3>
                    <p className="leading-relaxed">
                        Certificates are issued only after meeting attendance and completion criteria. Certificates do not guarantee jobs.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">7. Placement Assistance</h3>
                    <p className="leading-relaxed">
                        We may offer guidance and referrals, but we do not guarantee placement or salary outcomes.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">8. Limitation of Liability</h3>
                    <p className="leading-relaxed">
                        We are not responsible for internet issues, device failures, or missed sessions. Liability is limited to the course fee paid.
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
