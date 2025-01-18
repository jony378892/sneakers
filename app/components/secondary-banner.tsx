import React from "react";
import CustomBanner from "../ui/custom-banner";
import { Ri24HoursFill, RiSecurePaymentFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";

export default function SecondaryBanner() {
  const className = "text-white p-1 bg-blue-500 rounded-md";

  return (
    <div className="md:flex items-center justify-between my-10 border rounded-lg p-3 hidden">
      <div className="flex items-center justify-between">
        <CustomBanner
          primaryTitle="Secure Payment"
          secondaryTitle="Secure on order"
        >
          <RiSecurePaymentFill
            className={className}
            size={40}
          />
        </CustomBanner>
      </div>
      <div className="flex items-center justify-between">
        <CustomBanner
          primaryTitle="24/7 Support"
          secondaryTitle="Contact us 24 hour"
        >
          <Ri24HoursFill
            className={className}
            size={40}
          />
        </CustomBanner>
      </div>
      <div className="flex items-center justify-between">
        <CustomBanner
          primaryTitle="Fast Delivery"
          secondaryTitle="Fast delivery on order"
        >
          <FaShippingFast
            className={className}
            size={40}
          />
        </CustomBanner>
      </div>
    </div>
  );
}
