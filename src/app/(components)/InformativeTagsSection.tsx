"use client";

import React from "react";
import InformativeTag from "./InformativeTag";
import { FaHeadset } from "react-icons/fa6";

function InformativeTagsSection() {
  return (
    <div className="w-full flex justify-between  rounded-3xl p-4 backdrop-blur-sm bg-white/30">
      <InformativeTag
        title="Free Shipping World Wide"
        description=" Tell us About Your Service"
      ></InformativeTag>
      <InformativeTag
        title="Money Back Guarantee"
        description=" Within 30 Days For On Exchange"
      ></InformativeTag>
      <InformativeTag
        //icon={FaHeadset}
        title="Online Support"
        description="24 Hours a Day In Week"
      ></InformativeTag>
    </div>
  );
}

export default InformativeTagsSection;
