"use client";
import React from 'react';
import { Brain, Instagram, Github, Linkedin, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="pt-32 pb-12 border-t border-white/5 bg-background">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24">
                    <div className="col-span-1 md:col-span-2 space-y-8">
                        <div className="flex items-center gap-3">
                            <img
                                src="/logo.png"
                                alt="Nim Technologies"
                                className="h-10 w-auto object-contain"
                            />
                            <span className="text-2xl font-black tracking-tighter">Nim Technologies</span>
                        </div>
                        <p className="max-w-md text-gray-500 font-medium leading-relaxed">
                            Automation & AI Solutions <br />
                            Turn every message into a confirmed appointment.
                        </p>
                        <div id="contact" className="space-y-4 pt-4">
                            <div className="text-white font-black text-sm">Contact Us</div>
                            <div className="text-gray-500 text-xs">Phone: +91 7397 224 594</div>
                            <div className="text-gray-500 text-xs">WhatsApp: +91 7397 224 594</div>
                            <div className="text-gray-500 text-xs">Email: nimtechnologiez@gmail.com</div>
                            <div className="text-gray-500 text-xs">Location: India</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-12 col-span-1 md:col-span-2">
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Product</h4>
                            <ul className="space-y-3 text-sm text-gray-500 font-medium">
                                <li className="hover:text-white transition-colors"><Link href="#benefits">Features</Link></li>
                                <li className="hover:text-white transition-colors"><Link href="#how-it-works">How It Works</Link></li>
                                <li className="hover:text-white transition-colors"><Link href="#who">Target Audience</Link></li>
                                <li className="hover:text-white transition-colors"><Link href="#pricing">Pricing</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Company</h4>
                            <ul className="space-y-3 text-sm text-gray-500 font-medium">
                                <li className="hover:text-white transition-colors"><Link href="/about-us">About Us</Link></li>
                                <li className="hover:text-white transition-colors"><Link href="/terms-of-service">Terms of Service</Link></li>
                                <li className="hover:text-white transition-colors"><Link href="/privacy-policy">Privacy Policy</Link></li>
                                <li className="hover:text-white transition-colors"><Link href="/refund">Refund Policy</Link></li>
                                <li className="hover:text-white transition-colors"><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
                    <div>© 2026 Nim Technologies. All rights reserved.</div>
                    <div className="flex gap-12 text-primary-blue/60">
                        <span>WhatsApp Automation</span>
                        <span>Lead Capture Pro</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
