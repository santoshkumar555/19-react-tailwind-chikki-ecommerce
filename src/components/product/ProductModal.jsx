import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { X, ShoppingCart, Plus, Minus } from "lucide-react";
import { toast } from "sonner";
import * as Dialog from "@radix-ui/react-dialog";
import { addToCart, openCart } from "../../rtk/slices/cartSlice";
import VegDot from "../ui/VegDot";
import PriceTag from "../ui/PriceTag";

const ProductModal = ({ product, isOpen, onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [qty, setQty] = useState(1);
    const [imgError, setImgError] = useState(false);

    if (!product) return null;

    const handleAdd = () => {
        dispatch(addToCart({ ...product, quantity: qty }));
        dispatch(openCart());
        toast.success("Added to cart! 🛒");
        onClose();
    };

    const handleViewFull = () => {
        onClose();
        navigate("/product/" + product.id);
    };

    return (
        <Dialog.Root
            open={isOpen}
            onOpenChange={(open) => {
                if (!open) onClose();
            }}
        >
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in" />
                <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-4xl bg-white rounded-4xl shadow-2xl z-50 overflow-hidden animate-in zoom-in-95 duration-300">
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 z-20 p-2 bg-white/90 backdrop-blur-md rounded-full hover:bg-amber-50 text-stone-900 transition-all hover:rotate-90 shadow-sm border border-stone-100"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="flex flex-col md:flex-row h-full max-h-[85vh] overflow-y-auto md:overflow-hidden">
                        <div className="w-full md:w-1/2 bg-stone-50 relative aspect-4/3 md:aspect-auto">
                            {!imgError && product.images?.[0] ? (
                                <img
                                    src={product.images[0]}
                                    alt={product.title}
                                    className="absolute inset-0 w-full h-full object-cover z-10"
                                    onError={() => setImgError(true)}
                                />
                            ) : (
                                <div className="absolute inset-0 z-10 bg-stone-200 flex items-center justify-center">
                                    <span className="text-stone-400 font-bold">
                                        No Image
                                    </span>
                                </div>
                            )}
                            <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-black/5 to-transparent z-20" />
                        </div>

                        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-4">
                                <VegDot size="sm" />
                                <span className="text-xs text-amber-700 uppercase tracking-[0.2em] font-black">
                                    {product.category_name}
                                </span>
                            </div>

                            <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-2 leading-tight">
                                {product.title}
                            </h2>

                            <div className="mb-6">
                                <PriceTag
                                    price={product.price}
                                    originalPrice={
                                        parseFloat(product.price) * 1.18
                                    }
                                    size="lg"
                                />
                            </div>

                            <div className="prose prose-stone mb-8">
                                <p className="text-stone-600 text-sm md:text-base leading-relaxed line-clamp-4 md:line-clamp-6">
                                    {product.small_description ||
                                        product.full_description}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex flex-wrap items-center gap-6">
                                    <div className="flex items-center bg-stone-50 rounded-xl border border-stone-200 p-1">
                                        <button
                                            onClick={() =>
                                                setQty(Math.max(1, qty - 1))
                                            }
                                            className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-stone-600 transition-all active:scale-90"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="w-10 text-center font-bold text-stone-900">
                                            {qty}
                                        </span>
                                        <button
                                            onClick={() => setQty(qty + 1)}
                                            className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-stone-600 transition-all active:scale-90"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <button
                                        onClick={handleAdd}
                                        className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 px-8 rounded-xl flex items-center justify-center gap-3 transition-all hover:shadow-lg hover:shadow-amber-600/20 active:scale-[0.98]"
                                    >
                                        <ShoppingCart className="w-5 h-5" /> Add
                                        to Cart
                                    </button>
                                </div>

                                <button
                                    onClick={handleViewFull}
                                    className="group w-full flex items-center justify-center gap-2 text-sm font-bold text-stone-500 hover:text-amber-700 transition-colors"
                                >
                                    <span>View Product Details</span>
                                    <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
                                </button>
                            </div>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default ProductModal;
