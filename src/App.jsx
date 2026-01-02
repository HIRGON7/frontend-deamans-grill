import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Checkout from "./pages/Checkout.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import ContactUs from "./pages/Contact-us.jsx";
import Food from "./pages/Food.jsx";
import Login from "./components/login.jsx";
import Register from "./pages/Register.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Game from "./pages/Game.jsx";

import "./App.css";

function AppWrapper() {
  const location = useLocation();


  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
   
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact-us"
          element={
            <ProtectedRoute>
              <ContactUs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/food"
          element={
            <ProtectedRoute>
              <Food />
            </ProtectedRoute>
          }
        />

        <Route
          path="/game"
          element={
            <ProtectedRoute>
              <Game />
            </ProtectedRoute>
          }
        />
        <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />

      </Routes>
    </>
  );
}

export default function App() {
  if (import.meta.hot) {
    // sessionStorage.clear();
  }

  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
