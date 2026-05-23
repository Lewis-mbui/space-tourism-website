import { Link } from "react-router";

const MainButton = () => {
  return (
    <Link
      to="/destination"
      className="large-button | uppercase ff-serif text-dark bg-white"
    >
      Explore
    </Link>
  );
};

export default MainButton;
