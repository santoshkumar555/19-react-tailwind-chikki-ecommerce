import { cn } from "../../lib/utils";

const SectionTitle = ({ title, subtitle, centered, light }) => {
    return (
        <div
            className={cn(
                "mb-8",
                centered && "text-center flex flex-col items-center",
            )}
        >
            <h2
                className={cn(
                    "font-display text-3xl md:text-4xl font-bold mb-4",
                    light ? "text-amber-100" : "text-stone-900",
                )}
            >
                {title}
            </h2>
            <div className="w-14 h-1 bg-amber-500 rounded-full mb-4" />
            {subtitle && (
                <p
                    className={cn(
                        "max-w-2xl text-sm md:text-base font-bold",
                        light ? "text-amber-200/80" : "text-stone-900",
                    )}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;
