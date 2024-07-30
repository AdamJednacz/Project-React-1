import React, { useState } from 'react';
import ProjectsSelect1 from './Projects_Select_1';
import ProjectsSelect2 from './Projects_Select_2';

const Projects_Buttons = ({
                              onOptionSelect1,
                              onOptionSelect2,
                              onRenovationClick,
                              selectedOption1,
                              selectedOption2
                          }) => {
    const [openSelect, setOpenSelect] = useState(null);

    const handleToggleSelect = (selectNumber) => {
        if (openSelect === selectNumber) {
            setOpenSelect(null); // Close the select if it's already open
        } else {
            setOpenSelect(selectNumber); // Open the new select
        }
    };



    return (
        <div className="buttons">
            <ProjectsSelect1
                isOpen={openSelect === 1}
                toggleDropdown={() => handleToggleSelect(1)}
                onOptionSelect={onOptionSelect1}
                selectedOption={selectedOption1}
            />
            <button className="projects_btn" onClick={onRenovationClick}>Renowacje</button>
            <ProjectsSelect2
                isOpen={openSelect === 2}
                toggleDropdown={() => handleToggleSelect(2)}
                onOptionSelect={onOptionSelect2}
                selectedOption={selectedOption2}
            />
        </div>
    );
};

export default Projects_Buttons;
