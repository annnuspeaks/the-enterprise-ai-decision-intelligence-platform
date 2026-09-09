import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import FeaturesPage from "../pages/FeaturesPage";
import TechnologyPage from "../pages/TechnologyPage";
import ContactPage from "../pages/ContactPage";
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";
import CustomerSegmentationPage from "../pages/CustomerSegmentationPage";
import CustomerChurnPage from "../models/customer-churn/pages/CustomerChurnPage";
import CustomerChurnPredictPage from "../models/customer-churn/pages/CustomerChurnPredictPage";

import ModelWorkspaceLayout from "../components/layout/ModelWorkspaceLayout/ModelWorkspaceLayout";

function AppRoutes() {
  return (
    <Routes>
      {/* Global application pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/technology" element={<TechnologyPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Existing segmentation workspace */}
      <Route
        path="/customer-segmentation"
        element={<CustomerSegmentationPage />}
      />

      {/* Model workspace */}
      <Route element={<ModelWorkspaceLayout />}>
        <Route path="/customer-churn" element={<CustomerChurnPage />} />
        <Route
          path="/customer-churn/predict"
          element={<CustomerChurnPredictPage />}
        />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
