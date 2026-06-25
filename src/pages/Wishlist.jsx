import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Trash2 } from "lucide-react";
import BreadCrumb from "../components/ui/BreadCrumb";
import EmptyState from "../components/ui/EmptyState";
import ProductCard from "../components/product/ProductCard";
import {
    selectWishlistItems,
    clearWishlist,
} from "../rtk/slices/wishlistSlice";

const Wishlist = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectWishlistItems);

    if (items.length === 0) {
        return (
            <>
                <div className="pt-24 pb-12 container mx-auto px-4 min-h-[60vh] flex flex-col items-center justify-center">
                    <EmptyState
                        icon="Heart"
                        title="Your wishlist is empty"
                        message="Save your favorite Lonavala treats here to buy them later."
                        btnLabel="Explore Products"
                        onBtn={() => {
                            window.location.href = "/shop";
                        }}
                    />
                </div>
            </>
        );
    }

    return (
        <>
            <div className="bg-stone-50 pt-24 pb-20 min-h-screen">
                <div className="container mx-auto px-4">
                    <BreadCrumb
                        items={[
                            { label: "Home", path: "/" },
                            { label: "My Wishlist", path: "/wishlist" },
                        ]}
                    />

                    <div className="flex items-center justify-between mb-8">
                        <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900">
                            My Wishlist
                        </h1>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => dispatch(clearWishlist())}
                                className="flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-red-50 text-stone-900 hover:text-red-600 rounded-xl font-bold text-sm transition-colors"
                            >
                                <Trash2 className="w-4 h-4" /> Clear All
                            </button>
                            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold">
                                {items.length} Items
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {items.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className="animate-in zoom-in-95 fade-in duration-300"
                                >
                                    <ProductCard product={item} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Wishlist;
