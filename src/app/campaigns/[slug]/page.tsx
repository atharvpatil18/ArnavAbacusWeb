import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { CheckCircle, Brain, Trophy, Zap } from "lucide-react";
import { notFound } from "next/navigation";

// Campaign Data
const campaigns = {
    "math-phobia": {
        title: "Is Your Child Afraid of Math?",
        subtitle: "Turn Math Fear into Math Fun with Our Proven Methods.",
        heroColor: "bg-red-600",
        heroText: "text-red-100",
        features: [
            "Fun & Interactive Learning",
            "No More Finger Counting",
            "Boost Confidence in 30 Days",
            "Personalized Attention",
        ],
        cta: "Book a Free Confidence-Booster Session",
    },
    "competitive-exam": {
        title: "Ace Competitive Exams with Speed Math",
        subtitle: "Give your child the unfair advantage in Olympiads, JEE, and more.",
        heroColor: "bg-blue-700",
        heroText: "text-blue-100",
        features: [
            "Calculate 10x Faster",
            "Accuracy Improvement",
            "Time Management Skills",
            "Mock Tests & Analysis",
        ],
        cta: "Book a Free Speed Assessment",
    },
    "brain-development": {
        title: "Unlock Your Child's Genius Potential",
        subtitle: "Whole brain development through Abacus visualization techniques.",
        heroColor: "bg-purple-700",
        heroText: "text-purple-100",
        features: [
            "Photographic Memory",
            "Laser-Sharp Concentration",
            "Enhanced Creativity",
            "Better Listening Skills",
        ],
        cta: "Book a Free Brain Skills Demo",
    },
};

export function generateStaticParams() {
    return Object.keys(campaigns).map((slug) => ({
        slug,
    }));
}

export default async function CampaignPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const campaign = campaigns[slug as keyof typeof campaigns];

    if (!campaign) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero */}
            <section className={`${campaign.heroColor} pt-32 pb-20 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[url('/hero-bg-pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
                                Limited Time Offer
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                {campaign.title}
                            </h1>
                            <p className={`text-xl ${campaign.heroText} mb-8 leading-relaxed`}>
                                {campaign.subtitle}
                            </p>
                            <div className="space-y-4 mb-8">
                                {campaign.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-6 h-6 text-white shrink-0" />
                                        <span className="font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-2xl">
                            <h3 className="text-slate-900 font-bold text-xl mb-2 text-center">
                                {campaign.cta}
                            </h3>
                            <p className="text-slate-500 text-sm text-center mb-6">
                                Fill the form to claim your free slot.
                            </p>
                            <LeadForm variant="inline" className="shadow-none border-0 p-0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-12 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { label: "Students Trained", value: "500+" },
                        { label: "Years Experience", value: "8+" },
                        { label: "Parent Rating", value: "4.9/5" },
                        { label: "Improvement", value: "100%" },
                    ].map((stat, i) => (
                        <div key={i}>
                            <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                            <div className="text-sm text-slate-500 uppercase tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <TestimonialCarousel />

            <Footer />
        </main>
    );
}
