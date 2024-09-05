"use client";

import Link from "next/link";
import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoBagOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { useCartContext } from "@/providers/Cart";
import CartModal from "../modals/CartModal";
import Image from "next/image";

function Header() {
  const [modalOpened, setModalOpened] = useState(false);
  const { cart } = useCartContext();
  return (
    <header className="flex justify-between items-center w-full">
      <Image
        className="h-24 w-24"
        src="/svgs/BossShoesLogo.svg"
        alt="Logo"
        width={50}
        height={50}
      />
      <div className="flex items-center gap-5 rounded-l-3xl p-4 backdrop-blur-sm bg-white/30">
        <Link href="">HOME</Link>
        <h1>OUR PRODUCTS</h1>
        <HiMagnifyingGlass />
        <div className="relative">
          <IoBagOutline onClick={() => setModalOpened(true)} />
          {cart.length > 0 && (
            <h1 className="absolute -right-2 -bottom-4 rounded-full bg-red-500 text-xs p-1">
              {cart.reduce((acc, product) => acc + product.quantity, 0)}
            </h1>
          )}
        </div>
        <CiMenuBurger />
      </div>
      {modalOpened && <CartModal closeModal={() => setModalOpened(false)} />}
    </header>
  );
}

export default Header;
