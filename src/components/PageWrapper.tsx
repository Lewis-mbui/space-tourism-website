import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PageWrapper = ({ children }: Props) => {
  return <div className="container">{children}</div>;
};

export default PageWrapper;
