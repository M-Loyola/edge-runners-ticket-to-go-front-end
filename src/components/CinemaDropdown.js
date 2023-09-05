import React from "react";
import Select from "react-select";
import "../assets/styles/CinemaDropdown.css";
import location from "../assets/data/locationData";

const customStyle = {
  control: (provided, state) => ({
    ...provided,
    border: "1px solid #D2DE32",
    fontWeight: "bold",
    padding: 0,
    cursor: "pointer",
    width:90,
    borderRadius: 7,
  }),
  option: (provided, state) => ({
    ...provided,
    padding: 12,
    backgroundColor: state.isSelected ? "#D9D9D9" : "#fff",
  }),
};

const CinemaDropdown = () => {
  return (
    <div>
      <Select
        className="select-container"
        options={location}
        defaultValue={location[0]}
        styles={customStyle}
      />
    </div>
  );
};

export default CinemaDropdown;
