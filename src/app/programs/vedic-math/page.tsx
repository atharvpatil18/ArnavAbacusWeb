import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Zap, Target, BookOpen, Award } from "lucide-react";

export default function VedicMathPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero */}
            <section className="bg-orange-600 pt-32 pb-20 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hero-bg-pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Unlock the Power of Vedic Math
                        </h1>
                        <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                            The world's fastest mental math system. Solve complex problems in seconds using ancient Indian techniques. Ideal for ages 10+.
                        </p>
                        <a href="#enroll" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full font-bold transition-colors inline-block">
                            Start Learning
                        </a>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Left: Details */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Vedic Math?</h2>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    Vedic Mathematics is a collection of techniques (Sutras) to solve mathematical arithmetics in easy and faster way. It consists of 16 Sutras (Formulae) and 13 sub-sutras (Sub Formulae) which can be used for problems involved in arithmetic, algebra, geometry, calculus, conics.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {[
                                        { icon: Zap, title: "10x Speed", desc: "Solve problems 10-15 times faster." },
                                        { icon: Target, title: "Competitive Exams", desc: "Ace exams like Olympiads, JEE, SAT." },
                                        { icon: BookOpen, title: "Simplified Logic", desc: "One-line answers for complex sums." },
                                        { icon: Award, title: "Accuracy", desc: "Built-in verification methods." },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                            <item.icon className="w-8 h-8 text-orange-500 mb-4" />
                                            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-sm text-slate-600">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">What You Will Learn</h2>
                                <ul className="space-y-4">
                                    {[
                                        "High-speed Multiplication (e.g. 998 x 997 in 2 seconds)",
                                        "Square roots and Cube roots instantly",
                                        "Division by large numbers",
                                        "Algebraic equations and factorization",
                                        "Calendar and day calculation",
                                        "Magic squares and puzzles",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700">
                                            <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                                ✓
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right: Sidebar Form */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24" id="enroll">
                                <LeadForm variant="inline" className="border-orange-200 shadow-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
