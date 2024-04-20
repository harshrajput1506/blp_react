import React from "react";
import ReactDOM from "react-dom/client"; // Import from "react-dom/client"
import App from "./App.jsx";
import About from "./components/About.jsx"; // Import the About component
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile.jsx";
import Faqs from "./components/Faqs.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faq" element={<Faqs />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
