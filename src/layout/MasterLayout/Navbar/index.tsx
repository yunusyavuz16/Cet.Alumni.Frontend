import NavbarItemContainer from "./NavbarItemContainer";

function ToggleIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="menu w-6 h-6">
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0V5zM9 5a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V5zM15 5a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V5zM4 10a1 1 0 0 1 0-2h12a1 1 0 1 1 0 2H4zM3 15a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zM9 15a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2zM15 15a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Navbar: React.FC<{ handleLoginVisibility: () => void }> = ({ handleLoginVisibility }) => {

  const toggleNavbar = () => {
    document.getElementById("navbar")?.classList.toggle("hidden");
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
          <NavbarItemContainer toggleNavbar={toggleNavbar} handleLoginVisibility={handleLoginVisibility} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
