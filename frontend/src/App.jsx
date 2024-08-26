import React from "react";
import Header from "./Components/Header";
import Text from "./Components/Text";
import Listbooks from "./Components/Listbooks";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Register from "./Components/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";

const App = () => {
  return (
    <div className="my-app">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/text" element={<Text />} />
          <Route path="/lisbooks" element={<Listbooks />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
