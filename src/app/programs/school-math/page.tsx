"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { CheckCircle2, BookOpen, GraduationCap, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function SchoolMathPage() {
    const benefits = [
        { icon: BookOpen, title: "Concept Clarity", desc: "Deep understanding of fundamental mathematical concepts." },
        { icon: Target, title: "Exam Oriented", desc: "Focused preparation for school exams and boards." },
        { icon: GraduationCap, title: "Strong Foundation", desc: "Building blocks for future academic success." },
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero */}
            <section className="bg-green-600 text-white py-20 lg:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl"
                    >
                        <span className="text-green-200 font-semibold tracking-wider uppercase text-sm mb-4 block">
                            For Class 1-10
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                            Excel in <span className="text-green-400">School Maths</span>
                        </h1>
                        <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-2xl">
                            Comprehensive tuition and support for school mathematics to ensure your child stays ahead in class.
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Join Us?</h2>
                        <div className="grid gap-8">
                            {benefits.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shrink-0">
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
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Topics Covered</h3>
                            <ul className="space-y-3">
                                {["Number Systems", "Algebra & Geometry", "Trigonometry", "Mensuration", "Statistics & Probability"].map((item, i) => (
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
                            <LeadForm variant="inline" themeColor="green" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
