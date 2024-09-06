"use client";

import React from "react";
import InformativeTag from "./InformativeTag";
import { GiReceiveMoney } from "react-icons/gi";
import { FaHeadset } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

function InformativeTagsSection() {
  return (
    <div className="flex w-full gap-4 justify-evenly rounded-3xl p-4 backdrop-blur-sm bg-white/30 flex-col sm:flex-col md:flex-row lg:flex-row">
      <InformativeTag
        icon={TbTruckDelivery}
        title="Free Shipping World Wide"
        description=" Tell us About Your Service"
      ></InformativeTag>
      <InformativeTag
        icon={GiReceiveMoney}
        title="Money Back Guarantee"
        description=" Within 30 Days For On Exchange"
      ></InformativeTag>
      <InformativeTag
        icon={FaHeadset}
        title="Online Support"
        description="24 Hours a Day In Week"
      ></InformativeTag>
    </div>
  );
}

export default InformativeTagsSection;
