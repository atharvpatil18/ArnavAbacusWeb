"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ArrowRight, CheckCircle2, XCircle } from "lucide-react";

export default function AiQuizWidget() {
    const [step, setStep] = useState<"age" | "quiz" | "result">("age");
    const [age, setAge] = useState<string>("");
    const [question, setQuestion] = useState<{ text: string; answer: number } | null>(null);
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(15);

    // Timer logic
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (step === "quiz" && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (step === "quiz" && timeLeft === 0) {
            setIsCorrect(false);
            setStep("result");
        }
        return () => clearInterval(timer);
    }, [step, timeLeft]);

    const generateQuestion = (age: number) => {
        if (age < 7) {
            // Simple Addition (Single Digit)
            const a = Math.floor(Math.random() * 9) + 1;
            const b = Math.floor(Math.random() * 9) + 1;
            return { text: `${a} + ${b} = ?`, answer: a + b };
        } else if (age <= 9) {
            // Double Digit Addition/Subtraction
            const isAddition = Math.random() > 0.5;
            const a = Math.floor(Math.random() * 40) + 10;
            const b = Math.floor(Math.random() * 40) + 10;
            return isAddition
                ? { text: `${a} + ${b} = ?`, answer: a + b }
                : { text: `${a + b} - ${b} = ?`, answer: a };
        } else {
            // Multiplication (2-digit x 1-digit) or Division
            const isMultiplication = Math.random() > 0.3;
            if (isMultiplication) {
                const a = Math.floor(Math.random() * 15) + 5;
                const b = Math.floor(Math.random() * 8) + 2;
                return { text: `${a} × ${b} = ?`, answer: a * b };
            } else {
                const b = Math.floor(Math.random() * 8) + 2;
                const answer = Math.floor(Math.random() * 15) + 5;
                const a = answer * b;
                return { text: `${a} ÷ ${b} = ?`, answer: answer };
            }
        }
    };

    const handleAgeSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!age) return;
        const q = generateQuestion(parseInt(age));
        setQuestion(q);
        setTimeLeft(15); // Reset timer
        setStep("quiz");
    };

    const handleAnswerSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!question || !userAnswer) return;
        const correct = parseInt(userAnswer) === question.answer;
        setIsCorrect(correct);
        setStep("result");
    };

    return (
        <section className="py-16 bg-brand-50">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 font-semibold text-sm mb-4">
                            Try It Yourself
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Take the <span className="text-brand-600">AI Math Challenge</span>
                        </h2>
                        <p className="text-slate-600">
                            See how your child performs and discover their potential with Abacus.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        {/* Left: Quiz Widget */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-[400px]">
                            {/* Decorative background elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-100 rounded-bl-full opacity-50 -mr-10 -mt-10" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-100 rounded-tr-full opacity-50 -ml-8 -mb-8" />

                            <AnimatePresence mode="wait">
                                {step === "age" && (
                                    <motion.form
                                        key="age"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        onSubmit={handleAgeSubmit}
                                        className="relative z-10 flex flex-col items-center gap-6"
                                    >
                                        <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-2">
                                            <Calculator className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900">Enter Child's Age</h3>
                                        <input
                                            type="number"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                            placeholder="e.g., 7"
                                            min="4"
                                            max="16"
                                            required
                                            className="w-full max-w-xs px-4 py-3 text-center text-2xl font-bold rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 outline-none transition-all"
                                        />
                                        <button
                                            type="submit"
                                            className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-brand-500/25 transition-all flex items-center gap-2"
                                        >
                                            Start Quiz <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </motion.form>
                                )}

                                {step === "quiz" && question && (
                                    <motion.form
                                        key="quiz"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        onSubmit={handleAnswerSubmit}
                                        className="relative z-10 flex flex-col items-center gap-6"
                                    >
                                        <div className="w-full flex justify-between items-center text-sm font-medium text-slate-500 mb-2">
                                            <span>Solve fast!</span>
                                            <span className={`${timeLeft <= 5 ? 'text-red-600 animate-pulse' : 'text-brand-600'}`}>
                                                {timeLeft}s remaining
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
                                            <motion.div
                                                className={`h-full ${timeLeft <= 5 ? 'bg-red-500' : 'bg-brand-500'}`}
                                                initial={{ width: "100%" }}
                                                animate={{ width: `${(timeLeft / 15) * 100}%` }}
                                                transition={{ duration: 1, ease: "linear" }}
                                            />
                                        </div>

                                        <div className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
                                            {question.text}
                                        </div>
                                        <input
                                            type="number"
                                            value={userAnswer}
                                            onChange={(e) => setUserAnswer(e.target.value)}
                                            placeholder="?"
                                            required
                                            autoFocus
                                            className="w-full max-w-xs px-4 py-3 text-center text-3xl font-bold rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 outline-none transition-all"
                                        />
                                        <button
                                            type="submit"
                                            className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-brand-500/25 transition-all"
                                        >
                                            Check Answer
                                        </button>
                                    </motion.form>
                                )}

                                {step === "result" && (
                                    <motion.div
                                        key="result"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="relative z-10 flex flex-col items-center gap-6 text-center"
                                    >
                                        <div className={`w-20 h-20 rounded-full flex items-center justify-center ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                                            {isCorrect ? <CheckCircle2 className="w-10 h-10" /> : <XCircle className="w-10 h-10" />}
                                        </div>

                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                                {isCorrect ? "Excellent Work!" : (timeLeft === 0 ? "Time's Up!" : "Good Try!")}
                                            </h3>
                                            <p className="text-slate-600 max-w-md mx-auto">
                                                {isCorrect
                                                    ? "Imagine solving this 10x faster! Our Abacus program trains the brain for speed and accuracy."
                                                    : "Don't worry! With our Abacus training, solving these problems becomes second nature."}
                                            </p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-2">
                                            <a
                                                href="https://wa.me/919021924968?text=Hello%2C%20I%20tried%20the%20quiz%20and%20want%20to%20book%20a%20demo"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-brand-500/25 transition-all"
                                            >
                                                Book Free Demo
                                            </a>
                                            <button
                                                onClick={() => {
                                                    setStep("age");
                                                    setAge("");
                                                    setUserAnswer("");
                                                    setTimeLeft(15);
                                                }}
                                                className="px-8 py-3 rounded-full font-semibold text-slate-600 hover:bg-slate-100 transition-all"
                                            >
                                                Try Again
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Right: Did You Know? */}
                        <div className="bg-brand-900 rounded-2xl shadow-xl p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                    <span className="bg-brand-700 p-2 rounded-lg">💡</span> Did You Know?
                                </h3>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="w-2 h-2 mt-2.5 rounded-full bg-brand-400 shrink-0" />
                                        <p className="text-brand-100 leading-relaxed">
                                            <strong className="text-white block mb-1">Whole Brain Development</strong>
                                            Abacus stimulates both left (logical) and right (creative) hemispheres of the brain simultaneously.
                                        </p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-2 h-2 mt-2.5 rounded-full bg-brand-400 shrink-0" />
                                        <p className="text-brand-100 leading-relaxed">
                                            <strong className="text-white block mb-1">Photographic Memory</strong>
                                            Regular practice helps children visualize numbers, improving memory and concentration significantly.
                                        </p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-2 h-2 mt-2.5 rounded-full bg-brand-400 shrink-0" />
                                        <p className="text-brand-100 leading-relaxed">
                                            <strong className="text-white block mb-1">Speed & Accuracy</strong>
                                            Abacus students can calculate faster than a calculator with 100% accuracy!
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
