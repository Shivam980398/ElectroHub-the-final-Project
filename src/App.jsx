import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import AboutUs from "./pages/AboutUS/AboutUs";
import Login from "./components/Login/Login.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  const [displayLogin, setDisplayLogin] = useState(false);

  return (
    <>
      {displayLogin ? <Login setDisplayLogin={setDisplayLogin} /> : <></>}
      <NavBar setDisplayLogin={setDisplayLogin} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/About" element={<AboutUs />} />
      </Routes>
      <br />
      <br />
    </>
  );
};

export default App;
