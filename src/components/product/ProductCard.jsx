import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Heart, Eye, ShoppingCart, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "../../lib/utils";
import { addToCart, openCart } from "../../rtk/slices/cartSlice";
import {
    toggleWishlist,
    selectIsWishlisted,
} from "../../rtk/slices/wishlistSlice";
import VegDot from "../ui/VegDot";
import PriceTag from "../ui/PriceTag";
import ProductModal from "./ProductModal";

const WishlistButton = ({ product }) => {
    const dispatch = useDispatch();
    const isWishlisted = useSelector((s) => selectIsWishlisted(s, product.id));

    const handleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(toggleWishlist(product));
        if (isWishlisted) {
            toast.info("Removed from wishlist");
        } else {
            toast.success("Added to wishlist! ❤️");
        }
    };

    return (
        <button
            onClick={handleWishlist}
            className="absolute top-2 right-2 z-30 bg-white/90 rounded-full p-1.5 shadow-md hover:shadow-lg transition-all hover:scale-110 active:scale-95"
        >
            <Heart
                className={cn(
                    "w-5 h-5 transition-all duration-200",
                    isWishlisted
                        ? "fill-red-500 text-red-500"
                        : "text-stone-600 hover:text-red-400",
                )}
            />
        </button>
    );
};

const AddToCartButton = ({ product }) => {
    const dispatch = useDispatch();
    const [added, setAdded] = useState(false);

    const handleAdd = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addToCart(product));
        dispatch(openCart());
        toast.success("Added to cart! 🛒");
        setAdded(true);
        setTimeout(() => {
            setAdded(false);
        }, 1500);
    };

    return (
        <button
            onClick={handleAdd}
            className={cn(
                "w-full text-white font-semibold text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 active:scale-95",
                added
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-amber-600 hover:bg-amber-700",
            )}
        >
            {added ? (
                <>
                    <CheckCircle2 className="w-4 h-4" /> Added!
                </>
            ) : (
                <>
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                </>
            )}
        </button>
    );
};

const ProductCard = ({ product, viewMode = "grid" }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [quickViewOpen, setQuickViewOpen] = useState(false);
    const [imgError, setImgError] = useState(false);

    const originalPrice = parseFloat(product.price) * 1.18;

    if (viewMode === "list") {
        return (
            <div className="bg-white rounded-2xl overflow-hidden border border-amber-100 flex flex-col sm:flex-row gap-4 p-4 hover:shadow-lg transition-shadow">
                <div className="w-full sm:w-32 h-32 bg-amber-50 rounded-xl overflow-hidden relative shrink-0">
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = "none";
                        }}
                    />
                    <WishlistButton product={product} />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <VegDot size="sm" />
                            <span className="text-xs text-amber-900 uppercase tracking-wide font-bold">
                                {product.category_name}
                            </span>
                        </div>
                        <Link to={`/product/${product.id}`}>
                            <h3 className="font-display text-lg font-bold text-stone-950 hover:text-amber-700 transition-colors">
                                {product.title}
                            </h3>
                        </Link>
                        <p className="text-sm text-stone-900 mt-1 line-clamp-2">
                            {product.small_description}
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <PriceTag
                            price={product.price}
                            originalPrice={originalPrice}
                            size="md"
                        />
                        <div className="w-32">
                            <AddToCartButton product={product} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div
                onMouseEnter={() => {
                    setIsHovered(true);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                }}
                className="relative bg-white rounded-2xl overflow-hidden border border-amber-100 group flex flex-col h-full hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
            >
                <div className="relative aspect-square bg-amber-50 overflow-hidden">
                    {!imgError && product.images?.[0] ? (
                        <img
                            src={product.images[0]}
                            alt={product.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        <div className="w-full h-full bg-stone-200 flex items-center justify-center">
                            <span className="text-stone-400 font-bold text-sm">
                                No Image
                            </span>
                        </div>
                    )}

                    <WishlistButton product={product} />

                    {isHovered && (
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setQuickViewOpen(true);
                            }}
                            className="absolute inset-0 flex items-center justify-center bg-black/20 z-20 animate-in fade-in duration-200"
                        >
                            <span className="bg-white text-amber-800 font-semibold text-sm px-5 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-amber-50 transition-colors">
                                <Eye className="w-4 h-4" /> Quick View
                            </span>
                        </button>
                    )}
                </div>

                <div className="p-3 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <VegDot size="sm" />
                        <span className="text-xs text-amber-900 uppercase tracking-wide font-bold">
                            {product.category_name}
                        </span>
                    </div>

                    <Link to={`/product/${product.id}`} className="flex-1">
                        <h3 className="font-display text-sm font-bold text-stone-950 line-clamp-2 leading-snug hover:text-amber-700 transition-colors mb-1.5">
                            {product.title}
                        </h3>
                    </Link>

                    <div className="mt-2 mb-3">
                        <PriceTag
                            price={product.price}
                            originalPrice={originalPrice}
                            size="md"
                        />
                    </div>

                    <div className="mt-auto">
                        <AddToCartButton product={product} />
                    </div>
                </div>
            </div>

            <ProductModal
                product={product}
                isOpen={quickViewOpen}
                onClose={() => {
                    setQuickViewOpen(false);
                }}
            />
        </>
    );
};

export default ProductCard;
