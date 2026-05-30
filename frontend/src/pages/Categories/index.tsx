import { useCategories } from "../../api";
import CategoryCard from "../../components/shared/CategoriesCard";

const Categories = () => {
  const { data, isLoading } = useCategories();

  return (
    <main className="bg-[#F8F8F8] min-h-screen">
      <div className="container mx-auto px-4 py-14">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
          Categories
        </h1>

        <p className="text-gray-500 mt-3">Explore products by category</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {isLoading &&
            Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-90 bg-gray-100 rounded-4xl animate-pulse"
                />
              ))}

          {!isLoading &&
            data.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
        </div>
      </div>
    </main>
  );
};

export default Categories;
