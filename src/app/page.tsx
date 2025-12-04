import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProgramCard from "@/components/ProgramCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";

import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
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
      <Hero />
      <TrustBar />

      {/* Programs Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Specialized Programs
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Scientifically designed curriculums to unlock your child's full potential.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </section>

      <TestimonialCarousel />

      <Footer />
      <FloatingCTA />
    </main>
  );
}
