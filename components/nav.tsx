import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="flex items-center justify-between p-4 text-white">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuLink
              href="/"
              className="text-2xl tracking-wider font-bold"
            >
              ToDoIst
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  );
}
