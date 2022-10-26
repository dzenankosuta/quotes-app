import React from "react";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import { Route, Routes } from "react-router-dom";
import Quotes from "./components/pages/QuotesPage/QuotesPage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<LoginPage />} />
        <Route path={"/quotes"} element={<Quotes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
