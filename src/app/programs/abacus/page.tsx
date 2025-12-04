import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { CheckCircle, Brain, Calculator, Clock } from "lucide-react";

export default function AbacusPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero */}
            <section className="bg-brand-900 pt-32 pb-20 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hero-bg-pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Master Mental Arithmetic with Abacus
                        </h1>
                        <p className="text-xl text-brand-100 mb-8 leading-relaxed">
                            A whole-brain development program that enhances concentration, visualization, and calculation speed for children aged 4-14.
                        </p>
                        <a href="#enroll" className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-full font-bold transition-colors inline-block">
                            Enroll Now
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
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Abacus?</h2>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    Abacus is not just about math; it's about brain development. By using both hands to manipulate the beads, children stimulate both the left and right hemispheres of the brain, leading to holistic development.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {[
                                        { icon: Brain, title: "Concentration", desc: "Improves focus and attention span." },
                                        { icon: Calculator, title: "Speed & Accuracy", desc: "Calculate faster than a calculator." },
                                        { icon: Clock, title: "Memory", desc: "Enhances photographic memory." },
                                        { icon: CheckCircle, title: "Confidence", desc: "Removes fear of numbers." },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                            <item.icon className="w-8 h-8 text-brand-600 mb-4" />
                                            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-sm text-slate-600">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Curriculum Levels</h2>
                                <div className="space-y-4">
                                    {[
                                        "Level 1: Introduction to Abacus & Basic Addition/Subtraction",
                                        "Level 2: Visualization Techniques & Speed Building",
                                        "Level 3: Multiplication & Division Basics",
                                        "Level 4: Advanced Mental Arithmetic",
                                        "Level 5: Decimals & Negative Numbers",
                                        "Level 6: Grand Master Certification Prep",
                                    ].map((level, i) => (
                                        <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-lg border border-slate-100">
                                            <div className="w-8 h-8 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                                                {i + 1}
                                            </div>
                                            <span className="text-slate-700 font-medium">{level}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Sidebar Form */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24" id="enroll">
                                <LeadForm variant="inline" className="border-brand-200 shadow-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
