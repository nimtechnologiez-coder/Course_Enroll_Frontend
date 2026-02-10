"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await axios.post('/api/contact', formData);
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', businessType: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-background">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-primary-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
                    >
                        Contact <span className="text-brand-gradient">Us</span>
                    </motion.h2>
                    <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        Ready to automate your business? Get in touch for a live demo and custom setup.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.a
                                href="tel:+917397224594"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="glass-card p-8 group hover:border-primary-blue/50 transition-all"
                            >
                                <div className="w-12 h-12 bg-primary-blue/10 rounded-2xl flex items-center justify-center text-primary-blue mb-6 group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <h3 className="text-white font-bold mb-2">Phone</h3>
                                <p className="text-gray-500 font-medium">+91 73972 24594</p>
                            </motion.a>

                            <motion.a
                                href="https://wa.me/917397224594?text=Hi%20I%20want%20demo%20of%20WhatsApp%20automation"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="glass-card p-8 group hover:border-primary-green/50 transition-all"
                            >
                                <div className="w-12 h-12 bg-primary-green/10 rounded-2xl flex items-center justify-center text-primary-green mb-6 group-hover:scale-110 transition-transform">
                                    <MessageSquare size={24} />
                                </div>
                                <h3 className="text-white font-bold mb-2">WhatsApp</h3>
                                <p className="text-gray-500 font-medium">+91 73972 24594</p>
                            </motion.a>

                            <motion.a
                                href="mailto:nimtechnologiez@gmail.com"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="glass-card p-8 group hover:border-primary-blue/50 transition-all md:col-span-2"
                            >
                                <div className="w-12 h-12 bg-primary-blue/10 rounded-2xl flex items-center justify-center text-primary-blue mb-6 group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <h3 className="text-white font-bold mb-2">Email</h3>
                                <p className="text-gray-500 font-medium">nimtechnologiez@gmail.com</p>
                            </motion.a>
                        </div>
                    </div>

                    {/* Enquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 md:p-12 border-primary-blue/10"
                    >
                        <h3 className="text-2xl font-black mb-8 text-white">Book a Live Demo</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 block">Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary-blue transition-colors"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 block">Phone</label>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="+91 73972 24594"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary-blue transition-colors"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 block">Business Type</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="e.g. Dental Clinic, Salon, Real Estate"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary-blue transition-colors"
                                    value={formData.businessType}
                                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 block">Email (Optional)</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary-blue transition-colors"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 block">Tell us about your requirements</label>
                                <textarea
                                    required
                                    rows={4}
                                    placeholder="I want to automate appointment booking for my clinic..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary-blue transition-colors resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                disabled={status === 'sending'}
                                className={`button-primary w-full py-4 flex items-center justify-center gap-3 ${status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {status === 'sending' ? (
                                    <>Sending...</>
                                ) : status === 'success' ? (
                                    <><CheckCircle2 size={20} /> Sent Successfully</>
                                ) : (
                                    <>Request Demo <Send size={20} /></>
                                )}
                            </button>

                            {status === 'error' && (
                                <p className="text-red-400 text-xs text-center font-bold">Failed to send. Please try again or WhatsApp us.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
