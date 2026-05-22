import { Outlet, useLocation } from "react-router";
import PrimaryHeader from "../components/PrimaryHeader";
import { useEffect } from "react";
import { BACKGROUND_MAP } from "../types/backgroundTheme";
import type { AppRoutePath } from "../types/backgroundTheme";

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const key = location.pathname as AppRoutePath;
    const bgClass = BACKGROUND_MAP[key];

    const body = document.body;
    body.className = "";
    body.classList.add(bgClass);
  }, [location.pathname]);

  return (
    <div className="root-layout">
      <PrimaryHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
