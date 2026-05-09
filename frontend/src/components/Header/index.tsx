import { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import useCartStore from '../../store/cartStore';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const totalCartItems = useCartStore((state) => state.getTotalItems())

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        
        <div className="flex items-center justify-between">

          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">E</span>
            </div>

            <span className="text-lg font-semibold tracking-tight text-gray-900">
              Eshoppers
            </span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-md mx-10">
            <div className="flex items-center gap-2 w-full bg-gray-100 px-4 py-2 rounded-full">
              <Search size={18} className="text-gray-400" />

              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent outline-none text-sm text-gray-700"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">

            <Link
              to="/login"
              className="hidden sm:flex items-center gap-2 text-sm text-gray-700 hover:text-black transition"
            >
              <User size={18} />
              Login
            </Link>

            <Link
              to="/cart"
              className="relative flex items-center justify-center"
            >
              <ShoppingCart size={20} className="text-gray-800" />

              <span className="absolute -top-2 -right-2 w-4 h-4 bg-black text-white text-[10px] flex items-center justify-center rounded-full">
                {totalCartItems}
              </span>
            </Link>

            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>

        <div className="md:hidden mt-4">
          <div className="flex items-center gap-2 w-full bg-gray-100 px-4 py-2 rounded-full">
            <Search size={16} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>
        </div>

        <nav className="hidden md:flex gap-8 mt-5 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>

          <Link to="/products" className="hover:text-black transition">
            Products
          </Link>

          <Link to="/categories" className="hover:text-black transition">
            Categories
          </Link>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-5 border-t pt-4 space-y-3">
            <Link to="/" className="block text-gray-700">
              Home
            </Link>

            <Link to="/products" className="block text-gray-700">
              Products
            </Link>

            <Link to="/categories" className="block text-gray-700">
              Categories
            </Link>

            <Link to="/login" className="block text-gray-700">
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;