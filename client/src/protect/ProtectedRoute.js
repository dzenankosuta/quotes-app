import React from "react";
import GoToLogin from "../components/modals/GoToLogin";

const ProtectedRoute = ({ children }) => {
  return (
    <>
      {localStorage.getItem("accessToken") === "null" ? (
        <GoToLogin />
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default ProtectedRoute;
