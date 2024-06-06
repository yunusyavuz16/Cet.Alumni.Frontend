import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function ToggleIcon() {
  return <FontAwesomeIcon icon={faBars} />;
}

const Navbar: React.FC<{
  children: React.ReactNode;
  toggleNavbar: () => void;
}> = ({ children, toggleNavbar }) => {
  return (
    <nav className="bg-slate-50 sticky top-0 z-40 shadow-lg">
      <div className="container mx-auto px-4 w-1320">
        <div className="flex justify-between items-center py-4">
          <div>
            <Link className="text-blue-700 font-bold" to="/home">
              {/* put vite svg from public folder */}
              <img
                src="/vite.svg"
                alt="logo"
                className="h-10 w-10"
              />
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-indigo-700 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-gray-300"
              onClick={toggleNavbar}
            >
              <ToggleIcon />
            </button>
          </div>
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
