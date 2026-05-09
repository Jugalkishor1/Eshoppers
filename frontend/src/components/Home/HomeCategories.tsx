import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCategories } from "../../api";
import CategoryCard from "../shared/CategoriesCard";

const HomeCategories = () => {
  const { data, isLoading } = useCategories();

  return (
    <section className="bg-[#F8F8F8] py-24">
      <div className="container mx-auto px-4">

        <div className="flex items-end justify-between gap-6 flex-wrap">

          <div>
            <span className="text-sm tracking-[0.25em] uppercase text-gray-400">
              Categories
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">
              Shop by Category
            </h2>
          </div>

          <Link
            to="/categories"
            className="flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all"
          >
            View All
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          {isLoading &&
            Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-90 bg-gray-100 rounded-4xl animate-pulse"
                />
              ))}

          {!isLoading &&
            data.slice(0, 4).map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
              />
            ))}

        </div>
      </div>
    </section>
  );
};

export default HomeCategories;