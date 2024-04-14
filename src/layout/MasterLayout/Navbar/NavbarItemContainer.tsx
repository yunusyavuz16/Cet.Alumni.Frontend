import { FC } from "react";
import data from "./navbar.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Login/utils";
import CloseButton from "../../../components/CloseButton";
import { Link } from "react-router-dom";

interface IContainer {
  toggleNavbar: () => void;
  handleLoginVisibility: () => void;
  isAuthenticated: boolean;
}

const NavbarItemContainer: FC<IContainer> = (props) => {
  const { handleLoginVisibility, toggleNavbar, isAuthenticated } = props;
  const dispatch = useDispatch();
  const handleLogOut = () => {
    logoutUser()(dispatch);
  };

  return (
    <div
      className="hidden bg-black items-center justify-center absolute top-0 left-0 z-10 h-screen w-screen md:flex md:bg-transparent md:relative  md:w-auto md:h-auto "
      id="navbar"
    >
      <ul className="flex items-center md:flex-row flex-col gap-5 md:gap-1 ">
        {data[isAuthenticated ? "true" : "false"].links.map((el) => (
          <li key={el.name} className="text-white mr-4">
            {el.type === "button" ? (
              <button
                onClick={handleLoginVisibility}
                className="text-sm  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
              >
                {el.name}
              </button>
            ) : (
              <Link
                to={"/alumnies"}
                className="text-2xl md:text-sm text-blue-500 font-bold hover:text-blue-700"
              >
                {el.name}
              </Link>
            )}
          </li>
        ))}
        {isAuthenticated ? (
          <li className="text-white mr-4">
            <button
              onClick={handleLogOut}
              className="text-sm  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </button>
          </li>
        ) : null}
      </ul>
      <CloseButton
        onClick={toggleNavbar}
        id="navbar-close-button"
        classNames=" hidden absolute top-8 right-8"
      />
    </div>
  );
};

export default NavbarItemContainer;
