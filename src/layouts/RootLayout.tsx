import NavBar from "../components/NavBar";
import { Link, Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <h2 className="numbered-title">
        <span>01</span> colors
      </h2>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
