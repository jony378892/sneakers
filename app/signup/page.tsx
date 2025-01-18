import Link from "next/link";
import React from "react";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center py-8 mx-auto ">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
        <div className="px-6 py-14  space-y-4 md:space-y-6 sm:px-8 bg-blue-500 rounded-xl">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
            Create a new account
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            action=""
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white "
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full px-2.5 py-1.5 xs:py-2 "
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white "
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full px-2.5 py-1.5 xs:py-2 "
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="........"
                className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg  block w-full px-2.5 py-1.5 xs:py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full text-black bg-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign up
            </button>
            <p className="text-sm font-light text-white">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
