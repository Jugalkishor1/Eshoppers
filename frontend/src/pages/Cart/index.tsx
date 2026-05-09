import useCartStore from "../../store/cartStore";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop";

const Cart = () => {
  const cartItem = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const getSubTotal = useCartStore((state) => state.getSubTotal());

  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <div className="container mx-auto px-4 py-14">
        <h1 className="text-4xl font-bold text-gray-900">
          Your Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10 mt-10">
          <div className="lg:col-span-2 space-y-5">
            {cartItem.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[25px] p-5 flex gap-5"
              >
                <div className="w-28 h-28 rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={DEFAULT_IMAGE}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {item.name}
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm font-medium"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3 bg-gray-100 px-3 py-1 rounded-full">
                      <button>-</button>
                      <span>{item.quantity}</span>
                      <button>+</button>
                    </div>

                    <span className="font-bold">
                      ${item.price}
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
                <span>{getSubTotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>

            <div className="border-t mt-5 pt-5 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>{getSubTotal}</span>
            </div>

            <button className="w-full mt-6 bg-black text-white py-3 rounded-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;