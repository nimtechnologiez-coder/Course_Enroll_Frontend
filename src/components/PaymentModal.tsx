"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Shield, User, Mail, Phone } from 'lucide-react';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onProceed: (data: { name: string; email: string; phone: string }) => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, onProceed }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onProceed(formData);
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-background/90 backdrop-blur-md"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-lg glass-card bg-background border-primary-blue/20 p-8 md:p-14 overflow-hidden"
                >
                    <button
                        onClick={onClose}
                        className="absolute right-8 top-8 text-gray-500 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <div className="mb-10">
                        <h2 className="text-3xl font-black mb-3">Claim Your Spot.</h2>
                        <p className="text-gray-500 text-sm font-medium">Complete your enrollment in the next cohort.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-blue" size={18} />
                                <input
                                    required
                                    type="text"
                                    placeholder="e.g. Satoshi Nakamoto"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-primary-blue focus:bg-white/[0.08] transition-all"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-blue" size={18} />
                                <input
                                    required
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-primary-blue focus:bg-white/[0.08] transition-all"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Mobile Contact</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-blue" size={18} />
                                <input
                                    required
                                    type="tel"
                                    placeholder="+91 XXX XXX XXXX"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-primary-blue focus:bg-white/[0.08] transition-all"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="pt-8 space-y-4">
                            <button
                                type="submit"
                                className="w-full py-5 rounded-2xl bg-primary-green text-background font-black text-xl hover:shadow-[0_0_30px_rgba(163,216,97,0.3)] active:scale-95 transition-all flex items-center justify-center gap-3"
                            >
                                <Lock size={20} />
                                Checkout Securely
                            </button>

                            <div className="flex items-center justify-center gap-4 text-gray-600">
                                <div className="flex items-center gap-1">
                                    <Shield size={14} />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">SSL Encrypted</span>
                                </div>
                                <div className="w-px h-3 bg-white/10" />
                                <div className="text-[10px] font-bold uppercase tracking-widest text-primary-blue/60">Powered by Razorpay</div>
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default PaymentModal;
