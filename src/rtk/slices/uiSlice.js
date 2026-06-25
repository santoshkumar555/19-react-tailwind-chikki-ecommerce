import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        mobileMenuOpen: false,
        searchOpen: false,
        activeCategory: "all",
        activeSort: "default",
        priceRange: [0, 1000],
        activeTags: [],
        viewMode: "grid",
        perPage: 12,
        currentPage: 1,
    },
    reducers: {
        openMobileMenu: (state) => {
            state.mobileMenuOpen = true;
        },
        closeMobileMenu: (state) => {
            state.mobileMenuOpen = false;
        },
        openSearch: (state) => {
            state.searchOpen = true;
        },
        closeSearch: (state) => {
            state.searchOpen = false;
        },
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload;
            state.currentPage = 1;
        },
        setActiveSort: (state, action) => {
            state.activeSort = action.payload;
        },
        setPriceRange: (state, action) => {
            state.priceRange = action.payload;
            state.currentPage = 1;
        },
        toggleTag: (state, action) => {
            const tag = action.payload;
            const idx = state.activeTags.indexOf(tag);
            if (idx >= 0) {
                state.activeTags.splice(idx, 1);
            } else {
                state.activeTags.push(tag);
            }
            state.currentPage = 1;
        },
        clearAllFilters: (state) => {
            state.activeCategory = "all";
            state.activeSort = "default";
            state.priceRange = [0, 1000];
            state.activeTags = [];
            state.currentPage = 1;
        },
        setViewMode: (state, action) => {
            state.viewMode = action.payload;
        },
        setPerPage: (state, action) => {
            state.perPage = action.payload;
            state.currentPage = 1;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
});

export const {
    openMobileMenu,
    closeMobileMenu,
    openSearch,
    closeSearch,
    setActiveCategory,
    setActiveSort,
    setPriceRange,
    toggleTag,
    clearAllFilters,
    setViewMode,
    setPerPage,
    setCurrentPage,
} = uiSlice.actions;
export default uiSlice.reducer;
