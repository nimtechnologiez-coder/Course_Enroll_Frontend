"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import axios from 'axios';
import confetti from 'canvas-confetti';

// Project Components (TSX)
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Navbar from '../components/Navbar';
import TrustStrip from '../components/TrustStrip';
import WhatYouWillBuild from '../components/Highlights';
import Curriculum from '../components/Timeline';
import WhoThisIsFor from '../components/WhoCanJoin';
import Pricing from '../components/Pricing';
import ContactSection from '../components/ContactSection';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Footer from '../components/Footer';
import PaymentModal from '../components/PaymentModal';
import BackgroundEffects from '../components/BackgroundEffects';

const API_URL = (process.env.NEXT_PUBLIC_API_URL || 'https://course-enroll-backend.onrender.com') + '/api';


export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState('WhatsApp Lead Capture & Auto-Booking System');
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

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

    const handleEnrollClick = (courseTitle?: string) => {
        if (courseTitle && typeof courseTitle === 'string') {
            setSelectedCourse(decodeURIComponent(courseTitle));
            setIsModalOpen(true);
        } else {
            const element = document.getElementById('pricing');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };
    const handleSuccess = () => {
        setLoading(false);
        setShowSuccess(true);
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.7 },
            colors: ['#A3D861', '#0395B2', '#ffffff']
        });

        // Redirect after 3 seconds to allow user to see the success message
        setTimeout(() => {
            window.location.href = 'https://chat.whatsapp.com/HkUqXUyuc58EJ3KOD2jBvP';
        }, 3000);

        setIsModalOpen(false);
    };

    const handlePayment = async (userDetails: { name: string; email: string; phone: string }) => {
        setLoading(true);
        try {
            // 1. Create Order
            const orderResponse = await axios.post(`${API_URL}/payment/order`).catch(err => {
                console.error("Order creation failed", err);
                const errorMessage = err.response?.data?.details || err.response?.data?.message || err.message || "Failed to create order";
                throw new Error(errorMessage);
            });

            const { order_id, amount, currency } = orderResponse.data;
            const rzpKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

            // 2. Razorpay Options
            const options = {
                key: rzpKey,
                amount,
                currency,
                name: 'Nim Technologies',
                description: selectedCourse,
                order_id,
                handler: function (response: any) {
                    // Logic: Handler must complete synchronously and immediately to prevent Razorpay auto-refund.
                    // Step 1: Immediately show success UI to the user
                    handleSuccess();

                    // Step 2: Fire verification asynchronously (fire-and-forget)
                    axios.post(`${API_URL}/payment/verify`, {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                        userDetails
                    }).then((res) => {
                        console.log("✅ Background Verification Success:", res.data);
                    }).catch((err) => {
                        // Critical: Only log errors, do not alert the user or affect the UI.
                        console.error("❌ Background Verification Failed:", err.response?.data || err.message);
                    });
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
        } catch (error: any) {
            console.error('Checkout Error:', error);
            alert(`Checkout Failed to Initialize: ${error.message || 'Network Error'}`);
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
                <TrustBar />
                <TrustStrip />
                <WhatYouWillBuild onEnroll={handleEnrollClick} />
                <Curriculum />
                <WhoThisIsFor />
                <Pricing onEnroll={handleEnrollClick} />
                <ContactSection />
                <Footer />
            </div>

            <FloatingWhatsApp />


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

            {showSuccess && (
                <div className="fixed inset-0 z-[250] bg-background flex items-center justify-center p-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-md space-y-8"
                    >
                        <div className="w-24 h-24 rounded-full bg-primary-green/10 flex items-center justify-center text-primary-green mx-auto border border-primary-green/20 shadow-[0_0_50px_rgba(163,216,97,0.2)]">
                            <Zap size={40} className="animate-pulse" />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black tracking-tighter text-white">Setup Initialized!</h2>
                            <p className="text-gray-400 font-medium">Welcome to the future of business automation. Redirecting you to our support WhatsApp...</p>
                        </div>
                        <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3 }}
                                className="h-full bg-primary-green shadow-[0_0_15px_rgba(163,216,97,0.5)]"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </main>
    );
}
