import React, { createContext, useState } from "react";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  const handleLogout = () => {
    setAccessToken(null);
    localStorage.setItem("accessToken", accessToken);
  };

  const values = { accessToken, setAccessToken, handleLogout };
  return (
    <TokenContext.Provider value={values}>{children}</TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };
