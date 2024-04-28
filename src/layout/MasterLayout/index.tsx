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
import AlumniInput from "../../components/AlumniInput";
import CloseButton from "../../components/CloseButton";
import SubmitButton from "../../components/SubmitButton";
import { JobPost } from "../JobPost";

interface IMasterLayout {
  isAuthenticated: boolean;
  user: IUser | null;
}

const MasterLayout = (props: IMasterLayout) => {
  const { isAuthenticated } = props;
  const [hideLogin, setHideLogin] = useState(true);
  const [hideRegister, setHideRegister] = useState(true);
  const [hideJobPost, setHideJobPost] = useState(true);

  const handleLoginVisibility = () => {
    setHideLogin((prev) => !prev);
  };

  const handleJobPostVisibility = () => {
    setHideJobPost((prev) => !prev);
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

      {!hideJobPost && (
        <JobPost handleJobPostVisibility={handleJobPostVisibility} />
      )}

      <div>
        <Navbar toggleNavbar={toggleNavbar}>
          <NavbarItemContainer
            handleJobPostVisibility={handleJobPostVisibility}
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
