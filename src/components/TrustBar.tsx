import { Trophy, Users, Award, Clock } from "lucide-react";

const stats = [
    {
        icon: Users,
        value: "500+",
        label: "Happy Students",
    },
    {
        icon: Trophy,
        value: "50+",
        label: "Competition Winners",
    },
    {
        icon: Award,
        value: "100%",
        label: "Certified Trainers",
    },
    {
        icon: Clock,
        value: "8+",
        label: "Years Experience",
    },
];

export default function TrustBar() {
    return (
        <section className="bg-brand-50 py-12 border-b border-brand-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-600 shadow-sm mb-3 group-hover:scale-110 transition-transform">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-1">
                                {stat.value}
                            </h3>
                            <p className="text-sm text-slate-600 font-medium uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
