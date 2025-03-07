"use client";
import React, { useState } from "react";
import Hamburger from "/public/icons/hamburger";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 md:p-8">
      {/* Desktop */}
      <div className="hidden md:flex flex-row gap-4 justify-between items-center">
        <div className="flex flex-row gap-4 items-center">
          <div>ABOUT</div>
          <div>WORK</div>
        </div>
        <div className="font-murmure text-4xl">Preetham Pemmasani</div>
        <div className="flex flex-row gap-4 items-center">
          <div>EXPERIMENTS</div>
          <div>CONTACT</div>
        </div>
      </div>

      {/* Mobile (Portfolio websites are never meant to be looked through phone) */}
      <div className="flex md:hidden flex-row justify-between items-center">
        <div className="font-murmure text-2xl">Preetham Pemmasani</div>
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Open menu"
        >
          <Hamburger />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 shadow-md py-2 px-4 z-50">
          <div className="flex flex-col space-y-4 py-2">
            <div className="py-2">ABOUT</div>
            <div className="py-2">WORK</div>
            <div className="py-2">EXPERIMENTS</div>
            <div className="py-2">CONTACT</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
