import cinemaLocation from "../assets/data/cinemaLocation";
import "../assets/styles/CinemaDropdown.css";
import Select from "react-select";


const cinemaStyle = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: "black",
        border: "1px solid black",
        color: "yellow",
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
const CinemaDropdown = () => {
    return (
        <div className="select-container">
            <Select
                options={cinemaLocation}
                defaultValue={cinemaLocation[0]}
                styles={cinemaStyle}
            />
        </div>
    );
};

export default CinemaDropdown;
