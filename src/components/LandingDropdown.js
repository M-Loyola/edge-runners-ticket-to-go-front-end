import "../assets/styles/LandingDropdown.css";
import Select from "react-select";
import location from "../assets/data/locationData";

const customStyle = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: "#D2DE32",
        border: "1px solid black",
        color: "#333",
        fontWeight: "bold",
        padding: 0,
        cursor: "pointer",
        borderRadius: 7,

    }),
    option: (provided, state) => ({
        ...provided,
        padding: 12,
        cursor: "pointer",

        backgroundColor: state.isSelected ? "#D9D9D9" : "#fff",
        transition: "background-color 0.3s",
        "&:hover": {
            backgroundColor: "#D9D9D9",
        },
    }),
};

const LandingDropdown = (props) => {
    return (
        <div>
            <Select
                options={location}
                defaultValue={location[0]}
                styles={customStyle}
                onChange={(location) => props.onLocationChange(location)} />
        </div>
    );
};

export default LandingDropdown;
