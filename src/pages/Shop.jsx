import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Filter, X } from "lucide-react";
import BreadCrumb from "../components/ui/BreadCrumb";
import ProductCard from "../components/product/ProductCard";
import EmptyState from "../components/ui/EmptyState";
import ShopSidebar from "../components/shop/ShopSidebar";

const Shop = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const { allProducts, categories } = useSelector((s) => s.products);

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 600]);

    const categoryParam = searchParams.get("category");

    const filteredProducts = useMemo(() => {
        let result = [...allProducts];

        if (categoryParam) {
            result = result.filter((p) => p.category_id === categoryParam);
        }

        result = result.filter((p) => {
            const price = parseFloat(p.price);
            return price >= priceRange[0] && price <= priceRange[1];
        });

        return result;
    }, [allProducts, categoryParam, priceRange]);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Shop", path: "/shop" },
    ];
    if (categoryParam) {
        const cat = categories.find((c) => c.id === categoryParam);
        if (cat)
            breadcrumbs.push({
                label: cat.cat_name,
                path: `/shop?category=${cat.id}`,
            });
    }

    return (
        <>
            <div className="bg-amber-50 pt-24 pb-12 border-b border-amber-100">
                <div className="container mx-auto px-4">
                    <BreadCrumb items={breadcrumbs} />
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">
                        {categoryParam
                            ? categories.find((c) => c.id === categoryParam)
                                    ?.cat_name
                            : "All Products"}
                    </h1>
                    <p className="text-stone-900 max-w-2xl text-lg font-medium">
                        Discover our complete range of authentic Lonavala
                        treats, handmade with love and pure ingredients.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="hidden lg:block w-64 shrink-0">
                        <ShopSidebar
                            categories={categories}
                            activeCategory={categoryParam}
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                        />
                    </div>

                    <div className="lg:hidden flex items-center justify-between mb-4">
                        <button
                            onClick={() => setMobileFiltersOpen(true)}
                            className="flex items-center gap-2 bg-white border border-stone-200 px-4 py-2 rounded-xl font-bold text-stone-900 shadow-sm"
                        >
                            <Filter className="w-4 h-4" /> Filters
                        </button>
                        <span className="text-sm text-stone-900 font-bold">
                            {filteredProducts.length} Products
                        </span>
                    </div>

                    <div className="flex-1">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-6">
                                {filteredProducts.map((p) => {
                                    return (
                                        <div
                                            key={p.id}
                                            className="animate-in zoom-in-95 fade-in duration-300"
                                        >
                                            <ProductCard
                                                product={p}
                                                viewMode="grid"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="mt-12">
                                <EmptyState
                                    icon="SearchX"
                                    title="No products found"
                                    message="Try adjusting your filters or search criteria."
                                    btnLabel="Clear Filters"
                                    onBtn={() => {
                                        setSearchParams({});
                                        setPriceRange([0, 600]);
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {mobileFiltersOpen && (
                <div className="fixed inset-0 z-50 flex lg:hidden">
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
                        onClick={() => setMobileFiltersOpen(false)}
                    />
                    <div className="w-[85%] max-w-sm bg-white h-full shadow-2xl relative z-10 flex flex-col animate-in slide-in-from-left duration-500">
                        <div className="p-4 border-b border-stone-100 flex items-center justify-between">
                            <h2 className="font-display text-xl font-bold text-stone-900">
                                Filters
                            </h2>
                            <button
                                onClick={() => setMobileFiltersOpen(false)}
                                className="p-2"
                            >
                                <X className="w-5 h-5 text-stone-700" />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4">
                            <ShopSidebar
                                categories={categories}
                                activeCategory={categoryParam}
                                priceRange={priceRange}
                                setPriceRange={setPriceRange}
                                isMobile
                            />
                        </div>
                        <div className="p-4 border-t border-stone-100">
                            <button
                                onClick={() => setMobileFiltersOpen(false)}
                                className="w-full bg-amber-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-amber-600/20"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Shop;
