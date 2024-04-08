// import React from 'react'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

function MenuNavigation({ isMenuMobile }: any) {

  return (
    <div>
      <NavigationMenu>
        <h1 className="text-xl font-bold pr-10">PropApp+</h1>
        <NavigationMenuList className={isMenuMobile ? `flex flex-col` : "flex"}>
          <NavigationMenuItem>
            <Link to="/home" className={navigationMenuTriggerStyle()}>
              Accueil
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/account" className={navigationMenuTriggerStyle()}>
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
            <Link to="/login" className={navigationMenuTriggerStyle()}>
              Deconnexion
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default MenuNavigation;
