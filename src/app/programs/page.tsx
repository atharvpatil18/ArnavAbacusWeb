import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/ProgramCard";

export default function ProgramsPage() {
    const programs = [
        {
            title: "Abacus Training",
            description: "Enhance brain development, concentration, and visualization skills through our structured Abacus program.",
            ageGroup: "4-14 Years",
            features: ["Whole Brain Development", "Improved Concentration", "Faster Calculation", "Better Memory"],
            href: "/programs/abacus",
            color: "blue" as const,
        },
        {
            title: "Vedic Math",
            description: "Master the world's fastest mental math system. Solve complex problems in seconds with ancient techniques.",
            ageGroup: "10+ Years",
            features: ["Speed Math Techniques", "Competitive Exam Prep", "Eliminate Math Phobia", "Boost Confidence"],
            href: "/programs/vedic-math",
            color: "orange" as const,
        },
        {
            title: "School Math",
            description: "Comprehensive curriculum support to help your child excel in their regular school mathematics.",
            ageGroup: "Grade 1-10",
            features: ["Concept Clarity", "Homework Support", "Exam Preparation", "Grade Improvement"],
            href: "/programs/school-math",
            color: "green" as const,
        },
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <section className="bg-brand-900 pt-32 pb-20 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
                    <p className="text-xl text-brand-100 max-w-2xl mx-auto">
                        Scientifically designed curriculums to unlock your child's full potential.
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <ProgramCard key={index} {...program} />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
