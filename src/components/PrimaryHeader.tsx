import NavBar from "./NavBar";
import logo from "../assets/shared/logo.svg";

const PrimaryHeader = () => {
  return (
    <header className="primary-header | flex">
      <div>
        <img src={logo} alt="space tourism logo" />
      </div>
      <NavBar />
    </header>
  );
};

export default PrimaryHeader;
