import React from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Route, Routes } from "react-router-dom";
import Quotes from "./pages/QuotesPage/QuotesPage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import ProtectedRoute from "./components/protect/ProtectedRoute";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-main">
        <Routes>
          <Route path={"/"} element={<LoginPage />} />
          <Route
            path={"/quotes"}
            element={
              <ProtectedRoute>
                <Quotes />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
