import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/HomePage";
import ProviderPage from "./pages/ProviderPage";
import BookingPage from "./pages/BookingPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* Routes */}
        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/provider/:id" element={<ProviderPage />} />
            <Route path="/book/:id" element={<BookingPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
