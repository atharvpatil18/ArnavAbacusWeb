"use client";

import { motion } from "framer-motion";
import LeadForm from "./LeadForm";
import { CheckCircle } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative bg-slate-900 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/hero-bg-pattern.svg')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-900/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-brand-600/10 blur-3xl rounded-full -translate-x-1/3 translate-y-1/4"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            <span className="text-brand-500">Arnav Abacus Academy</span>
                            <br />
                            <span className="text-3xl lg:text-4xl text-slate-300">and Vedic Maths Classes</span>
                        </h1>

                        <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">
                            Unlock your child's full potential with our proven Abacus and Vedic Math programs.
                            Trusted by parents in Wakad for over 8 years.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Certified & Experienced Trainers",
                                "Personalized Attention (Small Batches)",
                                "Proven Results in Competitions",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 text-slate-200">
                                    <CheckCircle className="w-5 h-5 text-brand-500 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-xs text-white">
                                        U{i}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                                    ★★★★★
                                </div>
                                <p className="text-xs text-slate-400">Trusted by 500+ Parents</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Decorative blob behind form */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl blur opacity-30"></div>

                        <LeadForm variant="hero" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
