"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
  const [hideBurgerMenu, setHideBurgerMenu] = useState(true);

  return (
    <>
      <nav className="px-5 pt-5 lg:hidden">
        <section className="flex justify-between lg:hidden">
          <h1 className="text-xl font-bold pr-10">PropApp+</h1>
          <div
            className={hideBurgerMenu ? "space-y-2" : "hidden"}
            onClick={() => {
              setIsNavMobileOpen((prev) => !prev);
              setHideBurgerMenu(false);
            }}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>
          <div className={isNavMobileOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0"
              onClick={() => {
                setIsNavMobileOpen(false);
                setHideBurgerMenu(true);
              }}
            >
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li>
                <a href="">Mon compte</a>
              </li>
              <li>
                <a href="">Mes annonces</a>
              </li>
              <li>
                <a href="">Messagerie</a>
              </li>
              <li>
                <a href="">A propos</a>
              </li>
              <li>
                <a href="">Mentions Légales</a>
              </li>
              <li>
                <a href="">Deconnexion</a>
              </li>
            </ul>
          </div>
        </section>
      </nav>

      <NavigationMenu className="sm:hidden md: hidden lg:flex">
        <h1 className="text-xl font-bold pr-10">PropApp+</h1>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="" className={navigationMenuTriggerStyle()}>
              Mon compte
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="" className={navigationMenuTriggerStyle()}>
              Mes annonces
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="" className={navigationMenuTriggerStyle()}>
              Messagerie
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="" className={navigationMenuTriggerStyle()}>
              A propos
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="" className={navigationMenuTriggerStyle()}>
              Mentions Légales
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="" className={navigationMenuTriggerStyle()}>
              Deconnexion
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export default NavBar;
