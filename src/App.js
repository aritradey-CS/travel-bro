import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      
        <Routes>
          <Navbar />
          <Route path="/" element={<Home/>}/>
        </Routes>
        
    </>
  );
}

export default App;
