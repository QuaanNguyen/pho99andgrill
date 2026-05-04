"use client";

import { NavProvider } from "@/app/_lib/nav-context";
import { Header } from "./Header";
import { SideNav } from "./SideNav";

export function NavRoot() {
  return (
    <NavProvider>
      <Header />
      <SideNav />
    </NavProvider>
  );
}
