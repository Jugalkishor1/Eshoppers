import { Heart, Minus, Plus, ShoppingCart } from 'lucide-react';
import { useProduct } from '../../api';
import { useParams } from 'react-router-dom';

const DEFAULT_IMAGE1 =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop";

const DEFAULT_IMAGES = ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=1200&auto=format&fit=crop']

const ProductDetails = () => {
  const { productId } = useParams();

  const { data: product, isLoading } = useProduct(productId!);
  console.log(product);
  
  if (isLoading) {
    return <div className="p-10">Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <div className="container mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-2 gap-12">

          <div>
            <div className="bg-white rounded-[30px] overflow-hidden">
              <img
                src={DEFAULT_IMAGE1}
                alt="product"
                className="w-full h-125 object-cover"
              />
            </div>

            <div className="flex gap-4 mt-5">
              {DEFAULT_IMAGES.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={`w-24 h-24 object-cover rounded-2xl cursor-pointer border-2 ${
                    DEFAULT_IMAGE1 === img
                      ? 'border-black'
                      : 'border-transparent'
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              {product.name} 
            </h1>

            <div className="mt-6 text-3xl font-bold text-gray-900">
              {product.price}
            </div>

            <p className="mt-6 text-gray-500 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-4 mt-8">
              <button
                className="w-10 h-10 rounded-full bg-white border flex items-center justify-center"
              >
                <Minus size={16} />
              </button>

              <span className="text-lg font-medium">{1}</span>

              <button
                className="w-10 h-10 rounded-full bg-white border flex items-center justify-center"
              >
                <Plus size={16} />
              </button>
            </div>

            <div className="flex gap-4 mt-10">
              <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-4 rounded-2xl font-medium hover:bg-gray-800 transition w-full">
                <ShoppingCart size={18} />
                Add to Cart
              </button>

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

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900">
            You may also like
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-[25px] overflow-hidden"
              >
                <img
                  src={DEFAULT_IMAGE1}
                  className="h-55 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="font-medium text-gray-900">
                    Similar Product
                  </h3>

                  <p className="text-gray-500 mt-1">$99</p>
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