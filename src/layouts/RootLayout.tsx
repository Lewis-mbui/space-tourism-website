import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import PageWrapper from "../components/PageWrapper";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <PageWrapper>
          <h2 className="numbered-title">
            <span>01</span> colors
          </h2>
          <Outlet />
        </PageWrapper>
      </main>
    </div>
  );
};

export default RootLayout;
