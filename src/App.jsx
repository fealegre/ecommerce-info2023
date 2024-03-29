import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Layout from './components/Layout';
import NoMatch from './components/NoMatch';
import ProductList from './components/ProductList';
import CategoriesList from './components/CategoriesList';
import ProductDetail from './components/ProductDetail';
import CategoryProducts from './components/CategoryProducts';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import './App.css'
import DeleteProduct from './components/DeleteProduct';


function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products/:id" element={<DeleteProduct />} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="categories">
            <Route path=':id/products' element={<CategoryProducts />} />
            <Route path='' element={<CategoriesList />} />
          </Route>
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />          
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
