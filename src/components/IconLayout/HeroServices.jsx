// full box with search and services on homepage

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AmbulanceIcon from "../../assets/Ambulance-card-icon.png";
import CapsuleIcon from "../../assets/Capsule-card-icon.png";
import DoctorIcon from "../../assets/DoctorIcon.png";
import DrugStoreIcon from "../../assets/Drugstore_card_icon.png";
import HospitalIcon from "../../assets/Hospital-card-icon.png";

import style from "./HeroServices.module.css";
import IconCard from "../IconCard/IconCard";
import SearchBar from "../SearchBar/SearchBar";
import { AutohideSnackbar } from "../AutohideSnackbar/AutohideSnackbar";

const CARD_DATA = [
  { icon: DoctorIcon, title: "Doctors" },
  { icon: DrugStoreIcon, title: "Labs" },
  { icon: HospitalIcon, title: "Hospitals" },
  { icon: CapsuleIcon, title: "Medical Store" },
  { icon: AmbulanceIcon, title: "Ambulance" },
];

const HeroServices = () => {
  const [selectedItem, setSelectedItem] = useState({
    state: null,
    city: null,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedItem.state || !selectedItem.city) {
      AutohideSnackbar("Please select state and city to search", "error");
      return;
    }
    navigate(`/search/${selectedItem?.state}/${selectedItem?.city}`);
  };
  return (
    <div className={style.Hero_services_container}>
      <div className={style.hero_search_box}>
        <SearchBar
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          handleSubmit={handleSubmit}
        />
      </div>

      <div className={style.container_heading}>You may be looking for</div>
      <div className={style.card_container}>
        {CARD_DATA.map((el, idx) => {
          return <IconCard key={idx} icon={el.icon} title={el.title} />;
        })}
      </div>
    </div>
  );
};

export default HeroServices;
