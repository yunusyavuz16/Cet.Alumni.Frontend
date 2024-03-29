import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ToggleIcon() {
  return <FontAwesomeIcon icon={faBars} />;
}

const Navbar: React.FC<{
  children: React.ReactNode;
  toggleNavbar: () => void;
}> = ({ children, toggleNavbar }) => {
  return (
    <nav className="bg-gray-800 sticky top-0">
      <div className="container mx-auto px-4 w-1320">
        <div className="flex justify-between items-center py-4">
          <div className="text-white font-bold">
            <a href="#">CET</a>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
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
