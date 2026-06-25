import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { useScrollY } from "../../hooks/useScrollY";
import { cn } from "../../lib/utils";
import { openMobileMenu, closeMobileMenu } from "../../rtk/slices/uiSlice";
import { selectCartCount, openCart } from "../../rtk/slices/cartSlice";
import { selectWishlistCount } from "../../rtk/slices/wishlistSlice";

const NavIcon = ({
    children,
    label,
    onClick,
    to,
    badgeCount,
    badgeColor = "bg-amber-500",
}) => {
    const inner = (
        <div className="relative flex flex-col items-center group">
            <div className="relative p-1.5 rounded-xl text-stone-900 transition-colors group-hover:bg-amber-50 group-hover:text-amber-600">
                {children}
                {badgeCount > 0 && (
                    <span
                        className={cn(
                            "absolute -top-1 -right-1 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm",
                            badgeColor,
                        )}
                    >
                        {badgeCount}
                    </span>
                )}
            </div>
            <span className="absolute top-full mt-1 text-[10px] font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap text-amber-700">
                {label}
            </span>
        </div>
    );

    if (to)
        return (
            <Link to={to} className="relative">
                {inner}
            </Link>
        );
    if (onClick)
        return (
            <button onClick={onClick} className="relative cursor-pointer">
                {inner}
            </button>
        );
    return <div className="relative">{inner}</div>;
};

const NAV_LINKS = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
];

const Navbar = () => {
    const { scrolled } = useScrollY();
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const wishlistCount = useSelector(selectWishlistCount);
    const mobileMenuOpen = useSelector((s) => s.ui?.mobileMenuOpen);

    return (
        <>
            <header
                className={cn(
                    "sticky top-0 w-full z-50 transition-all duration-500",
                    scrolled || pathname !== "/"
                        ? "bg-white/95 backdrop-blur-md shadow-md border-b border-stone-100"
                        : "bg-white/40 backdrop-blur-sm",
                    scrolled ? "py-2" : "py-4",
                )}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                            <span className="font-display text-2xl font-bold text-amber-600">
                                M
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display text-xl font-bold leading-none">
                                Maganlal Chikki
                            </span>
                            <span className="text-[10px] text-amber-600 font-medium tracking-wider uppercase mt-1">
                                Est. 1880 · Lonavala
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                end
                                className={({ isActive }) =>
                                    cn(
                                        "font-medium text-stone-900 transition-colors hover:text-amber-600",
                                        isActive && "text-amber-700 font-bold",
                                    )
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <NavIcon label="Search">
                            <Search className="w-5 h-5" />
                        </NavIcon>
                        <NavIcon
                            label="Wishlist"
                            to="/wishlist"
                            badgeCount={wishlistCount}
                            badgeColor="bg-red-500"
                        >
                            <Heart
                                className={cn(
                                    "w-5 h-5",
                                    wishlistCount > 0 &&
                                        "fill-red-500 text-red-500",
                                )}
                            />
                        </NavIcon>
                        <NavIcon
                            label="Cart"
                            onClick={() => dispatch(openCart())}
                            badgeCount={cartCount}
                        >
                            <ShoppingCart className="w-5 h-5" />
                        </NavIcon>
                        <NavIcon label="Login" to="/login">
                            <User className="w-5 h-5" />
                        </NavIcon>
                        <NavIcon
                            label="Menu"
                            onClick={() => dispatch(openMobileMenu())}
                        >
                            <Menu className="w-6 h-6" />
                        </NavIcon>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => dispatch(closeMobileMenu())}
                    />
                    <div className="relative w-[80%] max-w-sm bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-left">
                        <div className="p-4 border-b border-amber-100 flex items-center justify-between">
                            <span className="font-display text-xl font-bold text-amber-700">
                                Menu
                            </span>
                            <button
                                onClick={() => dispatch(closeMobileMenu())}
                                className="p-2 rounded-full hover:bg-amber-50"
                            >
                                <X className="w-5 h-5 text-stone-700" />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto py-4 px-4 flex flex-col gap-4">
                            {NAV_LINKS.map(({ to, label }) => (
                                <Link
                                    key={to}
                                    to={to}
                                    onClick={() => dispatch(closeMobileMenu())}
                                    className="text-lg font-bold text-stone-900"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                        <div className="p-4 border-t border-amber-100 flex flex-col gap-3">
                            <Link
                                to="/wishlist"
                                onClick={() => dispatch(closeMobileMenu())}
                                className="flex items-center justify-between text-stone-900 font-medium"
                            >
                                <span className="flex items-center gap-2">
                                    <Heart className="w-5 h-5" /> Wishlist
                                </span>
                                <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs font-bold">
                                    {wishlistCount}
                                </span>
                            </Link>
                            <Link
                                to="/login"
                                onClick={() => dispatch(closeMobileMenu())}
                                className="flex items-center gap-2 text-stone-900 font-medium"
                            >
                                <User className="w-5 h-5" /> Login
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
