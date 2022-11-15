import React, { useContext, useEffect } from "react";
import GoToLogin from "../components/modals/GoToLogin";
import { TokenContext } from "../context/TokenContext";

const ProtectedRoute = ({ children }) => {
  const { accessToken, handleLogout } = useContext(TokenContext);
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      handleLogout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, localStorage.getItem("accessToken")]);
  return (
    <>
      {!localStorage.getItem("accessToken") ? <GoToLogin /> : <>{children}</>}
    </>
  );
};

export default ProtectedRoute;
