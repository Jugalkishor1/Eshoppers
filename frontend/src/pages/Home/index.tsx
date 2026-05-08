import { Link } from "react-router-dom"

const Home = () => {
  return (
    <section className="min-h-[80vh] bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Shop everything. Simply.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600">
          Discover amazing products, explore categories, and enjoy a seamless shopping experience.
        </p>

        <div className="mt-8">
          <Link
            to="/categories"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
          >
            Browse Categories
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home