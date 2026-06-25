import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import uiReducer from "./slices/uiSlice";
import productsReducer from "./slices/productsSlice";

const loadState = () => {
    try {
        return {
            cart: {
                items: JSON.parse(localStorage.getItem("mc_cart") || "[]"),
                isOpen: false,
            },
            wishlist: {
                items: JSON.parse(localStorage.getItem("mc_wishlist") || "[]"),
            },
            auth: JSON.parse(localStorage.getItem("mc_auth") || "null") || {
                user: null,
                isLoggedIn: false,
                token: null,
                loading: false,
            },
        };
    } catch {
        return undefined;
    }
};

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
        ui: uiReducer,
        products: productsReducer,
    },
    preloadedState: loadState(),
});

store.subscribe(() => {
    const s = store.getState();
    try {
        localStorage.setItem("mc_cart", JSON.stringify(s.cart.items));
        localStorage.setItem("mc_wishlist", JSON.stringify(s.wishlist.items));
        localStorage.setItem("mc_auth", JSON.stringify(s.auth));
    } catch {
        return undefined;
    }
});
