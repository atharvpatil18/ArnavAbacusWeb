"use client";

import { useEffect } from "react";

export default function CalendlyWidget() {
    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute(
            "src",
            "https://assets.calendly.com/assets/external/widget.js"
        );
        head?.appendChild(script);
    }, []);

    return (
        <section className="py-20 bg-white" id="book-demo">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Schedule Your Free Demo
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Pick a time that works for you. Our expert trainers will assess your child's current level and recommend the best program.
                </p>
            </div>

            <div
                className="calendly-inline-widget w-full h-[700px]"
                data-url="https://calendly.com/arnavabacus/demo-class" // Placeholder URL
                style={{ minWidth: "320px", height: "700px" }}
            />
        </section>
    );
}
