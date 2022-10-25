import React, { createContext, useState } from "react";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const values = { accessToken, setAccessToken };
  return (
    <TokenContext.Provider value={values}>{children}</TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };
