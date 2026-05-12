import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import useCartStore from "../../store/cartStore";
import defaultProductImg from "../../assets/images/default_product_img.png"

type Product = {
  id: string;
  name: string;
  price: number;
  description: string | null;
  images?: string | null;
};

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const addToCart = useCartStore((state) => state.addToCart)

  const isInCart = useCartStore((state) => 
    state.items.some((item) => item.id === product.id)
  );

  return (
    <div className="bg-white rounded-[28px] overflow-hidden group border border-gray-100 hover:shadow-sm transition">

      <Link to={`/products/${product.id}`}>
        <div className="relative h-64 bg-gray-100 overflow-hidden">

          <img
            src={product.images?.[0] ?? defaultProductImg}
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

          {
            isInCart ? (
              <Link to="/cart"
                className="bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition duration-200 shadow-md"
              >
                Go to Cart
              </Link>
            ) : (
              <button
                onClick={() => addToCart(product)}
                className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition"
              >
                Add to cart
              </button>
            )
          }
        </div>

      </div>
    </div>
  );
};

export default ProductCard;