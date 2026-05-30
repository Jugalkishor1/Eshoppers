import {
  FaSquareXTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">
                Eshoppers
              </span>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed">
              A modern shopping experience built for simplicity, speed, and
              quality products delivered to your doorstep.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Explore
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link to="/" className="hover:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-black">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-black">
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Support
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link to="/" className="hover:text-black">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-black">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-black">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-black">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-sm text-gray-400">
            <p className="leading-relaxed">
              Built with ❤️ for modern ecommerce experiences.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-gray-100 pt-8">
          <div className="flex justify-center gap-6 mb-8 text-gray-500">
            <FaFacebook className="hover:text-black cursor-pointer" />
            <FaSquareXTwitter className="hover:text-black cursor-pointer" />
            <FaInstagram className="hover:text-black cursor-pointer" />
            <FaLinkedin className="hover:text-black cursor-pointer" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-3">
            <div className="flex gap-6">
              <Link to="/" className="hover:text-black">
                Privacy
              </Link>
              <Link to="/" className="hover:text-black">
                Terms
              </Link>
            </div>

            <p>© {new Date().getFullYear()} Eshoppers. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
