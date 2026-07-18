import useCartStore from "../../store/cartStore";
import defaultProductImage from "../../assets/images/default_product_img.png";
import { Link } from "react-router-dom";
import { Minus, Plus } from "lucide-react";
import { formatPrice } from "../../helpers/currency";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";

const Cart = () => {
  const cartItem = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const getSubTotal = useCartStore((state) => state.getSubTotal);

  const { increaseQuantity, decreaseQuantity } = useCartStore();

  const isCartEmpty = cartItem.length === 0;
  const isLoggedIn = useAuthStore((state) => state.token)

  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <div className="container mx-auto px-4 py-14">
        <h1 className="text-4xl font-bold text-gray-900">Your Cart</h1>

        {isCartEmpty ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <img
              src={defaultProductImage}
              alt="Empty cart"
              className="w-40 h-40 object-cover rounded-2xl opacity-70"
            />

            <h2 className="mt-6 text-2xl font-bold text-gray-800">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-500">
              Looks like you haven’t added anything yet.
            </p>

            <Link
              to="/products"
              className="mt-6 bg-black text-white px-6 py-3 rounded-full inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-5">
              {cartItem.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[25px] p-5 flex gap-5"
                >
                  <div className="w-28 h-28 rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={defaultProductImage}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>

                        <p className="text-gray-500 text-sm mt-1">
                          {item.description}
                        </p>
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3 bg-gray-100 px-3 py-1 rounded-full">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-10 h-10 rounded-full border flex items-center justify-center transition bg-white hover:bg-gray-100"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="text-lg font-medium min-w-5 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="w-10 h-10 rounded-full border flex items-center justify-center transition bg-white hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <span className="font-bold">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-[25px] p-6 h-fit">
              <h2 className="text-xl font-bold">Order Summary</h2>

              <div className="mt-6 space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(getSubTotal())}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>

              <div className="border-t mt-5 pt-5 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>{formatPrice(getSubTotal())}</span>
              </div>

              <Button asChild size="lg" className="w-full mt-6 rounded-full">
                <Link
                  to="/checkout"
                >
                  Checkout
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
