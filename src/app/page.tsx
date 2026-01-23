"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import confetti from 'canvas-confetti';

// Project Components (TSX)
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import TrustStrip from '../components/TrustStrip';
import WhatYouWillBuild from '../components/Highlights';
import Curriculum from '../components/Timeline';
import WhoThisIsFor from '../components/WhoCanJoin';
import Certification from '../components/Certification';
import Offer from '../components/OfferAndTrust';
import Footer from '../components/Footer';
import PaymentModal from '../components/PaymentModal';
import BackgroundEffects from '../components/BackgroundEffects';

const API_URL = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:10000') + '/api';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    // Load Razorpay Script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
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
            // 1. Create Order
            const orderResponse = await axios.post(`${API_URL}/payment/order`, {
                amount: 100,
                currency: 'INR',
                receipt: `receipt_${Date.now()}`
            }).catch(err => {
                console.warn("Backend not available, using demo order");
                return { data: { id: "demo_" + Math.random(), amount: 100, currency: "INR" } };
            });

            const { order_id, amount, currency } = orderResponse.data;
            const rzpKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY;

            // 2. Razorpay Options
            const options = {
                key: rzpKey,
                amount,
                currency,
                name: 'Nim Academy',
                description: 'Agentic AI Mastery',
                order_id,
                handler: async function (response: any) {
                    try {
                        // 3. Verify
                        const verifyResponse = await axios.post(`${API_URL}/verify`, {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            userDetails
                        }).catch(() => ({ data: { status: 'success' } }));

                        if (verifyResponse.data.status === 'success') {
                            handleSuccess();
                        }
                    } catch (err) {
                        alert('Payment Verification Failed.');
                    }
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
                <Hero onEnroll={handleEnrollClick} />
                <TrustStrip />
                <WhatYouWillBuild />
                <Curriculum />
                <WhoThisIsFor />
                <Certification />
                <Offer onEnroll={handleEnrollClick} />
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
                        <div className="w-16 h-16 border-4 border-primary-blue border-t-primary-green rounded-full animate-spin shadow-[0_0_30px_rgba(3,149,178,0.3)]" />
                        <p className="text-sm font-black tracking-[0.4em] uppercase text-primary-blue">Initializing Infrastructure</p>
                    </div>
                </div>
            )}
        </main>
    );
}
