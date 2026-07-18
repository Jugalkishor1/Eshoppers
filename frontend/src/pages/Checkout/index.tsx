const Checkout = () => {
  return (
    <main className="min-h-screen bg-[#FAFAFA] py-10">
      <div className="container mx-auto max-w-6xl px-4">
        <div>
          <p className="text-sm text-gray-500">
            Cart <span className="mx-2">→</span>
            <span className="font-medium text-black">Checkout</span>
            <span className="mx-2">→</span>
            Payment
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            Checkout
          </h1>

          <p className="mt-2 text-gray-500">
            Confirm your details before proceeding to payment.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-6">
            <section className="rounded-3xl border border-gray-100 bg-white p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    📍 Shipping Address
                  </h2>

                  <div className="mt-4 space-y-1">
                    <p className="font-medium text-gray-900">
                      Test User
                    </p>

                    <p className="text-gray-600">
                      123 Vijay Nagar
                    </p>

                    <p className="text-gray-600">
                      Indore, MP 452010
                    </p>

                    <p className="text-gray-600">
                      +1 9876543210
                    </p>
                  </div>
                </div>

                <button className="rounded-full border px-4 py-2 text-sm font-medium hover:bg-gray-50">
                  Change
                </button>
              </div>
            </section>

            <section className="rounded-3xl border border-gray-100 bg-white p-6">
              <h2 className="text-xl font-semibold">
                📧 Contact Information
              </h2>

              <div className="mt-4 space-y-2">
                <p className="text-gray-700">
                  test@example.com
                </p>

                <p className="text-gray-700">
                  +1 9876543210
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-gray-100 bg-white p-6">
              <h2 className="text-xl font-semibold">
                🚚 Delivery Information
              </h2>

              <div className="mt-4">
                <p className="font-medium">
                  Standard Delivery
                </p>

                <p className="mt-1 text-gray-600">
                  Estimated arrival:
                </p>

                <p className="font-medium text-green-600">
                  12 June – 14 June
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-gray-100 bg-white p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  Order Review
                </h2>

                <button className="text-sm font-medium text-black underline">
                  View Cart
                </button>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">
                      Premium Cotton T-Shirt
                    </p>

                    <p className="text-sm text-gray-500">
                      Black / M × 2
                    </p>
                  </div>

                  <span>$49.99</span>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">
                      Oversized Hoodie
                    </p>

                    <p className="text-sm text-gray-500">
                      Gray / L × 1
                    </p>
                  </div>

                  <span>$69.99</span>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">
                      Cargo Pants
                    </p>

                    <p className="text-sm text-gray-500">
                      Olive / 32 × 1
                    </p>
                  </div>

                  <span>$39.99</span>
                </div>
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-3xl border border-gray-100 bg-white p-6 lg:sticky lg:top-6">
            <h2 className="text-xl font-semibold">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Subtotal
                </span>

                <span>$149.97</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">
                  Shipping
                </span>

                <span>Free</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">
                  Tax
                </span>

                <span>$12.00</span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>

                  <span>$161.97</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2 rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
              <p>✓ Secure Payments</p>

              <p>✓ Fast Delivery</p>

              <p>✓ Easy Returns</p>
            </div>

            <button className="mt-6 h-14 w-full rounded-full bg-black text-white font-medium transition hover:bg-gray-800">
              Proceed to Secure Payment →
            </button>

            <p className="mt-4 text-center text-xs text-gray-500">
              SSL encrypted checkout and secure payment processing.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
