import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const ProjectsSelect1 = ({ isOpen, toggleDropdown }) => {
    const [selectedOption1, setSelectedOption1] = useState('Montaż kamień');
    const options1 = ['Wszystkie*', 'Blaty', 'Elewacje', 'Mała architektura', 'Schody', 'Parapety'];

    const handleOptionClick1 = (option) => {
        setSelectedOption1(option);
        toggleDropdown(); // Close the dropdown after selection
    };

    return (
        <div className={`custom-select ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
            <div className="select-trigger">
                {selectedOption1}<FontAwesomeIcon className="icon" icon={faAngleDown} />
            </div>
            <div className="options">
                {options1.map(option => (
                    <div
                        key={option}
                        className="option"
                        onClick={() => handleOptionClick1(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSelect1;
