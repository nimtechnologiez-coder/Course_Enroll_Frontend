"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Navbar = ({ onEnroll }: { onEnroll: () => void }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Pricing', href: '#pricing' },
        { name: "Who It's For", href: '#who' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${isScrolled
                ? 'py-4 bg-background/80 backdrop-blur-2xl border-b border-white/5'
                : 'py-8 bg-transparent'
                }`}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                    <img
                        src="/logo.png"
                        alt="Nim Technologies"
                        className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-110 drop-shadow-[0_0_15px_rgba(163,216,97,0.3)]"
                    />
                    <span className="text-xl font-black tracking-tighter text-white block">
                        Nim <span className="text-primary-blue">Technologies</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <button
                        onClick={() => {
                            const element = document.getElementById('contact');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-background transition-all"
                    >
                        Get Demo
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-3xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="container-custom py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-black tracking-tighter text-white"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    const element = document.getElementById('contact');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="w-full py-4 bg-primary-green text-background font-black rounded-xl flex items-center justify-center gap-3"
                            >
                                Get Demo <ArrowRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
