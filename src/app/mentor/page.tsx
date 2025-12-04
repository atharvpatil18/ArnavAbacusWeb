import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeacherProfile from "@/components/TeacherProfile";
import FloatingCTA from "@/components/FloatingCTA";

export default function MentorPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-20">
        <TeacherProfile />
      </div>
      <Footer />
      <FloatingCTA />
    </main>
  );
}
