import { useLocation } from "react-router";
import NavLink from "./NavLink";

const NavBar = () => {
  const navLinks = [
    { text: "Home", path: "/" },
    { text: "Destination", path: "/destination" },
    { text: "Crew", path: "/crew" },
    { text: "Technology", path: "/technology" },
  ] as const;

  const { pathname } = useLocation();

  return (
    <nav>
      <ul className="primary-navigation | underline-indicators flex">
        {navLinks.map((l, index) => (
          <li
            key={l.text}
            className={`underline-indicator ${l.path === pathname ? "active" : ""}`}
          >
            <NavLink text={l.text} path={l.path} linkNumber={index} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
