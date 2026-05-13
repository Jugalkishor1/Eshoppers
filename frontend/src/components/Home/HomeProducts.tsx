import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useProducts } from "../../api";
import ProductCard from "../shared/ProductCard";

const Products = () => {
  const { data, isLoading } = useProducts("");

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">

        <div className="flex items-end justify-between gap-6 flex-wrap">

          <div>
            <span className="text-sm tracking-[0.25em] uppercase text-gray-400">
              Featured Products
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">
              Trending Right Now
            </h2>
          </div>

          <Link
            to="/products"
            className="flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all"
          >
            Browse All
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
                  className="h-105 bg-gray-100 rounded-4xl animate-pulse"
                />
              ))}

          {!isLoading &&
            data.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}

        </div>
      </div>
    </section>
  );
};

export default Products;