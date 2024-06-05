import { Suspense, useState } from "react";
import { connect } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { IUser } from "../../models";
import { mapStateToPropsAuthWithUser } from "../../store/slices/authSlice";
import { JobPost } from "../JobPost";
import Login from "../Login";
import Register from "../Register";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NavbarItemContainer from "./Navbar/NavbarItemContainer";
import "./index.css";
import Banner from "./Banner";
import { useJobVisibility } from "../../contexts/JobProvider";
import ErrorBoundary from "../../components/ErrorBoundary";
import { getNameByPath } from "../../shared/layout-utils";

interface IMasterLayout {
  isAuthenticated: boolean;
  user: IUser | null;
}

const MasterLayout = (props: IMasterLayout) => {
  const { isAuthenticated } = props;
  const [hideLogin, setHideLogin] = useState(true);
  const [hideRegister, setHideRegister] = useState(true);
  const { pathname } = useLocation();

  const { hideJobPost, initialJobPost } = useJobVisibility();

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

      {!hideJobPost && (
        <JobPost
          isEdit={
            initialJobPost.jobPostId !== null &&
            initialJobPost.jobPostId !== undefined
          }
          initialValues={initialJobPost}
        />
      )}

      <div>
        <Navbar toggleNavbar={toggleNavbar}>
          <NavbarItemContainer
            isAuthenticated={isAuthenticated}
            toggleNavbar={toggleNavbar}
            handleLoginVisibility={handleLoginVisibility}
          />
        </Navbar>
        <Banner />

        <div className="container mx-auto px-3 w-1320">
          {pathname !== "/error" ? (
            <div className="bg-white flex items-center md:rounded-md shadow-md  border border-gray-100  p-3 my-3  w-1320 mx-auto">
              <h1 className="text-lg font-bold leading-tight text-blue-500 ">
                {getNameByPath(pathname)}
              </h1>
            </div>
          ) : null}
          <div className="flex justify-between  " style={{ minHeight: "45vh" }}>
            <ErrorBoundary>
              <Outlet />
            </ErrorBoundary>
          </div>
        </div>

        <Footer />
      </div>
    </Suspense>
  );
};

export default connect(mapStateToPropsAuthWithUser)(MasterLayout);
