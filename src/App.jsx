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
import FAQs from "./components/Sections/FAQs/FAQs";
import HeroServices from "./components/IconLayout/HeroServices";
import PatientCaring from "./components/Sections/PatientCaring/PatientCaring";
import Search from "./Search/Search";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import MyBookings from "./MyBookings/MyBookings";

const App = () => {
  return (
    <>
      <SnackbarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:state/:city" element={<Search />} />
            <Route path="/search" element={<Search />} />
            <Route path="/my-bookings" element={<MyBookings />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  );
};

export default App;
