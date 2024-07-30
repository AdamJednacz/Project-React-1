import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const ProjectsSelect2 = ({ isOpen, toggleDropdown, onOptionSelect, selectedOption }) => {
    const options2 = ['Wszystkie*', 'Beton Architektoniczny', 'Gresy', 'Spieki Wieloformatowe'];


    const handleOptionClick2 = (option) => {
        onOptionSelect(option); // Emit the formatted value
        toggleDropdown(); // Close the dropdown after selection
    };

    return (
        <div className={`custom-select ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
            <div className="select-trigger">
                {selectedOption}<FontAwesomeIcon className="icon" icon={faAngleDown} />
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
