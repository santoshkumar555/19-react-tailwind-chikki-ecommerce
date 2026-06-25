import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import BreadCrumb from "../components/ui/BreadCrumb";
import SectionTitle from "../components/ui/SectionTitle";

const Contact = () => {
    return (
        <>
            <div className="bg-stone-50 pt-24 pb-20 min-h-screen">
                <div className="container mx-auto px-4 max-w-6xl">
                    <BreadCrumb
                        items={[
                            { label: "Home", path: "/" },
                            { label: "Contact Us", path: "/contact" },
                        ]}
                    />

                    <SectionTitle
                        title="Get in Touch"
                        subtitle="We'd love to hear from you. Reach out for queries, bulk orders, or just to say hi!"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                                <h3 className="font-display text-2xl font-bold text-stone-900 mb-6">
                                    Contact Information
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 text-amber-700">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-stone-900 mb-1">
                                                Head Office & Store
                                            </h4>
                                            <p className="text-stone-900 font-bold leading-relaxed">
                                                Shed No. 49A & B, Opp. Monsento
                                                LICEL, Nangargaon, Lonavala
                                                410401, Dist. Pune, Maharashtra
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 text-amber-700">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-stone-900 mb-1">
                                                Phone
                                            </h4>
                                            <p className="text-stone-900 font-bold">
                                                +91 2114 274060
                                                <br />
                                                +91 7666530969
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 text-amber-700">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-stone-900 mb-1">
                                                Email
                                            </h4>
                                            <p className="text-stone-900 font-bold">
                                                info@maganlalchikki.in
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 text-amber-700">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-stone-900 mb-1">
                                                Store Hours
                                            </h4>
                                            <p className="text-stone-900 font-bold">
                                                Mon – Sat: 9 AM to 7 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-stone-200 h-80 rounded-3xl overflow-hidden relative shadow-inner border border-stone-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964055.841118109!2d72.7465402393847!3d19.289186905065947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8010def1dfb31%3A0x396a984212afae07!2sMaganlal%20%26%20Sons%20%2C%20The%20Legacy%20Chikki%20Store!5e0!3m2!1sen!2sin!4v1776065493460!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Maganlal Chikki Location"
                                ></iframe>
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-stone-100">
                            <h3 className="font-display text-2xl font-bold text-stone-900 mb-6">
                                Send us a Message
                            </h3>
                            <form
                                className="space-y-6"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    toast.success("Message sent!");
                                    e.target.reset();
                                }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-stone-900 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-amber-500 text-stone-900 font-bold"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-stone-900 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-amber-500 text-stone-900 font-bold"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-stone-900 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-amber-500 text-stone-900 font-bold"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-stone-900 mb-2">
                                        Subject
                                    </label>
                                    <select className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-amber-500 text-stone-900 font-bold">
                                        <option>General Inquiry</option>
                                        <option>Order Support</option>
                                        <option>Bulk/Corporate Order</option>
                                        <option>Feedback</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-stone-900 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        rows="4"
                                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-amber-500 text-stone-900 font-bold resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-amber-600/20"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
