import Footer from "../Footer";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="grow">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
};

export default Layout;
