"use client";
import { useState } from "react";
import MenuNavigation from "./MenuNavigation";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMenuMobile, setIsMenuMobile] = useState(false)

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setIsMenuMobile(!isMenuMobile)
  }

  return (
    <>
      <div className="hidden lg:flex lg:mx-auto">
        <MenuNavigation isMenuMobile={isMenuMobile} />
      </div>
      <div className="flex flex-row justify-end lg:hidden">
        <div className={isOpen ? "open" : "closed"}>
          {isOpen && (
              <MenuNavigation isMenuMobile={isMenuMobile} />
          )}
        </div>
        <div>
          <button
            className="flex flex-col h-12 w-12 justify-center items-center group"
            onClick={toggleMenu}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
