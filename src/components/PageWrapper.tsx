import type { ReactNode } from "react";
import { useLocation } from "react-router";

interface Props {
  children: ReactNode;
}

const PageWrapper = ({ children }: Props) => {
  const { pathname } = useLocation();

  const homeClass = pathname === "/" ? "grid-container--home" : "";

  return <div className={`grid-container ${homeClass}`}>{children}</div>;
};

export default PageWrapper;
