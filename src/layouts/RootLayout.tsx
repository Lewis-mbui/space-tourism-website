import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="container bg-dark">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
