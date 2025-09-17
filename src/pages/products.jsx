import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, decreaseQuantity } from '../redux/cart';
import { Link } from "react-router-dom";
import products from '../Hooks/product_details';



const Products = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-amber-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8 text-sky-900">Our Products</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {products.map(product => {
          const cartItem = cart.find(item => item.id === product.id);
          return (
            <div key={product.id} className="bg-linear-30 from-cyan-500 to-slate-600 rounded-xl shadow-md p-6 w-72 flex flex-col items-center text-center hover:scale-105 transition-transform hover:shadow-2xl">
              <img src={product.image} alt={product.name} className="w-40 h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold text-sky-900 mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">{product.shortDescription}</p>
              <span className="text-amber-700 font-bold mb-4">${product.price}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="bg-sky-900 text-amber-100 px-4 py-2 rounded hover:bg-sky-700"
                >
                  Buy Now
                </button>
                <Link
                    to={`/products/${product.id}`} 
                    className="bg-sky-900 text-amber-100 px-4 py-2 rounded hover:bg-sky-700 inline-block"
                >
                    Info
                </Link>
                {cartItem && cartItem.quantity > 0 && (
                  <button
                    onClick={() => dispatch(decreaseQuantity(product.id))}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700"
                  >
                    -
                  </button>
                )}
              </div>
              {cartItem && cartItem.quantity > 0 && (
                <div className="mt-2 text-gray-700">In Cart: {cartItem.quantity}</div>
              )}
            </div>
            
          );
          
        })}
      </div>
    </div>
  );
};

export default Products;