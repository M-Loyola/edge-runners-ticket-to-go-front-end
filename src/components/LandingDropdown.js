import React, { useState } from "react";
import "../assets/styles/LandingDropdown.css";
const LandingDropdown = () => {
    const [selectedValue, setSelectedValue] = useState("Manila");

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
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
