import { Link, useSearchParams } from "react-router-dom";
import { cn } from "../../lib/utils";

const ShopSidebar = ({
    categories,
    activeCategory,
    priceRange,
    setPriceRange,
}) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleCategory = (id) => {
        if (id === "all") {
            searchParams.delete("category");
        } else {
            searchParams.set("category", id);
        }
        setSearchParams(searchParams);
    };

    return (
        <div className="space-y-8">
            <div>
                <h3 className="font-display text-lg font-bold text-stone-900 mb-4">
                    Categories
                </h3>
                <ul className="space-y-2">
                    <li>
                        <button
                            onClick={() => {
                                handleCategory("all");
                            }}
                            className={cn(
                                "w-full text-left px-3 py-2 rounded-lg text-sm font-bold transition-colors",
                                !activeCategory
                                    ? "bg-amber-100 text-amber-900"
                                    : "text-stone-800 hover:bg-stone-50",
                            )}
                        >
                            All Products
                        </button>
                    </li>
                    {categories.map((cat) => {
                        const isActive = activeCategory === cat.id;
                        return (
                            <li key={cat.id}>
                                <button
                                    onClick={() => {
                                        handleCategory(cat.id);
                                    }}
                                    className={cn(
                                        "w-full text-left px-3 py-2 rounded-lg text-sm font-bold transition-colors flex items-center justify-between",
                                        isActive
                                            ? "bg-amber-100 text-amber-900"
                                            : "text-stone-800 hover:bg-stone-50",
                                    )}
                                >
                                    <span>{cat.cat_name}</span>
                                    <span className="text-xs opacity-80 bg-white/50 px-2 py-0.5 rounded-full">
                                        {cat.no_of_post}
                                    </span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div>
                <h3 className="font-display text-lg font-bold text-stone-900 mb-4">
                    Price Range
                </h3>
                <div className="px-2">
                    <input
                        type="range"
                        min="0"
                        max="600"
                        step="50"
                        value={priceRange[1]}
                        onChange={(e) => {
                            setPriceRange([0, parseInt(e.target.value)]);
                        }}
                        className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                    />
                    <div className="flex items-center justify-between mt-4 text-sm font-bold text-stone-800">
                        <span>₹0</span>
                        <span>Up to ₹{priceRange[1]}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopSidebar;
