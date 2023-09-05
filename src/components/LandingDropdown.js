import { useState } from "react";
import "../assets/styles/LandingDropdown.css";
const LandingDropdown = (props) => {
    const [selectedValue, setSelectedValue] = useState("Manila");

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
        props.onLocationChange(event.target.value);
    };

    return (
        <div>
            <select value={selectedValue} onChange={handleSelectChange} className="select-container" >
                <option value="Manila">Manila</option>
                <option value="Ortigas">Ortigas</option>
                <option value="Laguna">Laguna</option>
            </select>
        </div>
    );
};

export default LandingDropdown;
