import { useProducts } from "../../api";

const Products = () => {
  const { data = [], isLoading } = useProducts();

  if (isLoading) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-xl font-semibold text-gray-600 animate-pulse">
          Loading products...
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 min-h-[70vh] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Our Products
          </h1>

          <p className="mt-3 text-gray-600 text-lg">
            Explore our latest collection of products.
          </p>
        </div>

        {data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100"
              >
                <div className="h-52 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-5xl"></span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {p.name}
                    </h2>
                  </div>

                  <p className="mt-3 text-gray-600 text-sm line-clamp-3">
                    {p.description || "No description available."}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">
                      ₹{p.price}
                    </span>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                      View
                    </button>
                  </div>

                  <div className="mt-4">
                    <span className="text-sm text-gray-500">
                      Category:
                    </span>{" "}
                    <span className="text-sm font-medium text-gray-700">
                      {p.category?.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg">
            No products found.
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;