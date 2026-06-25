import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen bg-stone-50 pt-24 pb-20 flex items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl border border-stone-100 p-8">
                    <div className="text-center mb-8">
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <span className="font-display text-3xl font-bold text-amber-700">
                                M
                            </span>
                        </div>
                        <h1 className="font-display text-2xl font-bold text-stone-900">
                            Welcome Back
                        </h1>
                        <p className="text-stone-900 mt-2 font-bold">
                            Sign in to access your orders and wishlist
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-bold text-stone-900 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none cursor-not-allowed text-stone-900 font-bold"
                                placeholder="you@example.com"
                                disabled
                            />
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-sm font-bold text-stone-900">
                                    Password
                                </label>
                            </div>
                            <input
                                type="password"
                                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none cursor-not-allowed text-stone-900 font-bold"
                                placeholder="••••••••"
                                disabled
                            />
                        </div>

                        {/* Back to Home Button instead of Sign In */}
                        <Link
                            to="/"
                            className="w-full flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 rounded-xl transition-colors mt-4 shadow-lg shadow-amber-600/20"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
