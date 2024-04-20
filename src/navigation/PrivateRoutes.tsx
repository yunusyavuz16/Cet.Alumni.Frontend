import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route path="profile" element={<ProfilePage />} />
      {/* parametric profile */}
      <Route path="profile/:alumniStudentNo" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
};

export default PrivateRoutes;
