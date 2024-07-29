import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const ProjectsSelect2 = ({ isOpen, toggleDropdown }) => {
    const [selectedOption2, setSelectedOption2] = useState('Montaż Inne');
    const options2 = ['Wszystkie*', 'Beton Architektoniczny','Gresy','Spieki Wieloformatowe'];

    const handleOptionClick2 = (option) => {
        setSelectedOption2(option);
        toggleDropdown(); // Close the dropdown after selection
    };

    return (
        <div className={`custom-select ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
            <div className="select-trigger">
                {selectedOption2}<FontAwesomeIcon className="icon" icon={faAngleDown} />
            </div>
            <div className="options">
                {options2.map(option => (
                    <div
                        key={option}
                        className="option"
                        onClick={() => handleOptionClick2(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSelect2;
