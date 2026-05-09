import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

type Product = {
  id: string | number;
  name: string;
  price: number;
};

interface Props {
  product: Product;
}

// temporary fallback image
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop";

const ProductCard = ({ product }: Props) => {
  return (
    <div className="bg-white rounded-[28px] overflow-hidden group border border-gray-100 hover:shadow-sm transition">

      <Link to={`/products/${product.id}`}>
        <div className="relative h-64 bg-gray-100 overflow-hidden">

          <img
            src={DEFAULT_IMAGE}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />

          <button className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center">
            <Heart size={16} className="text-gray-700" />
          </button>

        </div>
      </Link>

      <div className="p-5">

        <Link to={`/products/${product.id}`}>
          <h3 className="text-base font-semibold text-gray-900 line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm">
          <Star size={14} fill="currentColor" />
          <span className="text-gray-600">
            {4.5}
          </span>
        </div>

        <div className="flex items-center justify-between mt-5">
          <span className="text-lg font-bold text-gray-900">
            ₹{Number(product.price).toFixed(0)}
          </span>

          <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
            Add
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;