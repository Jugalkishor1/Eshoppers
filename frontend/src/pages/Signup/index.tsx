import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-[30px] p-8 shadow-sm">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="mt-3 text-gray-500">
            Join E Shoppers and start shopping today
          </p>
        </div>

        <form className="mt-10 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-black"
            />
          </div>

          <button className="w-full h-14 rounded-2xl bg-black text-white font-semibold hover:opacity-90 transition">
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-500 mt-8">
          Already have an account?{" "}
          <Link to="/login" className="text-black font-semibold">
            Login
          </Link>
        </p>
      </div>
    </main>
  )
}

export default Signup
