import * as Icons from "lucide-react";

const EmptyState = ({ icon, title, message, btnLabel, onBtn }) => {
    const Icon = Icons[icon] || Icons.HelpCircle;

    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Icon className="w-10 h-10 text-amber-700" />
            </div>
            <h3 className="font-display text-2xl font-bold text-stone-900 mb-2">
                {title}
            </h3>
            <p className="text-stone-800 font-medium max-w-md mb-8">
                {message}
            </p>
            {btnLabel && onBtn && (
                <button
                    onClick={onBtn}
                    className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
                >
                    {btnLabel}
                </button>
            )}
        </div>
    );
};

export default EmptyState;
