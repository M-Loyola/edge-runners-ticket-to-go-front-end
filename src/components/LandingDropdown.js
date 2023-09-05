import "../assets/styles/LandingDropdown.css";
import Select from "react-select";
const customStyle = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: "#D2DE32",
        border: "1px solid #D2DE32",
        color: "#333",
        fontWeight: "bold",
        padding: 0,
        cursor: "pointer",
        borderRadius: 7,
        
    }),
    option: (provided, state) => ({
        ...provided,
        padding: 12,
        backgroundColor: state.isSelected ? "#D9D9D9" : "#fff",
    }),
};

const location = [
    {
        value: "Manila",
        label: "Manila"
    },
    {
        value: "Ortigas",
        label: "Ortigas"
    },
    {
        value: "Laguna",
        label: "Laguna"
    }
];

const LandingDropdown = () => {

    return (
        <div>
            <Select className="select-container"
                options={location}
                defaultValue={location[0]}
                styles={customStyle} />
        </div>
    );
};

export default LandingDropdown;
