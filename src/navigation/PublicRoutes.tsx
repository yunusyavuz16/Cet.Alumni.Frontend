import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
};

export default PublicRoutes;
