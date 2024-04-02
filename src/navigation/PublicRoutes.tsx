import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
    </Routes>
  );
};

export default PublicRoutes;
