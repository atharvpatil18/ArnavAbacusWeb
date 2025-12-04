"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Achievements", href: "/achievements" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}>
            {/* Top Bar */}
            <div className="bg-brand-900 text-white py-2 text-xs md:text-sm relative z-50">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <a href="tel:9021924968" className="flex items-center gap-2 hover:text-brand-200 transition-colors">
                            <Phone className="w-3 h-3 md:w-4 md:h-4" />
                            <span>+91 90219 24968</span>
                        </a>
                        <a href="mailto:nehaatharv@gmail.com" className="flex items-center gap-2 hover:text-brand-200 transition-colors">
                            <Mail className="w-3 h-3 md:w-4 md:h-4" />
                            <span>nehaatharv@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>

            <nav className="bg-white py-4 border-b border-slate-100">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-full border-2 border-brand-100">
                            <Image
                                src="/logo.jpg"
                                alt="Arnav Abacus Academy"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className={`font-bold text-lg md:text-xl tracking-tight text-slate-900`}>
                            Arnav<span className="text-brand-600">Abacus</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="font-medium text-sm transition-colors hover:text-brand-500 text-slate-600"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <a
                            href="https://wa.me/919021924968?text=Hello%2C%20I%20want%20to%20book%20a%20free%20demo%20class"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg hover:shadow-brand-500/25 flex items-center gap-2"
                        >
                            <Phone className="w-4 h-4" />
                            Book Free Demo
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-md text-slate-900"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
                        >
                            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-slate-600 font-medium text-lg hover:text-brand-600"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <a
                                    href="https://wa.me/919021924968?text=Hello%2C%20I%20want%20to%20book%20a%20free%20demo%20class"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold text-center mt-2 block"
                                >
                                    Book Free Demo
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );

}
