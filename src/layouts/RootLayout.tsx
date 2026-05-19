import NavBar from "../components/NavBar";
import { Link, Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <h2 className="numbered-title">
        <span>01</span> colors
      </h2>
      <div style={{ marginBlock: "5rem" }}>
        <Link
          to=""
          className="large-button | uppercase ff-serif fs-600 text-dark bg-white"
        >
          Explore
        </Link>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
