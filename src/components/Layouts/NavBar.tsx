"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import crossClosed from '../../assets/crossClosed.svg';

function NavBar() {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
  const [hideBurgerIcon, setHideBurgerIcon] = useState(true);

  return (
    <>
      <nav className="px-5 pt-5 max-h-72 lg:hidden">
        <section className="flex justify-between lg:hidden">
          <h1 className="text-xl font-bold pr-10">PropApp+</h1>
          <div
            className={hideBurgerIcon ? "space-y-2" : "hidden"}
            onClick={() => {
              setIsNavMobileOpen(true);
              setHideBurgerIcon(false);
            }}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>
          <div className={isNavMobileOpen ? "showMenuMobile" : "hideMenuMobile"}>
            <div
              className="absolute right-0"
              onClick={() => {
                setIsNavMobileOpen(false);
                setHideBurgerIcon(true);
              }}
            >

              <img className="w-8 h-8" src={crossClosed} alt="croix pour fermer le menu" />
            </div>
            <ul className="flex flex-col items-end justify-between min-h-[250px] pr-10">
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
        <div className="border-2 w-1/2 flex ml-auto"></div>
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
