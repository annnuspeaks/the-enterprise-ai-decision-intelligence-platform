import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import FeaturesPage from "../pages/FeaturesPage";
import TechnologyPage from "../pages/TechnologyPage";
import ContactPage from "../pages/ContactPage";
import CustomerSegmentationPage from "../pages/CustomerSegmentationPage";
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/technology" element={<TechnologyPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route
        path="/customer-segmentation"
        element={<CustomerSegmentationPage />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
