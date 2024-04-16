import { Suspense, useState } from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import { IUser } from "../../models";
import { mapStateToPropsAuthWithUser } from "../../store/slices/authSlice";
import Login from "../Login";
import Register from "../Register";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NavbarItemContainer from "./Navbar/NavbarItemContainer";
import "./index.css";

interface IMasterLayout {
  isAuthenticated: boolean;
  user: IUser | null;
}

const MasterLayout = (props: IMasterLayout) => {
  const { isAuthenticated, user } = props;
  const [hideLogin, setHideLogin] = useState(true);
  const [hideRegister, setHideRegister] = useState(true);

  const handleLoginVisibility = () => {
    setHideLogin((prev) => !prev);
  };

  const handleCloseLogin = () => {
    setHideLogin(true);
  };

  const handleCloseRegister = () => {
    setHideRegister(true);
  };
  const handleShowRegister = () => {
    setHideRegister(false);
    setHideLogin(true);
  };

  const toggleNavbar = () => {
    document.getElementById("navbar")?.classList.toggle("hidden");
    document.getElementById("navbar")?.classList.toggle("flex");
    document.getElementById("navbar-close-button")?.classList.toggle("hidden");
  };

  console.log("user", user);

  return (
    <Suspense fallback={<div>loading...</div>}>
      {!hideLogin && (
        <Login
          handleShowRegister={handleShowRegister}
          onClose={handleCloseLogin}
        />
      )}
      {!hideRegister && <Register onClose={handleCloseRegister} />}

      <div>
        <Navbar toggleNavbar={toggleNavbar}>
          <NavbarItemContainer
            email={user?.email || ""}
            firstName={user?.firstName || ""}
            lastName={user?.lastName || ""}
            isAuthenticated={isAuthenticated}
            toggleNavbar={toggleNavbar}
            handleLoginVisibility={handleLoginVisibility}
          />
        </Navbar>
        <div className="flex w-full relative">
          <div className="img-container" />
        </div>
        <div className="container mx-auto px-4 w-1320">
          <div className="flex justify-between items-center ">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};

export default connect(mapStateToPropsAuthWithUser)(MasterLayout);
