import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const ProjectsSelect2 = ({ isOpen, toggleDropdown, selectedOption }) => {
    const options2 = ['Montaż Beton*', 'Beton Architektoniczny', 'Gresy', 'Spieki Wieloformatowe'];
    const navigate = useNavigate();
    const handleOptionClick2 = (option) => {

        toggleDropdown(); // Close the dropdown after selection
        const formattedOption = option.toLowerCase().replace(/ /g, '_');
        navigate(`/realizacje/${formattedOption}`);
    };


    return (
        <div className={`custom-select ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
            <div className="select-trigger" >
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
