import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage"));

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
    </Routes>
  );
};

export default PrivateRoutes;
