import React from "react";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import Register from "./Components/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  return (
    <div className="my-app">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
