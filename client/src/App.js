import React from "react";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import { Route, Routes } from "react-router-dom";
import Quotes from "./components/pages/QuotesPage/QuotesPage";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<LoginPage />} />
        <Route path={"/quotes"} element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
