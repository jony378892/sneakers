import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 sm:grid-cols-3 justify-items-center py-20 gap-y-5">
      <nav>
        <h6 className="text-lg 2xs:text-xl font-medium mb-5">Services</h6>
        <div className=" flex flex-col gap-1 items-start justify-center text-gray-700 text-sm 2xs:text-base ">
          <Link
            href="/"
            className="hover:underline underline-offset-2 "
          >
            Branding
          </Link>
          <Link
            href="/"
            className="hover:underline underline-offset-2 "
          >
            Design
          </Link>
          <Link
            href="/"
            className="hover:underline underline-offset-2 "
          >
            Marketing
          </Link>
          <Link
            href="/"
            className="hover:underline underline-offset-2 "
          >
            Advertisement
          </Link>
        </div>
      </nav>
      <nav>
        <h6 className="text-lg 2xs:text-xl font-medium mb-5 flex flex-col gap-1 items-start justify-center ">
          Company
        </h6>
        <div className=" flex flex-col gap-1 items-start justify-center text-gray-700 text-sm 2xs:text-base">
          <Link
            href="/"
            className="hover:underline underline-offset-2 "
          >
            About us
          </Link>
          <Link
            href="/"
            className="hover:underline underline-offset-2 "
          >
            Contact
          </Link>
          <Link
            href="/"
            className="hover:underline underline-offset-2 "
          >
            Jobs
          </Link>
          <Link
            href="/"
            className="hover:underline underline-offset-2 "
          >
            Press kit
          </Link>
        </div>
      </nav>
      <nav>
        <h6 className="text-lg 2xs:text-xl font-medium mb-5 flex flex-col gap-1 items-start justify-center">
          Legal
        </h6>
        <div className=" flex flex-col gap-1 items-start justify-center text-gray-700 text-sm 2xs:text-base">
          <Link
            href="/"
            className="hover:underline underline-offset-2 "
          >
            Terms of use
          </Link>
          <Link
            href="/"
            className="hover:underline underline-offset-2 "
          >
            Privacy policy
          </Link>
          <Link
            href="/"
            className="hover:underline underline-offset-2 "
          >
            Cookie policy
          </Link>
        </div>
      </nav>
    </footer>
  );
}
