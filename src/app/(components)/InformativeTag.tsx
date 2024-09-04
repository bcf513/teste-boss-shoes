"use client";

import React from "react";

function InformativeTag({
  title,
  description,
}: Readonly<{ title: string; description: string }>) {
  return (
    <div className="flex border-spacing-2 ">
      <div className="flex flex-col items-center">
        <h3 className="w-fit">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default InformativeTag;
/*
"use client";

import React from "react";
import { IconType } from "react-icons";

function InformativeTag({
  icon: Icon,
  title,
  description,
}: Readonly<{ icon: IconType; title: string; description: string }>) {
  return (
    <div className="flex border-spacing-2 ">
      <Icon />

      <div className="flex flex-col justify-center ">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default InformativeTag;
*/
