import { cn } from "../../lib/utils";

const VegDot = ({ size = "sm" }) => {
    const sizes = {
        sm: "w-4 h-4 p-0.5",
        md: "w-5 h-5 p-1",
        lg: "w-6 h-6 p-1",
    };
    const innerSizes = {
        sm: "w-1.5 h-1.5",
        md: "w-2 h-2",
        lg: "w-2.5 h-2.5",
    };

    return (
        <div
            className={cn(
                "border-2 border-green-600 flex items-center justify-center rounded-sm",
                sizes[size],
            )}
        >
            <div
                className={cn("bg-green-600 rounded-full", innerSizes[size])}
            />
        </div>
    );
};

export default VegDot;
