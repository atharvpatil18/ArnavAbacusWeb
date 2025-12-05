"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle } from "lucide-react";

interface LeadFormProps {
    variant?: "inline" | "modal" | "hero";
    className?: string;
    themeColor?: "blue" | "orange" | "green";
}

export default function LeadForm({ variant = "inline", className = "", themeColor = "blue" }: LeadFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const parentName = formData.get("parentName") as string;
        const childAge = formData.get("childAge") as string;
        const program = formData.get("program") as string;

        // WhatsApp Configuration
        const phoneNumber = "919021924968"; // REPLACE WITH ACTUAL NUMBER
        const message = `Hello, I'm interested in a Demo Class!
Name: ${parentName}
Child's Age: ${childAge}
Program: ${program || "General"}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Track submission
        try {
            const { trackLeadSubmit } = await import("@/lib/analytics");
            trackLeadSubmit(program || "General", variant);
        } catch (error) {
            console.error("Analytics error:", error);
        }

        // Simulate brief delay for UX then redirect
        setTimeout(() => {
            setIsLoading(false);
            window.open(whatsappUrl, '_blank');
            setIsSuccess(true);
        }, 1000);
    };

    if (isSuccess) {
        return (
            <div className={`bg-green-50 p-8 rounded-xl text-center border border-green-100 ${className}`}>
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center gap-3"
                >
                    <CheckCircle className="w-12 h-12 text-green-500" />
                    <h3 className="text-xl font-bold text-green-800">Redirecting to WhatsApp...</h3>
                    <p className="text-green-700">
                        Please continue the conversation on WhatsApp to book your slot.
                    </p>
                </motion.div>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-4 ${variant === "hero" ? "bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-2xl" : "bg-white p-6 rounded-xl shadow-lg border border-slate-100"
                } ${className}`}
        >
            <div className="text-center mb-2">
                <h3 className={`text-xl font-bold ${variant === "hero" ? "text-white" : "text-slate-800"}`}>
                    Book a Free Demo Class
                </h3>
                <p className={`text-sm ${variant === "hero" ? "text-white/80" : "text-slate-500"}`}>
                    Unlock your child's potential today! <span className="font-bold text-yellow-300 block mt-1">Join after demo & get 10% OFF!</span>
                </p>
            </div>

            <div>
                <label htmlFor="parentName" className="sr-only">Parent's Name</label>
                <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    placeholder="Parent's Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="childAge" className="sr-only">Child's Age</label>
                    <select
                        id="childAge"
                        name="childAge"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-white text-slate-600"
                    >
                        <option value="">Child's Age</option>
                        <option value="4-6">4-6 Years</option>
                        <option value="7-9">7-9 Years</option>
                        <option value="10-12">10-12 Years</option>
                        <option value="13+">13+ Years</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="program" className="sr-only">Interested Program</label>
                    <select
                        id="program"
                        name="program"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-white text-slate-600"
                    >
                        <option value="">Program</option>
                        <option value="abacus">Abacus</option>
                        <option value="vedic">Vedic Math</option>
                        <option value="school">School Math</option>
                    </select>
                </div>
            </div>

            {/* Phone input removed as we are redirecting to WhatsApp */}

            <button
                type="submit"
                disabled={isLoading}
                className={`w-full text-white font-bold py-3.5 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed
                    ${themeColor === "orange" ? "bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25" :
                        themeColor === "green" ? "bg-green-600 hover:bg-green-700 hover:shadow-green-500/25" :
                            "bg-brand-600 hover:bg-brand-700 hover:shadow-brand-500/25"
                    }`}
            >
                {isLoading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Booking...
                    </>
                ) : (
                    "Book Free Demo Now"
                )}
            </button>

            <p className={`text-xs text-center ${variant === "hero" ? "text-white/60" : "text-slate-400"}`}>
                Limited slots available for this week.
            </p>
        </form>
    );
}
