"use client";
import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Mail, MessageSquare, MapPin, Instagram } from 'lucide-react';

export default function ContactPage() {
    return (
        <PageLayout
            title="Get in Touch"
            subtitle="Have questions? Our team is here to help you scale."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-12">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Channels</h3>
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-2xl bg-primary-blue/10 text-primary-blue">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Email Support</h4>
                                    <p className="text-gray-500">nimtechnologiez@gmail.com</p>
                                    {/* <p className="text-xs text-gray-600 mt-1">Response time: &lt; 24 hours</p> */}
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-2xl bg-primary-green/10 text-primary-green">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Business Community</h4>
                                    <p className="text-gray-500">Join 1,200+ businesses in our private network.</p>
                                    <p className="text-xs text-primary-green mt-1 cursor-pointer hover:underline">Access via Dashboard →</p>
                                </div>
                            </div>

                            <a
                                href="https://www.instagram.com/nimtechnologies?igsh=NWJma29iaWtmMTg3"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-6 group/link"
                            >
                                <div className="p-4 rounded-2xl bg-white/5 text-gray-400 group-hover/link:bg-primary-blue/10 group-hover/link:text-primary-blue transition-colors">
                                    <Instagram size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Follow Updates</h4>
                                    <p className="text-gray-500 group-hover/link:text-white transition-colors">@nim_technologies</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-white/5">
                        <div className="flex items-start gap-6">
                            <MapPin size={24} className="text-gray-600 mt-1" />
                            <div>
                                <h4 className="text-white font-bold mb-1">HQ</h4>
                                <p className="text-gray-500">Nim Technologies <br />North Konam, Nagercoil, Tamil Nadu 629170</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-card bg-white/[0.01] p-10 border-white/5">
                    <h3 className="text-2xl font-bold text-white mb-8">Quick Message</h3>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 block">Your Name</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary-blue transition-colors" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 block">Email Address</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary-blue transition-colors" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 block">Message</label>
                            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary-blue transition-colors resize-none" placeholder="Explain your inquiry..." />
                        </div>
                        <button className="button-primary w-full py-4 !text-lg !font-bold">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </PageLayout>
    );
}
