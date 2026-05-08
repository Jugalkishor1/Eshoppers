import { Route, Routes as Router} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Products from './pages/Products';

const Routes = () => {
    return (
      <Router>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Router>
    );
}

export default Routes;
