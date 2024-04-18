import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CloseButton from "../../../components/CloseButton";
import { logoutUser } from "../../Login/utils";
import data from "./navbar.json";
import { RootState } from "../../../store";

interface IContainer {
  toggleNavbar: () => void;
  handleLoginVisibility: () => void;
  isAuthenticated: boolean;
}

const NavbarItemContainer: FC<IContainer> = (props) => {
  const { handleLoginVisibility, toggleNavbar, isAuthenticated } = props;

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
            {/* profile photo start with name letter */}
            <ProfileNavigator />
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

const ProfileNavigator = ({}: {}) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    logoutUser()(dispatch);
  };
  return (
    <li
      className="relative text-white mr-4 hidden md:block"
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <div
        className="cursor-pointer h-10 w-10 bg-blue-500 text-white flex justify-center items-center rounded-full"
        onMouseEnter={() => setIsMenuOpen(true)}
      >
        {user?.firstName[0]}
      </div>

      {isMenuOpen && (
        <div
          className=" absolute top-6 right-0 mt-4 bg-white shadow-lg rounded-lg w-64 p-4"
          onMouseEnter={() => setIsMenuOpen(true)}
        >
          <ul className="py-1">
            {/* use other user information with profil photo and email*/}
            {/* a row left is profile photo right is with user name and email */}

            <div className="flex items-center  pb-2">
              <div className="h-8 w-8 bg-blue-500 text-white flex justify-center items-center rounded-full">
                {user?.firstName[0]}
              </div>
              <div className="ml-4">
                <div className="text-sm font-semibold text-gray-500">{`${user?.firstName} ${user?.lastName}`}</div>
                <div className="text-xs text-gray-500">{user?.email}</div>
              </div>
            </div>
            {/* separator */}
            <div className="border-b border-gray-200 mb-2"></div>
            {/* separator end */}
            <li className="block w-full bg-white px-4 py-2 hover:bg-blue-50 mb-2 cursor-pointer rounded-sm">
              <Link
                className="block w-full md:text-sm !text-gray-800 hover:!text-blue-500 active:text-white"
                to="/profile"
              >
                Profil
              </Link>
            </li>
            <div className="border-b border-gray-200 mb-2"></div>

            <li className="block w-full bg-white px-4 py-2 hover:bg-blue-50 mb-2 cursor-pointer rounded-sm">
              <div
                className="block w-full md:text-sm !text-gray-800 hover:!text-blue-500 active:text-white"
                onClick={handleLogOut}
              >
                Çıkış Yap
              </div>
            </li>

            {/* Add more options as needed */}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavbarItemContainer;
