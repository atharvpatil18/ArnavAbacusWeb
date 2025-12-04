import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProgramCard from "@/components/ProgramCard";
import AiQuizWidget from "@/components/AiQuizWidget";
import TestimonialCarousel from "@/components/TestimonialCarousel";

import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";



export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <TrustBar />

      <section id="programs" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="text-brand-600">Programs</span>
            </h2>
            <p className="text-lg text-slate-600">
              Structured learning paths designed to boost calculation speed, memory, and academic confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard
              title="Abacus"
              ageGroup="5-9 Years"
              description="Master mental calculations using the ancient tool. Enhances concentration, visualization, and speed."
              features={["Whole Brain Development", "Photographic Memory", "Speed & Accuracy"]}
              color="blue"
              href="/programs/abacus"
              delay={0.1}
            />
            <ProgramCard
              title="Vedic Maths"
              ageGroup="9-14 Years"
              description="Ancient Indian techniques for high-speed arithmetic. Ideal for competitive exams and school math."
              features={["10-15x Faster Calculations", "Removes Math Phobia", "Algebraic Shortcuts"]}
              color="orange"
              href="/programs/vedic-math"
              delay={0.2}
            />
            <ProgramCard
              title="School Maths"
              ageGroup="Class 1-10"
              description="Comprehensive tuition aligned with school syllabus (ICSE/CBSE) to ensure academic excellence."
              features={["Concept Clarity", "Exam Preparation", "Personalized Attention"]}
              color="green"
              href="/programs/school-math"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      <AiQuizWidget />

      <TestimonialCarousel />

      <Footer />
      <FloatingCTA />
    </main>
  );
}
