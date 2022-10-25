import React from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Route, Routes } from "react-router-dom";
import Quotes from "./pages/Quotes/Quotes";

function App() {
  return (
    <div>
      App Works!
      <Routes>
        <Route path={"/"} element={<LoginPage />} />
        <Route path={"/quotes"} element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
