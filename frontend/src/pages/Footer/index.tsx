import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold text-white">MyShop</h2>
          <p className="mt-3 text-sm text-gray-400">
            Your one-stop shop for quality products at the best prices.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/categories" className="hover:text-white transition">
                Categories
              </Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-white transition">
                Products
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>

          <p className="text-sm text-gray-400">
            Email: support@myshop.com
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Phone: +91 98765 43210
          </p>

          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="hover:text-white transition"
            >
              Facebook
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Instagram
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer