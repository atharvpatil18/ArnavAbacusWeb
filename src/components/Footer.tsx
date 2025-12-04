import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Image src="/logo.jpg" alt="Arnav Abacus Academy" width={32} height={32} className="rounded" />
                            <span className="font-bold text-xl text-white">
                                Arnav<span className="text-brand-500">Abacus</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-sm mb-6">
                            Empowering children with the skills of tomorrow. Join the best Abacus and Vedic Math academy in Pune to boost concentration, speed, and confidence.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Programs</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/programs/abacus" className="hover:text-brand-400 transition-colors">
                                    Abacus Training
                                </Link>
                            </li>
                            <li>
                                <Link href="/programs/vedic-math" className="hover:text-brand-400 transition-colors">
                                    Vedic Math
                                </Link>
                            </li>
                            <li>
                                <Link href="/programs/school-math" className="hover:text-brand-400 transition-colors">
                                    School Math
                                </Link>
                            </li>
                            <li>
                                <Link href="/achievements" className="hover:text-brand-400 transition-colors">
                                    Hall of Fame
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-1" />
                                <span>
                                    Flat no. 304, Creative Cameo,
                                    <br />
                                    near Park Street, Wakad,
                                    <br />
                                    Pune - 411057
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                                <a href="tel:+919021924968" className="hover:text-white">
                                    +91 90219 24968
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                                <a href="mailto:nehaatharv@gmail.com" className="hover:text-white">
                                    nehaatharv@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3 mt-2">
                                <span className="font-semibold text-slate-400">Hours:</span>
                                <span>2:00 PM – 8:00 PM (Thu-Wed)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>© {new Date().getFullYear()} Arnav Abacus Academy. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-white">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
