import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import BreadCrumb from "../components/ui/BreadCrumb";
import {
    selectCartItems,
    selectCartTotal,
    clearCart,
} from "../rtk/slices/cartSlice";
import { formatPrice } from "../lib/utils";

const Checkout = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectCartItems);
    const subtotal = useSelector(selectCartTotal);

    const handleClearCart = () => {
        dispatch(clearCart());
        toast.error("Cart cleared successfully");
    };

    if (items.length === 0) {
        return (
            <>
                <div className="pt-24 pb-20 min-h-screen flex flex-col items-center justify-center">
                    <p className="text-stone-900 font-bold text-lg mb-6">
                        Your cart is empty
                    </p>
                    <Link
                        to="/"
                        className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-3 rounded-xl transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="bg-stone-50 pt-24 pb-20 min-h-screen">
                <div className="container mx-auto px-4 max-w-2xl">
                    <BreadCrumb
                        items={[
                            { label: "Home", path: "/" },
                            { label: "Checkout", path: "/checkout" },
                        ]}
                    />

                    <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-8 text-center">
                        Order Summary
                    </h1>

                    {/* Order Summary Card */}
                    <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-6 md:p-8">
                        {/* Items List */}
                        <div className="space-y-4 mb-8 max-h-75 overflow-y-auto pr-2">
                            {items.map((item) => {
                                return (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-20 h-20 rounded-xl bg-stone-100 overflow-hidden shrink-0 relative">
                                            <img
                                                src={item.images[0]}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.style.display =
                                                        "none";
                                                }}
                                            />
                                            <div className="absolute -top-2 -right-2 bg-stone-800 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-white">
                                                {item.quantity}
                                            </div>
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center">
                                            <h4 className="text-sm font-bold text-stone-900 line-clamp-2 leading-tight">
                                                {item.title}
                                            </h4>
                                            <div className="font-mono font-bold text-amber-700 mt-1">
                                                {formatPrice(item.price)} x{" "}
                                                {item.quantity}
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="font-mono font-bold text-amber-800">
                                                {formatPrice(
                                                    parseFloat(item.price) *
                                                        item.quantity,
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Total */}
                        <div className="border-t border-stone-200 pt-6">
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-xl font-black text-stone-900">
                                    Total Amount
                                </span>
                                <span className="font-mono text-2xl font-black text-amber-800">
                                    {formatPrice(subtotal)}
                                </span>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/"
                                    className="flex-1 bg-stone-800 hover:bg-stone-900 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-stone-800/20"
                                >
                                    Back to Home
                                </Link>
                                <button
                                    onClick={handleClearCart}
                                    className="flex-1 bg-white border-2 border-red-500 text-red-500 hover:bg-red-50 transition-colors font-bold py-4 rounded-xl flex items-center justify-center gap-2"
                                >
                                    <Trash2 className="w-5 h-5" /> Clear Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
