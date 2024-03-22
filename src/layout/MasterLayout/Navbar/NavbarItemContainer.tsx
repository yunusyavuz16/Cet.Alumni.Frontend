import { FC } from "react";
import data from "./navbar.json";

const NavbarItemContainer: FC<{
  toggleNavbar: () => void;
  handleLoginVisibility: () => void;
}> = ({ toggleNavbar, handleLoginVisibility }) => {
  return (
    <div
      className="hidden bg-black items-center justify-center absolute top-0 left-0 z-10 h-screen w-screen md:flex md:bg-transparent md:relative  md:w-auto md:h-auto "
      id="navbar"
    >
      <ul className="flex items-center md:flex-row flex-col gap-5 md:gap-1 ">
        {data.links.map((el) => (
          <li key={el.name} className="text-white mr-4">
            {el.type === "button" ? (
              <button
                onClick={handleLoginVisibility}
                className="text-sm  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
              >
                {el.name}
              </button>
            ) : (
              <a href="." className="text-2xl md:text-sm">
                {el.name}
              </a>
            )}
          </li>
        ))}
      </ul>
      <button
        id="navbar-close-button"
        className="hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-8 right-8 w-12"
        onClick={toggleNavbar}
      >
        X
      </button>
    </div>
  );
};

export default NavbarItemContainer;
