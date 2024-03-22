import { Suspense, lazy, useState } from "react";
import { Outlet } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import Navbar from "./Navbar";
import NavbarItemContainer from "./Navbar/NavbarItemContainer";
import { connect } from "react-redux";
import { mapStateToPropsAuth } from "../../store/slices/authSlice";
import "./index.css";

interface IMasterLayout {
  isAuthenticated: boolean;
}

const MasterLayout = (props: IMasterLayout) => {
  const { isAuthenticated } = props;
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

  return (
    <Suspense fallback={<div>loading...</div>}>
      {!hideLogin && (
        <Login
          handleShowRegister={handleShowRegister}
          onClose={handleCloseLogin}
        />
      )}
      {!hideRegister && <Register onClose={handleCloseRegister} />}

      <div className="">
        <Navbar toggleNavbar={toggleNavbar}>
          <NavbarItemContainer
            isAuthenticated={isAuthenticated}
            toggleNavbar={toggleNavbar}
            handleLoginVisibility={handleLoginVisibility}
          />
        </Navbar>
        <div className="d-flex w-full relative">
          <div className="img-container" />
        </div>
        <div className="d-flex justify-center w-1320">
          <Outlet />
        </div>
      </div>
    </Suspense>
  );
};

export default connect(mapStateToPropsAuth)(MasterLayout);
