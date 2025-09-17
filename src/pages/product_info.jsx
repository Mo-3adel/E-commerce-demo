import React from "react";
import { useParams } from "react-router-dom";
import products from "../Hooks/product_details";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseQuantity } from "../redux/cart";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const cartItem = cart.find(product => product.id === product.id);


  if (!product) {
    return <div className="p-8 text-center text-amber-700">Product not found.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sky-900 p-6">
      <div className="bg-amber-100 shadow-amber-100 shadow-lg rounded-xl p-8 max-w-lg text-center">
        <img src={product.image} alt={product.name} className="w-80 h-80 object-cover rounded-lg mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-sky-900 mb-2">{product.name}</h1>
        <p className="mb-4 text-gray-700">{product.fullDescription}</p>
        {product.features && product.features.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-sky-800 mb-3">
              Features:
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <span className="text-amber-700 font-bold text-xl mb-4 block">${product.price}</span>

         <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => dispatch(addToCart(cartItem))}
                  className="bg-sky-900 text-amber-100 px-4 py-2 rounded hover:bg-sky-700"
                >
                  Buy Now
                </button>
                
                {cartItem && cartItem.quantity > 0 && (
                  <button
                    onClick={() => dispatch(decreaseQuantity(cartItem.id))}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700"
                  >
                    -
                  </button>
                  
                )}
                <Link
                  to="/products"
                  className="bg-sky-900 text-amber-100 px-4 py-2 rounded hover:bg-sky-700 inline-block"
                >
                  Back
                </Link>
              </div>
              {cartItem && cartItem.quantity > 0 && (
                <div className="mt-2 text-gray-700">In Cart: {cartItem.quantity}</div>
              )}
        
        
      </div>
    </div>
  );
};

export default ProductDetails;