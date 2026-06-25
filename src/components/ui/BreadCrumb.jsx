import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const BreadCrumb = ({ items, theme = "light" }) => {
    const isDark = theme === "dark";

    return (
        <nav className="flex items-center gap-2 text-sm mb-6 overflow-x-auto whitespace-nowrap pb-2 justify-center md:justify-start">
            {items.map((item, index) => {
                const isLast = index === items.length - 1;
                return (
                    <div key={index} className="flex items-center gap-2">
                        {isLast ? (
                            <span
                                className={
                                    isDark
                                        ? "text-amber-300 font-black"
                                        : "text-amber-900 font-black"
                                }
                            >
                                {item.label}
                            </span>
                        ) : (
                            <>
                                <Link
                                    to={item.path}
                                    className={
                                        isDark
                                            ? "text-stone-300 hover:text-white transition-colors font-bold"
                                            : "text-stone-900 hover:text-amber-700 transition-colors font-bold"
                                    }
                                >
                                    {item.label}
                                </Link>
                                <ChevronRight
                                    className={
                                        isDark
                                            ? "w-4 h-4 text-stone-300"
                                            : "w-4 h-4 text-stone-900"
                                    }
                                />
                            </>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};

export default BreadCrumb;
