import React from "react";
import style from "./SearchHospital.module.css";
import Button from "../Button/Button";
import { IoIosSearch } from "react-icons/io";
const SearchHospital = ({ searchValue, setSearchValue, handleSearch }) => {
  return (
    <div className={style.medical_searchbar_container}>
      <input
        type="text"
        placeholder="Search by Hospital"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button onClick={handleSearch}>
        <IoIosSearch size={24} color="rgba(255, 255, 255, 1)" />
        Search
      </Button>
    </div>
  );
};

export default SearchHospital;
