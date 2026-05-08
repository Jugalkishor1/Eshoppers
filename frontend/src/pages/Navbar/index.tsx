import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <div className="text-2xl font-bold text-gray-800">
          MyShop
        </div>

        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <li>
            <Link className="hover:text-blue-600 transition" to="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-blue-600 transition" to="/categories">Categories</Link>
          </li>
          <li>
            <Link className="hover:text-blue-600 transition" to="/products">Products</Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          
          <button className="relative text-gray-700 hover:text-blue-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="w-7 h-7">
              <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M2.25 3h1.386a.75.75 0 01.728.57l.474 1.897m0 0L6.75 13.5h10.878a.75.75 0 00.728-.57l1.542-6.172a.75.75 0 00-.728-.93H5.838zm0 0L5.25 3.75M6.75 18.75a1.5 1.5 0 103 0m7.5 0a1.5 1.5 0 103 0" />
            </svg>
          </button>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
