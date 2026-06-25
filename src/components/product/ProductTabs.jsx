import { useState } from "react";
import { cn } from "../../lib/utils";

const ProductTabs = ({ product }) => {
    const [activeTab, setActiveTab] = useState("desc");

    const tabs = [
        { id: "desc", label: "Description" },
        { id: "ingredients", label: "Ingredients & Info" },
    ];

    return (
        <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
            <div className="flex overflow-x-auto border-b border-stone-100 scrollbar-hide">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "px-8 py-5 font-bold text-sm whitespace-nowrap transition-colors relative",
                                isActive
                                    ? "text-amber-700"
                                    : "text-stone-900 hover:text-amber-700",
                            )}
                        >
                            {tab.label}
                            {isActive && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 animate-in fade-in" />
                            )}
                        </button>
                    );
                })}
            </div>

            <div className="p-6 md:p-10 min-h-75">
                {activeTab === "desc" && (
                    <div
                        key="desc"
                        className="prose prose-stone max-w-none animate-in fade-in slide-in-from-bottom-2 duration-300"
                    >
                        <h3 className="font-display text-2xl font-bold mb-4 text-stone-900">
                            About this product
                        </h3>
                        <p className="text-stone-900 font-bold leading-relaxed whitespace-pre-line">
                            {product.full_description}
                        </p>
                    </div>
                )}

                {activeTab === "ingredients" && (
                    <div
                        key="ingredients"
                        className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300"
                    >
                        <div>
                            <h4 className="font-bold text-stone-900 mb-2">
                                Ingredients
                            </h4>
                            <p className="text-stone-900 font-bold">
                                Premium Peanuts, Pure Jaggery, Liquid Glucose,
                                Cardamom.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-stone-900 mb-2">
                                Allergen Information
                            </h4>
                            <p className="text-stone-900 font-bold">
                                Contains Peanuts. Manufactured in a facility
                                that also processes other tree nuts.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-stone-900 mb-2">
                                Storage Instructions
                            </h4>
                            <p className="text-stone-900 font-bold">
                                Store in a cool, dry place. Keep away from
                                direct sunlight. Once opened, store in an
                                airtight container.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-stone-900 mb-2">
                                Shelf Life
                            </h4>
                            <p className="text-stone-900 font-bold">
                                3 Months from the date of manufacturing.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductTabs;
