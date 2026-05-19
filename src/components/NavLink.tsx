import { Link } from "react-router";

interface Props {
  text: string;
  path: string;
  linkNumber: number;
}

const NavLink = ({ path, text, linkNumber }: Props) => {
  return (
    <Link className="uppercase text-white letter-spacing-2" to={path}>
      <span>0{linkNumber}</span>
      {text}
    </Link>
  );
};

export default NavLink;
