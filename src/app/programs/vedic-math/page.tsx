"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { CheckCircle2, Calculator, Clock, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function VedicMathPage() {
    const benefits = [
        { icon: Clock, title: "Faster Calculations", desc: "Solve problems 10-15x faster than conventional methods." },
        { icon: Calculator, title: "Competitive Edge", desc: "Ideal for exams like Olympiads, JEE, and SATs." },
        { icon: Lightbulb, title: "Simplified Concepts", desc: "Easy-to-learn sutras for complex arithmetic." },
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero */}
            <section className="bg-orange-600 text-white py-20 lg:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl"
                    >
                        <span className="text-orange-200 font-semibold tracking-wider uppercase text-sm mb-4 block">
                            For Ages 10+ Years
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                            Unlock the Power of <span className="text-orange-400">Vedic Maths</span>
                        </h1>
                        <p className="text-xl text-orange-100 mb-8 leading-relaxed max-w-2xl">
                            Ancient Indian mathematical techniques that simplify complex arithmetic, algebra, and geometry problems.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Vedic Maths?</h2>
                        <div className="grid gap-8">
                            {benefits.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Curriculum Highlights</h3>
                            <ul className="space-y-3">
                                {["16 Vedic Sutras", "High-Speed Multiplication", "Square Roots & Cube Roots", "Algebraic Shortcuts", "Calendar & Divisibility"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:sticky lg:top-32 h-fit"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Enroll Now</h3>
                            <p className="text-slate-600 mb-6">Book a free demo class to see the magic.</p>
                            <LeadForm variant="inline" themeColor="orange" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
