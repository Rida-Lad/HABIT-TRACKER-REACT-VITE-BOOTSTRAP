import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./custom.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Habits from "./components/Habits";
import Calendar from "./components/Calendar";
import Progress from "./components/Progress";
import Test from "./components/Test";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap JS

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading process
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400); // Simulate a 3-second loading time

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <h1 className="loading-text">Loading...</h1>
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/test" element={<Test />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </Router>
  );
};

export default App;