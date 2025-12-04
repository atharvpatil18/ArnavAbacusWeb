import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trophy, Medal, Star } from "lucide-react";

export default function AchievementsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <section className="bg-brand-900 pt-32 pb-20 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Hall of Fame</h1>
                    <p className="text-xl text-brand-100 max-w-2xl mx-auto">
                        Celebrating the brilliance and hard work of our students.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    {/* Recent Winners */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center flex items-center justify-center gap-3">
                            <Trophy className="w-8 h-8 text-yellow-500" />
                            National Competition Winners 2024
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
                                    <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-400">
                                        {/* Placeholder for student image */}
                                        Student Photo {i}
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-bold text-slate-900 mb-1">Student Name</h3>
                                        <p className="text-brand-600 font-medium mb-3">Champion - Level {i + 2}</p>
                                        <p className="text-slate-600 text-sm">
                                            Completed 100 sums in 5 minutes with 100% accuracy.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certificates */}
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center flex items-center justify-center gap-3">
                            <Medal className="w-8 h-8 text-brand-500" />
                            Recent Graduates
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-sm shrink-0">
                                        <Star className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">Student {i}</h4>
                                        <p className="text-xs text-slate-500">Completed Level 8</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
