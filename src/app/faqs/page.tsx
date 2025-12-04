"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import LeadForm from "@/components/LeadForm";

const faqs = [
    {
        question: "What is the ideal age to start Abacus?",
        answer: "The ideal age to start Abacus is between 4 to 14 years. At this age, brain development is at its peak, and children can grasp the concepts of visualization and mental arithmetic most effectively.",
    },
    {
        question: "How does Abacus help in school math?",
        answer: "Abacus improves calculation speed, accuracy, and concentration. These skills directly translate to better performance in school math. Children can solve problems faster and with more confidence.",
    },
    {
        question: "What is the duration of the course?",
        answer: "The complete Abacus course consists of 8 levels. Each level typically takes 3-4 months to complete, depending on the child's pace and practice.",
    },
    {
        question: "Do you provide online classes?",
        answer: "Yes, we offer both offline classes at our Wakad center and online classes for students who cannot visit physically. The curriculum and teaching quality remain the same.",
    },
    {
        question: "Is there any homework?",
        answer: "Yes, we assign 10-15 minutes of daily practice. Consistent practice is key to mastering Abacus and Vedic Math techniques.",
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <section className="bg-brand-900 pt-32 pb-20 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Parent FAQs</h1>
                    <p className="text-xl text-brand-100 max-w-2xl mx-auto">
                        Common questions about our programs and teaching methodology.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                                    >
                                        <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                                        {openIndex === index ? (
                                            <ChevronUp className="w-5 h-5 text-brand-600" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-slate-400" />
                                        )}
                                    </button>
                                    {openIndex === index && (
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <div className="bg-brand-50 p-6 rounded-xl border border-brand-100 mb-8">
                                    <h3 className="font-bold text-brand-900 mb-2">Still have questions?</h3>
                                    <p className="text-brand-700 text-sm mb-4">
                                        Our team is happy to help. Reach out to us directly.
                                    </p>
                                    <a href="tel:+919876543210" className="text-brand-600 font-bold hover:underline">
                                        +91 90219 24968
                                    </a>
                                </div>
                                <LeadForm variant="inline" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
