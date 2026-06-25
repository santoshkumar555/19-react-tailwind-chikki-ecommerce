import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";

const NotFound = () => {
    return (
        <>
            <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
                <div className="font-display text-9xl font-bold text-amber-100 dark:text-amber-900/30 mb-4">
                    404
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 dark:text-amber-100 mb-4">
                    Page Not Found
                </h1>
                <p className="text-stone-600 dark:text-stone-400 max-w-md mb-8">
                    Oops! The page you are looking for seems to have gone
                    missing, just like the last piece of chikki in the box.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        to="/"
                        className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                        <Home className="w-5 h-5" /> Back to Home
                    </Link>
                    <Link
                        to="/shop"
                        className="bg-stone-100 dark:bg-dark-surface hover:bg-stone-200 dark:hover:bg-dark-card text-stone-800 dark:text-amber-100 font-semibold px-8 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                        <Search className="w-5 h-5" /> Browse Products
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;
