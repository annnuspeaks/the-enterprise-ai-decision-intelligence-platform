import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

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
import CustomerChurnResultPage from "../models/customer-churn/pages/CustomerChurnResultPage";

import ModelWorkspaceLayout from "../components/layout/ModelWorkspaceLayout/ModelWorkspaceLayout";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
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

          {/* Customer Churn Prediction page */}
          <Route
            path="/customer-churn/predict"
            element={<CustomerChurnPredictPage />}
          />
        </Route>

        {/* Result pages */}
        <Route
          path="/customer-churn/result"
          element={<CustomerChurnResultPage />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
