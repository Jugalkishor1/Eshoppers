import { useCategories } from "../../api";

const Categories = () => {
  const { data = [], isLoading } = useCategories();

  if (isLoading) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-xl font-semibold text-gray-600 animate-pulse">
          Loading categories...
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 min-h-[70vh] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Categories
          </h1>

          <p className="mt-3 text-gray-600 text-lg">
            Browse all available product categories.
          </p>
        </div>

        {data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100"
              >
                <div className="h-40 bg-linear-to-r from-purple-100 to-purple-200 flex items-center justify-center">
                  <span className="text-5xl">📂</span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {c.name}
                    </h2>
                  </div>

                  <p className="mt-3 text-gray-600 text-sm line-clamp-3">
                    Explore products under the {c.name} category.
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg">
            No categories found.
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;