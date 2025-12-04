"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, BookOpen, Heart, Star } from "lucide-react";

export default function TeacherProfile() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
                            <Image src="/teacher-profile.jpg" alt="Neha Patil" fill className="object-cover" />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-6 -right-6 md:right-10 bg-yellow-400 text-brand-900 p-4 rounded-2xl shadow-lg flex items-center gap-3 max-w-[200px]"
                        >
                            <div className="bg-white/30 p-2 rounded-full">
                                <Award className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider opacity-80">Certified</p>
                                <p className="font-bold text-sm">Outstanding Grade</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">
                            Meet Your Mentor
                        </span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">
                            Neha Patil <span className="text-slate-400 text-2xl block mt-1 font-medium">Founder & Director</span>
                        </h2>

                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            With a passion for empowering young minds, Neha Patil brings a disciplined yet empathetic approach to teaching. As an <strong>IIVA Certified Abacus & Vedic Math Professional</strong>, she has guided students to win international and national accolades.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                                    <Star className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Excellence</h4>
                                    <p className="text-sm text-slate-600">Outstanding Grade Certification</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 shrink-0">
                                    <Heart className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Approach</h4>
                                    <p className="text-sm text-slate-600">Empathetic & Disciplined</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Results</h4>
                                    <p className="text-sm text-slate-600">State & National Winners</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Focus</h4>
                                    <p className="text-sm text-slate-600">Concept & Confidence</p>
                                </div>
                            </div>
                        </div>

                        <blockquote className="border-l-4 border-brand-500 pl-6 italic text-slate-600">
                            "My mission is to turn children into confident, fast, and conceptually strong math learners who aren't afraid of numbers."
                        </blockquote>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
