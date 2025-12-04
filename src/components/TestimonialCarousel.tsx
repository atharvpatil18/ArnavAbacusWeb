"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Chandra Gupta",
        role: "Parent of Vedant",
        content: "When we joined the abacus class, it was more of an experiment. But over time, it has become something really special. Thanks to Neha Ma’am and Nitin Sir, who take such good care of him, he has developed a genuine interest in learning. Their patience and creative way of teaching have helped Vedant improve his focus and confidence.",
        rating: 5,
    },
    {
        id: 2,
        name: "Tejasweeni Zope",
        role: "Parent",
        content: "I am truly impressed with the Abacus classes conducted by Neha ma’am. She gives personal attention to each and every student, ensuring that every child learns at their own pace with confidence. My daughter has shown significant improvement in her mathematical skills and overall concentration.",
        rating: 5,
    },
    {
        id: 3,
        name: "Priya Sharma",
        role: "Parent",
        content: "Arnav Abacus Academy is the best place for kids to learn Vedic Maths. The teachers are very supportive and the environment is great for learning. Highly recommended!",
        rating: 5,
    },
];

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        What Parents Say About Us
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Join hundreds of happy parents who have witnessed their child's transformation.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10">
                        <button
                            onClick={prev}
                            className="p-2 rounded-full bg-white shadow-lg text-slate-600 hover:text-brand-600 transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10">
                        <button
                            onClick={next}
                            className="p-2 rounded-full bg-white shadow-lg text-slate-600 hover:text-brand-600 transition-colors"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="overflow-hidden px-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-100 text-center"
                            >
                                <Quote className="w-12 h-12 text-brand-200 mx-auto mb-6" />
                                <p className="text-xl md:text-2xl text-slate-700 italic mb-8 leading-relaxed">
                                    "{testimonials[currentIndex].content}"
                                </p>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    <p className="text-brand-600 text-sm font-medium">
                                        {testimonials[currentIndex].role}
                                    </p>
                                    <div className="flex justify-center gap-1 mt-2 text-yellow-400">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? "bg-brand-600 w-8" : "bg-slate-300 hover:bg-slate-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
