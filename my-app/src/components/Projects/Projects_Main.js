import React, { useState } from 'react';
import Projects_Buttons from './Projects_Buttons';
import ProjectsImgs from './Projects_IMGS';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";

const ProjectsMain = () => {
    const [selectedOption1, setSelectedOption1] = useState('Montaż Kamienia');
    const [selectedOption2, setSelectedOption2] = useState('Montaż Inne');
    const [showRenovations, setShowRenovations] = useState(false);
    const [popupImage, setPopupImage] = useState(null);

    const handleOptionSelect1 = (option) => {
        setSelectedOption1(option);
        setSelectedOption2('Montaż Inne');
        setShowRenovations(false);
    };

    const handleOptionSelect2 = (option) => {
        setSelectedOption2(option);
        setSelectedOption1('Montaż Kamienia');
        setShowRenovations(false);
    };

    const handleRenovationClick = () => {
        setShowRenovations(true);
        setSelectedOption1('Montaż Kamienia');
        setSelectedOption2('Montaż Inne');
    };

    const formatOption = (option) => {
        return option.toLowerCase().replace(/ /g, '_');
    };

    const handleImageClick = (image) => {
        setPopupImage(image);
        console.log(image)
    };

    const handleClosePopup = () => {
        setPopupImage(null);
    };
    return (
        <section className="projects_main">
            <div className="container">
                <Projects_Buttons
                    onOptionSelect1={handleOptionSelect1}
                    onOptionSelect2={handleOptionSelect2}
                    onRenovationClick={handleRenovationClick}
                    selectedOption1={selectedOption1}
                    selectedOption2={selectedOption2}
                />
                <ProjectsImgs
                    selectedOption1={formatOption(selectedOption1)}
                    selectedOption2={formatOption(selectedOption2)}
                    showRenovations={showRenovations}
                    onImageClick={handleImageClick}
                />
            </div>
            <div className={`popup ${popupImage ? '' : 'hidden'}`}>
                <img src={popupImage} alt={popupImage} className="popup__img" />

                <FontAwesomeIcon className="popup__close" icon={faX} onClick={handleClosePopup} />
            </div>
        </section>
    );
};

export default ProjectsMain;
