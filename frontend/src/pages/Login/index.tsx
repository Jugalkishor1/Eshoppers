import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useLoginUser } from "../../api";
import { notify } from "@/lib/notifications";

type Inputs = {
  email: string;
  password: string;
};

type LocationState = {
  redirectTo?: string;
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const loginUser = useLoginUser();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await loginUser.mutateAsync({
        input: {
          email: data.email,
          password: data.password,
        },
      });

      notify.success("Logged in successfully");
      void navigate(state?.redirectTo ?? "/", {
        replace: true,
      });
    } catch (error) {
      notify.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-[30px] p-8 shadow-sm">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Welcome Back</h1>

          <p className="mt-3 text-gray-500">
            Login to continue your shopping journey
          </p>
        </div>

        {state?.redirectTo === "/checkout" && (
          <div className="mt-6 rounded-md border border-yellow-200 bg-yellow-50 p-3 text-sm text-yellow-800">
            Please log in to continue with checkout.
          </div>
        )}

        <form
          onSubmit={(e) => void handleSubmit(onSubmit)(e)}
          className="mt-10 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-black"
            />

            {errors.email && (
              <span className="mt-2 block text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-black"
            />

            {errors.password && (
              <span className="mt-2 block text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={loginUser.isPending}
            className="w-full h-14 rounded-2xl bg-black text-white font-semibold hover:opacity-90 transition disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loginUser.isPending ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-8">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-black font-semibold">
            Create Account
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
