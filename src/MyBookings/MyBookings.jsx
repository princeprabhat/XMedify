import React, { useEffect, useState } from "react";
import TopBar from "../components/TopBar/TopBar";
import style from "./MyBookings.module.css";
import NavBar from "../components/NavBar/NavBar";
import BlueTopBar from "../components/BlueBar/BlueTopBar";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import BannerCard from "../assets/search-page-banner.png";
const BookedHospital = ({ data }) => {
  return (
    <div className={style.booking_medical_container}>
      {data &&
        data.map((el, idx) => {
          return (
            <HospitalCard hospitalData={el} key={idx} isCustomCard={true} />
          );
        })}
    </div>
  );
};

const MyBookings = () => {
  const [searchValue, setSearchValue] = useState("");
  const [hospitalData, setHospitalData] = useState([]);
  const [filterFlag, setFilterFlag] = useState(false);
  const [filteredHospitalData, setFilteredHospitalData] = useState([]);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("bookings")) || [];
    console.log(storageData);
    setHospitalData(storageData);
    setFilteredHospitalData(storageData);
  }, []);

  useEffect(() => {
    if (!filterFlag) return;
    function filterMedicalsByName() {
      const filteredDta = hospitalData.filter(
        (el) =>
          el["Hospital Name"]
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          el["State"].toLowerCase().includes(searchValue.toLowerCase()) ||
          el["City"].toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredHospitalData(filteredDta);
    }
    filterMedicalsByName();
    setFilterFlag(false);
    // let timer = setTimeout(filterMedicalsByName, 400);

    // return () => clearTimeout(timer);
  }, [filterFlag]);

  const handleSearch = () => {
    setFilterFlag(true);
  };

  return (
    <>
      <div className={style.booking_page_container}>
        <TopBar />
        <NavBar />
        <BlueTopBar />

        <div className={style.custom_bar_items}>
          <h1>My Bookings</h1>
          <SearchHospital
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSearch={handleSearch}
          />
        </div>
        <div className={style.container_booking_card}>
          <BookedHospital data={filteredHospitalData} />
          <div>
            <img src={BannerCard} alt="Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBookings;
