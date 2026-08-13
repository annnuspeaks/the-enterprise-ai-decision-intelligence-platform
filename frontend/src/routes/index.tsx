import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CustomerSegmentationPage from "../pages/CustomerSegmentationPage";
import NotFoundPage from "../pages/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/customer-segmentation"
        element={<CustomerSegmentationPage />}
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
