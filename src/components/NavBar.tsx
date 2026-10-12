import { useLocation } from "react-router";
import NavLink from "./NavLink";

interface Props {
  isExpanded: boolean;
}

const NavBar = ({ isExpanded }: Props) => {
  const navLinks = [
    { text: "Home", path: "/" },
    { text: "Destination", path: "/destination" },
    { text: "Crew", path: "/crew" },
    { text: "Technology", path: "/technology" },
  ] as const;

  const { pathname } = useLocation();

  return (
    <nav>
      <ul
        id="primary-navigation"
        className="primary-navigation | underline-indicators flex"
        data-visible={isExpanded}
      >
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
