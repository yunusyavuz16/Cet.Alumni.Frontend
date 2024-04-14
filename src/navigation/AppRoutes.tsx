import { lazy } from "react";
import { connect } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { mapStateToPropsAuth } from "../store/slices/authSlice";
import AlumniPage from "../pages/AlumniPage";

const PublicRoutes = lazy(() => import("./PublicRoutes"));
const MasterLayout = lazy(() => import("../layout/MasterLayout"));
const PrivateRoutes = lazy(() => import("./PrivateRoutes"));

interface IAppRoute {
  isAuthenticated: boolean;
}

const AppRoutes = (props: IAppRoute) => {
  const { isAuthenticated } = props;
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path="error/*" element={<div>Hata oluştu</div>} />
        <Route path="logout" element={<div>logout</div>} />
        <Route path="alumnies" element={<AlumniPage />} />
        {/* TODO : isAuthenticated and redux connect */}
        {isAuthenticated ? (
          <>
            <Route path="/*" element={<PrivateRoutes />} />
            <Route index element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            <Route path="/*" element={<PublicRoutes />} />
            <Route index element={<Navigate to="/home" />} />
          </>
        )}
      </Route>
    </Routes>
  );
};

export default connect(mapStateToPropsAuth)(AppRoutes);
