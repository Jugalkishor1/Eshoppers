import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="container mx-auto px-4 py-14 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-sm tracking-[0.25em] uppercase text-gray-400">
              Modern Shopping Experience
            </span>

            <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-none tracking-[-3px] text-gray-900">
              Less Noise.
              <span className="block">More Shopping.</span>
            </h1>

            <p className="mt-8 text-lg text-gray-500 leading-relaxed max-w-xl">
              Discover premium products with clean design, smooth experience,
              and everything you need in one place.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/products"
                className="bg-black text-white px-7 py-4 rounded-2xl font-medium flex items-center gap-2 hover:bg-gray-800 transition"
              >
                Shop Now
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/categories"
                className="bg-white border border-gray-200 px-7 py-4 rounded-2xl font-medium hover:border-black transition"
              >
                Browse Categories
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[40px] overflow-hidden bg-white p-4 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
                alt="hero"
                className="rounded-[30px] h-137.5 w-full object-cover"
              />

              <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md px-6 py-5 rounded-3xl shadow-lg">
                <p className="text-sm text-gray-500">Starting From</p>

                <h3 className="text-3xl font-bold text-gray-900 mt-1">
                  $149
                </h3> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
