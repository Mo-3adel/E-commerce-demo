import { createSlice } from '@reduxjs/toolkit';

// Load cart from localStorage
const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
const savedTotal = Number(localStorage.getItem('cartTotal')) || 0;

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: savedCart,
    total: savedTotal,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      localStorage.setItem('cartTotal', state.total);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      localStorage.setItem('cartTotal', state.total);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      localStorage.setItem('cartTotal', state.total);
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== action.payload);
        }
      }
      state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      localStorage.setItem('cartTotal', state.total);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;