import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    Trash2,
    Plus,
    Minus,
    ArrowRight,
    ShieldCheck,
    Truck,
} from "lucide-react";
import BreadCrumb from "../components/ui/BreadCrumb";
import EmptyState from "../components/ui/EmptyState";
import {
    updateQuantity,
    removeFromCart,
    selectCartItems,
    selectCartTotal,
} from "../rtk/slices/cartSlice";
import { formatPrice } from "../lib/utils";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const items = useSelector(selectCartItems);
    const subtotal = useSelector(selectCartTotal);

    const delivery = subtotal >= 500 ? 0 : 60;
    const gst = subtotal * 0.05;
    const total = subtotal + delivery + gst;

    if (items.length === 0) {
        return (
            <>
                <div className="pt-24 pb-12 container mx-auto px-4 min-h-[60vh] flex flex-col items-center justify-center">
                    <EmptyState
                        icon="ShoppingCart"
                        title="Your cart is empty"
                        message="Looks like you haven't added any delicious treats to your cart yet."
                        btnLabel="Start Shopping"
                        onBtn={() => navigate("/shop")}
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
                            { label: "Shopping Cart", path: "/cart" },
                        ]}
                    />

                    <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-8">
                        Shopping Cart
                    </h1>

                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex-1 space-y-4">
                            <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
                                <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-stone-100 bg-stone-50 text-sm font-bold text-stone-900 uppercase tracking-wider">
                                    <div className="col-span-6">Product</div>
                                    <div className="col-span-2 text-center">
                                        Price
                                    </div>
                                    <div className="col-span-2 text-center">
                                        Quantity
                                    </div>
                                    <div className="col-span-2 text-right">
                                        Total
                                    </div>
                                </div>

                                <div className="divide-y divide-stone-100">
                                    {items.map((item) => {
                                        return (
                                            <div
                                                key={item.id}
                                                className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center animate-in fade-in slide-in-from-left duration-300"
                                            >
                                                {/* Product Info */}
                                                <div className="col-span-1 md:col-span-6 flex gap-4">
                                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                                                        <img
                                                            src={item.images[0]}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                e.target.style.display =
                                                                    "none";
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="flex flex-col justify-center">
                                                        <p className="text-xs text-amber-800 uppercase tracking-wider font-black mb-1">
                                                            {item.category_name}
                                                        </p>
                                                        <Link
                                                            to={`/product/${item.id}`}
                                                            className="font-display text-lg font-bold text-stone-900 hover:text-amber-700 transition-colors leading-tight mb-2"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                        <button
                                                            onClick={() =>
                                                                dispatch(
                                                                    removeFromCart(
                                                                        item.id,
                                                                    ),
                                                                )
                                                            }
                                                            className="text-sm text-stone-800 font-bold hover:text-red-600 flex items-center gap-1 w-fit transition-colors"
                                                        >
                                                            <Trash2 className="w-4 h-4" />{" "}
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="hidden md:block col-span-2 text-center font-mono font-bold text-stone-900">
                                                    {formatPrice(item.price)}
                                                </div>

                                                <div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-center">
                                                    <div className="md:hidden font-mono font-bold text-stone-900">
                                                        {formatPrice(
                                                            item.price,
                                                        )}
                                                    </div>
                                                    <div className="flex items-center bg-stone-100 rounded-xl border border-stone-200">
                                                        <button
                                                            onClick={() =>
                                                                dispatch(
                                                                    updateQuantity(
                                                                        {
                                                                            id: item.id,
                                                                            quantity:
                                                                                item.quantity -
                                                                                1,
                                                                        },
                                                                    ),
                                                                )
                                                            }
                                                            className="p-2 hover:bg-stone-200 rounded-l-xl text-stone-900 transition-colors"
                                                        >
                                                            <Minus className="w-4 h-4" />
                                                        </button>
                                                        <span className="w-8 text-center font-bold text-stone-900">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() =>
                                                                dispatch(
                                                                    updateQuantity(
                                                                        {
                                                                            id: item.id,
                                                                            quantity:
                                                                                item.quantity +
                                                                                1,
                                                                        },
                                                                    ),
                                                                )
                                                            }
                                                            className="p-2 hover:bg-stone-200 rounded-r-xl text-stone-900 transition-colors"
                                                        >
                                                            <Plus className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="col-span-1 md:col-span-2 text-right font-mono text-lg font-bold text-amber-800">
                                                    {formatPrice(
                                                        parseFloat(item.price) *
                                                            item.quantity,
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-100 shrink-0">
                            <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-6 md:p-8 sticky top-24">
                                <h2 className="font-display text-2xl font-bold text-stone-900 mb-6">
                                    Order Summary
                                </h2>

                                <div className="space-y-4 text-stone-900 mb-6">
                                    <div className="flex justify-between font-bold">
                                        <span>
                                            Subtotal ({items.length} items)
                                        </span>
                                        <span className="font-mono font-black">
                                            {formatPrice(subtotal)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between font-bold">
                                        <span>GST (5%)</span>
                                        <span className="font-mono font-black">
                                            {formatPrice(gst)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between font-bold">
                                        <span>Delivery Charges</span>
                                        {delivery === 0 ? (
                                            <span className="text-green-800 font-black">
                                                FREE
                                            </span>
                                        ) : (
                                            <span className="font-mono font-black">
                                                {formatPrice(delivery)}
                                            </span>
                                        )}
                                    </div>
                                    {delivery > 0 && (
                                        <div className="text-xs text-amber-900 bg-amber-50 p-2 rounded-lg text-center font-bold">
                                            Add {formatPrice(500 - subtotal)}{" "}
                                            more for FREE delivery!
                                        </div>
                                    )}
                                </div>

                                <div className="border-t border-stone-200 pt-6 mb-8">
                                    <div className="flex justify-between items-end">
                                        <span className="text-lg font-black text-stone-900">
                                            Total Amount
                                        </span>
                                        <span className="font-mono text-3xl font-black text-amber-800">
                                            {formatPrice(total)}
                                        </span>
                                    </div>
                                    <p className="text-xs text-stone-800 text-right mt-1 font-bold">
                                        Inclusive of all taxes
                                    </p>
                                </div>

                                <button
                                    onClick={() => navigate("/checkout")}
                                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-amber-600/20 mb-6"
                                >
                                    Proceed to Checkout{" "}
                                    <ArrowRight className="w-5 h-5" />
                                </button>

                                <div className="flex flex-col gap-3 text-sm text-stone-900 font-bold">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="w-5 h-5 text-green-700" />{" "}
                                        100% Secure Payments
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Truck className="w-5 h-5 text-amber-700" />{" "}
                                        Fast Delivery across India
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
