
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Routes, Route} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Login from './component/buttons/Login';
import Inscription from './component/buttons/Inscription';
import HomeAdmin from './component/admin/HomeAdmin';
import AddProduct from './component/admin/AddProduct';
import ListUsers from './component/admin/ListUsers';
function App() {
  return (
    <>
     <Navbar />
      <Routes>
      
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<Product/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/admin" element={< HomeAdmin/> } />
          <Route path="/admin/addProduct" element={<AddProduct /> } />
          <Route path="/admin/listUsers" element={<ListUsers /> } /> 
      </Routes>
      
    </>
  );
}

export default App;