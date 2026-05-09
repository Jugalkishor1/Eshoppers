import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <section className="bg-[#F8F8F8] py-24">
      <div className="container mx-auto px-4">
        <div className="bg-black rounded-[40px] overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-10 lg:p-16">
              <span className="text-sm uppercase tracking-[0.25em] text-gray-400">
                New Collection
              </span>

              <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-white leading-tight">
                Upgrade your everyday style.
              </h2>

              <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-lg">
                Explore curated collections designed for modern living,
                comfort, and premium quality.
              </p>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 mt-10 bg-white text-black px-7 py-4 rounded-2xl font-medium hover:bg-gray-200 transition"
              >
                Explore Products
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative h-125">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop"
                alt="cta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
