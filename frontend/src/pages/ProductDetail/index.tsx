import defaultProductImg from "../../assets/images/default_product_img.png";
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../api";
import useCartStore from "../../store/cartStore";
import { useState } from "react";
import { formatPrice } from "../../helpers/currency";

const ProductDetails = () => {
  const { productId } = useParams();

  const { addToCart, increaseQuantity, decreaseQuantity, items } =
    useCartStore();

  const { data: product, isLoading } = useProduct(productId || "");

  const [selectedImage, setSelectedImage] = useState("");

  if (!productId) {
    return <div className="p-10 text-center text-red-500">Invalid Product</div>;
  }

  if (isLoading) {
    return <div className="container mx-auto px-4 py-14">Loading...</div>;
  }

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  const cartItem = items.find((item) => item.id === product.id);

  const isInCart = !!cartItem;

  const itemQuantity = cartItem?.quantity || 0;

  const activeImage = selectedImage || product.images?.[0] || defaultProductImg;

  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <div className="container mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-[30px] overflow-hidden">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-125 object-cover"
              />
            </div>

            <div className="flex gap-4 mt-5 overflow-x-auto pb-1">
              {product.images?.map((img, i) => (
                <div
                  onClick={() => setSelectedImage(img)}
                  key={i}
                  className={`w-24 h-24 rounded-2xl overflow-hidden border-2 bg-white shrink-0 ${
                    activeImage === img ? "border-black" : "border-gray-200"
                  }`}
                >
                  <img
                    src={img}
                    alt={`thumbnail-${i}`}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>

            <div className="mt-6 text-3xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </div>

            <p className="mt-6 text-gray-500 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-4 mt-8">
              <button
                disabled={!isInCart}
                onClick={() => decreaseQuantity(product.id)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition ${
                  !isInCart
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                <Minus size={16} />
              </button>

              <span className="text-lg font-medium min-w-5 text-center">
                {itemQuantity}
              </span>

              <button
                disabled={!isInCart}
                onClick={() => increaseQuantity(product.id)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition ${
                  !isInCart
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                <Plus size={16} />
              </button>
            </div>

            <div className="flex gap-4 mt-10">
              {isInCart ? (
                <button className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-4 rounded-2xl font-medium w-full">
                  ✓ Added to Cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="flex items-center justify-center gap-2 bg-black text-white px-6 py-4 rounded-2xl font-medium hover:bg-gray-800 transition w-full"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              )}

              <button className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white border hover:border-black transition">
                <Heart size={18} />
              </button>
            </div>

            <div className="mt-10 space-y-3 text-sm text-gray-500">
              <p>✔ Free Delivery</p>
              <p>✔ 7 Days Return Policy</p>
              <p>✔ Secure Payment</p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900">
              You may also like
            </h2>

            <button className="text-sm font-medium text-black hover:underline">
              View all
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-10">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="overflow-hidden bg-gray-100">
                  <img
                    src={defaultProductImg}
                    className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="product"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-900">
                    Similar Product
                  </h3>

                  <div className="flex items-center justify-between mt-3">
                    <p className="text-xl font-bold text-black">$99</p>

                    <button className="px-4 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
