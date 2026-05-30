import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useCreateUser, useLoginUser } from "../../api";
import { notify } from "@/lib/notifications";

type Inputs = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const createUser = useCreateUser();
  const loginUser = useLoginUser();
  const isLoading = createUser.isPending || loginUser.isPending;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const input = {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      };

      await createUser.mutateAsync({ input });
      await loginUser.mutateAsync({
        input: {
          email: data.email,
          password: data.password,
        },
      });

      notify.success("Account created and logged in");
      void navigate("/", { replace: true });
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
            Signup to continue your shopping journey
          </p>
        </div>

        <form
          onSubmit={(e) => void handleSubmit(onSubmit)(e)}
          className="mt-10 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              {...register("fullName", { required: true })}
              className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-black"
            />

            {errors.fullName && (
              <span className="mt-2 block text-sm text-red-500">
                Name is required
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-black"
            />

            {errors.email && (
              <span className="mt-2 block text-sm text-red-500">
                Email is required
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
              {...register("password", { required: true })}
              className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-black"
            />

            {errors.password && (
              <span className="mt-2 block text-sm text-red-500">
                Password is required
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
              className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-black"
            />

            {errors.confirmPassword && (
              <span className="mt-2 block text-sm text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-14 rounded-2xl bg-black text-white font-semibold hover:opacity-90 transition disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "Creating Account..." : "Signup"}
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
  );
};

export default Signup;
