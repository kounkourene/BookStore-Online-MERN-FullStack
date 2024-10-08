import React from "react";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import Register from "./Components/Register";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import { useState } from "react";

const App = () => {
  return (
    <Router>
      <div className="my-app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
