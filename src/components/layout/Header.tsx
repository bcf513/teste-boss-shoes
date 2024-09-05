"use client";

import Link from "next/link";
import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoBagOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { useCartContext } from "@/providers/Cart";
import CartModal from "../modals/CartModal";

function Header() {
  const [modalOpened, setModalOpened] = useState(false);
  const { cart } = useCartContext();
  return (
    <header className="flex justify-between w-full">
      <h1>BOSS SHOES</h1>
      <div className="flex justify-center gap-5">
        <Link href="">HOME</Link>
        <h1>OUR PRODUCTS</h1>
        <HiMagnifyingGlass />
        <IoBagOutline onClick={() => setModalOpened(true)} />
        {cart.length > 0 && (
          <h1>{cart.reduce((acc, product) => acc + product.quantity, 0)}</h1>
        )}
        <CiMenuBurger />
      </div>
      {modalOpened && <CartModal closeModal={() => setModalOpened(false)} />}
    </header>
  );
}

export default Header;
