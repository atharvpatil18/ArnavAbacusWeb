"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle } from "lucide-react";

interface LeadFormProps {
    variant?: "inline" | "modal" | "hero";
    className?: string;
}

export default function LeadForm({ variant = "inline", className = "" }: LeadFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const program = formData.get("program") as string;

        // Mock API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Track submission
        try {
            const { trackLeadSubmit } = await import("@/lib/analytics");
            trackLeadSubmit(program || "General", variant);
        } catch (error) {
            console.error("Analytics error:", error);
        }

        setIsLoading(false);
        setIsSuccess(true);

        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
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
                    <h3 className="text-xl font-bold text-green-800">Thank You!</h3>
                    <p className="text-green-700">
                        We have received your details. Our team will contact you shortly to schedule your free demo.
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
                    Unlock your child's potential today!
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

            <div>
                <label htmlFor="phone" className="sr-only">WhatsApp Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="WhatsApp Number"
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 rounded-lg shadow-lg hover:shadow-brand-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
