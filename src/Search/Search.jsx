import React, { useEffect, useState } from "react";
import style from "./Search.module.css";
import TopBar from "../components/TopBar/TopBar";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import { useParams } from "react-router-dom";
import { AutohideSnackbar } from "../components/AutohideSnackbar/AutohideSnackbar";
import axios from "axios";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import BannerCard from "../assets/search-page-banner.png";
import CheckIcon from "../assets/ok-tested-icon.png";
import BlueTopBar from "../components/BlueBar/BlueTopBar";

import FAQs from "../components/Sections/FAQs/FAQs";

const Search = () => {
  const [medicalData, setMedicalData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    state: null,
    city: null,
  });

  const { state, city } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedItem.state || !selectedItem.city) {
      AutohideSnackbar("Please select state and city to search", "error");
      return;
    }
    setSelectedItem({ state: selectedItem.state, city: selectedItem.city });
    setFlag(true);
    // console.log();
  };

  const fetchMedicalCenters = async (stateName, cityName) => {
    try {
      const medicalData = await axios.get(
        `https://meddata-backend.onrender.com/data?state=${stateName}&city=${cityName}`
      );
      setMedicalData(medicalData.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (state && city) fetchMedicalCenters(state, city);
  }, []);

  // TODO:
  useEffect(() => {
    setMedicalData([]);
    if (flag && selectedItem.state && selectedItem.city) {
      setFlag(false);
      fetchMedicalCenters(selectedItem.state, selectedItem.city);
    }
  }, [selectedItem]);

  return (
    <>
      <div className={style.container_search_page}>
        <TopBar />
        <NavBar />
        {/* <div className={style.blue_top_bar} /> */}
        <BlueTopBar />
        <SearchBar
          isCustomNavStyle={true}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          handleSubmit={handleSubmit}
        />
        {medicalData.length > 0 &&
          (selectedItem.state || state) &&
          (selectedItem.city || city) && (
            <div className={style.heading_card_container}>
              <h1>
                {medicalData.length} medical centers available in{" "}
                {selectedItem?.city?.toLowerCase() || city.toLowerCase()}
              </h1>

              <div>
                <img src={CheckIcon} alt="tick-correct" />
                <span>
                  Book appointments with minimum wait-time & verified doctor
                  details
                </span>
              </div>
            </div>
          )}
        <div className={style.search_page_container}>
          <div className={style.medical_cards_container}>
            {medicalData.length > 0 ? (
              medicalData.map((el, idx) => {
                return (
                  <HospitalCard
                    key={el["Provider ID"] || idx}
                    hospitalData={el}
                  />
                );
              })
            ) : (
              <h2>No Data to display</h2>
            )}
          </div>
          <div>
            <img src={BannerCard} alt="banner" />
          </div>
        </div>
      </div>
      <FAQs />
    </>
  );
};

export default Search;
