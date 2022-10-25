import React from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Route, Routes } from "react-router-dom";
import Quotes from "./pages/Quotes/Quotes";
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
