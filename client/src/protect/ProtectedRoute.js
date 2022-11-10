import React, { useContext, useEffect } from "react";
import GoToLogin from "../components/modals/GoToLogin";
import { TokenContext } from "../context/TokenContext";

const ProtectedRoute = ({ children }) => {
  const { accessToken, handleLogout } = useContext(TokenContext);
  useEffect(() => {
    if (localStorage.accessToken === undefined) {
      handleLogout();
    }
  }, [accessToken, localStorage.accessToken]);
  return (
    <>
      {localStorage.getItem("accessToken") === "null" ||
      localStorage.accessToken === undefined ? (
        <GoToLogin />
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default ProtectedRoute;
