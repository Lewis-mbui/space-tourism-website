import { Link, useLocation } from "react-router";
import NavLink from "./NavLink";

const NavBar = () => {
  const navLinks = [
    { text: "Home", path: "/" },
    { text: "Destination", path: "/destinations" },
    { text: "Crew", path: "/crew" },
    { text: "Technology", path: "/technology" },
  ] as const;

  const { pathname } = useLocation();

  return (
    <nav>
      <Link to={"/"}>logo</Link>
      <ul className="primary-navigation | underline-indicators flex">
        {navLinks.map((l, index) => (
          <li
            key={l.text}
            className={`underline-indicator ${l.path === pathname ? "active" : ""}`}
          >
            <NavLink text={l.text} path={l.path} linkNumber={index + 1} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
