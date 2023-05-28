import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRoute, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRoute>
        <Routes>
          <Navbar />
          <Route path="/" exact />
        </Routes>
        </BrowserRoute>
    </>
  );
}

export default App;
