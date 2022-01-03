import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
function NavBar({ title }) {
  return (
    <nav className="navbar mb-10 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="fex-none px-2 mx-2">
          <FaGithubSquare className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="flex justify-end">
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
            Home
          </Link>
          <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

NavBar.defaultProps = {
  title: "GitHub Finder",
};

export default NavBar;
