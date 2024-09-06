"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useCartContext } from "@/providers/Cart";
import CartModal from "../modals/CartModal";
import Image from "next/image";

function Header() {
  const [modalOpened, setModalOpened] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const { cart } = useCartContext();

  return (
    <header className="flex justify-between items-center w-full p-4">
      <Image
        className="h-24 w-24"
        src="/svgs/BossShoesLogo.svg"
        alt="Logo"
        width={50}
        height={50}
      />
      <div className="absolute right-0">
        <div className="hidden lg:flex items-center gap-5 rounded-l-3xl p-4 backdrop-blur-sm bg-white/30 ">
          <Link href="">HOME</Link>
          <h1>OUR PRODUCTS</h1>
          <FaMagnifyingGlass />
          <div className="relative">
            <PiHandbagSimpleBold onClick={() => setModalOpened(true)} />
            {cart.length > 0 && (
              <h1 className="absolute -right-2 -bottom-4 rounded-full bg-red-500 text-xs p-1">
                {cart.reduce((acc, product) => acc + product.quantity, 0)}
              </h1>
            )}
          </div>
        </div>
      </div>
      <div className="relative h-full">
        <div className="lg:hidden">
          <GiHamburgerMenu onClick={() => setMenuOpened(!menuOpened)} />
        </div>
        {menuOpened && (
          <div className="absolute top-0 right-0 z-10 bg-white shadow-lg rounded-lg p-6 flex flex-col items-start lg:hidden text-black  whitespace-nowrap ">
            <Link href="" className="py-2" onClick={() => setMenuOpened(false)}>
              HOME
            </Link>
            <h1 className="py-2" onClick={() => setMenuOpened(false)}>
              OUR PRODUCTS
            </h1>

            <div className="flex w-full justify-evenly items-center">
              <FaMagnifyingGlass />
              <div
                className="relative py-2"
                onClick={() => setModalOpened(true)}
              >
                <PiHandbagSimpleBold />
                {cart.length > 0 && (
                  <h1 className="absolute -right-2 -bottom-4 rounded-full bg-red-500 text-xs p-1">
                    {cart.reduce((acc, product) => acc + product.quantity, 0)}
                  </h1>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {modalOpened && <CartModal closeModal={() => setModalOpened(false)} />}
    </header>
  );
}

export default Header;
