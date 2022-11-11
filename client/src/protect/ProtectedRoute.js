import React, { useContext, useEffect } from "react";
import GoToLogin from "../components/modals/GoToLogin";
import { TokenContext } from "../context/TokenContext";

const ProtectedRoute = ({ children }) => {
  const { accessToken, handleLogout } = useContext(TokenContext);
  useEffect(() => {
    if (localStorage.accessToken === undefined) {
      handleLogout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);
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
