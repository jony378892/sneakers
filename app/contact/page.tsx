import React from "react";

const ContactPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2 bg-blue-500 rounded-lg p-3 mt-14 xs:p-5 sm:p-8">
          <h1 className="text-3xl text-center my-4 text-white font-semibold">
            Contact Us
          </h1>
          <form>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="formName"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                id="formName"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="formEmail"
              >
                Email address
              </label>
              <input
                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                id="formEmail"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="formMessage"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                id="formMessage"
                rows={3}
                placeholder="Enter your message"
              />
            </div>
            <button
              className="bg-gray-100 hover:bg-white text-gray-800 font-bold py-1.5 px-4 rounded-md "
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
