"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundEffects from '../components/BackgroundEffects';
import PaymentModal from '../components/PaymentModal';
import axios from 'axios';
import confetti from 'canvas-confetti';

const API_URL = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000') + '/api';


interface PageLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, subtitle }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    const handleEnrollClick = () => {
        setIsModalOpen(true);
    };

    const handleSuccess = () => {
        setLoading(false);
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.7 },
            colors: ['#A3D861', '#0395B2', '#ffffff']
        });
        alert('Enrollment Successful! Welcome to the squad.');
        window.location.href = 'https://chat.whatsapp.com/KGkihPGklz06HPXyQUGEZJ';
        setIsModalOpen(false);
    };

    const handlePayment = async (userDetails: { name: string; email: string; phone: string }) => {
        setLoading(true);
        try {
            const orderResponse = await axios.post(`${API_URL}/payment/order`);
            const { order_id, amount, currency } = orderResponse.data;
            const rzpKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

            const options = {
                key: rzpKey,
                amount,
                currency,
                name: 'Nim Academy',
                description: 'Agentic AI Mastery',
                order_id,
                handler: function (response: any) {
                    handleSuccess();
                    axios.post(`${API_URL}/payment/verify`, {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                        userDetails
                    }).catch(console.error);
                },
                prefill: {
                    name: userDetails.name,
                    email: userDetails.email,
                    contact: userDetails.phone,
                },
                theme: {
                    color: '#0395B2',
                },
            };

            const rzp = (window as any).Razorpay(options);
            rzp.open();
        } catch (error) {
            alert('Checkout Failed to Initialize.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="relative min-h-screen">
            <BackgroundEffects />
            <Navbar onEnroll={handleEnrollClick} />

            <div className="relative z-10">
                {/* Hero Section for Subpages */}
                <section className="relative pt-48 pb-20 overflow-hidden">
                    <div className="container-custom text-center">
                        <h1 className="text-hero mb-6 tracking-[-0.07em]">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
                                {subtitle}
                            </p>
                        )}
                    </div>
                </section>

                <section className="pb-32">
                    <div className="container-custom">
                        <div className="glass-card p-12 md:p-20">
                            {children}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>

            <PaymentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onProceed={handlePayment}
            />

            {loading && (
                <div className="fixed inset-0 z-[200] bg-background/80 backdrop-blur-xl flex items-center justify-center">
                    <div className="flex flex-col items-center gap-6">
                        <div className="w-16 h-16 border-4 border-primary-blue border-t-primary-green rounded-full animate-spin" />
                        <p className="text-sm font-black tracking-[0.4em] uppercase text-primary-blue">Initializing</p>
                    </div>
                </div>
            )}
        </main>
    );
};

export default PageLayout;
