import React, { useState } from 'react';
import ProjectsSelect1 from "./Projects_Select_1";
import ProjectsSelect2 from "./Projects_Select_2";

const Projects_Buttons = () => {
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
            <ProjectsSelect1 isOpen={openSelect === 1} toggleDropdown={() => handleToggleSelect(1)} />
            <button className="projects_btn">Renowacje</button>
            <ProjectsSelect2 isOpen={openSelect === 2} toggleDropdown={() => handleToggleSelect(2)} />
        </div>
    );
};

export default Projects_Buttons;
