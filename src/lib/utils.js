import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};

export const formatPrice = (price) => {
    const num = parseFloat(price);
    return "₹" + num.toLocaleString("en-IN");
};

export const truncate = (str, n) => {
    if (str.length <= n) return str;
    return str.slice(0, n) + "...";
};
