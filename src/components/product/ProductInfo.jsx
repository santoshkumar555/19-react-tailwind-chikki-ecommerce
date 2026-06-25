import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Heart,
    ShoppingCart,
    Share2,
    Plus,
    Minus,
    Truck,
    ShieldCheck,
    Leaf,
} from "lucide-react";
import { toast } from "sonner";
import { addToCart, openCart } from "../../rtk/slices/cartSlice";
import {
    toggleWishlist,
    selectIsWishlisted,
} from "../../rtk/slices/wishlistSlice";
import VegDot from "../ui/VegDot";
import PriceTag from "../ui/PriceTag";

const ProductInfo = ({ product }) => {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
    const isWishlisted = useSelector((s) => selectIsWishlisted(s, product.id));

    const originalPrice = parseFloat(product.price) * 1.18;

    const handleAdd = () => {
        dispatch(addToCart({ ...product, quantity: qty }));
        dispatch(openCart());
        toast.success("Added to cart! 🛒");
    };

    const handleWishlist = () => {
        dispatch(toggleWishlist(product));
        if (isWishlisted) toast.info("Removed from wishlist");
        else toast.success("Added to wishlist! ❤️");
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: product.title,
                    text:
                        "Check out this delicious " +
                        product.title +
                        " from Maganlal Chikki!",
                    url: window.location.href,
                })
                .catch(console.error);
        } else {
            navigator.clipboard.writeText(window.location.href);
            toast.success("Link copied to clipboard!");
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <VegDot size="md" />
                    <span className="text-sm text-amber-700 uppercase tracking-wider font-bold">
                        {product.category_name}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleShare}
                        className="p-2 text-stone-600 hover:text-stone-800 bg-stone-100 rounded-full transition-colors"
                    >
                        <Share2 className="w-5 h-5" />
                    </button>
                    <button
                        onClick={handleWishlist}
                        className="p-2 text-stone-600 hover:text-red-500 bg-stone-100 rounded-full transition-colors"
                    >
                        <Heart
                            className={`w-5 h-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`}
                        />
                    </button>
                </div>
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-4 leading-tight">
                {product.title}
            </h1>

            <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-bold text-green-800 bg-green-50 px-2 py-1 rounded">
                    In Stock
                </span>
            </div>

            <div className="mb-8">
                <PriceTag
                    price={product.price}
                    originalPrice={originalPrice}
                    size="lg"
                />
                <p className="text-xs text-stone-900 font-bold mt-1">
                    Inclusive of all taxes
                </p>
            </div>

            <p className="text-stone-900 font-bold text-base leading-relaxed mb-8">
                {product.small_description || product.full_description}
            </p>

            <div className="mt-auto space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center bg-stone-100 rounded-xl border border-stone-200 h-14">
                        <button
                            onClick={() => setQty(Math.max(1, qty - 1))}
                            className="px-5 h-full hover:bg-stone-200 rounded-l-xl text-stone-800 transition-colors"
                        >
                            <Minus className="w-5 h-5" />
                        </button>
                        <span className="w-12 text-center font-bold text-lg text-stone-900">
                            {qty}
                        </span>
                        <button
                            onClick={() => setQty(qty + 1)}
                            className="px-5 h-full hover:bg-stone-200 rounded-r-xl text-stone-800 transition-colors"
                        >
                            <Plus className="w-5 h-5" />
                        </button>
                    </div>

                    <button
                        onClick={handleAdd}
                        className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg h-14 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-amber-600/20"
                    >
                        <ShoppingCart className="w-6 h-6" /> Add to Cart
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-100">
                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                            <Leaf className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-medium text-stone-800">
                            100% Veg
                        </span>
                    </div>
                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-medium text-stone-800">
                            Premium Quality
                        </span>
                    </div>
                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                            <Truck className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-medium text-stone-800">
                            Fast Delivery
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
