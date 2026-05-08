import Footer from '../Footer';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="grow">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
};

export default Layout;