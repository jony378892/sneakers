import React from "react";

export default function SubscriptionForm() {
  return (
    <div className="mx-auto mt-10">
      <div className="relative isolate overflow-hidden bg-blue-500 px-6 py-10 sm:py-14 lg:py-32 shadow-2xl rounded-lg sm:px-24">
        <h2 className="mx-auto max-w-2xl text-center text-2xl xs:text-3xl font-bold tracking-tight text-white">
          Subscribe to our newsletter
        </h2>
        <form className="mx-auto mt-10 flex max-w-md gap-x-4 relative text-xs xs:text-sm">
          <label
            htmlFor="email-address"
            className="sr-only"
          >
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-white shadow-sm  sm:leading-6"
            placeholder="Enter your email"
          />

          <button
            type="submit"
            className="absolute inset-y-0.5 right-0.5 bg-blue-500 rounded-md px-3 text-white "
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
