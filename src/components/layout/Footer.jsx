import { Link } from "react-router-dom";
import { MapPin, Phone, Smartphone, Mail, Clock } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="mt-auto">
            {/* Main footer */}
            <div className="bg-amber-950 text-amber-100 py-16 px-4">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* COL 1 */}
                    <div>
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                                <span className="font-display text-2xl font-bold text-amber-900">
                                    M
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display text-xl font-bold leading-none text-white">
                                    Maganlal Chikki
                                </span>
                                <span className="text-[10px] text-amber-400 font-medium tracking-wider uppercase mt-1">
                                    Est. 1880 · Lonavala
                                </span>
                            </div>
                        </Link>
                        <p className="text-amber-200/80 text-sm mb-6 leading-relaxed">
                            India's oldest and most loved chikki FOOTER_DATA.
                            Handmade with pure jaggery and roasted nuts since
                            1880.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://facebook.com/maganlalchikki"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-amber-400 transition-colors"
                            >
                                <FaFacebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com/maganlalchikki"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-amber-400 transition-colors"
                            >
                                <FaInstagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://youtube.com/@maganlalchikki"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-amber-400 transition-colors"
                            >
                                <FaYoutube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* COL 2 */}
                    <div>
                        <h4 className="font-display text-lg font-bold text-white mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-3 text-sm text-amber-200/80">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-amber-400 transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/shop"
                                    className="hover:text-amber-400 transition-colors"
                                >
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-amber-400 transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-amber-400 transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* COL 3 */}
                    <div>
                        <h4 className="font-display text-lg font-bold text-white mb-6">
                            Our Products
                        </h4>
                        <ul className="space-y-3 text-sm text-amber-200/80">
                            <li>
                                <Link
                                    to="/shop?category=1"
                                    className="hover:text-amber-400 transition-colors"
                                >
                                    Chikki
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/shop?category=2"
                                    className="hover:text-amber-400 transition-colors"
                                >
                                    Fudge
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/shop?category=4"
                                    className="hover:text-amber-400 transition-colors"
                                >
                                    Dry Fruit Roll
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/shop?category=5"
                                    className="hover:text-amber-400 transition-colors"
                                >
                                    Namkeens
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* COL 4 */}
                    <div>
                        <h4 className="font-display text-lg font-bold text-white mb-6">
                            Contact
                        </h4>
                        <ul className="space-y-4 text-sm text-amber-200/80">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                                <span>Shed No. 49A & B, Opp. Monsento LICEL, Nangargaon, Lonavala 410401, Dist. Pune, Maharashtra</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                                <span>+91 2114 274060</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Smartphone className="w-4 h-4 text-amber-500 shrink-0" />
                                <span>+91 7666530969</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                                <span>info@maganlalchikki.in</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                                <span>Mon – Sat: 9 AM to 7 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
