import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { GraduationCap, Book, Pencil, Users } from "lucide-react";

export default function SchoolMathPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero */}
            <section className="bg-green-600 pt-32 pb-20 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hero-bg-pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Excel in School Mathematics
                        </h1>
                        <p className="text-xl text-green-100 mb-8 leading-relaxed">
                            Comprehensive tuition and support for Grade 1 to 10. Build a strong foundation and score higher marks in school exams.
                        </p>
                        <a href="#enroll" className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-bold transition-colors inline-block">
                            Book a Free Trial
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
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Academic Excellence</h2>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    Our School Math program is aligned with the CBSE/ICSE/State Board curriculum. We focus on concept clarity, regular practice, and exam-oriented preparation to ensure your child stays ahead in class.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {[
                                        { icon: GraduationCap, title: "Board Aligned", desc: "CBSE, ICSE, and State Board syllabus." },
                                        { icon: Book, title: "Concept Clarity", desc: "Deep understanding of fundamentals." },
                                        { icon: Pencil, title: "Homework Help", desc: "Daily assistance with school assignments." },
                                        { icon: Users, title: "Small Batches", desc: "Individual attention for every student." },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                            <item.icon className="w-8 h-8 text-green-500 mb-4" />
                                            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-sm text-slate-600">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Approach</h2>
                                <div className="space-y-6">
                                    {[
                                        { title: "Diagnostic Test", desc: "We identify the student's current level and weak areas." },
                                        { title: "Personalized Plan", desc: "Customized learning path to bridge gaps and advance." },
                                        { title: "Regular Assessments", desc: "Weekly tests to track progress and retention." },
                                        { title: "Parent Updates", desc: "Regular feedback sessions with parents." },
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold shrink-0">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900">{item.title}</h3>
                                                <p className="text-slate-600 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Sidebar Form */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24" id="enroll">
                                <LeadForm variant="inline" className="border-green-200 shadow-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
