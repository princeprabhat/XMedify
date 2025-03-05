import React, { useEffect, useState } from "react";
import style from "./SearchBar.module.css";
import Button from "../Button/Button";
import { IoIosSearch } from "react-icons/io";
import { BiMap } from "react-icons/bi";
import axios from "axios";
import { useMediaQuery } from "@uidotdev/usehooks";

const SearchBar = ({
  handleSubmit,
  selectedItem,
  setSelectedItem,
  isCustomNavStyle = false,
}) => {
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

  const isMobileView = useMediaQuery("only screen and (max-width: 1230px)");

  useEffect(() => {
    const fetchStateData = async () => {
      try {
        const stateData = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setStateData(stateData.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStateData();
  }, []);

  useEffect(() => {
    const fetchCitiesData = async (state) => {
      const cityData = await axios.get(
        `https://meddata-backend.onrender.com/cities/${state}`
      );
      setCityData(cityData.data);
    };

    if (selectedItem?.state) fetchCitiesData(selectedItem.state);
  }, [selectedItem?.state]);

  return (
    <div
      className={style.search_bar_container}
      style={
        isCustomNavStyle
          ? {
              backgroundColor: "rgba(255, 255, 255, 1)",
              boxShadow: "6px 6px 35px 0px rgba(16, 40, 81, 0.11)",
              padding: "1.25rem 1rem",
              marginLeft: isMobileView ? "1rem" : "7rem",
              marginRight: isMobileView ? "1rem" : "7rem",
              borderRadius: "15px",
              marginTop: "-2.5rem",
            }
          : {}
      }
    >
      <form onSubmit={handleSubmit}>
        <div
          className={style.form_container}
          style={
            isCustomNavStyle
              ? { justifyContent: "space-between", gap: "2rem" }
              : {}
          }
        >
          <div
            id="state"
            className={style.search_box}
            onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
          >
            {isCustomNavStyle ? (
              <BiMap color="rgba(171, 182, 199, 1)" size={20} />
            ) : (
              <IoIosSearch color="rgba(171, 182, 199, 1)" size={20} />
            )}
            <div>{selectedItem.state || "Select a state"}</div>

            {isStateDropdownOpen && (
              <ul>
                {stateData.length > 0 &&
                  stateData.map((el, idx) => {
                    return (
                      <li
                        key={idx}
                        onClick={(e) => {
                          // e.stopPropagation();
                          console.log(e.target.textContent);
                          setSelectedItem({
                            state: e.target.textContent,
                            city: null,
                          });
                        }}
                      >
                        {el}
                      </li>
                    );
                  })}
              </ul>
            )}

            {/* <select
              name="state"
              id="state"
              onChange={(e) => {
                setSelectedItem({
                  state: e.target.value,
                  city: null,
                });
              }}
              value={selectedItem?.state || ""}
            >
              <option value="">State</option>
              {stateData.length > 0 &&
                stateData.map((el, idx) => {
                  return (
                    <option key={idx} value={el}>
                      {el}
                    </option>
                  );
                })}
            </select> */}
          </div>
          <div
            id="city"
            className={style.search_box}
            style={isCustomNavStyle ? { width: "50%" } : {}}
            onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
          >
            {isCustomNavStyle ? (
              <BiMap color="rgba(171, 182, 199, 1)" size={20} />
            ) : (
              <IoIosSearch color="rgba(171, 182, 199, 1)" size={20} />
            )}

            <div>{selectedItem.city || "Select a City"}</div>

            {isCityDropdownOpen && (
              <ul>
                {cityData.length > 0 &&
                  cityData.map((el, idx) => {
                    return (
                      <li
                        key={idx}
                        onClick={(e) => {
                          // e.stopPropagation();
                          console.log(e.target.textContent);
                          setSelectedItem({
                            ...selectedItem,
                            city: e.target.textContent,
                          });
                        }}
                      >
                        {el}
                      </li>
                    );
                  })}
              </ul>
            )}

            {/* <select
              name="city"
              id="city"
              disabled={!selectedItem?.state}
              onChange={(e) =>
                setSelectedItem({ ...selectedItem, city: e.target.value })
              }
              value={selectedItem?.city || ""}
            >
              <option value="">City</option>
              {cityData.length > 0 &&
                cityData.map((el, idx) => {
                  return (
                    <option value={el} key={idx}>
                      {el}
                    </option>
                  );
                })}
            </select> */}
          </div>

          <Button type="submit">
            <IoIosSearch size={24} />
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
