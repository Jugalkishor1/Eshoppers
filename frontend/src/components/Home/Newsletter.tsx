const Newsletter = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm tracking-[0.25em] uppercase text-gray-400">
            Newsletter
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-gray-900">
            Stay updated with latest offers
          </h2>

          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            Subscribe to receive product updates, exclusive offers, and shopping
            news directly in your inbox.
          </p>

          <div className="bg-[#F8F8F8] rounded-full p-2 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mt-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 bg-transparent outline-none text-gray-900"
            />

            <button className="bg-black text-white px-7 py-4 rounded-full font-medium hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
