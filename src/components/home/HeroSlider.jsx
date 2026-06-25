import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { cn } from '../../lib/utils'

const HeroSlider = () => {
    const banners = useSelector((s) => s.products.banners)

    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (banners.length === 0) return
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length)
        }, 4500)
        return () => clearInterval(timer)
    }, [banners.length])

    const goTo = (index) => {
        setCurrent(index)
    }

    if (banners.length === 0) return null

    return (
        <div className="pt-16 md:pt-24 pb-24 bg-stone-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-32">
                    <div>
                        <div className="mb-4 inline-block animate-in fade-in slide-in-from-bottom duration-500">
                            <span className="bg-amber-100 border border-amber-200 text-amber-700 text-sm px-4 py-1.5 rounded-full font-medium tracking-wide">
                                🏆 India's Most Loved Chikki Brand
                            </span>
                        </div>

                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-stone-900 leading-[1.1] mb-4 animate-in fade-in slide-in-from-bottom duration-500">
                            The Taste of<br />
                            <span className="text-amber-600 italic">Lonavala</span>
                        </h1>

                        <p className="text-lg md:text-xl text-stone-800 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-500">
                            Handmade with pure jaggery & roasted nuts. No preservatives. Delivering authentic sweetness since 1880.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom duration-500">
                            <Link to="/shop" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg shadow-amber-600/20 transition-all hover:-translate-y-1 text-lg">
                                Shop Now →
                            </Link>
                            <Link to="/about" className="bg-white hover:bg-stone-50 border border-stone-200 text-stone-900 font-semibold px-10 py-4 rounded-xl transition-all hover:-translate-y-1 text-lg">
                                Our Story
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-stone-800 text-sm font-bold animate-in fade-in slide-in-from-bottom duration-500">
                            <span className="flex items-center gap-2">✓ No Preservatives</span>
                            <span className="flex items-center gap-2">✓ Pure Jaggery</span>
                            <span className="flex items-center gap-2">✓ Handmade</span>
                            <span className="flex items-center gap-2">✓ Since 1880</span>
                        </div>
                    </div>
                </div>

                <div className="relative h-87.5 md:h-137.5 lg:h-162.5 rounded-3xl overflow-hidden shadow-2xl group flex items-center justify-center bg-amber-100">
                    <img
                        key={current}
                        src={banners[current].image}
                        alt="Maganlal Chikki"
                        className="w-full h-full object-cover animate-in fade-in duration-500"
                    />

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2.5">
                        {banners.map((_, idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => goTo(idx)}
                                    className={cn(
                                        'h-1.5 rounded-full transition-all duration-500',
                                        idx === current ? 'w-10 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/60'
                                    )}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSlider

