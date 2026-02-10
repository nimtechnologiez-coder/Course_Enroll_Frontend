"use client";
import React from 'react';
import PageLayout from '../../components/PageLayout';

export default function RefundPage() {
    return (
        <PageLayout
            title="Refund & Cancellation Policy"
            subtitle="Nim Technologies"
        >
            <div className="space-y-12 text-gray-400">
                <section>
                    <h3 className="text-xl font-bold text-white mb-4">1. No Refund After Access</h3>
                    <p className="leading-relaxed">
                        Once system access is provided, setup is complete, or materials accessed, no refund will be issued.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">2. Before System Setup</h3>
                    <p className="leading-relaxed">
                        Refund requests before setup may be approved after deducting gateway and processing charges (up to 10%).
                        <br />
                        Requests must be sent within 48 hours of payment to: <span className="text-primary-blue">nimtechnologiez@gmail.com</span>
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">3. Webinars & Workshops</h3>
                    <p className="leading-relaxed">
                        <strong className="text-white block mb-2">Free events:</strong> No refund applicable.
                        <br />
                        <strong className="text-white block mb-2">Paid events:</strong> No refund after registration confirmation. Batch transfer may be allowed at management discretion.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">4. No Refund for Absence</h3>
                    <p className="leading-relaxed">
                        No refund for missed classes, personal schedule issues, or non-participation.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">5. Duplicate Payments</h3>
                    <p className="leading-relaxed">
                        If charged twice due to technical error, refund will be processed within 7–10 working days after verification.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-white mb-4">6. Refund Method</h3>
                    <p className="leading-relaxed">
                        Refunds will be credited only to the original payment method.
                    </p>
                </section>
            </div>
        </PageLayout>
    );
}
