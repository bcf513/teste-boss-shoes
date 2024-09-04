import Link from "next/link";
import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoBagOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";

function Header() {
  return (
    <header className="flex justify-between w-full">
      <h1>BOSS SHOES</h1>
      <div className="flex justify-center gap-5">
        <Link href="">HOME</Link>
        <h1>OUR PRODUCTS</h1>
        <HiMagnifyingGlass />
        <IoBagOutline />
        <CiMenuBurger />
      </div>
    </header>
  );
}

export default Header;
