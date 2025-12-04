import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <section className="bg-brand-900 pt-32 pb-20 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-brand-100 max-w-2xl mx-auto">
                        We'd love to hear from you. Reach out to us for any queries or to schedule a visit.
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                                        <p className="text-slate-600">
                                            Flat no. 304, Creative Cameo, near Park Street,<br />
                                            Wakad, Pimpri-Chinchwad, Maharashtra 411057
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                                        <p className="text-slate-600">+91 90219 24968</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                                        <p className="text-slate-600">nehaatharv@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 shrink-0">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Opening Hours</h3>
                                        <p className="text-slate-600">
                                            Thursday - Wednesday: 2:00 PM – 8:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-slate-200 rounded-xl h-64 w-full flex items-center justify-center text-slate-500">
                            <iframe
                                src="https://maps.google.com/maps?q=Arnav+Abacus+Academy+and+Vedic+Maths+Classes+Wakad&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: "0.75rem" }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h2>
                        <p className="text-slate-500 mb-6">
                            Have a question? Fill out the form below and we'll get back to you shortly.
                        </p>
                        <LeadForm variant="inline" className="shadow-none border-0 p-0" />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
