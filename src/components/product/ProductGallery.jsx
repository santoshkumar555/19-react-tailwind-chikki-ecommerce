import { useState } from "react";
import { cn } from "../../lib/utils";

const ProductGallery = ({ images, title }) => {
    const [mainImg, setMainImg] = useState(0);
    const [imgError, setImgError] = useState(false);

    if (!images || images.length === 0) {
        return (
            <div className="aspect-square rounded-2xl overflow-hidden relative bg-stone-200 flex items-center justify-center">
                <span className="text-stone-400 font-bold">No Image</span>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden relative bg-stone-100">
                {!imgError && images[mainImg] ? (
                    <img
                        key={mainImg}
                        src={images[mainImg]}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover animate-in fade-in z-10 duration-300"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 z-10 bg-stone-200 flex items-center justify-center">
                        <span className="text-stone-400 font-bold">
                            No Image
                        </span>
                    </div>
                )}
            </div>

            {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {images.map((img, i) => {
                        return (
                            <button
                                key={i}
                                onClick={() => {
                                    setMainImg(i);
                                    setImgError(false);
                                }}
                                className={cn(
                                    "w-20 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all",
                                    mainImg === i
                                        ? "border-amber-500 shadow-md"
                                        : "border-transparent opacity-60 hover:opacity-100",
                                )}
                            >
                                <img
                                    src={img}
                                    alt={`${title} ${i + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default ProductGallery;
