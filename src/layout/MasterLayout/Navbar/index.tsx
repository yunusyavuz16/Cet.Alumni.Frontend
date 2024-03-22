import NavbarItemContainer from "./NavbarItemContainer";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ToggleIcon() {
  return <FontAwesomeIcon icon={faBars} />;
}

const Navbar: React.FC<{ handleLoginVisibility: () => void }> = ({
  handleLoginVisibility,
}) => {
  const toggleNavbar = () => {
    document.getElementById("navbar")?.classList.toggle("hidden");
    document.getElementById("navbar")?.classList.toggle("flex");
    document.getElementById("navbar-close-button")?.classList.toggle("hidden");
  };

  return (
    <nav className="bg-gray-800 sticky top-0">
      <div className="container mx-auto px-4">
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
          <NavbarItemContainer
            toggleNavbar={toggleNavbar}
            handleLoginVisibility={handleLoginVisibility}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
