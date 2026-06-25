import { formatPrice, cn } from "../../lib/utils";

const PriceTag = ({ price, originalPrice, size = "md" }) => {
    const p = parseFloat(price);
    const op = originalPrice ? parseFloat(originalPrice) : null;

    const sizes = {
        sm: "text-sm",
        md: "text-base",
        lg: "text-2xl",
    };

    const discount = op && op > p ? Math.round(((op - p) / op) * 100) : 0;

    return (
        <div className="flex items-center gap-2 flex-wrap">
            <span
                className={cn(
                    "font-mono font-bold text-amber-900",
                    sizes[size],
                )}
            >
                {formatPrice(p)}
            </span>
            {op && op > p && (
                <>
                    <span
                        className={cn(
                            "font-mono line-through text-stone-800",
                            size === "lg" ? "text-lg" : "text-xs",
                        )}
                    >
                        {formatPrice(op)}
                    </span>
                    <span className="bg-red-100 text-red-800 text-[10px] font-bold px-1.5 py-0.5 rounded">
                        {discount}% OFF
                    </span>
                </>
            )}
        </div>
    );
};

export default PriceTag;
