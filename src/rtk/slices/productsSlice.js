import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        allProducts: [],
        categories: [],
        banners: [],
        gallery: [],
        aboutData: null,
        loading: false,
        error: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setAllProducts: (state, action) => {
            state.allProducts = action.payload;
        },
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setBanners: (state, action) => {
            state.banners = action.payload;
        },
        setGallery: (state, action) => {
            state.gallery = action.payload;
        },
        setAboutData: (state, action) => {
            state.aboutData = action.payload[0] || action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const {
    setLoading,
    setAllProducts,
    setCategories,
    setBanners,
    setGallery,
    setAboutData,
    setError,
} = productsSlice.actions;
export default productsSlice.reducer;

export const selectFilteredProducts = (state) => {
    const ui = state.ui;
    let products = state.products.allProducts.slice();

    if (ui.activeCategory !== "all") {
        products = products.filter(
            (p) => String(p.category_id) === String(ui.activeCategory),
        );
    }

    products = products.filter((p) => {
        const price = parseFloat(p.price);
        return price >= ui.priceRange[0] && price <= ui.priceRange[1];
    });

    if (ui.activeSort === "price-asc")
        products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    if (ui.activeSort === "price-desc")
        products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    if (ui.activeSort === "bestseller")
        products.sort(
            (a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0),
        );

    return products;
};
