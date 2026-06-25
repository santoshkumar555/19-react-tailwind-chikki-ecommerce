import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProductCard from '../product/ProductCard';

const ExpandableProductsSection = ({ title, products }) => {
    const [showMore, setShowMore] = useState(false);

    const displayedProducts = showMore
        ? products
        : products.slice(0, Math.min(4, products.length));

    const showButton = products.length > 4;

    return (
        <section className="container mx-auto px-4">
            <SectionTitle title={title} />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {displayedProducts.map((p) => {
                    return (
                        <div
                            key={p.id}
                            className="animate-in fade-in slide-in-from-bottom duration-500"
                        >
                            <ProductCard product={p} />
                        </div>
                    );
                })}
            </div>

            {showButton && (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="flex items-center gap-2 text-amber-700 font-bold hover:text-amber-800 transition-colors pb-2"
                    >
                        {showMore ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            )}
        </section>
    );
};

export default ExpandableProductsSection;