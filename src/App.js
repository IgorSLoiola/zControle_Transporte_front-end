import React from "react";
import Navbar from "./components/navbar";
import { AuthProvider } from "./components/auth";
import Footer from "./components/footer";
import Index from "./pages/index";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import UserProfile from "./pages/profile";
import MapPage from "./pages/map";
import Register_vehicle from "./pages/register_vehicle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/:Id" element={<UserProfile />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/register_vehicle" element={<Register_vehicle />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
