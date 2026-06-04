import { Route, Routes as Router} from 'react-router-dom';
import Layout from './components/Layout';
import Categories from './pages/Categories';
import Products from './pages/Products';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';

const Routes = () => {
    return (
      <Router>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories/:categoryId/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Router>
    );
}

export default Routes;
