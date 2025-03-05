import React from "react";
import "./App.css";

import Footer from "./components/Footer/Footer";

import Home from "./Home/Home";

import DownloadApp from "./components/Sections/DownloadApp/DownloadApp";

import Search from "./Search/Search";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import MyBookings from "./MyBookings/MyBookings";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <DownloadApp />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <>
      <SnackbarProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search/:state/:city" element={<Search />} />
              <Route path="/search" element={<Search />} />
              <Route path="/my-bookings" element={<MyBookings />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  );
};

export default App;
