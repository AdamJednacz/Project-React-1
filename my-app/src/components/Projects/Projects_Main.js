import React, { useState, useEffect } from 'react';
import Projects_Buttons from './Projects_Buttons';
import ProjectsImgs from './Projects_IMGS';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import {useNavigate, useParams} from "react-router-dom";

const ProjectsMain = () => {
    const [selectedOption1, setSelectedOption1] = useState('Montaż Kamienia*');
    const [selectedOption2, setSelectedOption2] = useState('Montaż Beton*');
    const [showRenovations, setShowRenovations] = useState(false);
    const [popupImage, setPopupImage] = useState(null);
    const { id } = useParams();

    useEffect(() => {

        if (id) {
            if (id === 'blaty') {
                setSelectedOption1('Blaty');
                setSelectedOption2('Montaż Beton');
                setShowRenovations(false);
            } else if (id === 'schody') {
                setSelectedOption1('Schody');
                setSelectedOption2('Montaż Beton');
                setShowRenovations(false);
            } else if (id === 'parapety') {
                setSelectedOption1('Parapety');
                setSelectedOption2('Montaż Beton');
                setShowRenovations(false);
            } else if (id === 'renowacje') {
                setShowRenovations(true);
                setSelectedOption1('Montaż Kamienia');
                setSelectedOption2('Montaż Beton');
            } else if (id=== 'mała_architektura') {
                setSelectedOption1('Mała architektura');
                setSelectedOption2('Montaż Beton');
                setShowRenovations(false);
            } else if (id === 'elewacje') {
                setSelectedOption1('Elewacje');
                setSelectedOption2('Montaż Beton');
                setShowRenovations(false);
            }else if (id === 'beton_architektoniczny') {
                setSelectedOption1('Montaż Kamienia');
                setSelectedOption2('Beton Architektoniczny');
                setShowRenovations(false);
            }else if (id === 'gresy') {
                setSelectedOption1('Montaż Kamienia');
                setSelectedOption2('Gresy');
                setShowRenovations(false);
            }else if (id === 'spieki_wieloformatowe') {
                setSelectedOption1('Montaż Kamienia');
                setSelectedOption2('Spieki Wieloformatowe');
                setShowRenovations(false);
            }else if (id === 'montaż_beton*') {
                setSelectedOption1('Montaż Kamienia');
                setSelectedOption2('Montaż Beton*');
                setShowRenovations(false);
            }else if (id === 'montaż_kamienia*') {
                setSelectedOption1('Montaż Kamienia*');
                setSelectedOption2('Montaż Beton');
                setShowRenovations(false);
            }

        }
    }, [id]);


    const handleOptionSelect1 = (option) => {
        setSelectedOption1(option);
        setSelectedOption2('Montaż Beton');
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
        setSelectedOption2('Montaż Beton');

    };

    const formatOption = (option) => {
        return option.toLowerCase().replace(/ /g, '_');
    };

    const handleImageClick = (image) => {
        setPopupImage(image);
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
