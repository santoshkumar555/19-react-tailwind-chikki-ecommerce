import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { X, ShoppingCart, Trash2, Plus, Minus, ArrowRight, Lock, Truck, RotateCcw } from 'lucide-react'
import { closeCart, updateQuantity, removeFromCart, selectCartItems, selectCartTotal, selectCartOpen } from '../../rtk/slices/cartSlice'
import { formatPrice, truncate } from '../../lib/utils'
import { toast } from 'sonner'

const CartDrawer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isOpen = useSelector(selectCartOpen)
  const items = useSelector(selectCartItems)
  const subtotal = useSelector(selectCartTotal)

  const delivery = subtotal >= 500 ? 0 : 60
  const gst = subtotal * 0.05
  const total = subtotal + delivery + gst

  const handleClose = () => {
    dispatch(closeCart())
  }

  const handleCheckout = () => {
    handleClose()
    navigate('/checkout')
  }

  const handleRemove = (id) => {
    dispatch(removeFromCart(id))
    toast('Item removed from cart')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />
      <div
        className="w-full max-w-[400px] bg-white h-full shadow-2xl flex flex-col relative z-10 animate-in slide-in-from-right duration-500"
      >
        {/* Header */}
        <div className="p-4 border-b border-amber-100 flex items-center justify-between bg-amber-50">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-amber-700" />
            <h2 className="font-display text-xl font-bold text-stone-900">Your Cart</h2>
            <span className="bg-amber-200 text-amber-800 text-xs font-bold px-2 py-0.5 rounded-full">
              {items.length}
            </span>
          </div>
          <button onClick={handleClose} className="p-2 hover:bg-white rounded-full transition-colors">
            <X className="w-5 h-5 text-stone-700" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-10 h-10 text-amber-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-stone-900">Your cart is empty</h3>
              <p className="text-stone-900 text-sm font-medium">Looks like you haven't added any sweets yet.</p>
              <button onClick={() => { handleClose(); navigate('/shop') }} className="bg-amber-600 text-white px-6 py-2.5 rounded-xl font-bold mt-4 shadow-lg shadow-amber-600/20">
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="space-y-4">
                {items.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex gap-4 bg-white border border-stone-100 p-3 rounded-2xl shadow-sm animate-in fade-in slide-in-from-right-4 duration-300"
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0 relative">
                        <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover" onError={(e) => { e.target.style.display='none' }} />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="text-sm font-bold text-stone-900 leading-tight">{truncate(item.title, 35)}</h4>
                            <button onClick={() => handleRemove(item.id)} className="text-stone-500 hover:text-red-500">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-[10px] text-stone-800 uppercase tracking-wider font-bold mt-1">{item.category_name}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center bg-amber-50 rounded-lg border border-amber-100">
                            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))} className="p-1.5 hover:bg-amber-100 rounded-l-lg text-amber-800">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-xs font-bold text-stone-900">{item.quantity}</span>
                            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))} className="p-1.5 hover:bg-amber-100 rounded-r-lg text-amber-800">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="font-mono font-bold text-amber-800">
                            {formatPrice(parseFloat(item.price) * item.quantity)}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-stone-100 bg-white p-4 space-y-4 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-stone-900 font-bold">
                <span>Subtotal</span>
                <span className="font-mono">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-900 font-bold">Delivery</span>
                {delivery === 0 ? (
                  <span className="text-green-800 font-black">🎉 FREE</span>
                ) : (
                  <span className="font-mono text-stone-900 font-bold">{formatPrice(delivery)}</span>
                )}
              </div>
              <div className="flex justify-between text-stone-900 font-bold">
                <span>GST (5%)</span>
                <span className="font-mono">{formatPrice(gst)}</span>
              </div>
              <div className="border-t border-stone-200 pt-2 flex justify-between items-center">
                <span className="font-black text-stone-900 text-lg">Total</span>
                <span className="font-mono text-xl font-black text-amber-800">{formatPrice(total)}</span>
              </div>
            </div>

            <button onClick={handleCheckout} className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-amber-600/20">
              Proceed to Checkout <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-4 text-[10px] text-stone-900 uppercase font-bold">
              <div className="flex items-center gap-1"><Lock className="w-3 h-3" /> Secure</div>
              <div className="flex items-center gap-1"><Truck className="w-3 h-3" /> Fast</div>
              <div className="flex items-center gap-1"><RotateCcw className="w-3 h-3" /> Easy Returns</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartDrawer

