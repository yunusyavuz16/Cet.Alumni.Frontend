import { FC, useState } from "react";
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
  firstName: string;
  lastName: string;
  email: string;
}

const NavbarItemContainer: FC<IContainer> = (props) => {
  const {
    handleLoginVisibility,
    toggleNavbar,
    isAuthenticated,
    email,
    firstName,
    lastName,
  } = props;
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
          <>
            <li className="text-white mr-4">
              <button
                onClick={handleLogOut}
                className="text-sm  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
              >
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </button>
            </li>
            {/* profile photo start with name letter */}
            <ProfileNavigator firstName={firstName} lastName={lastName} />
            {/* profile photo end */}
          </>
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

const ProfileNavigator = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <li
      className="relative text-white mr-4"
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <div
        className="cursor-pointer h-12 w-12 bg-blue-500 text-white flex justify-center items-center rounded-full"
        onMouseEnter={() => setIsMenuOpen(true)}
      >
        {firstName[0]}
      </div>

      {isMenuOpen && (
        <div
          className="absolute top-8 right-0 mt-4 bg-white shadow-lg rounded-lg w-64"
          onMouseEnter={() => setIsMenuOpen(true)}
        >
          <ul className="py-1">
            {/* use other user information */}
            <li className="block w-full bg-white px-4 py-2 text-sm text-gray-800 mb-2 ">
              Ad Soyad: {firstName + " " + lastName}
            </li>

            <li className="block w-full bg-white px-4 py-2 hover:bg-blue-400 mb-2 cursor-pointer ">
              <Link
                className="block w-full md:text-sm !text-gray-800 hover:!text-white active:text-white"
                to="/profile"
              >
                Profil
              </Link>
            </li>

            {/* Add more options as needed */}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavbarItemContainer;
