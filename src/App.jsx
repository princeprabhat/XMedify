import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import TopBar from "./components/TopBar/TopBar";
import Home from "./Home/Home";

const App = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
