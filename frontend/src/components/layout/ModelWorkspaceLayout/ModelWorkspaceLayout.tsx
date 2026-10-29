import { Outlet, useLocation } from "react-router-dom";
import ModelNavigation from "../ModelNavigation/ModelNavigation";

function ModelWorkspaceLayout() {
  const location = useLocation();
  const activeModel = location.pathname.startsWith("/customer-churn")
    ? "customer_churn"
    : location.pathname.startsWith("/customer-lifetime-value")
      ? "customer_lifetime_value"
      : undefined;

  return (
    <>
      <ModelNavigation activeModel={activeModel} />
      <Outlet />
    </>
  );
}

export default ModelWorkspaceLayout;
