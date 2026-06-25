import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: { items: [] },
    reducers: {
        toggleWishlist: (state, action) => {
            const product = action.payload;
            const idx = state.items.findIndex(
                (i) => String(i.id) === String(product.id),
            );
            if (idx >= 0) {
                state.items.splice(idx, 1);
            } else {
                state.items.push(product);
            }
        },
        removeFromWishlist: (state, action) => {
            state.items = state.items.filter(
                (i) => String(i.id) !== String(action.payload),
            );
        },
        clearWishlist: (state) => {
            state.items = [];
        },
    },
});

export const { toggleWishlist, removeFromWishlist, clearWishlist } =
    wishlistSlice.actions;
export default wishlistSlice.reducer;

export const selectWishlistItems = (state) => state.wishlist.items;
export const selectWishlistCount = (state) => state.wishlist.items.length;
export const selectIsWishlisted = (state, id) =>
    state.wishlist.items.some((i) => String(i.id) === String(id));
