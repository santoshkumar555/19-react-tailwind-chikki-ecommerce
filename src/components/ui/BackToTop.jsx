import { ArrowUp } from "lucide-react";
import { useScrollY } from "../../hooks/useScrollY";

const BackToTop = () => {
    const { scrollY } = useScrollY();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {scrollY > 300 && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-40 bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 animate-in zoom-in fade-in duration-300"
                >
                    <ArrowUp className="w-5 h-5" />
                </button>
            )}
        </>
    );
};

export default BackToTop;
