import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 mx-auto ">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
        <div className="px-6 py-14  space-y-4 md:space-y-6 sm:px-8 bg-blue-500 rounded-xl">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
            Sign in to your account
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            action=""
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white "
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-sm text-gray-900 rounded-lg block w-full px-2.5 py-1.5 xs:py-2 "
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                className="bg-gray-50 border border-gray-300 text-sm text-gray-900 rounded-lg  block w-full px-2.5 py-1.5 xs:py-2"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 "
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <Link
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-white"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full text-black bg-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login
            </button>
            <p className="text-sm font-light text-white">
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
