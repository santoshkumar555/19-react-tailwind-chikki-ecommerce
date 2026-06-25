import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SectionTitle from "../ui/SectionTitle";

const CategoryGrid = () => {
    const categories = useSelector((s) => s.products.categories);

    if (categories.length === 0) return null;

    return (
        <section className="container mx-auto px-4">
            <SectionTitle
                title="Shop by Category"
                subtitle="Explore our handmade collection of authentic Lonavala treats"
                centered
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {categories.map((cat) => {
                    return (
                        <div
                            key={cat.id}
                            className="animate-in fade-in slide-in-from-bottom duration-500"
                        >
                            <Link
                                to={`/shop?category=${cat.id}`}
                                className="block relative aspect-square rounded-2xl overflow-hidden group shadow-md"
                            >
                                <img
                                    src={cat.image}
                                    alt={cat.cat_name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                                    <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                                        {cat.cat_name}
                                    </h3>
                                    <p className="text-amber-300 text-xs md:text-sm font-medium">
                                        {cat.no_of_post} Products
                                    </p>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default CategoryGrid;
