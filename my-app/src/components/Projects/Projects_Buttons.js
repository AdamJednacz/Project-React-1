import React, {lazy, useState} from 'react';

import { useNavigate } from 'react-router-dom';
const ProjectsSelect1 = lazy(() => import("../Projects/Projects_Select_1"));
const ProjectsSelect2 = lazy(() => import("../Projects/Projects_Select_2"));
const Projects_Buttons = ({

                              onRenovationClick,
                              selectedOption1,
                              selectedOption2,
                          }) => {
    const [openSelect, setOpenSelect] = useState(null);
    const navigate = useNavigate();

    const handleToggleSelect = (selectNumber) => {
        if (openSelect === selectNumber) {
            setOpenSelect(null);
        } else {
            setOpenSelect(selectNumber);
        }
    };

    const handleRenovationClick = () => {
        onRenovationClick();
        navigate('/realizacje/renowacje');
    };

    return (
        <div className="buttons">
            <ProjectsSelect1
                isOpen={openSelect === 1}
                toggleDropdown={() => handleToggleSelect(1)}
                selectedOption={selectedOption1}
            />
            <button className="projects_btn" onClick={handleRenovationClick}>Renowacje*</button>
            <ProjectsSelect2
                isOpen={openSelect === 2}
                toggleDropdown={() => handleToggleSelect(2)}
                selectedOption={selectedOption2}
            />
        </div>
    );
};

export default Projects_Buttons;
