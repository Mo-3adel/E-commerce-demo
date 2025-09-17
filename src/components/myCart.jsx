import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart, decreaseQuantity } from "../redux/cart";

const MyCart = () => {
  const cart = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-amber-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8 text-sky-900">My Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg text-gray-700">Your cart is empty.</p>
      ) : (
        <div className="w-full max-w-xl bg-sky-900 text-white rounded-xl shadow-md p-6">
          <ul className="mb-6">
            {cart.map(item => (
              <li key={item.id} className="flex items-center justify-between mb-4">
                <div>
                  <span className="font-semibold">{item.name}</span>
                  <span className="ml-2 text-gray-600">x{item.quantity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-700 font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    className="bg-blue-200 text-white px-2 py-1 rounded hover:bg-blue-700"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    -
                  </button>
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-sky-900">Total:</span>
            <span className="text-xl font-bold text-amber-700">${total.toFixed(2)}</span>
          </div>
          <button
            className="bg-sky-300 text-black px-4 my-2 py-2 rounded hover:bg-amber-100 w-full"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
          <button
              className="bg-sky-300 text-black px-4 my-2 py-2 rounded hover:bg-amber-100 w-full"
              onClick={() => {
                window.alert("Thanks for shopping!")
                dispatch(clearCart())}}
            >
              Confirm Purchase
            </button>
        </div>
      )}
    </div>
  );
};

export default MyCart;