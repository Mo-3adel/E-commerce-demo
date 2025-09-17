import './App.css'
import Topmenu from './components/nav.jsx'
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Privacy from './pages/privacy.jsx';
import Products from './pages/products.jsx';
import MyCart from './components/myCart.jsx';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import ProductDetails from './pages/product_info.jsx';

function App() {
  
  return (
<Provider store={store}>
  <Router>
    <Topmenu/>  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />  } />
      <Route path="/contact" element={<Contact/>} /> 
      <Route path="/privacy" element={<Privacy/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/mycart" element={<MyCart/>} />
      <Route path="/product/:id" element={<ProductDetails />} />
    
    </Routes>
  </Router>
</Provider>

    
    

  )
}

export default App
