import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

interface ProgramCardProps {
    title: string;
    description: string;
    ageGroup: string;
    features: string[];
    href: string;
    color?: "blue" | "orange" | "green";
}

export default function ProgramCard({
    title,
    description,
    ageGroup,
    features,
    href,
    color = "blue",
}: ProgramCardProps) {
    const colorStyles = {
        blue: {
            bg: "bg-blue-50",
            text: "text-blue-600",
            border: "border-blue-100",
            button: "bg-blue-600 hover:bg-blue-700",
            icon: "text-blue-500",
        },
        orange: {
            bg: "bg-orange-50",
            text: "text-orange-600",
            border: "border-orange-100",
            button: "bg-orange-600 hover:bg-orange-700",
            icon: "text-orange-500",
        },
        green: {
            bg: "bg-green-50",
            text: "text-green-600",
            border: "border-green-100",
            button: "bg-green-600 hover:bg-green-700",
            icon: "text-green-500",
        },
    };

    const styles = colorStyles[color];

    return (
        <div className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border ${styles.border} flex flex-col h-full group`}>
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${styles.bg} ${styles.text} w-fit mb-4`}>
                {ageGroup}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                {title}
            </h3>
            <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                {description}
            </p>

            <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                        <Check className={`w-5 h-5 ${styles.icon} shrink-0`} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <Link
                href={href}
                className={`w-full ${styles.button} text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all group-hover:gap-3`}
            >
                Learn More
                <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
    );
}
