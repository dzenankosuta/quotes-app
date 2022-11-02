import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [toShowFiltered, setToShowFiltered] = useState(false);
  const [toShowSelected, setToShowSelected] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    setAccessToken(null);
    localStorage.setItem("accessToken", null);
    navigate("/");
    window.scrollTo(0, 0);
  };

  const values = {
    accessToken,
    setAccessToken,
    handleLogout,
    toShowFiltered,
    setToShowFiltered,
    toShowSelected,
    setToShowSelected,
  };
  return (
    <TokenContext.Provider value={values}>{children}</TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };
