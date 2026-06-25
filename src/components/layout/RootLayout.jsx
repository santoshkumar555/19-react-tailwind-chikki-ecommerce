import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import BackToTop from "../ui/BackToTop";

const RootLayout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Navbar />
            <main className="min-h-screen animate-in fade-in duration-500">
                <Outlet />
            </main>
            <Footer />
            <CartDrawer />
            <BackToTop />
            <Toaster position="bottom-center" duration={1500} />
        </>
    );
};

export default RootLayout;
