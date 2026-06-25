import { useMemo } from "react";
import { useSelector } from "react-redux";

import HeroSlider from "../components/home/HeroSlider";
import CategoryGrid from "../components/home/CategoryGrid";
import ExpandableProductsSection from "../components/home/ExpandableProductsSection";

const Home = () => {
    const { allProducts } = useSelector((s) => s.products);

    const chikkiProducts = useMemo(() => {
        return allProducts.filter(
            (product) =>
                product.category_name?.toLowerCase().includes("chikki") ||
                product.category_name?.toLowerCase() === "chikki",
        );
    }, [allProducts]);

    const fudgeProducts = useMemo(() => {
        return allProducts.filter(
            (product) =>
                product.category_name?.toLowerCase().includes("fudge") ||
                product.category_name?.toLowerCase() === "fudge",
        );
    }, [allProducts]);

    const dryFruitRollProducts = useMemo(() => {
        return allProducts.filter(
            (product) =>
                product.category_name?.toLowerCase().includes("dry fruit") ||
                product.category_name?.toLowerCase() === "dry fruit roll" ||
                product.category_name?.toLowerCase() === "dry fruit rolls",
        );
    }, [allProducts]);

    const namkeenProducts = useMemo(() => {
        return allProducts.filter(
            (product) =>
                product.category_name?.toLowerCase().includes("namkeen") ||
                product.category_name?.toLowerCase() === "namkeen" ||
                product.category_name?.toLowerCase().includes("savour") ||
                product.category_name?.toLowerCase() === "savouries",
        );
    }, [allProducts]);

    return (
        <>
            <HeroSlider />
            <div className="py-16 space-y-24">
                <CategoryGrid />
                <ExpandableProductsSection
                    title="Chikki"
                    products={chikkiProducts}
                />
                <ExpandableProductsSection
                    title="Fudge"
                    products={fudgeProducts}
                />
                <ExpandableProductsSection
                    title="Dry Fruit Roll"
                    products={dryFruitRollProducts}
                />
                <ExpandableProductsSection
                    title="Namkeen"
                    products={namkeenProducts}
                />
            </div>
        </>
    );
};

export default Home;
