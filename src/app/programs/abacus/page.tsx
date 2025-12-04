"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { CheckCircle2, Brain, Zap, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function AbacusPage() {
    const benefits = [
        { icon: Brain, title: "Whole Brain Development", desc: "Stimulates both left and right hemispheres." },
        { icon: Zap, title: "Speed & Accuracy", desc: "Solve complex calculations in seconds." },
        { icon: Trophy, title: "Confidence Booster", desc: "Removes math phobia and builds self-esteem." },
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero */}
            <section className="bg-brand-600 text-white py-20 lg:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="text-brand-300 font-semibold tracking-wider uppercase text-sm mb-4 block">
                            For Ages 4-14 Years
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                            Master Mental Math with <span className="text-brand-400">Abacus</span>
                        </h1>
                        <p className="text-xl text-brand-100 mb-8 leading-relaxed max-w-2xl">
                            Our structured Abacus program is designed to visualize numbers, enabling children to perform calculations faster than a calculator.
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Choose Abacus?</h2>
                        <div className="grid gap-8">
                            {benefits.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 shrink-0">
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
                                {["Introduction to Beads", "Addition & Subtraction", "Visualization Techniques", "Multiplication & Division", "Decimal Calculations"].map((item, i) => (
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
                            <LeadForm variant="inline" themeColor="blue" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
