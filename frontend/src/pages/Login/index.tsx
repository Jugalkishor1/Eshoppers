import { Link } from "react-router-dom"

const Login = () => {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-[30px] p-8 shadow-sm">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-3 text-gray-500">
            Login to continue shopping with E Shoppers
          </p>
        </div>

        <form className="mt-10 space-y-5">
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
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <button
                type="button"
                className="text-sm text-gray-500 hover:text-black"
              >
                Forgot Password?
              </button>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-black"
            />
          </div>

          <button className="w-full h-14 rounded-2xl bg-black text-white font-semibold hover:opacity-90 transition">
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-8">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-black font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  )
}

export default Login
