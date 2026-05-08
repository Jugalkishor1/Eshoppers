import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <div>
        Footer
      </div>
    </main>
  );
};

export default Layout;