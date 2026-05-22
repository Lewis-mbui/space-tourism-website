import NavBar from "./NavBar";
import logo from "../assets/shared/logo.svg";
import { useState } from "react";

const PrimaryHeader = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <header className="primary-header | flex">
      <div className="logo">
        <img src={logo} alt="space tourism logo" />
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={navExpanded}
        onClick={() => setNavExpanded((expanded) => (expanded ? false : true))}
      >
        <span className="sr-only">Menu</span>
      </button>
      <NavBar isExpanded={navExpanded} />
    </header>
  );
};

export default PrimaryHeader;
