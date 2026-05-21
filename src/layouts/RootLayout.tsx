import { Outlet } from "react-router";
import PageWrapper from "../components/PageWrapper";
import PrimaryHeader from "../components/PrimaryHeader";

const RootLayout = () => {
  return (
    <div>
      <PrimaryHeader />
      <main>
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      </main>
    </div>
  );
};

export default RootLayout;
