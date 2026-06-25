import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../lib/api";
import {
    setBanners,
    setCategories,
    setAllProducts,
} from "../rtk/slices/productsSlice";

const useAppInit = () => {
    const dispatch = useDispatch();
    const { allProducts } = useSelector((s) => s.products);

    useEffect(() => {
        if (allProducts.length > 0) return;

        const loadData = async () => {
            try {
                // 1. Get categories
                const { data: categories = [] } =
                    await api.get("category_list");
                const cats = categories.map((c) => ({
                    ...c,
                    image: c.cat_image,
                }));
                dispatch(setCategories(cats));

                // 2. Get products for each category
                const results = await Promise.allSettled(
                    cats.map((cat) =>
                        api.get(`product_list?category_id=${cat.id}`),
                    ),
                );

                const products = results.flatMap((res, i) => {
                    if (res.status !== "fulfilled" || !res.value.data)
                        return [];
                    return res.value.data.map((p) => ({
                        ...p,
                        category_id: cats[i].id,
                        category_name: cats[i].cat_name,
                    }));
                });

                dispatch(setAllProducts(products));

                // 3. Get banners
                const { data: banners } = await api.get("home_image_gallery");
                dispatch(setBanners(banners));
            } catch (err) {
                console.warn("Failed to load data:", err.message);
            }
        };

        loadData();
    }, [allProducts.length, dispatch]);
};

export default useAppInit;
