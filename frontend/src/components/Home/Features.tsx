const Features = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm tracking-[0.25em] uppercase text-gray-400">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Built to make shopping feel effortless
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-[#F8F8F8] rounded-[30px] p-8 hover:-translate-y-1 transition">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-xl shadow-sm">
              🚚
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-gray-900">
              Fast Delivery
            </h3>

            <p className="mt-4 text-gray-500 leading-relaxed">
              Quick and reliable shipping right to your doorstep.
            </p>
          </div>

          <div className="bg-[#F8F8F8] rounded-[30px] p-8 hover:-translate-y-1 transition">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-xl shadow-sm">
              🔒
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-gray-900">
              Secure Payments
            </h3>

            <p className="mt-4 text-gray-500 leading-relaxed">
              Safe checkout experience with trusted payment methods.
            </p>
          </div>

          <div className="bg-[#F8F8F8] rounded-[30px] p-8 hover:-translate-y-1 transition">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-xl shadow-sm">
              💬
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-gray-900">
              24/7 Support
            </h3>

            <p className="mt-4 text-gray-500 leading-relaxed">
              Friendly support team ready whenever you need help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
