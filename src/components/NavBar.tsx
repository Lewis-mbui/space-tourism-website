import { Link, NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav>
      <Link to={"/"}>logo</Link>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/destinations">Destination</NavLink>
        </li>
        <li>
          <NavLink to="/crew">Crew</NavLink>
        </li>
        <li>
          <NavLink to="/technology">Technology</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
