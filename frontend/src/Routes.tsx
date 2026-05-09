import { Route, Routes as Router} from 'react-router-dom';
import Layout from './components/Layout';
import Categories from './pages/Categories';
import Products from './pages/Products';
import Home from './pages/Home';

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
