import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import TopBar from "./components/TopBar/TopBar";
import Home from "./Home/Home";
import Blogs from "./components/Sections/Blogs/Blogs";
import OurFamilies from "./components/Sections/OurFamilies/OurFamilies";
import Specialization from "./components/Sections/Specialization/Specialization";
import DownloadApp from "./components/Sections/DownloadApp/DownloadApp";
import Offers from "./components/Sections/Offers/Offers";
import Specialists from "./components/Sections/Specialists/Specialists";
import Accordion from "./components/Accordion/Accordion";

const App = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <Home />
      {/* 
      <Blogs />
      <Specialization />
      <DownloadApp /> */}
      {/* <Offers />
      <Specialists /> */}
      <Accordion />
      <Footer />
    </>
  );
};

export default App;
