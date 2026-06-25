import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        isOpen: false,
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existing = state.items.find((i) => i.id === product.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((i) => i.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
                if (item.quantity <= 0) {
                    state.items = state.items.filter(
                        (i) => i.id !== action.payload.id,
                    );
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
        openCart: (state) => {
            state.isOpen = true;
        },
        closeCart: (state) => {
            state.isOpen = false;
        },
        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
    state.cart.items.reduce((s, i) => s + i.quantity, 0);
export const selectCartTotal = (state) =>
    state.cart.items.reduce((s, i) => s + parseFloat(i.price) * i.quantity, 0);
export const selectCartOpen = (state) => state.cart.isOpen;
