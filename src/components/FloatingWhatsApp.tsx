"use client";
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
    const handleClick = () => {
        window.open('https://wa.me/917397224594?text=Hi%20I%20want%20demo%20of%20WhatsApp%20automation', '_blank');
    };

    return (
        <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-primary-green rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(163,216,97,0.4)] hover:shadow-[0_6px_30px_rgba(163,216,97,0.6)] transition-all group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} className="text-background animate-pulse" />

            {/* Ping Animation */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary-green opacity-75 animate-ping" />
        </motion.button>
    );
};

export default FloatingWhatsApp;
