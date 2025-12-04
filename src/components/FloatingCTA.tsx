"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingCTA() {
    return (
        <motion.a
            href="https://wa.me/919021924968?text=Hi,%20I'm%20interested%20in%20a%20free%20demo%20class"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors group"
        >
            <MessageCircle className="w-6 h-6" />
            <span className="font-semibold hidden md:inline-block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap">
                Chat on WhatsApp
            </span>
        </motion.a>
    );
}
