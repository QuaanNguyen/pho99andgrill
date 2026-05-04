"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type NavPanel = "contact" | "menus" | "order" | null;

type NavContextValue = {
  openPanel: NavPanel;
  open: (panel: Exclude<NavPanel, null>) => void;
  close: () => void;
};

const NavContext = createContext<NavContextValue | null>(null);

export function NavProvider({ children }: { children: React.ReactNode }) {
  const [openPanel, setOpenPanel] = useState<NavPanel>(null);

  const open = useCallback((panel: Exclude<NavPanel, null>) => setOpenPanel(panel), []);
  const close = useCallback(() => setOpenPanel(null), []);

  useEffect(() => {
    if (!openPanel) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openPanel, close]);

  const value = useMemo(() => ({ openPanel, open, close }), [openPanel, open, close]);

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used inside NavProvider");
  return ctx;
}
