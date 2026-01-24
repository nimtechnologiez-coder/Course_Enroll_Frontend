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
                            <div className="w-10 h-10 bg-primary-blue rounded-xl flex items-center justify-center">
                                <Brain size={20} className="text-white" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter">Nim Academy</span>
                        </div>
                        <p className="max-w-md text-gray-500 font-medium leading-relaxed">
                            Building the infrastructure for the agentic future.
                            Join 1,200+ world-class engineers mastering the AIAgent stack.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Instagram, href: "https://www.instagram.com/nim_academy?igsh=aHhta3Ywam1kMXlh" },
                                { Icon: Github, href: "#" },
                                { Icon: Linkedin, href: "#" },
                                { Icon: MessageSquare, href: "#" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target={social.href !== "#" ? "_blank" : undefined}
                                    rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                                    className="p-3 rounded-xl bg-white/5 hover:bg-primary-blue/20 hover:text-primary-blue transition-all"
                                >
                                    <social.Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-12 col-span-1 md:col-span-2">
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Programs</h4>
                            <ul className="space-y-3 text-sm text-gray-500 font-medium">
                                <li className="hover:text-white transition-colors"><Link href="/curriculum">Curriculum</Link></li>
                                <li className="hover:text-white transition-colors"><Link href="/certification">Certification</Link></li>
                                <li className="hover:text-white transition-colors"><Link href="/mentorship">Mentorship</Link></li>
                                <li className="hover:text-white transition-colors"><Link href="/pricing">Pricing</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Company</h4>
                            <ul className="space-y-3 text-sm text-gray-500 font-medium">
                                <li className="hover:text-white transition-colors"><Link href="/about-us">About Us</Link></li>
                                <li className="hover:text-white transition-colors"><Link href="/terms-of-service">Terms of Service</Link></li>
                                <li className="hover:text-white transition-colors"><Link href="/privacy-policy">Piracy Policy</Link></li>
                                <li className="hover:text-white transition-colors"><Link href="/refund">Refund Policy</Link></li>
                                <li className="hover:text-white transition-colors"><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
                    <div>© 2026 Nim Technologies. All rights reserved.</div>
                    <div className="flex gap-12 text-primary-blue/60">
                        <span>Powered by Nim Academy</span>
                        <span>Security by Razorpay</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
