"use client";

import React from "react";
import { IconType } from "react-icons";

function InformativeTag({
  icon: Icon,
  title,
  description,
}: Readonly<{ icon: IconType; title: string; description: string }>) {
  return (
    <div className="flex justify-center items-center gap-4 border-solid border-4 rounded-3xl p-4 backdrop-blur">
      <Icon className="text-4xl" />
      <div className="flex flex-col justify-center ">
        <h3 className="text-center font-bold">{title}</h3>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
}

export default InformativeTag;
